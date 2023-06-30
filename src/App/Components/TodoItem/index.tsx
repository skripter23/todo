import { FC } from 'react';

import { BsPin } from 'react-icons/bs';
import { CiUndo } from 'react-icons/ci';
import { GoTrashcan } from 'react-icons/go';
import { MdOutlineModeEditOutline } from 'react-icons/md';

import { TodoItemProps } from './interfaces';

import './styles.scss';

const TodoItem: FC<TodoItemProps> = ({
  id,
  pinned,
  value,
  item,
  onUnPin,
  onPin,
  onEdit,
  onRemove,
}) => {
  return (
    <span className={`${pinned ? 'item-pinned' : ''}`}>
      {value}
      {pinned ? (
        <CiUndo
          className="item-pin"
          onClick={onUnPin.bind(null, item)}
        />
      ) : (
        <BsPin
          className="item-pin"
          onClick={onPin.bind(null, item)}
        />
      )}
      <MdOutlineModeEditOutline
        className="item-edit"
        onClick={onEdit.bind(null, id)}
      />
      <GoTrashcan
        className="item-delete"
        onClick={onRemove.bind(null, id)}
      />
    </span>
  );
};

export default TodoItem;
