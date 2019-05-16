import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getAllTasks = uid => new Promise((resolve, reject) => {
  // axios.get(`${firebaseUrl}/tasks.json?orderBy="name"&startAt=1&print=pretty`)
  axios.get(`${firebaseUrl}/tasks.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const taskObject = result.data;
      const taskArray = [];
      if (taskObject != null) {
        Object.keys(taskObject).forEach((taskId) => {
          taskObject[taskId].id = taskId;
          taskArray.push(taskObject[taskId]);
        });
      }
      resolve(taskArray);
      console.log(taskArray);
    })
    .catch((error) => {
      reject(error);
    });
});

const postRequest = task => axios.post(`${firebaseUrl}/tasks.json`, task)

const deleteTask = taskId => axios.delete(`${firebaseUrl}/tasks/${taskId}.json`);

export default {
  getAllTasks,
  postRequest,
  deleteTask
};