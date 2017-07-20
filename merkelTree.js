//creates a node from hash
function CreateNode(hash){

  this.hash = hash;
  this.right = null;
  this.left = null;
}


//main class 

function MerkelTree(){
  var nodes = [];
  
  //creates a new array of nodes
   this.AppendLeaf = function ( hash)
       {
          var node = new CreateNode(hash);
          nodes.push(node);
          return  nodes;
       }

 //build the tree and return root node
   this.buildTree = function (nodes){
    
     var len = nodes.length
     var parent = [];
   
  while(nodes.length>1){
  
    for(var i=0;i<=len-1;i+=2){
     
      var newHash = nodes[i].hash+nodes[i+1].hash;
     
      var ParentNode= new CreateNode(newHash)
      if(nodes[i].hash>nodes[i+1].hash){
        ParentNode.left = nodes[i+1]
        ParentNode.right = nodes[i]
      }
      else{
        ParentNode.left = nodes[i]
        ParentNode.right = nodes[i+1]
      }
      parent.push(ParentNode);
      if (i+1===nodes.length-1){
        break;
      }

    }
      nodes.length=0; 
      nodes = Array.from(parent);
      //console.log(nodes);
      parent.length=0;
  }
  
  return nodes;
    
  }
}


//running the class
var a = new MerkelTree();
a.AppendLeaf("02");
a.AppendLeaf("01");
a.AppendLeaf("06");
a.AppendLeaf("04");
a.AppendLeaf("05");
a.AppendLeaf("06");
a.AppendLeaf("07");
var nodes = a.AppendLeaf("05");

var result = a.buildTree(nodes)
console.log(result);