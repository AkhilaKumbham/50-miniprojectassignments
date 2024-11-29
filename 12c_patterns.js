for(let i=1;i<=4;i++){
    for(let j=1;j<=4;j++){
    if(j<=i){
    document.write(i," ");
    }  

    }
    document.write("<br>");
}

document.write("<br>");
let count=1;
for(let i=1;i<=4;i++){
    for(let j=1;j<=4;j++){
    if(j<=i){
    document.write(count," ");
    count=count+1;
    }  

    }
    document.write("<br>");
}

document.write("<br>");
for(let i=5;i>=1;i--){
    for(let j=1;j<=5;j++)
    {
    if(j<=i)
    {
    document.write("* ");
    }  
    }
    document.write("<br>");
}