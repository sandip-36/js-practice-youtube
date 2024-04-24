// Immediately Invoked Function Expression (IIFE)

(function(){ //IIFE is which function immideately excuted except global scoped polutions
    //named iife
    console.log(`DB CONNECTED`);
})();

( (name) => {
    //unnamed iife
    console.log(`DB CONNECETED TEO ${name}`);
} )('sandip')