import { useState } from "react";
import { ToDoTask } from "./ToDoTask.tsx";

interface Task{
    taskID: number,
    taskDesc: string,
    completed: boolean
}

export function ToDoStorage(){
    const [taskArr, setTaskArr] = useState<Task[]>([]);
    const [taskNum, setTaskNum] = useState<number>(1);
    const [taskName, setTaskName] = useState<string>("");
    const [completed, setCompletion] = useState<boolean>(false);

    function changeTaskName(event: React.ChangeEvent<HTMLInputElement>){
        setTaskName(event.target.value);
    }

    function addTask(taskDescription: string, taskNumber: number, completed: boolean){
        const task = { taskDesc: taskDescription, taskID: taskNumber, completed: completed }
        setTaskArr([...taskArr, task])
        setTaskNum(taskNum + 1);
        setTaskName("");
    }



    return <div className="border border-x-purple-600 w-4/12 h-4/6 overflow-y-scroll bg-blue-950 flex flex-col items-center rounded-md" >
        <h1 className="text-white bold text-3xl mt-4 mb-2">What Needs To Be Done?</h1>
        <div className="flex justify-center items-center">
            <input type="text" placeholder="What is your task today?" onChange={changeTaskName} defaultValue={""}></input>
            <button className="text-red-400 border border-red-600 ml-1" onClick={() => addTask(taskName, taskNum, completed)} disabled={taskName === "" ? true : false}>Add Task</button>
        </div>
        {taskArr.map((task) => <ToDoTask taskDesc={task.taskDesc} taskID={task.taskID} completed={task.completed} key={task.taskID}></ToDoTask>)}
    </div>
}