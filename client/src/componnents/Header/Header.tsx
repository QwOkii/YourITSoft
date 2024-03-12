import React, {useState} from 'react'
import {useFormik} from "formik";
import {CreateTask_Type, CreateTodo} from "../../app/todo";
import {useAppDispatch} from "../../app/app";

export const Header = () => {
    const [isOpen,SetOpen] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const formik = useFormik<CreateTask_Type>(
        {initialValues:{
            name:'',
            status:'',
            description:''
        },
        onSubmit:(task_data)=>{
            if (task_data.name !== '' && task_data.status !== '' && task_data.description !==''){
                dispatch(CreateTodo(task_data))
                SetOpen(false)
            }
        }})
    return (
        <div className='w-screen h-[10vh] flex items-center gap-3 px-14 font-semibold text-gray-700'>
            <div className="text-2xl bg-white p-2 px-8 rounded">
                To-Do list
            </div>
            <div onClick={()=>SetOpen(true)} className="text-2xl bg-white p-2 px-8 rounded border border-solid border-gray-200 cursor-pointer drop-shadow-lg">
                Create
            </div>
            {
                isOpen ? <div className="fixed top-0 left-0 w-full  h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-10 rounded ">
                    <form onSubmit={formik.handleSubmit} className="bg-white p-2 py-8 w-[440px] h-[440px] flex flex-col items-center gap-5 text-sm rounded ">
                        <div className='mx-auto text-xl font-semibold mb-6'>
                            Enter data to create task
                        </div>
                        <input onChange={formik.handleChange} id='name' placeholder='name' className='w-[380px] h-[35px] pl-2 outline-none text-gray-700 rounded border border-solid border-gray-300 focus:border-indigo-400'/>
                        <input onChange={formik.handleChange} id='status' placeholder='status' className='w-[380px] h-[35px] pl-2 outline-none text-gray-700 rounded border border-solid border-gray-300 focus:border-indigo-400'/>
                        <textarea onChange={formik.handleChange} id='description' placeholder='description' className='resize-none w-[380px] h-[120px] pl-2 outline-none text-gray-700 rounded border border-solid border-gray-300 focus:border-indigo-400'/>
                        <button  type="submit" className='w-[380px] h-[35px] p-1 text-center text-white text-[15px] bg-indigo-500 hover:bg-blue-600 rounded'>
                            Submit
                        </button>
                    </form>
                </div>:''
            }
        </div>
    )
}
