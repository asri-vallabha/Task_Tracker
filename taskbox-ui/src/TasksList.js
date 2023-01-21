import React from 'react'
import TaskItem from './TaskItem'

const TasksList=(props)=>{
    const {tasks,removeItem, editItem}=props
    return(
        <div>
             { tasks.length === 0 ? (
                    <div>
                    <h3>No Task Found</h3>
                    <h3>Add Your First Task</h3>
                    </div>
                    ):(
                        <div>
                        <h3>My Task - {tasks.length}</h3>
                        { 
                            tasks.map((task)=>{
                            return (
                                <TaskItem 
                                key={task.id} 
                                {...task}
                                removeItem={removeItem}
                                editItem={editItem}/>

                            )
                        })
                        }
                        </div>

                    )
            }
            
        </div>
    )
}

export default TasksList;