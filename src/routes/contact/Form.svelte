<script>
  const handleClick = () => alert('Just txt me!')
</script>

<div>
  <h2>Send a message</h2>
  <input type="text" placeholder="Enter name..." />
  <input type="email" placeholder="Enter email..." />
  <textarea placeholder="Enter message..." />
  <button on:click={handleClick}>Submit Message</button>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
  h2 {
    margin-bottom: 1rem;
  }
  input,
  textarea,
  button {
    padding: 1rem;
    font-size: 1rem;
  }
  textarea {
    font-family: unset;
    min-height: 120px;
  }
  button {
    color: white;
    background-color: var(--light);
    font-size: 1.25rem;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: var(--dark);
  }
</style>
