import { FC, Fragment } from "react";

import useApp from "../Hooks/useApp";

import SendIcon from "../Icons/SendIcon";
import { GoTrashcan } from "react-icons/go";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { BsPin, BsSortNumericDown } from "react-icons/bs";
import { CiUndo } from "react-icons/ci";

import "./styles.scss";

const App: FC = () => {
  const {
    todos,
    inputRef,
    editInputRef,
    handleAdd,
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
      <h1 className="todos--title">Todos</h1>
      <div className="todos--input--wrapper">
        <input ref={inputRef} type="text" className="todos--input" />
        <SendIcon onClick={handleAdd} />
      </div>
      <div className="todos--content">
        {todos && (
          <>
            <div className="todos--actions__row">
              <div className="todos--actions__row--button" onClick={handleClear}>
                <span>Clear all</span>
                <GoTrashcan />
              </div>
              {todos.length > 1 && (
                <div className="todos--actions__row--button" onClick={handleSort}>
                  <span>Sort</span>
                  <BsSortNumericDown />
                </div>
              )}
            </div>
          </>
        )}
        {(todos || []).map((item) => {
          const { id, value } = item;

          return (
            <Fragment key={id}>
              {!item.isEditing && (
                <span className={`${item.pin.pinned ? "todos--content-item-pinned" : ""}`}>
                  {value}
                  {item.pin.pinned ? (
                    <CiUndo className="todos--content-item-pin" onClick={() => handleUnPin(item)} />
                  ) : (
                    <BsPin className="todos--content-item-pin" onClick={() => handlePin(item)} />
                  )}
                  <MdOutlineModeEditOutline className="todos--content-item-edit__click" onClick={() => handleEdit(id)} />
                  <GoTrashcan className="todos--content-item-delete" onClick={() => handleRemoveItem(id)} />
                </span>
              )}
              {item.isEditing && (
                <div className={`${item.pin.pinned ? "todos--content-item-pinned" : ""} todos--content-item-edit`}>
                  <input ref={editInputRef} type="text" placeholder="Edit me..." />
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
