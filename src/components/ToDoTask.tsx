

interface TaskProps{
    taskID: number,
    taskDesc: string,
}

export function ToDoTask({taskID, taskDesc}: TaskProps){
    //finished rendering task. Need to take input for tasks
    return <div>
        <span>Task {taskID}: </span>
        <span>{taskDesc}</span>
    </div>
}