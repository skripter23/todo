import { FC } from "react";

import { BsPin } from "react-icons/bs";
import { CiUndo } from "react-icons/ci";
import { GoTrashcan } from "react-icons/go";
import { MdOutlineModeEditOutline } from "react-icons/md";

import { TodoItemProps } from "./interfaces";

import "./styles.scss";

const TodoItem: FC<TodoItemProps> = ({ id, pinned, value, item, onUnPin, onPin, onEdit, onRemove }) => {
  return (
    <span className={`${pinned ? "item-pinned" : ""}`}>
      {value}
      {pinned ? <CiUndo className="item-pin" onClick={() => onUnPin(item)} /> : <BsPin className="item-pin" onClick={() => onPin(item)} />}
      <MdOutlineModeEditOutline className="item-edit" onClick={() => onEdit(id)} />
      <GoTrashcan className="item-delete" onClick={() => onRemove(id)} />
    </span>
  );
};

export default TodoItem;
