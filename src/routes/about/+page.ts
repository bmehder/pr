export const prerender = false

/** @type {import('./$types').PageLoad} */
export async function load() {
  return {
    tabs: [
      {
        heading: 'Tab 1',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat.',
      },
      {
        heading: 'Tab 2',
        content:
          'Blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto.',
      },
      {
        heading: 'Tab 3',
        content:
          'Eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente off.',
      },
    ],
  }
}
