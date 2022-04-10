<script>
  import MessageForm from './components/MessageForm.svelte';
  import MessageList from './components/MessageList.svelte';
  import http from './helpers/http';

  let messages = [];

  async function fetchMessages() {
    messages = await http.get('/messages').then((res) => res.data);
  }

  async function submitForm({ detail: { message, author } }) {
    const payload = { text: message, author };
    const newMessage = await http.post('/messages', payload).then((res) => res.data);

    messages = [newMessage, ...messages];
  }

  async function removeMessage({ detail: id }) {
    await http.delete(`/messages/${id}`);

    messages = messages.filter((m) => m.id !== id);
  }
</script>

<main>
  <h1>Message Wall</h1>

  <MessageForm on:submit={submitForm} />

  {#await fetchMessages()}
    <div class="loader">
      <img src="/img/loader.svg" alt="Loading icon" />
    </div>
  {:then}
    <MessageList {messages} on:remove-message={removeMessage} />
  {:catch}
    <p style="color: red">Something went wrong</p>
  {/await}
</main>

<style>
  main {
    padding: 1em;
    width: 600px;
    max-width: 100%;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-align: center;
    text-transform: uppercase;
    font-size: 2.5em;
    font-weight: 100;
    margin: 0 0 1.5rem;
  }

  .loader {
    text-align: center;
    padding: 1.5rem;
  }
</style>
