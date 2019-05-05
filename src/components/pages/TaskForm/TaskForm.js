import React from 'react';
import PropTypes from 'prop-types';
import authRequests from '../../../helpers/data/authRequests';
// import tasksRequest from '../../../helpers/data/tasksRequest';
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

  // componentDidUpdate(prevProps) {
  //   const { isEditing, editId } = this.props;
  //   if (prevProps !== this.props && isEditing) {
  //     tasksRequest.getSingleLineup(editId)
  //       .then((lineup) => {
  //         this.setState({ newLineup: lineup.data });
  //       })
  //       .catch(err => console.error('error with getSingleListing', err));
  //   }
  // }

  render() {
    const { newTask } = this.state;
    // const { isEditing } = this.props;
    // const title = () => {
    //   if (isEditing) {
    //     return <form onSubmit={this.formSubmit}>
    //     <h2>Edit Your Lineup Here</h2>
    //       <div className="input-group editLineupForm">
    //         <input
    //           type="text"
    //           className="form-control"
    //           placeholder="Lineup Name"
    //           value={newLineupName.lineup}
    //           onChange={this.lineupChange}
    //         />
    //         <div class="input-group-append">
    //         <button type="button" class="btn btn-outline-warning">Submit</button>
    //         </div>
    //       </div>
    //     </form>;
    //   }
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
  //   return (
  //     <div className="addEditLineup">
  //       {title()}
  //     </div>
  //   );
  // }
}

export default TaskForm;
