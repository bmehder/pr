<script lang="ts">
  import { enhance } from '$app/forms'
  import { isSubmittingForm } from './store'
  import Loading from './Loading.svelte'
</script>

{#if $isSubmittingForm}
  <div>
    <p>The form is submitting.</p>
    <p><Loading /></p>
  </div>
{/if}

<form method="POST" use:enhance>
  <h2>Send a message</h2>
  <label for="name">Name</label>
  <input type="text" name="name" />
  <label for="email">Email</label>
  <input type="email" name="email" />
  <label for="message">Message</label>
  <textarea name="message" />
  <input
    on:click={() => ($isSubmittingForm = true)}
    type="submit"
    value="Submit Message"
  />
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
  h2 {
    margin-bottom: 1rem;
  }
  label {
    font-weight: bold;
  }
  input,
  textarea,
  input[type='submit'] {
    padding: 1rem;
    font-size: 1rem;
  }
  textarea {
    font-family: unset;
    min-height: 120px;
  }
  input[type='submit'] {
    margin-top: 0.5rem;
    font-size: 1.25rem;
    border: none;
    cursor: pointer;
  }
  input[type='submit']:hover {
    background-color: var(--dark);
  }
</style>
