import React from 'react';
import PropTypes from 'prop-types';
import taskShape from '../../helpers/propz/taskShape';
import { Button } from 'reactstrap';
import './TasksItem.scss';

class TasksItem extends React.Component {
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

    return (
      <div className="taskCards card">
        <div className="card-body">
        <span className="col-3">{task.name}</span>
        <Button outline color="info" onClick={this.deleteTask}>Delete</Button>
        </div>
      </div>
    )
  }
}

export default TasksItem