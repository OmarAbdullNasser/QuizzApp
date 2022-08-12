<template>
  <div class="main" >
    <div class="pop-container" ref="pop" >
      <div class="container">
        <div class="col-md-8 col-md-offset-2 ">
           <!-- <p class="bg-dark"> {{this.test}}</p> -->
          <popup   :total ='this.questionsitem.length' :score="this.counter"  :time="this.time"  @closepopup="this.time=='start'? this.close(): this.reset()" v-if="this.renderComponent" />
          
          // <!-- <popend />
          // -->
        </div>
      </div>
    </div>

   <div class="container">
       <!-- <popend v-if="end"/> -->
      <div class="row d-flex justify-content-center">
        <div class="col-lg-10 col-lg-offset-1 ">
          <!--Question section-->
          <div class="question mx-auto my-auto">
            <h4 class="w-25 mx-auto"> 
              Question {{this.Q_num+1}}/{{this.arr_size}}

            </h4>
            <p>
             {{this.Q.question}}
            
            </p>
          </div>
            <!--answers section-->
          <div class="answers mt-5 ">
              <ul>
                 <li  @click="CheckAnswers" ref="lis" v-for="(item, index) in this.Q.answers" :key="item.id" :data-id="index"  >
                   <span >{{index+1}}</span>  <p>{{ item }}</p>
                 </li>
              </ul>
          </div>
 

             <!--submit section-->
          <div class="submit mt-5 "  ref="submit">
              <button type="button" ref="btn_submit" class="btn btn-dark" @click="updateQueation()">Next question</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import questions from '@/data/data.js'
import popup from './popup.vue'


export default {
  name: 'main',
  components: {
    popup,
 
},
  data () {
        return {
        questionsitem:questions,
        arr_size:0,
        Q_num:0,
        Q:'',
        counter:0,
        time:'start',
        renderComponent: true,
        }
    },
    mounted(){
     this.questionsitem=Object.values(this.questionsitem) ,
      this.arr_size=this.questionsitem.length;
      this.Q= this.getQ(this.questionsitem, this.Q_num);
    
    },
    methods:{
      getQ(arr, id ){
       let q =arr.find((ele, index)=>{
        if(index=== id){
          return ele
        }});
        return q
      },

      updateQueation()
      {
        if( this.Q_num<7){
        this.Q_num++;
        this.Q= this.getQ(this.questionsitem, this.Q_num);
        this.$refs.submit.style.display='none';
        this.$refs.lis[0].parentElement.classList.remove('preventclik');
        for(let i=0; i< this.$refs.lis.length;i++){
           this.$refs.lis[i].classList.remove('right');
         this.$refs.lis[i].classList.remove('wrong');
         }
        }else{
          this.time='end';
          this.forceRerender();
          this.$refs.pop.style.display='block';
        }
      },
      CheckAnswers(e){
        //check id values and correcrt values
        let idAnswer=Number(e.currentTarget.dataset.id);
        if(this.Q.correct=== idAnswer+1){
         e.currentTarget.classList.add('right');
         this.counter++;
        }else{
           e.currentTarget.classList.add('wrong');
        }
         e.currentTarget.parentElement.classList.add('preventclik');
        this.$refs.submit.style.display='block';
       if(this.Q_num===7){
           this.$refs.btn_submit.textContent='Finish quiz';
           
        }
      },
      close(){
          //
        
             this.$refs.pop.style.display='none';
      
      },
      reset(){
          this.$refs.pop.style.display='none';
           this.$router.go()
      },
       forceRerender () {
        // remove the my-component component from the DOM
        this.renderComponent = false;
        
        this. $nextTick (() => {
          // add my-component component in DOM
          this.renderComponent = true;
        });
      },
    
    
   }
}
</script>


<style lang="scss" >
.main{

  .pop-container{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .question{
    background-color: #0094da;
    color: white;
    padding: 10px;
    margin: 0;
    text-align: center;
    
    h4{ 
      background-color: #fff;
      color: #0b0e21;
      padding: 20px 10px;
      font-size: 20px;
      font-weight: 600;
      @media(max-width:786px){
        width:100% !important;
      }
  }
  p{
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 2px;
    padding-left: 50px;
    padding-right: 50px;
    @media (max-width:768px){
        padding-left: 10px;
        padding-right: 10px;
        font-size: 18px;
    
    }
  }
  }

  .answers{
    ul{
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
      
      li{
        background-color: #fff;
        border: 2px solid #0094da;
        min-height: 70px;
        width: 48%;
        display: flex;
        margin-bottom: 30px;
        transition: color .3s ease, border-color .3s ease, transform .3s ease;
        cursor: pointer;
        @media (max-width:768px) {
          width:100% !important;
          
        }
    
        span{
              background-color: #0084da;
              color: #fff;
              font-size: 30px;
              flex: 75px;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: background-color .3s ease;
              
        }
        p{
            color: #0b0e21;
            font-size: 16px;
            font-weight: 600;
            flex: calc(100% - 75px);
            margin: auto 20px;
            transition: color .3s ease;
        }
        &:hover{
    transform: scale(1.03);
        }
      }
    }
  }

  .submit{
     text-align: center;
     display: none;
    margin: 20px 0;
            @media (max-width:768px) {
          width:100% !important;
          
        }
     .btn-dark{
     border: 2px solid #0b0e21;
    border-radius: 0;
    background-color: #0b0e21;
    color: #fff;
    display: inline-block;
    font-size: 18px;
    font-weight: 600;
    padding: 14px 75px;
    margin: 0 auto;
    text-transform: uppercase;
    transition: color .2s ease, background-color .2s ease;
  }   
  .btn-dark:hover{
          background-color: #fff;
    color: #0b0e21;
    cursor: pointer;
    
  }
  }
.wrong {
   border-color: #dc0a0a !important;
    color: #dc0a0a !important;
    span { background-color: #dc0a0a !important;}
    p { color: #dc0a0a !important;  }
            }

.preventclik{pointer-events: none !important;  }      
.right {
  border-color: #1ea55b  !important;
  color: #1ea55b  !important;
    span {background-color: #1ea55b !important; }
     p { color: #1ea55b !important; }
  } 
}
</style>