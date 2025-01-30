
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";

export default function TaskForm({ addTask }) {
  const [task, setTask] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (task.trim() === "") return;
    await addTask(task);
    setTask("");
  }

  return (
    <motion.form
      className="flex flex-col space-y-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h2 className="text-lg font-semibold">Add New Task</h2>
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="px-4 py-3 border border-stone-800 rounded-lg shadow-sm bg-gray-700 text-white focus:ring focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 shadow-md hover:bg-blue-700 transition-all"
        onClick={handleSubmit}
      >
        <FiPlus size={20} />
        Add Task
      </button>
    </motion.form>
  );
}
