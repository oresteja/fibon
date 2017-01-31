var n = prompt('Enter your number: ');
function fibonachi(n) {
  var num;
  if (n >= 2) {
    num = fibonachi(n - 1) + fibonachi(n - 2);
  } else {
    num = n
  }
  return num;
}
document.write('n=' + n ); 
document.write(';   Vidpovid = ' + fibonachi(n));
