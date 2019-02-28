const sum= function(arr)
{
    let total=0;
    i=0;

    while(i<arr.length)
    {
        total +=arr[i];
        i++;
    }
    return total;
}
const nmul = function(arr)
{
    let mul=1;
    i=0;

    while(i<arr.length)
    {
        mul *=arr[i];
        i++;
    }
    return mul;
}

const name = function(ag)
{
    let st ="";
    st=ag;
    return st;
}


var books = { "Pascal" :" WELCOME TO PASCAL","Scala": "WELCOME TO SCALA"}   

const person = {name:"Sayan",Dept:"CSE",Uni:"LPU"}

module.exports = [sum,person,nmul,name,books];