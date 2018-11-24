# react-suspense-practice
Practice using React Suspense and Hooks

# Motivation
With all of the new fun React updates, such as Suspense and Hooks, I wanted to play around and create a very simple app that made use of these new tools. This app simply grabs some of the repos for the authorized Github token user and displays them. I used Hooks to toggle between the initial button and the repo display and used Suspense/`react-cache` to handle loading the repo names.

# Setup
1. `yarn install`
2. Generate a Github Personal Access Token [here](https://github.com/settings/tokens) and add to your environment as `GITHUB_TOKEN`
3. `yarn start`
4. Navigate to `http://localhost:8080`
