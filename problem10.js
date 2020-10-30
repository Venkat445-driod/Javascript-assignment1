<html>
<h3>Write a JavaScript function that takes a string which has lower and uppercase letters as a parameter and converts upper case letters to lower case,and lower case letters to upper case</h3>
<script>
function upp(obj)
{
	obj.value=obj.value.toUpperCase();

}
function low(obj)
{
	obj.value=obj.value.toLowerCase();
}
</script>
<body oncontextmenu="return false;">

<fieldset>
<legend> <b>LOGIN FORM: </b></legend>

<label for= "name"><b> NAME :</b></label>
 <input type="text" onkeyup="upp(this)"><br>
 
 
<label for="psw"><b>Password :</b></label>
<input type="text" onkeyup="low(this)"><br>
</fieldset>
</body>
</html>
