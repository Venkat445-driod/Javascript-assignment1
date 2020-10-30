<!DOCTYPE html>
<html>
<body>

<p>Click the button to display the array values after the split.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var str = "eddygrant@example.com";
  var res = str.split("grant");
  document.getElementById("demo").innerHTML = res;
}
</script>

</body>
</html>