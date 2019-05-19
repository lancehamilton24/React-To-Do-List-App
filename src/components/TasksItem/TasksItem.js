import React from 'react';
import PropTypes from 'prop-types';
import taskShape from '../../helpers/propz/taskShape';
import moment from 'moment';
import { Button } from 'reactstrap';
import './TasksItem.scss';

class TasksItem extends React.Component {
  state = {
    currentDate: new Date(),
  }

  static propTypes = {
    task: taskShape.taskShape,
    deleteSingleTask: PropTypes.func,
  }

  deleteTask = (e) => {
    e.preventDefault();
    const { deleteSingleTask, task } = this.props;
    deleteSingleTask(task.id)
  }

  render() {
    const { task } = this.props;
    const today = this.state.currentDate;
    const date = moment(today).format('MMMM Do YYYY, h:mm:ss a');

    return (
      <div className="taskCards card">
        <div className="card-body">
        <span className="col-3">{task.name}</span>
        <Button outline color="info" onClick={this.deleteTask}>Delete</Button>
        <h6>{date}</h6>
        </div>
      </div>
    )
  }
}

export default TasksItem