export interface IToDoList{
    id: number;
    name: string;
    tasks: string[];
}
export class ToDoList implements IToDoList{
    id!: number;
    name!: string;
    tasks: string[] = [];
}