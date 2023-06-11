import { FC, Fragment } from "react";

import useApp from "../Hooks/useApp";

import { GoTrashcan } from "react-icons/go";

import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { BsSortNumericDown } from "react-icons/bs";

import Search from "./Components/Search";
import Title from "./Components/Title";
import Button from "./Components/Button";
import TodoItem from "./Components/TodoItem";
import EditTodoItem from "./Components/EditTodoItem";

import "./styles.scss";

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
                <EditTodoItem
                  id={id}
                  editInputRef={editInputRef}
                  pinned={item.pin.pinned}
                  value={item.value}
                  onEditSubmit={handleEditSubmit}
                  onEditCancel={handleEditCancel}
                />
              )}
            </Fragment>
          );
        })}
      </div>
    </main>
  );
};

export default App;
