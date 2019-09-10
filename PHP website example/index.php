<!DOCTYPE html>
<html lang="en-us">
<head>
  <link rel="stylesheet" type="text/css" href="stylesheet.css"><script type="text/javascript" src="javascript.js"></script>
  <title>Joanna Guise</title>
</head>

<body>

<?php include ("header.php");?>

<img class="me" src="images/dev.jpg" alt="Joanna">

<?php
$name = "Joanna";
$availability = "available";

echo "<p>Hi, I'm " . $name . "!";
echo "<br>I am currently " . $availability . " for new opportunities.</p>";
?>



<?php include ("footer.php");?>

</body>
</html>
