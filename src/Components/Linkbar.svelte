<script>
    import MicroModal from 'micromodal';
    import tippy from 'tippy.js';
    import 'tippy.js/dist/tippy.css';
    import {onMount} from 'svelte'
    import page from 'page';

    onMount(() => {
        MicroModal.init();
        tippy('.resume', {
        content: 'View resume',
        }); 
        tippy('.project', {
          content: 'Check it out'
        })
    })

    function backAndScroll(){
      if (window.location.pathname == '/about') {
        console.log('active')
        page('/')
        setTimeout(() => {
          console.log('timeout')
          window.scroll(0, 0)
        }, 10)
      } else {
        console.log('not')
        page('/')
        setTimeout(() => {
          console.log('timeout')
          window.scroll(0, 0)
        }, 10)
      }
    }


    //Variables
    //const linkedIn = 'https://www.linkedin.com/in/ulric-ricardo-a1955918a'
    export let linkedIn
    export let link = false;
    export let about
    export let github = 'https://github.com/Riick97'


</script>


<div class="links">
    <div on:click="{backAndScroll}" class="link back"><i class="fas fa-arrow-left"></i></div>
    {#if linkedIn}
    <div on:click="{() => {window.open(linkedIn, '_blank').focus()}}" class="link linkedIn"><i class="fab fa-linkedin-in"></i></div>
    {/if}
    <div on:click="{() => {window.open(github, '_blank').focus()}}" class="link github"><i class="fab fa-github-alt"></i></div>
    
    {#if about}
    <div data-micromodal-trigger="modal-1"  class="link resume"><i class="far fa-file"></i></div>
    {/if}
    
    {#if link}
    <div on:click="{() => {window.open(link, '_blank').focus()}}" class="link project"><i class="fas fa-link"></i></div>
    {/if}
</div>

<div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
      <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
        <header class="modal__header">
          <h2 class="modal__title" id="modal-1-title">
            Resume 
          </h2>
          <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
        </header>
        <main class="modal__content" id="modal-1-content">
          <div class="image">

          </div>
        </main>
        <footer class="modal__footer">
        </footer>
      </div>
    </div>
</div>



<style>
    .links {
        position: fixed;
        left: 20px;
        top: 90px;
        min-width: 40px;
        padding: 3px;
        display: flex;
        flex-direction: column;
        background-color: rgb(228, 228, 228);
        border-radius: 20px;
    }
    .link{
      background-color: rgb(155, 155, 155);
      height: 35px;
      width: 35px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      margin: 0 7px;
      cursor: pointer;
    }
    .link {
        margin: auto;
        margin-bottom: 3px;
        font-size: 1.3rem;
        color: white;
    }
    .linkedIn{
        font-size: 1.2rem;
        color: white;
    }
    .linkedIn:hover{
        background-color: rgb(237, 237, 237);
        color: #0072b1;
    }
    .back {
        font-size: 1.2rem;
    }
    .github:hover, .link.back:hover{
        background-color: rgb(237, 237, 237);
        color: #333;
    }
    .resume:hover, .project:Hover{
      background-color: rgb(237, 237, 237);
      color: rgb(46,79,90);
    }
    .image{
      height: 80vh;
      min-width: 500px;
      background-color: rgb(154, 154, 154);
      background-image: url('/images/resume.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    
    @media only screen and (max-width: 550px) {
        .image {
          min-width: auto;
          width: 80vw;
          height: 100vh;
        }
    }
</style>