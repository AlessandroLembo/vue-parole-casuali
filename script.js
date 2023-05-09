console.log('VUE JS', Vue);


const app = Vue.createApp ({
   data() {
      return {
        wordsList: [],
        wordsNumber: 10,
        isLoading: false,
        hasError: false,

      }
   },

   methods: {
   getRandomWord(){
          this.isLoading = true;
            axios.get('https://flynn.boolean.careers/exercises/api/random/word')
            .then((response) => {
              this.wordsList.push(response.data.response);
         }).catch(() => {
            this.hasError = true;
         }).then(() => {
            this.isLoading = false;
         })
        },
         
   getSentence(){
       for(let i = 0; i < this.wordsNumber; i++) {
           this.getRandomWord();
       }
       console.log(this.wordsList);
   },
   
}, 
    
    
   created (){
    this.getSentence();
   }
});

app.mount('#root');