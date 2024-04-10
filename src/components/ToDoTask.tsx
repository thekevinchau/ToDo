/*

1. We need to pass variables into our ToDo item so that we can render them from outside the component
    - Do this using props, which are great for passing variables between components
2. Figure out how to set up completion status of the task
3. Make it visually appealing
*/

interface TaskProps{
    taskNum: number,
    taskName: string,
}


export function Task({taskNum, taskName}: TaskProps){

    return <div className="text-white">
        <span>Task {taskNum}: </span>
        <span>{taskName}</span>
    </div>
}