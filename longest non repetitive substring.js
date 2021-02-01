
function substr(string){

     var len = string.length
     var temp = "";
     var currentMax="";

     for (var i=0; i<len ; i++){

          temp = string[i];

          for (var j=i+1; j<len ; j++){

            if ((string[i] != string[j])&&(temp.indexOf(string[j])==-1)){

                    temp+= string[j];
              }
              else{

                if(temp.length > currentMax.length){
                  currentMax = temp;
                  }

                 break;
                }

            }

       }
       return currentMax;
  }

  var a = substr("subte686675ha93257dgabnvc50");
  console.log(a)
