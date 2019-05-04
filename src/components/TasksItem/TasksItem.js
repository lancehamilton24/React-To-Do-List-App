import React from 'react';
// import PropTypes from 'prop-types';
import taskShape from '../../helpers/propz/taskShape'

import './TasksItem.scss';

class TasksItem extends React.Component {
  static propTypes = {
    task: taskShape.taskShape,
  }

  render() {
    const { task } = this.props;

    return (
      <div className="taskCards card">
        <div className="card-body">
        <span className="col-3">{task.task}</span>
        </div>
      </div>
    )
  }
}

export default TasksItem