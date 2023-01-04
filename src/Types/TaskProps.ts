import { Task } from "./Task";

export type TaskProps = {
    task:Task & {index:number};
    SelectTask: (task:Task & {index:number}) => void;
    CloseTask: (index:number) => void;
    DeleteTask: (index:number) => void;
    Visible: (value:boolean) => void;
}