import { Todos } from "../../../Types/interfaces";

export interface TodoItemProps {
  id: number;
  pinned: boolean;
  value: string;
  item: Todos;
  onUnPin: (item: Todos) => void;
  onPin: (item: Todos) => void;
  onEdit: (id: number) => void;
  onRemove: (id: number) => void;
}
