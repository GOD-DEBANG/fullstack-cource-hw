function arr(){
    var arr1 = [1,2,3,4,5,6,7,8,9,10];
    var foundeven = false;
        for(var i = 0; i<arr1.length; i++){
            if(arr1[i]% 2 == 0){
                console.log(arr1[i]);
                foundeven = true;

        }
        
        if(!foundeven){
            console.log("No even array found")
        }
        
    }
    
}
    
    

module.exports = arr;  //1. print Even number from an array