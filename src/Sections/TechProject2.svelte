<script>
    const projectLink = '#'
    const githubLink = 'https://github.com/Riick97' 
</script>

<div class="techProject">
    <div class="description">
        <div class="main">
            <h2>Game: Hangman</h2>
            <p>
                This project was a algorith Visualizer. It has functions for visualizing
                diffrent sorting algorithms. some of these algoritms are bubble sort, quicksort, and merge sort
            </p>
        </div>
        <div class="project">
            <div style="" class="projectView inside">
                <div class="image"></div>
            </div>
            <div class="information">
                <div class="details">
                    <h4>Built Using</h4>
                    <p>Svelte</p>
                </div>
                <div class="icons">
                    <div on:click="{() => {window.open(projectLink, '_blank').focus()}}" class="icon chain"><i class="fas fa-link"></i></div>
                    <div on:click="{() => {window.open(githubLink, '_blank').focus()}}" class="icon github"><i class="fab fa-github-alt"></i></div>
                </div>
            </div>
        </div>
    </div>
    <div class="projectView outside">
        <div class="image"></div>
    </div>    
    
</div>

<style>
    .techProject{
        display: flex;
        position: relative;
    }
    .description{
        height: 300px;
        width: 300px;
        padding-right: 30px;
    }
    h2{
        margin-bottom: 15px;
    }
    .main {
        margin-bottom: 25px;
    }
    .projectView{
        width: 300px;
        height: 300px;
        margin: 0 auto;

        background: url('/images/hashtag-solid.svg');
        background-size: 10px;
        background-repeat: round;
        overflow: hidden;
        position: relative;
        min-width: 150px;
        min-height: 60px;

        display: grid;
        place-items: center;

    }

    .projectView::before{
            content: "";
            position: absolute;
            top: 10px;
            left: 10px;
            right: 10px;
            bottom: 10px;
            background: rgb(9, 9, 9);
    }

    .image{
        z-index: 1;
        height: 90%;
        width: 90%;
        background-image: url('/images/hangman.png');
        background-size: cover;
        background-position: center;
        opacity: 80%;
    }
    .icons{
        display: flex;
        margin-top: 25px;
    }
    .icon{
        margin-right: 15px;
    }
    .projectView.inside{
        display: none;
    }

    @media only screen and (max-width: 650px) {
        .techProject{
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .description{
            margin-bottom: 25px;
            width: 100%;
            height: min-content;
        }
        .projectView.outside{
            display: none;
        }
        .projectView.inside{
            display: grid;
            margin-left: 0;
            margin-right: 15px;
        }
        .project{
            display: flex;
        }
    }
</style>