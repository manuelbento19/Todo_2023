import React, { Fragment } from 'react';
import { Background,CloseButton,Content, Text, TaskImage, Description, CloseTaskButton, CloseSignal } from "./styles";
import {AiOutlineClose as CloseIcon} from 'react-icons/ai';
import taskIcon from './../../assets/task-done-flat.png';
import { FaCalendar, FaCheck, FaHourglass, FaTimes } from 'react-icons/fa';
import { Task } from '../../Types/Task';

type TaskModalPros = {
    task:Task & {index:number};
    CloseTask: (index:number) => void;
    Visible: (value:boolean) => void;
} 

const TaskModal = ({task,CloseTask,Visible}:TaskModalPros) => {
  return(
    <Background>
        <Content>
            <CloseSignal>
                {task.checked && <FaCheck/>}
            </CloseSignal>
            <CloseButton onClick={e=>Visible(false)}>
                <CloseIcon/>
            </CloseButton>
            <TaskImage src={taskIcon}/>
            <Text>{task.task}</Text>
            <Description>
                <div className='description'>
                    <FaCalendar/> <strong>Data:</strong> {new Date(task.created_at).toLocaleDateString()}
                </div>
                {task.checked && (
                    <Fragment>
                        <div className='description'>
                            <FaCalendar/> <strong>Data de fecho:</strong> {new Date(task.closed_at||"").toLocaleDateString()}
                        </div>
                        <div className='description'>
                            <FaHourglass/> <strong>Nº de dias:</strong> {2}
                        </div>
                    </Fragment>
                )}
                {!task.checked && <CloseTaskButton onClick={e=>CloseTask(task.index)}>Fechar</CloseTaskButton>}
            </Description>
        </Content>
    </Background>
  );
}

export default TaskModal;