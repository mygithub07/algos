function WriteBits(n){
  
  var q=1;
  var r;
  var array=[];


  while(q>=0.5){
      console.log(n)
      q = n/2;
      r = n%2;
      q=Math.floor(q);
      array.unshift(r);
      n=q;

  }
  return console.log(array.join(''));
}

var res = new WriteBits(1354);
console.log(res)