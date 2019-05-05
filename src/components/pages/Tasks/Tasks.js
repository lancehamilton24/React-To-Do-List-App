import React from 'react';
// import {Button} from 'reactstrap';
// import Modal from 'react-responsive-modal';
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
      .then((tasks) => {
        this.setState({ tasks });
        // this.setState({ task: '' })
      })
      .catch(err => console.error('error with tasks post', err));
  }

  // onOpenModal = () => {
  //   this.setState({ open: true});
  // };

  // onCloseModal = () => {
  //   this.setState({ open: false });
  // };

  // addTasks = (e) => {
  //   const onOpenModal = this.onOpenModal;
  //   onOpenModal();
  // }

  render() {
    const {
      tasks,
      // open,
    } = this.state;

    const taskItems = tasks.map(task => (
      <TasksItem
        task={task}
        key={task.id}
      />
    ));

    return (
      <div className='tasks'>
          {/* <Button onClick={this.addTasks}>Add New Task</Button> */}
          <TaskForm onSubmit={this.formSubmitTasks} />
          <div className="existingTasks">{taskItems}</div>
      </div>
    )
  }
}

export default Tasks;