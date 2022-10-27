<script>
  let count = 0;
  fetch("api/counter")
    .then((resp) => resp.text())
    .then((counterValue) => {
      count = parseInt(counterValue);
    });
    
  const increment = () => {
    count += 1;
  };
</script>

<button on:click={increment}>
  count is {count}
</button>
