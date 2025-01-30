

"use client";

import TaskItem from "./TaskItem";
import { motion } from "framer-motion";

export default function TaskList({ tasks, deleteTask ,toggleTask}) {
  return (
    <motion.div
      className="space-y-3 max-h-[700px] overflow-y-auto"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {tasks.length === 0 ? (
        <p className="text-center text-gray-400">No tasks yet. Add some! 🚀</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task._id} task={task} deleteTask={deleteTask}  toggleTask={toggleTask} />
        ))
      )}
    </motion.div>
  );
}
