

var num=16;

var a=Math.sqrt(num);


var cnt=0;

       for(i=2;i<=num;i++){

             if(num%i==0){
                  cnt++;
                         }
}
           

if(cnt==2)
{
console.log(num,"is prime");
}

else
{console.log(num,"isn't prime");}