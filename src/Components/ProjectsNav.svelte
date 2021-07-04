<script>
    import page from 'page'

    export let prev, next

</script>

<div class="links">
    <div on:click="{() => page(prev)}" class="link"><p>Previous Project</p></div>
    <div on:click="{() => page(next)}" class="link">Next Poject</div>
</div>

<style>
    .links{
        position: fixed;
        bottom: 50px;
        left:0;
        width: 80vw;
        left: 50%;
        margin-left: -40vw;
        display: flex;
        justify-content: space-between;
    }
    .link{
        padding: 5px;
        background-color: rgb(234, 234, 234);
        border-radius: 5px;
        cursor: pointer;
    }
</style>