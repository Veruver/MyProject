/* Задача1
Реализовать функцию перевода числа из одной системы счисления в другую.
На вход подается исходные число i и система счисления a и требуемая система счисления b.
0 <= i <= 10000
1 <= a, b <= 36   */

function transform(i,a,b){
if((0<=i)&&(i<=10000)&&(a>=1)&&(2<=b)&&(b<=36)){
return parseInt(parseInt(i,a).toString(b));} 
else  alert();
}
var result=transform(7,10,2);
console.log(result);

