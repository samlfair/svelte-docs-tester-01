<script>
  import Client from '$lib/client.js';

  const client = Client(null, fetch)

  $: fetchData = null
  $: clientData = null

  const getData = async () => {
    const res = await fetch(`https://your-repo-name.cdn.prismic.io/api/v2`)
    fetchData = await res.json()

    clientData = await client.getAll()
  }

  getData()
</script>

<h2>Client Data</h2>
<pre>{JSON.stringify(clientData, null, 2)}</pre>
<h2>Fetch Data</h2>
<pre>{JSON.stringify(fetchData, null, 2)}</pre>