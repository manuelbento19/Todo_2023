import { FormEvent, useEffect, useState } from "react";
import {BottomHeader, Container,Header,Main,MainSection, TopHeader} from "./styles";
import {FaPlus,FaBroom} from 'react-icons/fa';
import { Task } from "../../Types/Task";
import TaskCard from "../../Components/Task";
import { StorageManager } from "../../Utils/LocalStorage";

function Home(){
    const [task,setTask] = useState("");
    const [tasks,setTasks] = useState<Task[]>([]);
    const storage = new StorageManager("tasks");

    useEffect(()=>{
        function Refresh(){
            const data = storage.GetLocalData();
            if(data){
                return setTasks(data);
            }
        }
        Refresh();
    },[])
    function addTask(e:FormEvent){
        e.preventDefault();
        if(task!="" && task.trim()!=""){
            tasks.push({
                task,
                checked:false,
                created_at: new Date()
            });
            setTasks(tasks);
            storage.SetLocalData(tasks)
            setTask("");
        }
    }
    function clear(){
        setTasks(prev=>[]);
        storage.ClearLocalData();
    }
    function closeTask(index:number){
        let oldTask = tasks[index];
        if(!oldTask.checked){
            oldTask = {
                ...oldTask,
                checked: true,
                closed_at : new Date()
            }
        }
        else{
            oldTask = {
                ...oldTask,
                checked: false,
                closed_at : undefined
            }
        }
        tasks[index] = oldTask;
        setTasks(prev=>[...tasks])
        storage.SetLocalData(tasks)
    }
    function deleteTask(index:number){
        var newTasks = tasks.filter((item,i)=>i!==index);
        setTasks(prev=>newTasks)
        storage.SetLocalData(newTasks)
    }
    return (
        <Container>
            <Main>
                <Header className="content">
                    <TopHeader>
                        <h1>Todo App</h1>
                        <button onClick={e=>clear()}><FaBroom/></button>
                    </TopHeader>
                    <BottomHeader>
                        <form onSubmit={e=>addTask(e)}>
                            <input type="text" required value={task} onChange={e=>setTask(e.target.value)} placeholder="Enter your list"/>
                            <button type="submit">
                                <FaPlus/>
                            </button>
                        </form>
                    </BottomHeader>
                </Header>
                <MainSection className="content">
                    <ul>
                        {tasks && tasks.map((item,index)=>(
                        <TaskCard key={index} Index={index} task={item} CloseTask={closeTask} DeleteTask={deleteTask}/>
                        ))}
                    </ul>
                </MainSection>
            </Main>
        </Container>
    )
}
export default Home;