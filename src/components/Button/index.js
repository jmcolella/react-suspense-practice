import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './button.module.scss';

function Button(props) {
  const {
    onClick,
    type,
    children
  } = props;

  return (
    <button
      className={
        classnames(
          styles.button,
          styles[type],
        )
      }
      onClick={onClick}
    >
      { children }
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'action',
};

export default Button;
