<button on:click>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    class="w-5 h-5"
  >
    <path
      fill-rule="evenodd"
      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
      clip-rule="evenodd"
    />
  </svg>
</button>

<style>
  svg {
    width: 1.5rem;
  }
  button {
    position: absolute;
    top: 50%;
    right: 0;
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
