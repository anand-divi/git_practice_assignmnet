
var num=13;

var a=Math.sqrt(num);

var cnt=0;

       for(i=2;i<=a;i++){

             if(num%i!=0){
                  cnt++;
                         }

           }

if(cnt==0&&num!=1)
{
console.log(num,"is prime");
}

else
console.log(num,"isn't prime");