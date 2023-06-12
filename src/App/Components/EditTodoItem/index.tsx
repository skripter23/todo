import { FC, forwardRef } from "react";

import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

import { EditTodoItemProps } from "./interfaces";

import "./styles.scss";

const EditTodoItem: FC<EditTodoItemProps> = forwardRef(({ id, editInputRef, pinned, value, onEditSubmit, onEditCancel }) => {
  return (
    <div className={`${pinned ? "item-pinned" : ""} item-edit-input`}>
      <input autoFocus ref={editInputRef} type="text" placeholder="Edit me..." defaultValue={value} />
      <AiOutlineCheck className="item-edit-input-submit" onClick={() => onEditSubmit(id)} />
      <RxCross2 className="item-edit-input-cancel" onClick={() => onEditCancel(id)} />
    </div>
  );
});

export default EditTodoItem;
