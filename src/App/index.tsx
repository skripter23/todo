import { FC, Fragment } from "react";

import useApp from "../Hooks/useApp";

import { GoTrashcan } from "react-icons/go";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { BsPin, BsSortNumericDown } from "react-icons/bs";
import { CiUndo } from "react-icons/ci";

import Search from "./Components/Search";
import Title from "./Components/Title";
import Button from "./Components/Button";

import "./styles.scss";
import TodoItem from "./Components/TodoItem";

const App: FC = () => {
  const {
    todos,
    inputRef,
    editInputRef,
    handleSendTodo,
    handleClear,
    handleRemoveItem,
    handleEdit,
    handleEditCancel,
    handleEditSubmit,
    handlePin,
    handleUnPin,
    handleSort,
  } = useApp();

  return (
    <main className="todos">
      <Title title="Todos" />
      <Search inputRef={inputRef} handleSendTodo={handleSendTodo} />
      <div className="todos--content">
        {todos && (
          <div className="todos--content__actions--row">
            <Button title="Clear all" onClick={handleClear} icon={GoTrashcan} />
            {todos.length > 1 && <Button title="Sort" onClick={handleSort} icon={BsSortNumericDown} />}
          </div>
        )}
        {(todos || []).map((item) => {
          const { id, value } = item;

          return (
            <Fragment key={id}>
              {!item.isEditing && (
                <TodoItem
                  id={id}
                  item={item}
                  value={value}
                  pinned={item.pin.pinned}
                  onEdit={handleEdit}
                  onRemove={handleRemoveItem}
                  onPin={handlePin}
                  onUnPin={handleUnPin}
                />
              )}
              {item.isEditing && (
                <div className={`${item.pin.pinned ? "todos--content-item-pinned" : ""} todos--content-item-edit`}>
                  <input ref={editInputRef} type="text" placeholder="Edit me..." defaultValue={item.value} />
                  <AiOutlineCheck className="todos--content-item-edit-submit" onClick={() => handleEditSubmit(id)} />
                  <RxCross2 className="todos--content-item-edit-cancel" onClick={() => handleEditCancel(id)} />
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    </main>
  );
};

export default App;
