  
<script context="module">
  // import { Client } from '$lib/prismic.js';
  
  export async function load({ fetch })  {
    const client = Client(fetch)
    const allDocs = await client.getAll()
    return { props: { allDocs }}
  }
</script>

<script>

  export let allDocs;
</script>

<h1>Welcome to SvelteKit</h1>
<SliceZone />
<a href="/clientside">Check out the client-side fetching</a>
<pre>{JSON.stringify(allDocs,null,2)}</pre>
