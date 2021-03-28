import styles from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({children, onClick}) {
  return (
    <button onClick={onClick} className={styles.btn} type="button" tabIndex="0">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
