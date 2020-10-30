<html>
<body>
<p> First Letter Capitalize</p>

</body>
<script>
function capitalizeTheFirstLetterOfEachWord(words) {
   var separateWord = words.toLowerCase().split(' ');
   for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
      separateWord[i].substring(1);
   }
   return separateWord.join(' ');
}
console.log(capitalizeTheFirstLetterOfEachWord("hi from skillsanta"));
</script>
</html>