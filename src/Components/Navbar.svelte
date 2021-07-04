<script>
    import page from 'page'


    //Set toggle
    export let technical

    if(window.location.pathname == '/technical') technical = true

    
    function changePage() {
        if(technical) {
            page('/technical')
        } else {
            page('/')
        }
    }

    function home() {
        page('/')
    }

    let y;
        
</script>

{#if y < 50}
<section id="navbar" on:message="{home}" class:technical={technical}>
    <div class="navbar" class:technical={technical}>
        <div class="container">
            <h1 class="logo" on:click="{home}">Wulf.</h1>
            <div class="toggle">
                <label class="switch">
                    <input id="toggleBtn" type="checkbox" bind:checked={technical} on:change="{changePage}"  >
                    <span class="slider round" class:technical={technical}></span>
                </label>
                <h4>Technical</h4>
            </div>
        </div>
    </div>
</section>
{/if}

<svelte:window bind:scrollY={y} />

<style>
    #navbar{
        position: fixed;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(240, 240, 240);
    }
    #navbar.technical{
        font-family: 'Courier New', Courier, monospace;
        background-color: rgb(16, 16, 16);
        color: #00FF00;
    }
    .navbar{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container{
        justify-content: space-between;
    }
    
    .toggle{
        display: flex;
        align-items: center;
    }
    h4 {
        margin-left: 10px;
    }
    .logo{
        cursor: pointer;
    }

    /* The switch - the box around the slider */
    .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
    }

    /* Hide default HTML checkbox */
    .switch input {
    opacity: 0;
    width: 0;
    height: 0;
    }

    /* The slider */
    .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    }

    .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    }


    input:checked + .slider {
    background-color: #00FF00;
    }

    input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
    }

    /* Rounded sliders */
    .slider.round {
    border-radius: 34px;
    }

    .slider.round:before {
    border-radius: 50%;
    }

    .technical .slider.round:before {
        background-color: rgb(16, 16, 16);
    }

</style>