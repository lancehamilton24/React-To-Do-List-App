import React from 'react';
import './Tasks.scss';
import TasksItem from '../../TasksItem/TasksItem';
import TaskForm from '../TaskForm/TaskForm';
import authRequests from '../../../helpers/data/authRequests';
import tasksRequest from '../../../helpers/data/tasksRequest';
import taskShape from '../../../helpers/propz/taskShape';

class Tasks extends React.Component {
  state = {
    tasks: [],
    open: false
  }
  
  static propTypes = {
    task: taskShape.taskShape
  }

  getTasks = () => {
  const uid = authRequests.getCurrentUid();
  tasksRequest.getAllTasks(uid)
    .then((tasks) => {
      this.setState({ tasks });
    })
  };

  componentDidMount() {
    this.getTasks();
  };

  formSubmitTasks = (task) => {
    tasksRequest.postRequest(task)
      .then(() => {
        const uid = authRequests.getCurrentUid();
        tasksRequest.getAllTasks(uid)
          .then((tasks) => {
            this.setState({ tasks });

      })
    })
      .catch(err => console.error('error with tasks post', err));
  }

  deleteOne = (taskId) => {
    tasksRequest.deleteTask(taskId)
      .then(() => {
        const uid = authRequests.getCurrentUid();
        tasksRequest.getAllTasks(uid)
          .then((tasks) => {
              this.setState({ tasks })
          });
      })
      .catch(err => console.error('error with task delete', err));
  }

  render() {
    const {
      tasks,
    } = this.state;

    const taskItems = tasks.map(task => (
      <TasksItem
        task={task}
        key={task.id}
        deleteSingleTask={this.deleteOne}
      />
    ));


    return (
      <div className='tasks'>
          <TaskForm onSubmit={this.formSubmitTasks} />
          <div className="existingTasks">{taskItems}</div>
      </div>
    )
  }
}

export default Tasks;