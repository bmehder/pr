<button on:click>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="w-6 h-6"
  >
    <path
      fill-rule="evenodd"
      d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
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
