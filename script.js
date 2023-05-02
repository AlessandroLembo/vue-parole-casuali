console.log('VUE JS', Vue);


const app = Vue.createApp ({
   data() {
      return {
        wordsList: [],
        wordsNumber: 10,
      }
   },

   methods: {
   getRandomWord(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/word')
            .then((response) => {
              this.wordsList.push(response.data.response);
              console.log(this.wordsList);
         })
        }
   }, 

   created (){
    for(let i = 0; i < this.wordsNumber; i++){
        this.getRandomWord();
       }
   }
});

app.mount('#root');