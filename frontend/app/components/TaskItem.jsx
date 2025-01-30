
"use client";

import { motion } from "framer-motion";
import { FiTrash2, FiCheckCircle } from "react-icons/fi";
export default function TaskItem({ task, deleteTask ,toggleTask}) {
  return (
    <motion.div
      className="flex  items-center justify-between px-7 py-4 bg-gray-700 rounded-lg shadow cursor-pointer hover:bg-gray-600 transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>{task.title}</span>
      <div className="flex items-center gap-2">
        {/* Mark as Done Button */}
        <button
          onClick={() => toggleTask(task._id, task.completed)}
          className={`text-green-400 hover:text-green-600 transition-all ${task.completed ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={task.completed}
        >
          <FiCheckCircle size={20} />
        </button>

        {/* Delete Button */}
        <button
          onClick={() => deleteTask(task._id)}
          className="text-red-400 hover:text-red-600 transition-all"
        >
          <FiTrash2 size={20} />
        </button>
      </div>
    </motion.div>
  );
}
