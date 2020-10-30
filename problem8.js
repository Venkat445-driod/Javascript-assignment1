<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
<title>fibonnaci series</title>
</head>
<body>
<p>fibonnaci series
</p>
</body>
<script>
let number = parseInt(prompt('Enter a positive number: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= number) {

    
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}
</script>

</html>