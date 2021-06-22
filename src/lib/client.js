import { createClient, getEndpoint } from '@prismicio/client'

const repoName = `your-repo-name` // Fill in your repository name
const endpoint = getEndpoint(repoName)

export default Client = (session, fetch) => {
  const { cookie } = session
  const req = {
    headers: {
      cookie,
    },
  }
  const client = createClient(endpoint, { fetch, req })
  return client
}
