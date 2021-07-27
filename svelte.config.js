import MagicString from 'magic-string'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
  },
  preprocess: [
    {
      script: ({ content, filename }) => {
        const pos = content.indexOf('Client')
        if (pos < 0) {
          return { code: content }
        }
        const s = new MagicString(content, { filename })
        s.prepend("import { Client, SliceZone } from '$lib/prismic.js'; ")
        // s.overwrite(pos, pos + 3, 'bar', { storeName: true })
        // return { code: "import { Client } from '$lib/prismic.js'; " + content }
        return {
          code: s.toString(),
          map: s.generateMap(),
        }
      },
    },
  ],
}

export default config
