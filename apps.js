function integer()
{
let num=prompt("enter the number to be checked: ")
let n=parseInt(num)
if (n>0)
    {
        console.log("it is a positive number")
    }
    else if (n==0)
    {
        console.log("it is equal to zero")
    }
    else if(n<0)
    {
        console.log("it is a negative number")
    }
    else
    {
        console.log("wrong input")
    }
}
integer();

function fact(num)
{
    let fac=1;
    if(num==0||num==1)
       { console.log("the factorial is "+ num)
}   else
{
    for(let i=1;i<=num;i++)
    {
        fac=fac*i;
    }
    console.log("the factorial of the given number is"+ num)
}
}
fact(5);

function largest(num1,num2)
{
    if(num1>num2)
    {
        console.log("the largest number is: "+ num1)
    }   
    else
    {
        console.log("the largest number is: "+num2)
    }
}
largest(5,6);

function palindrome(str)
{
    str=toString(str);
    let end=str.length-1;
    let start=0;
    while(start<end)
    {
        if(str[start]!==str[end])
        {
            return flase
        }
        start++;
        end--;
    }
    return true;
}
palindrome("noon");

function prime(num)
{   let count=0;
    for(let i=2;i<=Math.sqrt(num);i++)
    {
        if(num%i==0)
        {
            count++
            console.log(i)
        }      
    }
    if(count==0)
    {
        console.log("it is not a palindrome")
    }
    else
    {
        console.log("it is not a palindrome")
    }
}
prime(16)

function calculator(a,b,op)
{   let sum;
    if(op=='+')
    {
        console.log(sum=a+b);
    }
    else if(op=='-')
    {
        console.log(sum=a-b);
    }
    else if(op=='*')
    {
        console.log(sum=a*b);
    }
    else if(op=='/')
    {
        console.log(sum=a/b);
    }
    else if(op=='%')
    {
        console.log(sum=a%b);
    }
}
calculator(3,4,'*');

function vowels(str)
{   let count=0;
    str=str.toLowerCase();
    for(let i=0;i<str.length;i++)
    {
        if(str[i]=='a')
        {
            count++;
        }
        else if(str[i]=='e')
        {
            count++;
        }
        else if(str[i]=='i')
        {
            count++;
        }
        else if(str[i]=='o')
        {
            count++;
        }
        else if(str[i]=='u')
        {
            count++;
        }
    }
    console.log("the number of vowels are: "+ count);
}
vowels("aditya");

function fibbo(num)
{   let fibbo;
    let num1=0;
    let num2=1;
    if(num==0)
    {
        console.log(num1)
    }
    else if(num==1)
    {
        console.log(num2)
    }
    else if(num>2)
    {   console.log(num1)
        console.log(num2)
        fibbo=num1+num2;
        console.log(fibbo)
    }
    for(let i=1;i<=num;i++)
    {
       fibbo=fibbo+i;
        console.log(fibbo+" ")
    }
}
fibbo(5);

function tables(num)
{   let sum;
    for(let i=0;i<=10;i++)
    {   
        console.log(num+"*"+i+"="+num*i)
    }
}
tables(5);