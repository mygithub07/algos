
var fib = function(x){
   var a = []
   
    a[0]=0
    a[1]=1
    
    for (i=2;i<=x;i++){
      
      a[i]= a[i-1]+a[i-2]
     
    }
     console.log(a);
}
 
var res = fib(15)
console.log(res)