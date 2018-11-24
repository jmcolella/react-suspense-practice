import React from 'react';
import { unstable_createResource } from 'react-cache';
import { getMyRepos } from '../../util/githubRequests';

import styles from './repositories.module.scss';

const reposResource = unstable_createResource(getMyRepos);


function Repositories() {
  return (
    <div className={styles.container}>
      {
        reposResource.read().map((repo, idx) => (
          <p key={idx} className={styles.repo}>{repo.name}</p>
        ))
      }
    </div>
  )
}

export default Repositories;
