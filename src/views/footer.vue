<template>
  <footer>
                <small>
                    You can find the code repo on <a href="https://github.com/Flopet17/quiz-app">Github</a>. Feel free to make any pull requests to improve the aplication.
                </small>
                <p>Built with <span>&hearts;</span> by <a href="https://protifilo.herokuapp.com/">Omar AbdullNasser</a></p>
          </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer {
    background-color: #0b0e21;
    color: white;
    letter-spacing: 1px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    text-align: center;
     @media (max-width:768px) {
        padding: 5px;
          small{
            display: none;
          }
     }
     p {
    margin: 0;
    } 
        small {
        margin-bottom: 10px;
    }
        span {
        color: crimson;
    }
}
</style>