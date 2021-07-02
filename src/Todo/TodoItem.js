import React from 'react';
import PropTypes from 'prop-types';

const styles = {
	li: {
		display: 'flex',
		justifyContent: 'space-between',
		alingItems: 'center',
		padding: '.5rem 1rem',
		border: '1px solid #ccc',
		borderRadius: '4px',
		marginBottom: '10px',
		backgroundColor: 'yellow',
		fontSize: '20px'
	},
	input: {
		marginRight: '5px'
	}
}

function TodoItem({ todo, index }) {
  return (
    <li style={styles.li}>
      <span>
        <input type="checkbox" style={styles.input}></input>
        <strong>{index + 1}</strong>
				&nbsp;
        {todo.title}
      </span>

			<button className="rm">&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default TodoItem;
