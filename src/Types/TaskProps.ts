import { Task } from "./Task";

export type TaskProps = {
    task:Task,
    Index:number;
    CloseTask: (index:number) => void;
    DeleteTask: (index:number) => void;
}