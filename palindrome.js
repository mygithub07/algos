var str = "madam";
	
	function checkPalindrome(st) {
	 
	  var len = st.length;
	  
	  for (var i = 0,j = (len-1); i <= (len-1), j>=0; i++ , j--) {  
	         if (i>j){
	           return "palindrome"}
           if (st[i]===st[j]){
               if (i===j){
                return "palindrome";
               }  
           
           }else{
               return "not palindrome"
            }
           
           
           
	  }  
	}
	
	var strP = checkPalindrome(str); 
console.log(strP);