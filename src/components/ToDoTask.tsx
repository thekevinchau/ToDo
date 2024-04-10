import { useState } from "react";


interface TaskProps{
    taskID: number,
    taskDesc: string,
    completed: boolean,
}



export function ToDoTask({taskID, taskDesc, completed}: TaskProps){
    //finished rendering task. Need to take input for tasks
    return <div className=" w-11/12 h-12 mt-5 mb-0.5 rounded-md bg-violet-500 flex items-center justify" style={completed ? {textDecoration: "line-through"} : {textDecoration: "bold"}}>
        <div className="ml-2 text-white font-bold">
        <span onClick={() => completed = true} >Task {taskID}: </span>
        <span>{taskDesc}</span>
        </div>
    </div>
}