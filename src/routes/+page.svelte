<script>
  // import FooterList01 from "../components/building block/FooterList01.svelte";
  import FooterList02 from "../components/building block/FooterList02.svelte";
  import FooterListExample from "../components/building block/FooterListExample.svelte";
  import FooterList03 from "../components/building block/FooterList03.svelte";


  export let data;
</script>

<main>
  <div class="container">
    <h1>CMD Minor</h1>
  </div>

<!--  <FooterList01></FooterList01>-->

  <FooterList02></FooterList02>
  <FooterList03></FooterList03>


  <FooterListExample></FooterListExample>

</main>

<style>
  main {
    font-family: sans-serif;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 20px;
  }

  .container > * {
    width: 100%;
    max-width: 700px;
  }
</style>
