function factorial(n){
  var f = []
  var result
  result = n
  f[0]=n;
  var a = n
  var product
  for (var i=1;i<=a-1;i++){
    
    f.push( (n-1));
     n=n-1

  }
  console.log(f)
  product=1;
  
 for(j=0;j<=f.length-1;j++){
    
   product = product*f[j]
  
  }
   console.log( product);
}
  
var a = new factorial(5);
console.log(a);