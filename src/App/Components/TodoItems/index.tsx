import type { FC } from 'react';
import { Fragment } from 'react';

import { useApp } from '../../context';

import TodoItem from '../TodoItem';
import EditTodoItem from '../EditTodoItem';

const TodoItems: FC = () => {
  const {
    todos,
    editInputRef,
    handleEdit,
    handleRemoveItem,
    handlePin,
    handleUnPin,
    handleEditSubmit,
    handleEditCancel,
  } = useApp();

  return (todos || []).map((item) => {
    const {
      id,
      value,
      pin: { pinned },
      isEditing,
    } = item;

    return (
      <Fragment key={id}>
        {!isEditing && (
          <TodoItem
            id={id}
            item={item}
            value={value}
            pinned={pinned}
            onEdit={handleEdit}
            onRemove={handleRemoveItem}
            onPin={handlePin}
            onUnPin={handleUnPin}
          />
        )}
        {isEditing && (
          <EditTodoItem
            id={id}
            ref={editInputRef}
            pinned={pinned}
            value={value}
            onEditSubmit={handleEditSubmit}
            onEditCancel={handleEditCancel}
          />
        )}
      </Fragment>
    );
  });
};

export default TodoItems;
