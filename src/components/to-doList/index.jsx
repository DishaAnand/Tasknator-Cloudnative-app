  import React, { useState } from 'react';
  import styles from './to-doList.module.scss'
import Navbar from '../navbar/navbar';
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';

  export const TodoList = () => { 
    const [input, setInput] = useState('');
    const [taskList,setTaskList] =  useState([])

    const handleDelete = (index) =>{
      const deletedTask = taskList[index]; 
      const newTaskList = [...taskList]
      newTaskList.splice(index,1)
      setTaskList(newTaskList)
      notifyBySnS(deletedTask);
  }
  const notifyBySnS = (deletedTask) => {
    const snsClient = new SNSClient({
      region: 'us-east-1',
      credentials: {
        accessKeyId: 'ASIAYS2NQY442FKFTSL2',
        secretAccessKey: 'SNcLyu8sV+CfMwGyuykWt9cbks3AvylSUbfIe9rR',
        sessionToken: 'FwoGZXIvYXdzEEcaDAAhlRZsnqv28KKfESLAAQPRlzey47PgWO14n1Akt2pblZJO0bXjR4WELOE1uOBxXm76lCVhNBgXQoL0yl5tSKMuH8EH2ZThvm1CkCw/aAsukmDU+6ZpVcmKlYqgC5r/ZoJhgA8ib3VIu6UfSujNAv+51MIPSRYmeoGnk/L3/rl9sDdo9N+4zH+UApGtdQVl2RhsbgAUhKoo4jZ2sR1ytmhSq5HDpf9HmwSJTNuddZ7ivLzPdmldVnqwNC4h6dXXGI6VoK6aHfJp/W7/XyPD3yiGlbCwBjItgvLXFvAO5AH4zTKZ32HLdaNnzNEpJY0AirO+mghjlrH8T0oV0R8IC+QZ5CsJ',
      },
    });
    const params = {
      Message: `Task "${deletedTask}" has been deleted.`,
      TopicArn: 'arn:aws:sns:us-east-1:590183712569:termsns',
    };
    const command = new PublishCommand(params);
    snsClient.send(command, (err, data) => {
      if (err) {
        console.error('Error publishing the SNS message', err);
      } else {
        console.log('SNS message published successfully', data);
      }
    });
  };

    const handleClick = (e) => {
      e.preventDefault();
      //setTaskList([...taskList, input]);
      taskList.push(input)
      setInput(''); 
    };

    return (
      <div>
      <Navbar/>
        <h2 className={styles.todo}>To-Do Board</h2>
        <div className={styles.inputs}>
          <input className={styles.taskInput}type="text" placeholder="Add a task" value = {input} onChange={(e) => setInput(e.target.value)} />
          <button className={styles.addButton}onClick={handleClick} type="button">Add</button>
        </div>
        <div className={styles.tasks}>
        {taskList.map((tasks,index)=>
          <div className={styles.tasksCard}>{tasks}
          <button className = {styles.btn} onClick = {()=>handleDelete(index)}>Delete</button>
          </div>
      
      )}
        </div>
      </div>
    );
  };

  export default TodoList;
