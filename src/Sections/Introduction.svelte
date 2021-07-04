<script>
    import AOS from 'aos'
    import 'aos/dist/aos.css';
    AOS.init()
</script>

<section id="introduction">
    <div class="container">
        
        <div class="window">
            <div class="top">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
            </div>
            
            <div class="content">
                <div class="title">
                    <h2>My name is Ulric Ricardo</h2>
                    <h3>I build things for the web</h3>
                </div>
                <div class="description">
                    I'm a Curacao-based Software Engineer who specializes in building websites and web applications
                </div>
                <div class="products">
                    <div data-aos="zoom-in" data-aos-offset="200" class="product">
                        <div class="icon"><i class="fas fa-laptop"></i></div>
                        <div class="name">Personal</div>
                    </div>
                    <div data-aos="zoom-in" data-aos-offset="200" class="product">
                        <div class="icon"><i class="fas fa-shopping-cart"></i></div>
                        <div class="name">E-commerce</div>
                    </div>
                    <div data-aos="zoom-in" data-aos-offset="200" class="product">
                        <div class="icon"><i class="far fa-building"></i></div>
                        <div class="name">Business</div>
                    </div>
                </div>
            </div>
        </div>

        <input disabled='true' class="searchBar" type="text">
    </div>
</section>

<style>
    :global(:root) {
        --wulfGreen: rgb(49, 79, 90);

    }
    h2{
        font-size: 2rem;
    }
    #introduction{
        padding: 50px 0;
    }
    .description{
        margin: 30px 0;
        padding: 0 50px;
    }
    .container {
        flex-direction: column;
        text-align: center;
    }
    .searchBar{
        background-color: rgb(234, 234, 234);
        width: 400px;
        height: 35px;
        margin: auto;
        margin-top: 25px;
        margin-bottom: 25px;
        border-radius: 25px;

        box-shadow: 6px 6px 16px 0 rgba(0, 0, 0, 0.092),
	        -4px -4px 12px 0 rgba(255, 255, 255, 0.3);
    }

    /* Browser Window */
    .dot {
        height: 12px;
        width: 12px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
    }
    .red {
        background-color: #FF4650;
    }
    .yellow {
        background-color: #D99C2B
    }
    .green {
        background-color: rgb(49, 79, 90);
    }

    .window {
        border: 3px solid #f1f1f1;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        height: 490px;

        box-shadow: 6px 6px 16px 0 rgba(0, 0, 0, 0.092),
        -4px -4px 12px 0 rgba(255, 255, 255, 0.3);
    }

    .top {
    padding: 10px;
    background: #f1f1f1;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    text-align: left;
    }

    .content {
    padding: 10px;
    margin-top: 30px;
    }

    .products{
        height: 200px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    .product{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .icon{
        height: 75px;
        width: 75px;
        font-size: 3.8rem;
        color: rgb(87, 87, 87);
    }
    .name{
        margin: 10px 0;
    }

    @media only screen and (max-width: 650px) {
        .container{
            display: flex;
            flex-direction: column;
            width: 90vw;
        }

        .searchBar{
            width: 100%
        }
    }

</style>