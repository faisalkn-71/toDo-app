import React from 'react';

const Task = ({work}) => {
    const {task} = work;

    
    return (
        <div>
             <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                <input type="checkbox" class="checkbox" />
                    <p className='text-xl'><small>{task}</small></p>
                       
                </div>
            </div>
        </div>
    );
};

export default Task;