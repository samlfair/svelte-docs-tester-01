import createPrismicSvelte from 'prismic-svelte'

const config = {
  // Fill in your repo name
  repoName: 'prismicio-docs-v3',

  // Define a route for each Custom Type
  routes: [
    {
      type: 'homepage',
      path: '/',
    },
    {
      type: 'page',
      path: '/:uid',
    },
    {
      type: 'post',
      path: '/blog/:uid',
    },
  ],

  // Add an access token (only if your repo is private)
  accessToken: null,

  // Add any API options
  options: null,

  // Add Slices
  slices: {},
}

const Prismic = createPrismicSvelte(config)

export const { repoName, endpoint, Client, asText, asHTML, asLink, asDate } =
  Prismic

export default Prismic
