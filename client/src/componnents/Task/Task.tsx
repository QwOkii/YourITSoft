import React from "react";
import {useAppDispatch} from "../../app/app";
import {DeleteTodo} from "../../app/todo";

export interface Task {
    id: number;
    name: string;
    status: string;
    description: string;
}
interface Props{
    task: Task
    onCardClick: (task: Task) => void
    id:number
}
export const TaskCard:React.FC<Props> = ({ task, onCardClick,id }) => {
    const dispatch = useAppDispatch()
    return (
        <div className="w-[210px] h-[180px] bg-white p-4 flex flex-col justify-between shadow-md rounded-lg  cursor-pointer">
            <div onClick={() => onCardClick(task)}>
                <h2 className="text-lg font-semibold mb-2">{task.name}</h2>
                <p className="text-gray-700">{task.status}</p>
            </div>
            <div onClick={()=>dispatch(DeleteTodo(id))} className='w-[140px] rounded h-[45px] bg-red-600 text-white text-center p-2 mx-auto cursor-pointer' >
                Delete
            </div>
        </div>
    );
};
