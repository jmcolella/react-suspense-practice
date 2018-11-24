import React, { useEffect } from 'react';

import Form from '../Form';
import TextInput from '../TextInput';
import Button from '../../components/Button';

import styles from './username-form.module.scss';

function UsernameForm(props) {
  useEffect(() => {
    document.querySelector('input[name="username"]').focus();
  })

  const {
    setUsername
  } = props;

  const onSubmit = (values) => {
    setUsername(values.username);
  }

  return (
    <Form onSubmit={onSubmit}>
      {
        ({ formValues, onInputChange }) => (
          <React.Fragment>
            <div className={styles.input}>
              <TextInput
                name="username"
                placeholder="enter a github username"
                onChange={onInputChange}
              />
            </div>

            <Button
              type="submit"
            >
              get github repos
            </Button>
          </React.Fragment>
        )
      }
    </Form>
  )
}

export default UsernameForm;
