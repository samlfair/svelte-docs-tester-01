<script>
  import Client from '$lib/client.js';

  const client = Client(null, fetch)
  
  $: clientData = null

  const getData = async () => {
    clientData = await client.getAll()
  }

  getData()
</script>

<h1>Client-side fetching</h1>
<a href="/">Back to home</a>
<h2>Prismic/client data</h2>
<pre>{JSON.stringify(clientData, null, 2)}</pre>
<h2>Native fetch data</h2>
<pre>{JSON.stringify(fetchData, null, 2)}</pre>