import { forwardRef } from 'react';

import { AiOutlineCheck } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';

import { EditTodoItemProps } from './interfaces';

import './styles.scss';

const EditTodoItem = forwardRef<HTMLInputElement, EditTodoItemProps>(
  ({ id, pinned, value, onEditSubmit, onEditCancel }, ref) => {
    return (
      <div className={`${pinned ? 'item-pinned' : ''} item-edit-input`}>
        <input
          autoFocus
          ref={ref}
          type="text"
          placeholder="Edit me..."
          defaultValue={value}
        />
        <AiOutlineCheck
          className="item-edit-input-submit"
          onClick={onEditSubmit.bind(null, id)}
        />
        <RxCross2
          className="item-edit-input-cancel"
          onClick={onEditCancel.bind(null, id)}
        />
      </div>
    );
  }
);

export default EditTodoItem;
