export const getMyRepos = () => (
  fetch(
    'https://api.github.com/user/repos', {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    }
  ).then((data) => data.json())
)

