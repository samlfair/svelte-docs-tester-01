  
<script context="module">
  import Client from '$lib/client.js';
  
  export async function load({ fetch, session })  {
    const client = Client(session, fetch)
    const allDocs = await client.getAll()
    return { props: { allDocs }}
  }
</script>

<script>

  export let allDocs;
</script>

<h1>Welcome to SvelteKit</h1>
<pre>{JSON.stringify(allDocs,null,2)}</pre>
