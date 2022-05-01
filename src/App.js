import classes from "./app.module.css";
import { TodoMatic } from "./TodoMatic";

export default function App() {
  return (
    <div className={classes.app}>
      <TodoMatic />
    </div>
  );
}
