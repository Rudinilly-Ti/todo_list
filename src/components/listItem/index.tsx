import { type Task } from "@/lib/types";
import { FaCheck, FaTrashAlt } from "react-icons/fa";

type ListItemProps = Task & {
    onCheck: () => void;
    onDelete: () => void;
}

export default function ListItem({ text, checked, onDelete, onCheck }: ListItemProps) {
    return (
        <li className={`w-full flex justify-between items-center rounded relative ${checked ? 'bg-zinc-600' : 'bg-zinc-300 dark:bg-zinc-800' } p-3`}>
            <div className="flex items-center">
                <label>
                    <div className="w-4 h-4 flex items-center justify-center bg-zinc-50 rounded hover:bg-zinc-100 hover:cursor-pointer">
                        {checked && <FaCheck className="text-emerald-600 text-xs" />}
                    </div>
                    <input type="checkbox" checked={checked} onChange={onCheck} className="hidden" />
                </label>
                <span className="text-zinc-700 font-semibold dark:text-zinc-300 ml-5">{text}</span>
            </div>

            <button 
                onClick={onDelete}
                className="bg-none rounded text-red-400 dark:text-red-600 hover:text-red-500 dark:hover:text-red-700 font-medium"
            >
                <FaTrashAlt />
            </button>
        </li>
    )
}