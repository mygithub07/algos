function sort(array){
         var len = array.length;   
  
     for (var i=1; i<=len-1;i++){
         var currItem= array[i]
         
         for (var j=i-1;j>=0;j--){
           if (array[j]>currItem){
             array[j+1]=array[j]
           }
           else {
             break;
             }
       
          array [j]=currItem
       }
      
     }     
       return array;           
}

var a = sort ([5,4,9,1,0,0,10,-1,-2,1.5,16.9])
console.log(a)
//prints 
[-2, -1, 0, 0, 1, 1.5, 4, 5, 9, 10, 16.9]