console.log('VUE JS', Vue);


const app = vue.createApp ({
   data() {
      return {
        wordsList: [],
        wordsNumber: 10,
      }
   },

   methods: {
   
   }
});

app.mount('#root');