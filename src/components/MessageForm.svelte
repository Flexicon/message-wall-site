<script>
  import { createEventDispatcher } from "svelte";

  let message = "";
  let author = "";
  const dispatch = createEventDispatcher();

  function submit() {
    dispatch("submit", { message, author });
    message = "";
    author = "";
  }
</script>

<style>
  form {
    text-align: right;
    margin-bottom: 1rem;
  }

  textarea,
  input {
    display: block;
    width: 100%;
    border-radius: 6px;
  }

  textarea {
    resize: none;
  }

  button {
    opacity: 1;
    cursor: pointer;
    background-color: #fff;
    border-radius: 6px;
    padding: 3px 8px;
    transition: opacity 0.5s ease-out;
    box-shadow: 0 3px 5px 0 #aaa;
  }

  button:disabled {
    cursor: initial;
    opacity: 0;
  }
</style>

<form on:submit|preventDefault={submit}>
  <textarea bind:value={message} rows="2" placeholder="Leave your mark..." />
  <input bind:value={author} type="text" placeholder="Author" />

  <button type="submit" disabled={!author || !message}>✏️ Send</button>
</form>
