export interface Todos {
  id: number;
  value: string;
  isEditing: boolean;
  pin: {
    pinned: boolean;
    oldIndex: number;
  };
}

export interface ContextType {
  todos: Todos[] | null;
  inputRef: React.RefObject<HTMLInputElement> | null;
  editInputRef: React.RefObject<HTMLInputElement> | null;
  handleSendTodo: () => void;
  handleClear: () => void;
  handleRemoveItem: (id: number) => void;
  handleEdit: (id: number) => void;
  handleEditCancel: (id: number) => void;
  handleEditSubmit: (id: number) => void;
  handlePin: (item: Todos) => void;
  handleUnPin: (item: Todos) => void;
  handleSort: () => void;
}

export interface ProviderProps {
  children: React.ReactNode;
}
