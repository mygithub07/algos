function rString (string){

    var len = string.length
  
    var result=[]
    var FinalResult = []
    for (i=len-1 ;i>=-1;i--){
       
     
      if (string[i]!==" "&&i!==0){
        
         result.unshift(string[i]);
 
      }
      else if (string[i]===" "|| i ===0){
       if(i===0){ result.unshift(string[i]);}
       FinalResult.push(result.join(''));
        result=[]
        console.log(FinalResult);
      }
      
    }

    return (console.log(FinalResult.join(" ")));
}

var str = "Hello world";
var res = new rString(str);
console.log(res);