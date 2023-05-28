import PropsTypes from 'prop-types';
import { FiPlus, FiX } from 'react-icons/fi';

import { Container } from './styles';

export function NoteItem({ isNew, value, onClick, ...rest}) {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}

NoteItem.propTypes = {
  isNew: PropsTypes.bool,
  value: PropsTypes.string,
  onClick: PropsTypes.func,
};