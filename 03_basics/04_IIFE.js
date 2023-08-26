// Immediately Invoked Functions Expressions 
(
function chai() {
    // named IIFE
    console.log(`DB Connected`);
})();

( (name) => {
    // Simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )("Shubham");