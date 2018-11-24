import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './text-input.module.scss';

function TextInput(props) {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);

    props.onChange(e.target.value, name)
  }

  const {
    placeholder,
    name,
    ref,
  } = props;

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className={styles.input}
    />
  );
}

TextInput.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
