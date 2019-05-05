import React from 'react';
import PropTypes from 'prop-types';
import authRequests from '../../../helpers/data/authRequests';
import './TaskForm.scss';

const defaultTask = {
  name: '',
  uid: '',
};

class TaskForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  }

  state = {
    newTask: defaultTask,
  }

  formFieldStringAndNumberState = (name, e) => {
    e.preventDefault();
    const tempTask = { ...this.state.newTask };
    tempTask[name] = e.target.value;
    this.setState({ newTask: tempTask });
  }

  taskChange = e => this.formFieldStringAndNumberState('name', e);

  formSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const myTask = { ...this.state.newTask };
    myTask.uid = authRequests.getCurrentUid();
    onSubmit(myTask);
    this.setState({ newTask: defaultTask});
  }

  render() {
    const { newTask } = this.state;
      return ( 
      <form className="lineupAddition" onSubmit={this.formSubmit}>
          <h2>Add New Lineup Here</h2> 
          <div className="input-group newLineupForm">
            <input
              type="text"
              className="form-control"
              placeholder="Lineup Name"
              value={newTask.task}
              onChange={this.taskChange}
            />
            <div class="input-group-append">
            <button type="button" class="btn btn-outline-warning">Submit</button>
            </div>
          </div>
        </form>
      );
    }
}

export default TaskForm;
