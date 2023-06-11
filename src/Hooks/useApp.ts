import { useCallback, useEffect, useRef, useState } from "react";

import { clearInputRef } from "./helpers";

import { Todos } from "../Types/interfaces";

import { arrayMoveImmutable } from "array-move";

const useApp = () => {
  const [todos, setTodos] = useState<Array<Todos> | null>(null);
  const [counter, setCounter] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const editInputRef = useRef<HTMLInputElement>(null);

  const handleSendTodo = useCallback(() => {
    setTodos((prev) => {
      if (inputRef.current?.value) {
        if (prev !== null) {
          if (!prev.some((e) => e.value === inputRef.current?.value)) {
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
      return prev;
    });
    setTimeout(() => clearInputRef(inputRef), 0);
  }, [todos]);

  const handleClear = useCallback(() => {
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
          return prev.filter((e) => e.id !== id);
        }
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
          return arrayMoveImmutable(prev, prev.indexOf(item), 0);
        }
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
        setTodos(movedArray);
      }
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
        return sortedArray;
      }
      return prev;
    });
  }, []);

  return {
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
  };
};

export default useApp;
