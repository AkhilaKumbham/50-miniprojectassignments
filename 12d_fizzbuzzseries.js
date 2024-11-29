
let n=100;
for(i=1;i<=n;i++){
    if(i%3===0 && i%5!==0)
    {
        document.write("fizz ");
    }
    else if(i%5===0 && i%3!==0)
    {
        document.write("buzz ");
    }
    else if(i%3===0 && i%5===0)
    {
        document.write("fizzbuzz ");
    }
    else
    {
        document.write(i+" ");
    }

}