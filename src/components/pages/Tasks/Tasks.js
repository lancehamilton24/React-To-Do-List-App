import React from 'react';
import './Tasks.scss';
import TasksItem from '../../TasksItem/TasksItem';
import authRequests from '../../../helpers/data/authRequests';
import tasksRequest from '../../../helpers/data/tasksRequest';
import taskShape from '../../../helpers/propz/taskShape';


class Tasks extends React.Component {
  state = {
    tasks: []
  }
  
  static propTypes = {
    task: taskShape.taskShape
  }

  getTasks = () => {
  const uid = authRequests.getCurrentUid();
  tasksRequest.getAllTasks(uid)
    .then((tasks) => {
      this.setState({tasks});
    })
  };
  componentDidMount(){
    this.getTasks();
  }


  render() {
    const {
      tasks
    } = this.state;

    const taskItems = tasks.map(task => (
      <TasksItem
        task={task}
        key={task.id}
      />
    ));


    return (
      <div className='tasks'>
          <div className="existingTasks">{taskItems}</div>
      </div>
    )
  }
}

export default Tasks;