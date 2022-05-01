import { useState } from "react";
import classes from "./form.module.css";

export const Form = (props) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addTask(task);

    setTask("");
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div id={classes.formBox}>
      <form action="#" onSubmit={handleSubmit}>
        <h2 className={classes.heading2}>
          <label htmlFor="new-todo-input"></label>
          Add Tasks
        </h2>
        <input
          type="text"
          id="new-todo-input"
          onChange={handleChange}
          value={task}
        />
        <button type="submit" className={classes.submit}>
          Add
        </button>
      </form>
    </div>
  );
};
