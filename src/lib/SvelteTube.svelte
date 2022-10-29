<script lang="ts">
  export let id: string = 'h9MSHl40z-g'
  export let title: string = 'Youtube Video'
  export let color: string = 'white'
  export let poster: string = ''
  export let radius: string = '0px'
  export let shadow: string = 'none'

  const bodyReset: string = '<style>body { margin: 0 }</style>'

  const src: string = poster
    ? poster
    : `https://img.youtube.com/vi/${id}/hqdefault.jpg`
</script>

<div class="sveltube">
  <div style="border-radius: {radius}; box-shadow: {shadow}">
    <iframe
      loading="lazy"
      {title}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      scrolling="no"
      srcdoc="
      {bodyReset}
        <a href='https://www.youtube.com/embed/{id}?autoplay=1'>
          <img
            style='
              display: block;
              position: absolute;
              width: 100%;
              top: 0;
              bottom: 0;
              margin: auto;'
            src='{src}'
            alt='{title}'>
          <svg
            style='
              position: absolute;
              width: 100%;
              top: 0;
              bottom: 0;
              margin: auto;
              filter: drop-shadow(1px 1px 5px hsl(206.5, 0%, 32%));
              transition: all 250ms ease-in-out;'
            xmlns='http://www.w3.org/2000/svg'
            width='32%'
            height='32%'
            viewBox='0 0 24 24'
            fill='none'
            stroke='{color}'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <circle cx='12' cy='12' r='10'></circle>
            <polygon points='10 8 16 12 10 16 10 8'></polygon>
          </svg>
        </a>
      "
    />
  </div>
</div>

<style>
  .sveltube {
    width: 100%;
  }
  .sveltube div {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
  }
  .sveltube iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    border: 0;
  }
</style>
