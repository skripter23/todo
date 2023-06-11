import { FC } from "react";

import { useApp } from "../../context";

import Button from "./Button";

import { GoTrashcan } from "react-icons/go";
import { BsSortNumericDown } from "react-icons/bs";

import "./styles.scss";

const Actions: FC = () => {
  const { todos, handleClear, handleSort } = useApp();

  return todos ? (
    <div className="actions--row">
      <Button title="Clear all" onClick={handleClear} icon={GoTrashcan} />
      {todos.length > 1 && <Button title="Sort" onClick={handleSort} icon={BsSortNumericDown} />}
    </div>
  ) : (
    <></>
  );
};

export default Actions;
