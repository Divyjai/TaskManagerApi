import { useState } from "react";

export default function EditTaskForm({ task, onUpdate, onCancel }) {
  const [title, setTitle] = useState(task.title);
  const [completed, setCompleted] = useState(task.completed);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onUpdate(task._id, title, completed);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center mb-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-1 rounded flex-1"
      />
      <label className="flex items-center gap-1">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
        />
        Done
      </label>
      <button type="submit" className="bg-green-500 text-white px-2 rounded">
        Save
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="bg-gray-400 text-white px-2 rounded"
      >
        Cancel
      </button>
    </form>
  );
}
