import { useCallback, useEffect, useRef, useState } from "react";

import { arrayMoveImmutable } from "array-move";

interface Todos {
  id: number;
  value: string;
  isEditing: boolean;
  pin: {
    pinned: boolean;
    oldIndex: number;
  };
}

const useApp = () => {
  const [todos, setTodos] = useState<Array<Todos> | null>(null);
  const [counter, setCounter] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const editInputRef = useRef<HTMLInputElement>(null);

  const clearInputRef = () => {
    if (inputRef.current?.value) {
      inputRef.current.value = "";
    }
  };

  const handleAdd = useCallback(() => {
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
    setTimeout(() => clearInputRef(), 0);
  }, [todos]);

  const handleClear = useCallback(() => {
    setTodos(null);
    setCounter(0);
    clearInputRef();
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

  const handlePin = useCallback((item: Todos) => {
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
  }, []);

  const handleUnPin = useCallback((item: Todos) => {
    setTodos((prev) => {
      if (prev !== null) {
        return arrayMoveImmutable(prev, prev.indexOf(item), item.pin.oldIndex);
      }
      return prev;
    });
    setTimeout(
      () =>
        setTodos((prev) => {
          if (prev !== null) {
            return prev.map((element) => {
              if (element.id === item.id) {
                element.pin.pinned = false;
                element.pin.oldIndex = NaN;
              }
              return element;
            });
          }
          return prev;
        }),
      0
    );
  }, []);

  return {
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
  };
};

export default useApp;
