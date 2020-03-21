<script>
  import { createEventDispatcher } from "svelte";
  import { fly, fade } from "svelte/transition";
  import { flip } from "svelte/animate";

  const dispatch = createEventDispatcher();

  export let messages = [];

  function removeMessage(message) {
    dispatch("remove-message", message._id);
  }
</script>

<style>
  article {
    position: relative;
    padding: 1rem;
    background: #fff;
    margin-bottom: 1rem;
    box-shadow: 0 3px 5px 0 #aaa;
    border-radius: 6px;
  }

  article h3 {
    font-weight: normal;
    font-size: 2rem;
    margin: 0 0 1rem;
  }

  article small {
    font-size: 1.2rem;
    display: block;
    text-align: right;
  }

  article button {
    opacity: 0;
    position: absolute;
    top: 0;
    right: 3px;
    background: none;
    border: none;
    padding: 3px 0px 3px 8px;
    cursor: pointer;
    transition: transform 0.2s ease, opacity 0.4s ease;
  }

  article button:hover {
    transform: scale(1.25);
  }

  article:hover button {
    opacity: 1;
  }

  .empty {
    color: #aaa;
    text-align: center;
    font-size: 1.5rem;
  }
</style>

<div class="message-list">
  {#each messages as message, i (message._id)}
    <article
      class="graffiti-font"
      in:fly={{ x: -1000, duration: 500, delay: 200 * i }}
      out:fly={{ x: 1000, duration: 500 }}
      animate:flip={{ duration: 200 }}>
      <h3>{message.text}</h3>
      <small>-{message.author}</small>
      <button on:click={() => removeMessage(message)}>❌</button>
    </article>
  {:else}
    <p class="empty graffiti-font">Nothing here yet</p>
  {/each}
</div>
