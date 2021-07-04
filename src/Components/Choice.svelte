<script>
    import { createEventDispatcher } from 'svelte';
    export let name

    const dispatch = createEventDispatcher();

    function clicked() {
        dispatch('choose', {
            text: name
        })
    }


    let show = false


</script>

<div on:click="{clicked}" on:mouseenter={() => {show = true}} on:mouseleave={() => {show = false}} class="choice">{#if show}<span class="arrow">> </span>{/if} <div> {name}</div> </div>

<style>
    .choice{
        display: flex;
        padding-right: 20px;
        padding-bottom: 15px;
        cursor: pointer;
        height: 50px;
    }
    .arrow{
        margin-right: 5px;
    }
</style>