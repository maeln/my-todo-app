import React, { useReducer } from "react";

import Task, { TaskType } from "./task";
import { ClassesType } from "./commonTypes";

type ListOfTask = TaskType[];

type TaskActionType = "add" | "delete" | "updateTitle" | "updateState";
type TaskAction = {
  type: TaskActionType;
  index: number;
  title?: string;
  state?: boolean;
};

const taskReducer: React.Reducer<ListOfTask, TaskAction> = (
  tasks: ListOfTask,
  action: TaskAction
) => {
  switch (action.type) {
    case "add":
      return [
        ...tasks,
        { title: action.title || "", done: action.state || false }
      ];
    case "delete":
      return tasks.filter((t, i) => i !== action.index);
    case "updateState":
      return tasks.map((t, i) =>
        i === action.index ? { ...t, done: action.state || false } : t
      );
    case "updateTitle":
      return tasks.map((t, i) =>
        i === action.index ? { ...t, title: action.title || "" } : t
      );
  }
};

const initialTasks: ListOfTask = [];

const TaskList = ({ className }: ClassesType) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  console.log(tasks);

  const addTask = () => {
    dispatch({
      type: "add",
      index: 0
    });
  };

  const deleteTask = (idx: number) => {
    dispatch({
      type: "delete",
      index: idx
    });
  };

  const changeTitle = (idx: number, title: string) => {
    dispatch({
      type: "updateTitle",
      index: idx,
      title
    });
  };

  const changeState = (idx: number, state: boolean) => {
    dispatch({
      type: "updateState",
      index: idx,
      state
    });
  };

  const renderedTasks = [];
  for (let i: number = 0; i < tasks.length; ++i) {
    renderedTasks.push(
      <div className="task-line" key={i}>
        <Task
          {...tasks[i]}
          onCheckboxChanged={(v: boolean) => changeState(i, v)}
          onTitleChanged={(t: string) => changeTitle(i, t)}
        />
        <button onClick={() => deleteTask(i)}>delete</button>
      </div>
    );
  }

  return (
    <div className={className?.join(" ")}>
      <button onClick={() => addTask()}>Create empty task</button>
      {renderedTasks}
    </div>
  );
};

export default TaskList;
