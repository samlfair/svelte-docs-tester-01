import { createClient, getEndpoint } from '@prismicio/client'

const repoName = `your-repo-name` // Fill in your repository name
const endpoint = getEndpoint(repoName)

const Client = (session, fetch) => {
  // const { cookie } = session
  const req = {
    headers: {
      // cookie,
    },
  }
  // const client = createClient(endpoint, { fetch, req })
  const client = createClient(endpoint)
  return client
}

export default Client
