//2. Print factorial number
function factorial(){
    var fact = 1;
    var num = 5

    for(var i = 1 ; i<num; i++){
        
        
            fact = fact*i;
        
    }
    console.log("Factorial of 5 is : "+fact);
    
}
module.exports = factorial