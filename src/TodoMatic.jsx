import { useState, useEffect } from "react";
import { Form } from "./Form";
import { Todo } from "./Todo";
import { FilterButton } from "./FilterButton";
import classes from "./todoMatic.module.css";

const Filters = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
const FilterNames = Object.keys(Filters);
export const TodoMatic = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  // const ul = document.getElementsByTagName("ul");

  // let tasks = [];

  // useEffect(() => {
  //   viewTodo();
  // }, []);

  // const viewTodo = () => {
  //   if (localStorage.getItem("tasks"))
  //     setTodoList(JSON.parse(localStorage.getItem("tasks")));
  // };

  // const stampTodo = () => {};

  // const add = (e) => {
  //   if (e != null) {
  //     e.preventDefault();

  //     if (todo == "") {
  //       alert("Enter Task");
  //       return;
  //     }
  //   }

  //   if (localStorage.getItem("tasks")) {
  //     tasks = JSON.parse(localStorage.getItem("tasks"));
  //   }

  //   tasks.push(todo);
  //   // console.log(JSON.stringify(tasks));
  //   localStorage.setItem("tasks", JSON.stringify(tasks));

  //   setTodo("");
  //   setTodoList(tasks);
  // };

  // const remove = (tods) => {
  //   todoList.splice(todoList.indexOf(tods), 1);

  //   localStorage.setItem("tasks", JSON.stringify(todoList));
  // };

  // const edit = (tods) => {
  //   remove(tods);
  //   setTodo(tods);
  //   add();
  // };

  // const show = () => {};

  // ---------------------------------------------

  const addTask = (name) => {
    const newTask = {
      name: name,
      id: "todo" + Math.random() * 1000,
      completed: false,
    };

    const lsGet = localStorage.getItem("tasks");
    const tList = lsGet ? JSON.parse(lsGet) : [];

    tList.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(tList));

    setTasks(tList);
  };

  const toggleTaskComplete = (id) => {
    const updatedTasks = JSON.parse(localStorage.getItem("tasks")).map(
      (task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const remainingTasks = JSON.parse(localStorage.getItem("tasks")).filter(
      (task) => id !== task.id
    );
    localStorage.setItem("tasks", JSON.stringify(remainingTasks));

    setTasks(remainingTasks);
  };

  const editTask = (id, newName) => {
    const editedTasks = JSON.parse(localStorage.getItem("tasks")).map(
      (task) => {
        if (id === task.id) return { ...task, name: newName };
        return task;
      }
    );
    localStorage.setItem("tasks", JSON.stringify(editedTasks));
    setTasks(editedTasks);
  };

  const FilterList = FilterNames.map((name) => (
    <FilterButton name={name} key={name} setFilter={setFilter} />
  ));

  const taskList = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
        .filter(Filters[filter])
        .map((task) => (
          <Todo
            name={task.name}
            key={task.id}
            id={task.id}
            completed={task.completed}
            toggleTaskComplete={toggleTaskComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
    : [];

  const headingNoun = taskList.length > 1 ? "tasks" : "task";
  const heading = `${taskList.length} ${headingNoun}`;

  return (
    <div id={classes.mainContainer}>
      <h1 id={classes.mainHeading}>Todo List</h1>
      <Form addTask={addTask} />
      <div id={classes.secondaryContainer}>
        <div className={classes.btnBox}>{FilterList}</div>
        <h2 className={classes.secondaryHeading}>{heading}</h2>
        <ul id={classes.list}>{taskList}</ul>
      </div>
    </div>
  );
};
