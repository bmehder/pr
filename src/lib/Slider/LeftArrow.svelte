<button on:click>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
</button>

<style>
  svg {
    width: 1rem;
  }
  button {
    position: absolute;
    top: 50%;
    left: 0;
    padding: 0.5rem;
    background-color: var(--dark);
    color: white;
    border: none;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.24);
    transform: translateY(-50%);
    transition: all 200ms ease-in-out;
  }
  button:hover {
    cursor: pointer;
  }
</style>
