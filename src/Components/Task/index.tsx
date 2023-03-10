import {FaTrash,FaCheck} from 'react-icons/fa';
import { Card } from './styles';
import { TaskProps } from '../../Types/TaskProps';
import { DateFormart } from '../../Utils/DateFormater';

function TaskCard({task,SelectTask,CloseTask,DeleteTask,Visible}:TaskProps){
  return (
        <Card>
            <input type="checkbox" checked={task.checked ? true: false} onChange={e=>CloseTask(task.index)}/>
            <div onClick={e=>{
              SelectTask(task);
              Visible(true);
            }}>
              <span>{DateFormart(task.created_at)} {task.checked && <FaCheck/>}</span>
              <p>{task.task}</p>
            </div>
            <button onClick={e=>DeleteTask(task.index)}><FaTrash/></button>
        </Card>
  );
}

export default TaskCard;