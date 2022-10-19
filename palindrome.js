

var str="ababa";

var ans="";

for(  var i=str.length-1;i>=0;i--){

ans+=str[i];

}

if(str==ans){
console.log(str,"is palindrome");
}

else
{console.log(str,"isn't palindrome");}