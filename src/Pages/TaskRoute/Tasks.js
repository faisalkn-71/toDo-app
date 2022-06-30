import React, { useEffect, useState } from 'react';
import Task from './Task';


const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect( () => {
        fetch('https://boiling-tor-70886.herokuapp.com/tasks')
        .then(res =>  res.json())
        .then(data => setTasks(data))
    }, [])

    return (
        <div>
            <div className='my-20'>
            <h1 className='text-center text-3xl font-bold text-secondary pb-6'>Your Tasks To Do</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                {
                    tasks.map(work => <Task
                    key={work._id}
                    work = {work}
                    ></Task>)   
                }
            </div>
        </div>
        </div>
    );
};

export default Tasks;