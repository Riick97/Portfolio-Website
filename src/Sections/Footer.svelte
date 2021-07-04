<section id="footer">
    <div class="container">
        <h3>Wulf.</h3>
        <div class="links">
            <div on:click="{() => {window.open('https://www.linkedin.com/in/ulric-ricardo-a1955918a', '_blank').focus()}}" class="link linkedIn"><i class="fab fa-linkedin-in"></i></div>
            <div on:click="{() => {window.open('https://github.com/Riick97', '_blank').focus()}}" class="link github"><i class="fab fa-github"></i></div>
        </div>
        <p>© 2021 Ulric Ricardo - <a href="/about">Contact</a></p>
    </div>
</section>

<style>
    #footer{
        color: white;
        background-color: rgb(18, 18, 18);
        min-height: 100px;
    }
    .container{
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50px 0;
    }
    .links{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15px 0;
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
    .link{
        background-color: transparent;
        border: white 2px solid;
        font-size: 1.8rem;
    }
    .linkedIn{
        background-color: white;
        font-size: 1.2rem;
        color: rgb(18, 18, 18);
    }
    .github{
        font-size: 2.3rem;
        text-align: center;
    }
</style>