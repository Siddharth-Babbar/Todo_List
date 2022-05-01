import classes from "./filterButton.module.css"

export const FilterButton = (props) => {
  return (
    <button
      type="button"
      onClick={() => {
        props.setFilter(props.name);
      }}
      className={classes.filterBtn}
    >
      {props.name}
    </button>
  );
};
