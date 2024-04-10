/*
1. Utilize state to store variables for the ToDoList.
    - One for the count of number of tasks (DONE)
    - One for the array of Tasks (DONE)
2. Create a function that adds a task to the array of ToDos.
    - This should be called upon by an onclick function by an array. (DONE)
    - The task name should be implemented through an input text box that submits the information. (IN PROGRESS)

3. Render the tasks using map() function.

*/
import { useState } from "react"
import { Task } from "./ToDoTask";

interface Task{
    taskNum: number,
    taskName: string,
}

export function ToDoList(){
    const [ToDos, setToDos] = useState<Task[]>([]);
    const [numTasks, setNumTasks] = useState<number>(0);

    function addTask(taskName: string, taskNumber: number){
        setNumTasks(numTasks+1);
        const newTask = { taskNum: taskNumber, taskName: taskName}
        setToDos([...ToDos, newTask]);
    }

    return <div>
        <button onClick={() => addTask("poop", numTasks)}>Add Task</button>
        {ToDos.map((task) => <Task taskNum={task.taskNum} taskName={task.taskName}></Task>)}
    </div>
}