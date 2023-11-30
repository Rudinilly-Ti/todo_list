import { type Task } from "@/lib/types";
import ListItem from "../listItem";

type TaskListProps = {
    list: Task[];
    handleCheck: (index: number) => void;
    handleDelete: (index: number) => void;
}

export default function TaskList({list, handleCheck, handleDelete }:TaskListProps) {
    return (
        <ul className="w-full mt-8 flex flex-col gap-2 transition-all ease-in-out delay-100">
        {list.map((item, index) => (
            <ListItem 
                key={index}
                text={item.text} 
                checked={item.checked} 
                onDelete={() => handleDelete(index)} 
                onCheck={() => handleCheck(index)}
            />
        ))}
    </ul>
    )
}