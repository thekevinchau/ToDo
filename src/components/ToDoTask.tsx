

interface TaskProps{
    taskID: number,
    taskDesc: string,
}

export function ToDoTask({taskID, taskDesc}: TaskProps){
    return <div>
        <p>Current Task {taskID}</p>
        <p>Task Description {taskDesc}</p>
    </div>
}