"use client";

import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  async function fetchTasks() {
    const res = await fetch("http://localhost:5000/api/tasks", { cache: "no-store" });
    const data = await res.json();
    setTasks(data);
  }

  async function addTask(title, completed) {
    const res = await fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, completed }),
    });
    if (res.ok) fetchTasks();
  }

  async function deleteTask(id) {
    await fetch(`http://localhost:5000/api/tasks/${id}`, { method: "DELETE" });
    fetchTasks();
  }

  async function toggleTask(id, completed) {
    await fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !completed }),
    });
    fetchTasks();
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <main className="bg-gray-900 min-h-screen flex flex-col items-center p-6 text-gray-200">
      {/* Header Section */}
      <header className="w-full bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
        <h1 className="text-4xl font-bold text-center text-indigo-500">Task Manager</h1>
        <p className="text-lg text-center mt-2 text-gray-400">Manage your tasks efficiently</p>
      </header>

      {/* Main Content Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Side - Form */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Add New Task</h2>
          <TaskForm addTask={addTask} />
        </div>

        {/* Right Side - Task List */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg overflow-y-auto max-h-[500px]">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Your Tasks</h2>
          <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
        </div>

      </div>
    </main>
  );
}
