import { FC, Fragment } from "react";

import { GoTrashcan } from "react-icons/go";
import { BsSortNumericDown } from "react-icons/bs";

import { useApp } from "./context";

import Button from "./Components/Button";
import TodoItem from "./Components/TodoItem";
import EditTodoItem from "./Components/EditTodoItem";
import Header from "./Components/Header";

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
      <Header inputRef={inputRef as React.RefObject<HTMLInputElement>} onSend={handleSendTodo} />
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
                  editInputRef={editInputRef as React.RefObject<HTMLInputElement>}
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
