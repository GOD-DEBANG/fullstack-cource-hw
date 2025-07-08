function findthelargest (){
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let lergest  = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > lergest){
            lergest = arr[i]
           
        }
    }
    console.log("The largest number is  : " + lergest);
}
module.exports = findthelargest; // Find the largest number in an array