import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './button.module.scss';

function Button(props) {
  const {
    onClick,
    variant,
    children,
    type
  } = props;

  return (
    <button
      className={
        classnames(
          styles.button,
          styles[variant],
        )
      }
      onClick={onClick}
      type={type}
    >
      { children }
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  variant: 'action',
};

export default Button;
