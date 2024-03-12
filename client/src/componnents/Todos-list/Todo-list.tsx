import React, {useEffect, useState} from 'react';
import {Task, TaskCard} from "../Task/Task";
import { useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../app/app";
import {GetAllTask} from "../../app/todo";


const TaskContainer = () => {
    const {Tasks} = useSelector((u:RootState)=>u.Todo)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(GetAllTask())
        console.log(Tasks)

    }, []);

    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    const handleCardClick = (task: Task) => {
        setSelectedTask(task);
    };

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <div className="w-screen h-90vh overflow-y-auto pl-8">
                <div className="grid sm:grid-rows-3 grid-flow-col gap-4 gap-x-6 relative ">
                    {Tasks?.map((task, index) => (
                        <div key={task.id} className='flex justify-center'>
                            <TaskCard id={task.id} task={task} onCardClick={handleCardClick} />
                        </div>
                    ))}
                </div>
            </div>
            {selectedTask && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 w-[440px] h-[320px] flex flex-col justify-between gap-3 text-sm rounded ">
                        <div className='flex flex-col gap-3'>
                            <h2 className="text-lg font-semibold">{selectedTask.name}</h2>
                            <p className="font-semibold">{selectedTask.status}</p>
                            <p className="text-gray-700">{selectedTask.description}</p>
                        </div>
                        <button className="mt-4 px-4 py-2 bg-blue-500 float-end text-white rounded hover:bg-blue-600" onClick={() => setSelectedTask(null)}>Закрити</button>
                    </div>
                </div>)}
        </div>
    )
};

export default TaskContainer;