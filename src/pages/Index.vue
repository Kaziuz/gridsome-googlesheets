<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

    <h1>Hello, world!</h1>
    {{ processingData }}
    <div
      v-for="item in $page.allGoogleSheet.edges"
      :key="item.node.id"
    >
      {{ item }}
      <p>{{ item.node.ID }}</p>
      <!-- <p>{{$page.allGoogleSheet.node.ID}}</p> -->
    </div>

    <!-- <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p> -->

  </Layout>
</template>
<page-query>
query myData {
  allGoogleSheet {
    edges {
      node {
        ID
        nombre
        fecha
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  computed: {
    processingData () {
      return this.$page.allGoogleSheet.edges.reverse()
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
