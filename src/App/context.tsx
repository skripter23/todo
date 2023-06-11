import { createContext, FC, useCallback, useContext, useEffect, useRef, useState } from "react";

import { arrayMoveImmutable } from "array-move";

import { Todos, ContextType, ProviderProps } from "../Types/interfaces";

import { useNotification } from "../Services/NotificationContext/context";

const TodoContext = createContext<ContextType>({
  todos: null,
  inputRef: null,
  editInputRef: null,
  handleSendTodo: () => {
    throw new Error("Function not implemented.");
  },
  handleClear: () => {
    throw new Error("Function not implemented.");
  },
  handleRemoveItem: () => {
    throw new Error("Function not implemented.");
  },
  handleEdit: () => {
    throw new Error("Function not implemented.");
  },
  handleEditCancel: () => {
    throw new Error("Function not implemented.");
  },
  handleEditSubmit: () => {
    throw new Error("Function not implemented.");
  },
  handlePin: () => {
    throw new Error("Function not implemented.");
  },
  handleUnPin: () => {
    throw new Error("Function not implemented.");
  },
  handleSort: () => {
    throw new Error("Function not implemented.");
  },
});

export const useApp = () => {
  return useContext(TodoContext);
};

const TodoProvider: FC<ProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Array<Todos> | null>(null);
  const [counter, setCounter] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null) as React.RefObject<HTMLInputElement>;
  const editInputRef = useRef<HTMLInputElement>(null);

  const { notificationSuccess, notificationWarn } = useNotification();

  const clearInputRef = (inputRef: React.RefObject<HTMLInputElement>) => {
    if (inputRef.current?.value) {
      inputRef.current.value = "";
    }
  };

  const handleSendTodo = useCallback(() => {
    setTodos((prev) => {
      if (inputRef.current?.value) {
        if (prev !== null) {
          if (!prev.some((e) => e.value === inputRef.current?.value)) {
            notificationSuccess("Item successfully added");
            setCounter(counter + 1);
            return [
              ...prev,
              {
                id: counter,
                value: inputRef.current.value,
                isEditing: false,
                pin: {
                  pinned: false,
                  oldIndex: NaN,
                },
              },
            ];
          }
        } else {
          notificationSuccess("Item successfully added");
          setCounter(counter + 1);
          return [
            {
              id: counter,
              value: inputRef.current.value,
              isEditing: false,
              pin: {
                pinned: false,
                oldIndex: NaN,
              },
            },
          ];
        }
      }
      notificationWarn("Please enter the item text");
      return prev;
    });
    setTimeout(() => clearInputRef(inputRef), 0);
  }, [todos]);

  const handleClear = useCallback(() => {
    notificationSuccess("Todo cleared!");
    setTodos(null);
    setCounter(0);
  }, []);

  useEffect(() => {
    if (todos !== null && todos.length === 0) {
      handleClear();
    }
  }, [todos]);

  const handleRemoveItem = useCallback(
    (id: number) => {
      setTodos((prev) => {
        if (Array.isArray(prev)) {
          notificationSuccess("Item successfully removed!");
          return prev.filter((e) => e.id !== id);
        }
        notificationWarn("No items contains!");
        return prev;
      });
    },
    [todos]
  );

  const handleEdit = useCallback(
    (id: number) => {
      setTodos((prev) => {
        if (Array.isArray(prev)) {
          return prev.map((item) => {
            if (item.id === id) {
              item.isEditing = true;
              return item;
            }
            return item;
          });
        }
        return prev;
      });
    },
    [todos]
  );

  const handleEditCancel = useCallback((id: number) => {
    setTodos((prev) => {
      if (Array.isArray(prev)) {
        return prev.map((item) => {
          if (item.id === id) {
            item.isEditing = false;
            return item;
          }
          return item;
        });
      }
      return prev;
    });
  }, []);

  const handleEditSubmit = useCallback((id: number) => {
    setTodos((prev) => {
      if (Array.isArray(prev)) {
        notificationSuccess("Item successfully edited");
        return prev.map((item) => {
          if (item.id === id) {
            item.isEditing = false;
            if (editInputRef.current?.value) {
              item.value = editInputRef.current.value;
            }
            return item;
          }
          return item;
        });
      }
      notificationWarn("No items contains!");
      return prev;
    });
  }, []);

  const handlePin = useCallback(
    (item: Todos) => {
      setTodos((prev) => {
        if (prev !== null) {
          prev = prev.map((element) => {
            if (element.id === item.id && prev !== null) {
              element.pin.oldIndex = prev.indexOf(item);
              element.pin.pinned = true;
            }
            return element;
          });
          notificationSuccess("Item successfully pinned");
          return arrayMoveImmutable(prev, prev.indexOf(item), 0);
        }
        notificationWarn("No item contains!");
        return prev;
      });
    },
    [todos]
  );

  const handleUnPin = useCallback((item: Todos) => {
    const oldIndex = item.pin.oldIndex;
    let pinnedElements = 0;
    setTodos((prev) => {
      if (prev !== null) {
        const movedArray = arrayMoveImmutable(prev, prev.indexOf(item), oldIndex)
          .sort((a, b) => {
            if (isNaN(a.pin.oldIndex) && !isNaN(b.pin.oldIndex)) {
              return 1;
            } else if (!isNaN(a.pin.oldIndex) && isNaN(b.pin.oldIndex)) {
              return -1;
            }
            return 0;
          })
          .map((element) => {
            if (element.id === item.id) {
              element.pin.oldIndex = NaN;
              element.pin.pinned = false;
            }
            if (element.pin.pinned) {
              pinnedElements += 1;
            }
            return element;
          });
        if (pinnedElements === 0) {
          movedArray.sort((a, b) => a.id - b.id);
        }
        notificationSuccess("Item successfully unpinned!");
        return movedArray;
      }
      notificationWarn("No item contains!");
      return prev;
    });
  }, []);

  const handleSort = useCallback(() => {
    setTodos((prev) => {
      if (prev !== null) {
        const sortedArray = [
          ...prev.sort((a, b) => {
            if (a.pin.pinned || b.pin.pinned) {
              return 0;
            }
            return a.id - b.id;
          }),
        ];
        notificationSuccess("Item successfully sorted!");
        return sortedArray;
      }
      notificationWarn("No item contains!");
      return prev;
    });
  }, []);

  return (
    <TodoContext.Provider
      value={{
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
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
