import { useState, useEffect } from "react";
import API from "../api";
import TaskForm from "./TaskForm";
import EditTaskForm from "./EditTaskForm";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // Fetch all tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    API.get("/tasks")
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  };

  // Add new task
  const handleTaskAdded = (newTask) => {
    setTasks(prev => [...prev, newTask]);
  };

  // Delete task
  const handleDelete = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      setTasks(prev => prev.filter(task => task._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // Update task
  const handleUpdate = async (id, updatedTitle, completed) => {
    try {
      const res = await API.put(`/tasks/${id}`, { title: updatedTitle, completed });
      setTasks(prev => prev.map(task => task._id === id ? res.data : task));
      setEditingTask(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-6">
      {/* Add Task Form */}
      <TaskForm onTaskAdded={handleTaskAdded} />

      {/* Task List */}
      <ul className="mt-4">
        {tasks.map(task => (
          <li
  key={task._id}
  className="border p-2 mb-2 rounded flex justify-between items-center"
>
  {editingTask && editingTask._id === task._id ? (
    <EditTaskForm
      task={task}
      onUpdate={handleUpdate}
      onCancel={() => setEditingTask(null)}
    />
  ) : (
    <>
      {/* ✅ Add checkbox */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() =>
            handleUpdate(task._id, task.title, !task.completed)
          }
        />
        <span className={`${task.completed ? "line-through text-gray-400" : ""}`}>
          {task.title}
        </span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setEditingTask(task)}
          className="bg-yellow-400 text-white px-2 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(task._id)}
          className="bg-red-500 text-white px-2 rounded"
        >
          Delete
        </button>
      </div>
    </>
  )}
</li>
        ))}
      </ul>
    </div>
  );
}
