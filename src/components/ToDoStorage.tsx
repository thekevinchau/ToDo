import { useState } from "react";
import { ToDoTask } from "./ToDoTask.tsx";

interface Task{
    taskID: number,
    taskDesc: string,
}

export function ToDoStorage(){
    const [taskArr, setTaskArr] = useState<Task[]>([]);
    const [taskNum, setTaskNum] = useState<number>(1);
    const [taskName, setTaskName] = useState<string>("Wash Dishes");

    function changeTaskName(event: React.ChangeEvent<HTMLInputElement>){
        setTaskName(event.target.value);
    }

    function addTask(taskDescription: string, taskNumber: number){
        const task = { taskDesc: taskDescription, taskID: taskNumber}
        setTaskArr([...taskArr, task])
        setTaskNum(taskNum + 1);
    }


    return <div className="border w-1/4 h-1/2 overflow-y-scroll bg-blue-950 flex flex-col items-center" >
        <h1 className="text-white bold text-3xl mt-4 mb-2">What Needs To Be Done?</h1>
        <div className="flex justify-center items-center">
            <input type="text" placeholder="What is your task today?" onChange={changeTaskName}></input>
            <button className="text-red-400 border border-red-600 ml-2" onClick={() => addTask(taskName, taskNum)}>Add Task</button>
        </div>
        {taskArr.map((task) => <ToDoTask taskDesc={task.taskDesc} taskID={task.taskID}></ToDoTask>)}
    </div>
}