import React, { Suspense, useState } from 'react';

import styles from './app.module.scss';
import Repositories from '../../components/Repositories';
import Loading from '../../components/Loading';
import Button from '../../components/Button';

function App() {
  const [showRepos, setShowRepos] = useState(false);

  return (
    <div className={styles.container}>
      {
        showRepos ?
        <div className={styles['repos-container']}>
          <Suspense
            fallback={
              <Loading />
            }
          >
            <Repositories />
          </Suspense>
        </div>
        :
        <div className={styles['button-container']}>
          <Button onClick={() => setShowRepos(!showRepos)}>
            get your github repos
          </Button>
        </div>
      }
    </div>
  );
}

export default App;
