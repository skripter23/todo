import { FC } from "react";

import { BsPin } from "react-icons/bs";
import { CiUndo } from "react-icons/ci";
import { GoTrashcan } from "react-icons/go";
import { MdOutlineModeEditOutline } from "react-icons/md";

import { TodoItemProps } from "./interfaces";

const TodoItem: FC<TodoItemProps> = ({ id, pinned, value, item, onUnPin, onPin, onEdit, onRemove }) => {
  return (
    <span className={`${pinned ? "todos--content-item-pinned" : ""}`}>
      {value}
      {pinned ? (
        <CiUndo className="todos--content-item-pin" onClick={() => onUnPin(item)} />
      ) : (
        <BsPin className="todos--content-item-pin" onClick={() => onPin(item)} />
      )}
      <MdOutlineModeEditOutline className="todos--content-item-edit__click" onClick={() => onEdit(id)} />
      <GoTrashcan className="todos--content-item-delete" onClick={() => onRemove(id)} />
    </span>
  );
};

export default TodoItem;
