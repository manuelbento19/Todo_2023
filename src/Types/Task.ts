export type Task =  {
    task:string;
    checked:boolean;
    created_at: Date
    closed_at?: Date; 
}