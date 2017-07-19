function removeDup(array){
   var len = array.length
   for (var i=0; i<=len-1;i++){
     
     for (var j=i+1;j<=len-1;j++){
     
       if ( array[i] ===array[j]){
         array.splice(j,1);
       
       }

     }
    
   }
  return array
}

var a = [1,-2,3,1,4,-2,7,8,1,3,10,4,12]
var res = new removeDup(a);
console.log(a);
//prints [1, -2, 3, 4, 7, 8, 10, 12]