<script lang="ts">
  type Member = {
    _embedded: {
      'wp:featuredmedia': {
        media_details: {
          sizes: {
            full: {
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
    member._embedded['wp:featuredmedia'][0].media_details.sizes.full?.source_url
  const title = member.title.rendered
</script>

<article>
  <div>
    <img {src} alt={title} />
  </div>
  <h2>{title}</h2>
</article>

<style>
  div {
    background-image: linear-gradient(115deg, var(--dark), var(--light));
    border-radius: 50%;
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.24),
      inset -5px -5px 10px rgba(255, 255, 255, 0.24), 0 10px 20px rgba(0, 0, 0, 0.42);
    overflow: hidden;
  }
  img {
    width: 100%;
    padding: 1rem;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 15px 15px 10px rgba(0, 0, 0, 1);
  }
  h2 {
    margin-block: 1.5rem;
    text-align: center;
    font-size: 1.1rem;
  }
</style>
