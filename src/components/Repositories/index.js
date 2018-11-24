import React from 'react';
import { unstable_createResource } from 'react-cache';
import { getMyRepos, getUserRepos } from '../../util/githubRequests';

import styles from './repositories.module.scss';

const reposResource = unstable_createResource((username) => getUserRepos(username));

function Repositories(props) {
  const { username } = props;

  const repos = reposResource.read(username);

  if (!repos) {
    return <p>no repos found for that user, try again.</p>
  }

  return (
    <div className={styles.container}>
      {
        repos.map((repo, idx) => (
          <p key={idx} className={styles.repo}>{repo.name}</p>
        ))
      }
    </div>
  )
}

export default Repositories;
