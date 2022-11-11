<script lang="ts">
  type Member = {
    _embedded: {
      'wp:featuredmedia': {
        media_details: {
          sizes: {
            medium_square: {
              source_url?: string
            }
          }
        }
      }[]
    }
    title: {
      rendered: string
    }
  }
  export let member: Member

  const src =
    member._embedded['wp:featuredmedia'][0].media_details.sizes.medium_square
      .source_url
  const title = member.title.rendered
</script>

<article>
  <img {src} alt={title} />
  <h2>{title}</h2>
</article>

<style>
  article {
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.24);
  }
  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }
  h2 {
    margin-block: 1.5rem;
    text-align: center;
    font-size: 1.25rem;
  }
</style>
