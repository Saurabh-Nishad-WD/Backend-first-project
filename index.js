const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000
const githubData = {
    "login": "Saurabh-Nishad-WD",
    "id": 179369933,
    "node_id": "U_kgDOCrD3zQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/179369933?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Saurabh-Nishad-WD",
    "html_url": "https://github.com/Saurabh-Nishad-WD",
    "followers_url": "https://api.github.com/users/Saurabh-Nishad-WD/followers",
    "following_url": "https://api.github.com/users/Saurabh-Nishad-WD/following{/other_user}",
    "gists_url": "https://api.github.com/users/Saurabh-Nishad-WD/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Saurabh-Nishad-WD/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Saurabh-Nishad-WD/subscriptions",
    "organizations_url": "https://api.github.com/users/Saurabh-Nishad-WD/orgs",
    "repos_url": "https://api.github.com/users/Saurabh-Nishad-WD/repos",
    "events_url": "https://api.github.com/users/Saurabh-Nishad-WD/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Saurabh-Nishad-WD/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 1,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2024-08-25T07:11:49Z",
    "updated_at": "2024-08-25T07:12:01Z"
  }
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/googal', (req, res) => {
  res.send('Hello googal!')
})
app.get('/youtube', (req, res) => {
  res.send('Hello youtube!')
})
app.get('/github', (req, res) => {
  res.send(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})