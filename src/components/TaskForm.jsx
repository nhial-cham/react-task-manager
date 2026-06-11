import { useState} from "react";

export default function TaskForm () {
    const [title, setTitle] = useState("");

    const handleSubmit = event => {
        event.preventDefault();

        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={
                    event => setTitle(event.target.value)}
                placeholder="Enter task title"
            />
            
            <button type="submit">
                Create Task
            </button>
        </form>
    );
}