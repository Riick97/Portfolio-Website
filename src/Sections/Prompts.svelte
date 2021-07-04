<script>
    import AOS from 'aos'
    import 'aos/dist/aos.css';
    AOS.init()
</script>

<section id="prompts">
    <div class="container">
        <div class="title">
            <h2>Need a website?</h2>
        </div>
        <div class="description">
            <p>If you're a freelancer or small business you probably want to: </p>
        </div>
        <div class="suggestions">
            <div data-aos="fade-right" class="item">
                <div id="moreClients" class="illustration"></div>
                <div class="info">
                    <h3>Get more clients</h3>
                    <p>I can help you get exposure to new clients that find your products organically</p>
                </div>
            </div>
            <div data-aos="fade-left" class="item">
                <div class="info">
                    <h3>Show your products and skills</h3>
                    <p>Create a platform that makes it easier for people to purchase your products or request your services</p>
                </div>
                <div id="showProducts" class="illustration"></div>
            </div>
            <div data-aos="fade-right" class="item">
                <div id="moreCred" class="illustration"></div>
                <div class="info">
                    <h3>Get more credibility</h3>
                    <p>Are you impressed with this website? So will be your clients when they see yours. Get more offers from clients by showcasing yourself clearly</p>
                </div>
            </div>
            <div data-aos="fade-left" class="item">
                <div class="info">
                    <h3>Express your personality</h3>
                    <p>Be unique in having your own platform that gives you 100% self expression and looks just how you want it</p>
                </div>
                <div id="expressPerson" class="illustration"></div>
            </div>
        </div>
        <div class="contact">
            <button class="blackBtn">
                <div class="neumorphism">
                    <a href="/about">Contact Me</a>
                </div>
            </button>
        </div>
    </div>
</section>

<style>
    h3{
        margin-bottom: 20px;
    }
    h2{
        margin-bottom: 10px;
    }
    #prompts{
        padding-top: 50px;
        padding-bottom: 100px;
        min-height: 400px;
        text-align: center;
    }
    .container{
        flex-direction: column;
    }
    .description{
        margin-top: 10px;
        margin-bottom: 50px;
    }
    .item{
        text-align: left;
        max-width: 700px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: auto;
        margin-bottom: 20px;
    }
    .illustration{
        height: 150px;
        background-color: rgb(137, 137, 137);
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 10px;
    }
    #moreClients{
        background: url("/images/moreClients.png");
        background-size: cover;
        background-position: center;
    }
    #showProducts{
        background: url("/images/showProducts.png");
        background-size: cover;
        background-position: center;
    }
    #moreCred{
        background: url("/images/moreCred.png");
        background-size: cover;
    }
    #expressPerson{
        background: url("/images/expressPerson.png");
        background-size: cover;
        background-position: center;
    }
    .info{
        margin: 0 10px;
    }
    .contact{
        margin: 50px 0;
    }
    .blackBtn {
        margin: auto;
        transition: ease-in;
        transition-duration: 50ms;
    }
    .blackBtn:hover{
        transform: scale(1.05);
    }

    @media only screen and (max-width: 650px) {
        .container{
            display: flex;
            flex-direction: column;
            width: 90vw;
        }
    }
    
    @media only screen and (max-width: 400px) {
        .item{
            display: flex;
            flex-direction: column;
            border-radius: 10px;
        }
        .item:nth-child(even) {
            flex-direction: column-reverse;
        }
    }
</style>