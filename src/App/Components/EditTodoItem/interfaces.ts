export interface EditTodoItemProps {
  id: number;
  pinned: boolean;
  value: string;
  editInputRef: React.RefObject<HTMLInputElement>;
  onEditSubmit: (id: number) => void;
  onEditCancel: (id: number) => void;
}
