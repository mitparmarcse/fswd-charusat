<!DOCTYPE html>
<html>
<head>
<title>Button Event Listener</title>
</head>
<body>
<button id="myButton">Click Me</button>
<script> const button =
document.getElementById("myButton");
button.addEventListener("click", function() {
button.textContent = "Clicked!";
});
</script>
</body>
</html>