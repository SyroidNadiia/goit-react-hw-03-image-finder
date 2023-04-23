import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ isLoading, onLoadMore }) => {
  return (
    <button className={css.Button} onClick={onLoadMore}>
      {isLoading ? 'Loading...' : 'Load More'}
    </button>
  );
};

export default Button;

Button.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};
