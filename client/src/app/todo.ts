import {createAction, createAsyncThunk, createReducer, PayloadAction} from "@reduxjs/toolkit"
import {ApiTodo} from "../Api/Api";

export interface State_Todo_Type{
    Tasks:Array<Task>
}
export interface CreateTask_Type{
    name:string
    description:string
    status:string
}
export interface Task {
    id: number;
    name: string;
    status: string;
    description: string;
}
const InitialState:State_Todo_Type ={
    Tasks:[]
}
export const DeleteTodo = createAsyncThunk<unknown,number>("DELETE-TASK",async (id,{dispatch})=>{
    await new ApiTodo().delete(id)
    dispatch(GetAllTask())
})
export const CreateTodo = createAsyncThunk<unknown,CreateTask_Type>('CREATE-TASK',async (task,{dispatch})=>{
    await new ApiTodo().create(task)
    dispatch(GetAllTask())
})
export const GetAllTask= createAsyncThunk("GET-ALL-TASKS",async (_,{dispatch})=>{
    const Tasks = await new ApiTodo().get()
    console.log(Tasks)

    dispatch(setTask(Tasks))
})
const setTask = createAction<Array<Task> |any>("SET-TASKS")
export const Todo = createReducer<State_Todo_Type>(InitialState,(builder)=>{
    builder
        .addCase(setTask.type,(state,action:PayloadAction<Array<Task>>)=>{
        state.Tasks = action.payload
    })
})

