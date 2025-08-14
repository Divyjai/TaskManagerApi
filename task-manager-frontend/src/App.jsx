import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center">Task Manager</h1>
      <p className="text-center text-gray-500">Add, edit, and delete your tasks easily</p>

      <TaskForm />
      <TaskList />
    </div>
  );
}
