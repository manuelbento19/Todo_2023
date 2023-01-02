import {FaTrash,FaCheck} from 'react-icons/fa';
import { Card } from './styles';
import { TaskProps } from '../../Types/TaskProps';

function TaskCard({task,Index,CloseTask,DeleteTask}:TaskProps){
  return (
        <Card>
            <input type="checkbox" checked={task.checked ? true: false} onChange={e=>CloseTask(Index)}/>
            <div>
                <span>{new Date(task.created_at).toLocaleString()} {task.checked && <FaCheck/>}</span>
                <p>{task.task}</p>
            </div>
            <button onClick={e=>DeleteTask(Index)}><FaTrash/></button>
        </Card>
  );
}

export default TaskCard;