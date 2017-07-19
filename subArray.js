//Given an array and an integer. Print out all the possible sub-array, such that when elements in that array are added ,
// results is equal to that given integer.

function fn(array,int){
  
  len = array.length
  //var result = []
  for (i=0;i<=len-1;i++){
    
      for (j=i+1;j<=len-1;j++){
        var result = []
      if (array[i]+array[j]===int){
      result.push(array[i]);
      result.push(array[j]);
      console.log(result)
    }
      }   
    
  }

 
}


var res = new fn([-1,3,3,4,2,2,7,6,1,4],5)
console.log(res)
//prints 
[-1, 6]
[3, 2]
[3, 2]
[3, 2]
[3, 2]
[4, 1]
[1, 4]