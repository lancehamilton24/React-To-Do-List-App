import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getAllTasks = uid => new Promise((resolve, reject) => {
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



export default {
  getAllTasks,
};
