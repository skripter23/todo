export interface Todos {
  id: number;
  value: string;
  isEditing: boolean;
  pin: {
    pinned: boolean;
    oldIndex: number;
  };
}
