import "./styles.css";
import { ClassesType } from "./commonTypes";

export type TaskType = {
  title: string;
  done: boolean;
  onTitleChanged?: Function;
  onCheckboxChanged?: Function;
};

const Task = ({
  title,
  done,
  onTitleChanged,
  onCheckboxChanged,
  className
}: TaskType & ClassesType) => {
  return (
    <div className={`task ${className?.join(" ")}`}>
      <input
        type="text"
        value={title}
        onChange={(e) => onTitleChanged && onTitleChanged(e.target.value)}
      />
      <input
        type="checkbox"
        checked={done}
        onChange={(e) => {
          console.log(e.target.value);
          onCheckboxChanged && onCheckboxChanged(e.target.value);
        }}
      />
    </div>
  );
};

export default Task;
