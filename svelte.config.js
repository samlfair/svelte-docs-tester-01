import { usePrismic } from 'prismic-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
  },
  preprocess: [usePrismic({ repoName: 'your-repo-name' })],
}

export default config
