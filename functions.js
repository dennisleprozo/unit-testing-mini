module.exports = {
   returnTwo: function() {
     return 2;
   },
   
   greeting: function( name ) {
     return `Hello, ${ name }.`;
   },
 
   add: function( num1, num2 ) {
     return Math.round((num1 + num2) * 100) / 100;
   },

   multiply: function( num1, num2 ) {
      return Math.round((num1 * num2) *1) / 1;
   }
 };


