import { Dispatch, SetStateAction, useEffect } from "react";
import { FaPlus } from "react-icons/fa";

type NewItemInputProps = {
    newTask: string;
    setNewTask: Dispatch<SetStateAction<string>>;
    handleAdd: (text: string) => void;
}

export default function NewItemInput({
    newTask,
    setNewTask,
    handleAdd
} : NewItemInputProps) {
    useEffect(() => {
        let addButton = document.getElementById("add-button");
        document.addEventListener("keypress", (event) => {
            event.key == "Enter" && addButton?.click();
          });
    }, []);

    return (
        <div className="w-full flex gap-2">
            <input value={newTask} 
                onChange={(e) => setNewTask(e.target.value) } 
                type="text" 
                placeholder="Add a new task" 
                className="outline-none w-full h-8 rounded pl-3 border border-solid border-zinc-300" 
            />
            <button 
                id="add-button"
                onClick={() => handleAdd(newTask)} 
                className="p-2 bg-purple-600 rounded hover:bg-purple-700 text-white"
            >
                <FaPlus />
            </button>
        </div>
    )
}