<script>
// import { Client } from '$lib/prismic.js';

  const client = Client(null, fetch)
  // const promise = client.getAll()
  $: data = null
  const getData = async () => {
    const res = await fetch(`https://your-repo-name.cdn.prismic.io/api/v2`)
    const json = await res.json()

    const docs = await client.getAll()

    data = json
  }

  getData()
</script>

<h2>Example Component</h2>
<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->