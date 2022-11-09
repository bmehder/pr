<script lang="ts">
  import { goto } from '$app/navigation'

  export let value = ''

  const handleSubmit = () => {
    goto(`/blog/search/${value}`)
  }
</script>

<h1>Search Blog Posts</h1>

<form on:submit|preventDefault={handleSubmit}>
  <input bind:value placeholder="Enter search query..." />
  <button>Search</button>
</form>

<style>
  input,
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
  }
  form {
    display: flex;
    margin-block: 1.5rem;
  }
  input {
    width: 100%;
  }
  button {
    background-color: var(--light);
    color: white;
  }
</style>
