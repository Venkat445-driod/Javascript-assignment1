<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
</head>
<body>
	<p>
	Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.<br>
	Sample numbers : 0, -1, 4 <br>
	Output : 4, 0, -1
	</p>
	
	
	<script>
		var x= 0;
		var y=-1;
		var z= 4;
		if (x>y && x>z)
		{
				if (y>z)
				{
					console.log(x + ", " + y + ", " +z);
				}
				else
				{
					console.log(x + ", " + z + ", " +y);
				}
		}
		else if (y>x && y >z)
		{
				if (x>z)
				{
					 console.log(y + ", " + x + ", " +z);
				}
				else
				{
					 console.log(y + ", " + z + ", " +x);
				}
		}
		else if (z>x && z>y)
		{
				if (x>y)
				{
					console.log(z + ", " + x + ", " +y);
				}
				else
				{
					console.log(z + ", " + y + ", " +x);
				}
		}  
		
		// doesn't work if y = z
	</script>
	<script>
	function abc(a,b,c){

		var arry=[a,b,c];

		var sor= arry.sort(function(a,b){

			return b-a;

		});

		alert(sor);

	}

	abc(4,0,-1);
	</script>
  
</body>
</html>


}
</script>

</body>
</html>