<script lang="ts">
  type Career = {
    slug: string
    title: {
      rendered: string
    }
    excerpt: {
      rendered: string
    }
  }
  export let career: Career
</script>

<article>
  <h2><a href="/careers/{career.slug}">{career.title.rendered}</a></h2>
  <p>{@html career.excerpt.rendered}</p>
  <a class="button" href="/careers/{career.slug}">View Details</a>
</article>

<style>
  article {
    padding: 2rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.24);
  }
  h2 {
    margin: 0;
  }
</style>
