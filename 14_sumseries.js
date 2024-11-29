n=prompt("Enter num up to which series sum to be generated");
let sum=0;
for(i=1;i<=n;i++){
    sum+= (1/i);
}
document.write("a)"+sum.toFixed(2));
document.write("<br>");
let count=1;
for(j=1;j<=n;j++)
{
        count+=2*j;
}
document.write("b)"+ count.toFixed(2));