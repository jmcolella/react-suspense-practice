import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Form(props) {
  const [formValues, setFormValues] = useState({});

  const updateFormValues = (value, name) => {
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleSubmit = (onSubmit) => {
    onSubmit(formValues);
  }

  const {
    onSubmit,
    children
  } = props

  return (
    <form onSubmit={() => handleSubmit(onSubmit)}>
      {
        children(
          {
            onInputChange: updateFormValues,
            formValues,
          }
        )
      }
    </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func,
}

export default Form;
