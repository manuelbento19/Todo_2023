import React, { Fragment } from 'react';
import { Background,CloseButton,Content, Text, TaskImage, Description, CloseTaskButton, CloseSignal } from "./styles";
import {AiOutlineClose as CloseIcon} from 'react-icons/ai';
import taskIcon from './../../assets/task-done-flat.png';
import { FaCalendar, FaCheck, FaHourglass, FaTimes } from 'react-icons/fa';
import { Task } from '../../Types/Task';
import { DateFormart } from '../../Utils/DateFormater';
import { DiffDateCalculator } from '../../Utils/DiffDate';

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
                    <FaCalendar/> <strong>Data:</strong> {DateFormart(task.created_at)}
                </div>
                {task.checked && (
                    <Fragment>
                        {task.closed_at && (
                            <Fragment>
                                <div className='description'>
                                    <FaCalendar/> <strong>Data de fecho:</strong> {DateFormart(task.closed_at)}
                                </div>
                                <div className='description'>
                                    <FaHourglass/> <strong>Nº de dias:</strong> {DiffDateCalculator({firstDate:task.created_at,lastDate:task.closed_at})}
                                </div>
                            </Fragment>
                        )}
                    </Fragment>
                )}
                {!task.checked && <CloseTaskButton onClick={e=>{
                    CloseTask(task.index);
                    Visible(false);
                }}>Fechar</CloseTaskButton>}
            </Description>
        </Content>
    </Background>
  );
}

export default TaskModal;