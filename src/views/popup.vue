<template>

<div>
  <div class="modal fade show text-center"   style="display: block" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="fales">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title  mx-auto" id="exampleModalLabel">{{this.title}}</h1>
          
        </div>
        <div class="modal-body">
          <p class="card-text" v-html="text"></p>
              <button type="button" class="btn btn-dark" data-bs-dismiss="modal" @click="Closepopup()" >{{this.buttonText}}</button>
        </div>
      </div>
    </div>
  </div>

</div>

</template>

<script>
export default {
  name: 'welcome',
   data() {
    return {
      title: '',
      text: '' ,
      buttonText: '' ,
      state:''

    }
  },
    props: {
    time:String,
    total:Number,
    score:Number,
    
  },
  mounted(){
    this.isStartorEnd(this.time);
   
  },
  methods:{
    isStartorEnd(state){
      if(state==='start'){
      this.title='Welcome to Quizz',
      this.text='This is a quiz application built using VueJS. <br /><br /> Currently it\'s loaded with CSS questions from W3Scools, but you can easily load any type of questions into it. <br /><br /> It will dynamically load the question->answers pair and upload them into the components.',
      this.buttonText='Start the quiz' 
      }else{
        this.title='Congratulations!',
        this.text='You have completed the quiz. <br /> You got: <strong>' + this.score + '</strong> out of <strong>' +this.total +'</strong> questions right.',
        this.buttonText='Restart'
      }
    },

    Closepopup(){
       this.$emit('closepopup')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.model{
  text-align: center;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
}
.modal-header{
    background-color: #0094da;
    color: white;
    border-bottom: 1px solid #ccc;
    padding: 20px;
    margin-top: 0;
    font-size: 36px;
   
}
.modal-body {
  p{
    font-size: 18px;
    background-color: #fff;
    color: #000;
    letter-spacing: 1px;
    margin: 20px 10% 0;

  }
  .btn-dark{
    margin: 20px auto;
    border: 2px solid #0b0e21;
    border-radius: 0;
    background-color: #0b0e21;
    color: #fff;
    display: inline-block;
    font-size: 18px;
    font-weight: 600;
    padding: 14px 75px;
    text-transform: uppercase;
    transition: color .2s ease, background-color .2s ease;
   
  }   
  .btn-dark:hover{
          background-color: #fff;
    color: #0b0e21;
    cursor: pointer;
    
  }
}
</style>
