function reverse(string){
  var arr= []
  var len= string.length;
  for (j= (len-1); j>=0; j--){
    arr.push(string[j]);
    console.log(arr)
  }
  var res = arr.join('');
  return res;
}

var a = reverse("reverse")
console.log(a);