export const getMyRepos = () => (
  fetch(
    'https://api.github.com/user/repos', {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    }
  ).then((data) => data.json())
)

export const getUserRepos = (username) => (
  fetch(
    `https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    }
  ).then(
    (data) => data.json()
  ).then((response) => {
    if (response.message === 'Not Found') {
      return null;
    }

    return response;
  })
)

