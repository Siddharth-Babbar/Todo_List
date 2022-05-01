import classes from "./filterButton.module.css";

export const FilterButton = ({ name="Babbar", filter, setFilter }) => {
  return (
    <button
      type="button"
      onClick={() => {
        setFilter(name);
      }}
      className={classes.filterBtn}
      style={{
        backgroundColor: name === filter && "black",
        color: name === filter && "white",
      }}
    >
      {name}
    </button>
  );
};
