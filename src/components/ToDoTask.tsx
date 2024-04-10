

interface TaskProps{
    taskID: number,
    taskDesc: string,
    completed: boolean
}

export function ToDoTask({taskID, taskDesc, completed}: TaskProps){
    //finished rendering task. Need to take input for tasks
    return <div className="border w-11/12 h-12 mt-5 mb-1" style={ completed ? {backgroundColor: "green"} : {backgroundColor: "orange"} }>
        <span>Task {taskID}: </span>
        <span>{taskDesc}</span>
    </div>
}