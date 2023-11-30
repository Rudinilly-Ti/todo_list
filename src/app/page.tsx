"use client";
import NewItemInput from "@/components/NewItemInput";
import TaskList from "@/components/TaskList";
import ThemeButton from "@/components/ThemeButton";
import { Task } from "@/lib/types";
import { useState } from "react";

export default function Home() {
    const [list, setList] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState("");

    const handleAdd = (text: string) => {
        if (!text) return;
        setList([...list, { text, checked: false }]);
        setNewTask("");
    }

    const handleDelete = (index: number) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    }

    const handleCheck = (index: number) => {
        const newList = [...list];
        newList[index].checked = !newList[index].checked;
        setList(newList);
    }
    
    return (
        <main className={`w-full h-full flex justify-center items-center flex-col`}>
        <div className="w-96 flex flex-col items-center">  
            <h1 className=" text-zinc-900 dark:text-white font-bold text-4xl mb-8">
                To Do
                <span className="text-purple-600"> List</span>
            </h1>
            <NewItemInput newTask={newTask} setNewTask={setNewTask} handleAdd={handleAdd} />
            <TaskList list={list} handleCheck={handleCheck} handleDelete={handleDelete} />
        </div>
        <ThemeButton />
        </main>
    )
}
