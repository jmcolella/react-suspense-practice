import React, { Suspense, useState } from 'react';

import styles from './app.module.scss';
import Repositories from '../../components/Repositories';
import Loading from '../../components/Loading';
import Button from '../../components/Button';
import UsernameForm from '../UsernameForm';

function App() {
  const [username, setUsername] = useState('');

  return (
    <div className={styles.container}>
      {
        username ?
        <div className={styles['repos-container']}>
          <Suspense
            fallback={<Loading />}
          >
            <div className={styles['repos-wrapper']}>
              <Repositories username={username} />
            </div>

            <div className={styles.button}>
              <Button onClick={() => setUsername('')}>
                go back
              </Button>
            </div>
          </Suspense>
        </div>
        :
        <div className={styles.form}>
          <UsernameForm
            setUsername={setUsername}
          />
        </div>
      }
    </div>
  );
}

export default App;
