import React from 'react';
import axios from 'axios';



const ToDo = () => {
    const handleTask = event => {
        event.preventDefault();
        
        const todo = {
            task: event.target.task.value,
        }

        axios.post('http://localhost:5000/task', todo)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    window.location.reload();
                }
            })

    }



    return (
        <div>
            <div className='my-3 flex flex-col justify-center items-center'>

                <form onSubmit={handleTask}>

                    <h1 className='text-2xl font-bold mb-4'>Please Add Task</h1>


                    <textarea className='input input-bordered input-secondary textarea w-full max-w-md' placeholder='Add a Task' name="task" id="" cols="50" rows="6" required></textarea>

                    <br></br>

                    <input className='btn btn-primary w-100 text-white font-bold' type="submit" value="Add Task" />
                </form>
            </div>

        </div>
    );
};

export default ToDo;