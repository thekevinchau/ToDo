/*
1. Utilize state to store variables for the ToDoList.
    - One for the count of number of tasks (DONE)
    - One for the array of Tasks (DONE)
2. Create a function that adds a task to the array of ToDos.
    - This should be called upon by an onclick function by a button. (DONE)
    - The task name should be implemented through an input text box that submits the information. (IN PROGRESS)
        - Implement the state variable to store the taskName.
        - Create a function that changes the state variable based on the input box.
            - The function should reset the taskName back to an empty string for the next task to be inputted.
            - If the textbox is clear, the button should be disabled.

3. Render the tasks using map() function. (DONE)

*/
import { useState } from "react"
import { Task } from "./ToDoTask";

interface Task{
    taskNum: number,
    taskName: string,
}

export function ToDoList(){
    const [ToDos, setToDos] = useState<Task[]>([]);
    const [numTasks, setNumTasks] = useState<number>(1);
    const [taskName, setTaskName] = useState<string>("");

    function handleTextInput(event: React.ChangeEvent<HTMLInputElement>){
        setTaskName(event.target.value);
    }

    function addTask(taskName: string, taskNumber: number){
        setNumTasks(numTasks+1);
        const newTask = { taskNum: taskNumber, taskName: taskName}
        setToDos([...ToDos, newTask]);
    }

    return <div>
        <input type="text" placeholder="What's your task?" onChange={handleTextInput}></input>
        <button onClick={() => addTask(taskName, numTasks)} disabled={taskName === ""}>Add Task</button>
        {ToDos.map((task) => <Task taskNum={task.taskNum} taskName={task.taskName}></Task>)}
    </div>
}