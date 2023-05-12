<script>
  import { page } from "$app/stores";
  import PageHeader from "../components/+page-header.svelte";
  // router render
  import { hoofdstuk1, hoofdstuk2, hoofdstuk3, hoofdstuk4 } from './chapterData.js';

  // cmd-midterm-components
  import Footer from "cmd-midterm-components/components/Footer.svelte"



  let navOpen = false;


  function handleNav() {
    navOpen = !navOpen;
  }



  let navHoofdstuk = hoofdstuk1;

  function navButtonEen() {
    navHoofdstuk = hoofdstuk1;
  }

  function navButtonTwee() {
    navHoofdstuk = hoofdstuk2;
  }

  function navButtonDrie() {
    navHoofdstuk = hoofdstuk3;
  }

  function navButtonVier() {
    navHoofdstuk = hoofdstuk4;
  }
</script>
  <nav class="sidenav" class:open={navOpen}>
    <button class="closebtn" on:click={handleNav}>&times;</button>

    <section class="nav__icon--wrapper">
      <button class="nav__icon">
        <a href="/"  rel="prefetch">
          <img class="nav__img home" src="images/Icon-home.png" alt="" />
        </a></button
      >
      <div class="nav__diveder" />
      <button
        class="nav__icon"
        on:click={navButtonEen}
        class:button__active={navHoofdstuk == hoofdstuk1}
      >
        <img class="nav__img" src="images/nav_element1.png" alt="" />
      </button>
      <button
        class="nav__icon"
        on:click={navButtonTwee}
        class:button__active={navHoofdstuk == hoofdstuk2}
      >
        <img class="nav__img" src="images/nav_element2.png" alt="" />
      </button>
      <button
        class="nav__icon"
        on:click={navButtonDrie}
        class:button__active={navHoofdstuk == hoofdstuk3}
      >
        <img class="nav__img" src="images/nav_element3.png" alt="" />
      </button>
      <button
        class="nav__icon"
        on:click={navButtonVier}
        class:button__active={navHoofdstuk == hoofdstuk4}
      >
        <img class="nav__img" src="images/nav_element4.png" alt="" />
      </button>
    </section>

    <section class="nav__link--wrapper">
      <header class="nav__header">
        <h2>1.0 Beoogde leerresultaten</h2>
      </header>
      <ul class="nav__list">
        {#each navHoofdstuk as paragraaf}
          <li
            class="nav__item"
            class:nav__item--active={$page.url.pathname === paragraaf.route}
          >
            <a rel="prefetch"
              class="nav__link"
              href={paragraaf.route}
              class:nav__link--active={$page.url.pathname === paragraaf.route}
            >
              {paragraaf.name}
            </a>

          </li>
          <li class="header__nav-link">
            <a rel="external" class="header__nav-link-text" class:link-active={$page.url.pathname === "/"} href="/"><strong>Read the stories</strong></a>
          </li>
        {/each}
      </ul>
    </section>
  </nav>

  <main class="" class:pushMainToRight={navOpen}>
    <header class="header">
      <button
        class="hamButton"
        on:click={handleNav}
      >
        <i class="bx bx-menu-alt-left" />
      </button>
    </header>
    <PageHeader />
    <slot/>
  </main>

  <Footer class="footer"></Footer>
<style>

  .footer{
    align-self: flex-end;
  }
  /* Hamburger Menu icon */
  .hamButton {
    position: absolute;
    left: 20px;
    top: 5px;
    display: inline-block;
    cursor: pointer;
    z-index: 2;
    font-size: 50px;
    transition: 0.3s;
  }
  /* DOM MAIPULATION */
  .pushMainToRight {
    position: absolute;
    transform: translate3d(400px, 0, 0);
  }
  .open {
    transform: translate3d(0px, 0, 0);
  }

  /* NAV MENU */
  nav {
    display: flex;

    height: 100vh;
    max-width: 400px;
    width: 100%;

    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;

    background-color: #2f3135;

    overflow-x: hidden; /* Disable horizontal scroll */

    transition: 0.3s;
    transform: translate3d(-400px, 0, 0);
  }
  nav a {
    transition: 0.3s;
  }
  .nav__icon--wrapper {
    background-color: var(--yellow);
    min-width: 72px;
    max-width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .nav__icon {
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    border-radius: 50%;
    margin-bottom: 1em;
    transition: 0.3s;
  }

  .button__active {
    border-radius: 30%;
  }

  .sidenav .closebtn {
    position: absolute;
    top: 5px;
    right: 25px;
    font-size: 50px;
    margin-left: 50px;
  }
  .nav__icon:first-child {
    margin-bottom: 1em;
    margin-top: 1em;
  }
  .nav__img,
  .home {
    max-width: 40px;
    box-shadow: -5px 5px 25px 3px rgba(240, 235, 240, 0.6);
  }
  .nav__icon {
    padding-top: 4px;
  }

  .nav__diveder {
    height: 2px;
    width: 32px;
    border-radius: 5px;
    background-color: #000;
    margin-bottom: 1em;
  }
  .nav__link--wrapper {
    background-color: var(--dark-grey);
    width: calc(400px - 72px);
  }

  .nav__header {
    background-color: var(--yellow);
    padding-left: 1em;
    height: 80px;
    display: flex;
    align-items: center;
  }

  .nav__list {
    padding: 1em;
  }

  .nav__item {
    margin-bottom: 1em;
    padding: 2px 4px;
  }
  .nav__link {
    color: var(--nav-text-grey);
    font-size: 22px;
  }
  .nav__item--active {
    background-color: var(--nav-accent-color);
    border-radius: 3px;
  }
  .nav__link--active {
    color: #fff;
  }

  /* MAIN */
  main {
    transition: all 0.3s;
  }
</style>
