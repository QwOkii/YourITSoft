import axios from "axios";
import {CreateTask_Type} from "../app/todo";

const base = axios.create({
    baseURL:"http://localhost:5000/api",
    headers:{
        "Access-Control-Allow-Origin": "*",
        "Content-Type":"application/json"
    }
})
export class ApiTodo{
    async get(){
        return await base.get('').then(u=>u.data)
    }
    async create(todo:CreateTask_Type){
        console.log(todo)

        return await base.post('',{...todo}).then(u=>u.data)
    }
    async delete(id:number){
        return await base.delete('',{params:{id}}).then(u=>u.data)
    }
}