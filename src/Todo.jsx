import { useState } from "react";
import classes from "./todo.module.css";

export const Todo = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setIsEditing(false);
  };

  // const edit = () => {};
  const editTemplate = (
    <form action="#" onSubmit={handleSubmit}>
      <div>
        <h2 className={classes.heading2}>
          <label htmlFor={props.id}>New name for {props.name}</label>
        </h2>
        <input
          id={props.id}
          type="text"
          onChange={handleChange}
          value={newName}
        />
      </div>
      <div className={classes.btnBox}>
        <button
          type="button"
          onClick={() => {
            setIsEditing(false);
          }}
          className={`${classes.Btn} ${classes.white}`}
        >
          Cancel
        </button>
        <button type="submit" className={`${classes.Btn} ${classes.red}`}>Save</button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div id={classes.todoContainer}>
      <div id={classes.todoContent}>
        <input
          type="checkBox"
          defaultChecked={props.completed}
          onChange={() => {
            props.toggleTaskComplete(props.id);
          }}
        />
        <label htmlFor="status">{props.name}</label>
      </div>
      <div className={classes.btnBox}>
        <button
          id="edit"
          onClick={() => {
            setIsEditing(true);
          }}

          className={`${classes.Btn} ${classes.white}`}
        >
          Edit Task
        </button>
        <button
          id="remove"
          onClick={() => {
            props.deleteTask(props.id);
          }}
          className={`${classes.Btn} ${classes.red}`}
        >
          Remove Task
        </button>
      </div>
    </div>
  );
  return (
    <li className={classes.listItem}>
      {isEditing ? editTemplate : viewTemplate}
    </li>
  );
};
