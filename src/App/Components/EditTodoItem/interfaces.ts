export interface EditTodoItemProps {
  id: number;
  pinned: boolean;
  value: string;
  onEditSubmit: (id: number) => void;
  onEditCancel: (id: number) => void;
}
