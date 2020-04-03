<html>
    <head>
    <link rel="stylesheet" href="../prism/prism.css" />
    <script src="../prism/prism.js"></script>
<script>
function showUser(str) {
  if (str == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  if (window.XMLHttpRequest) {
    xmlhttp= new XMLHttpRequest();
  } else {
      try {
        xmlhttp= new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
          return NULL;
        }
      }
  }
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
      document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
    }
  }
  xmlhttp.open("GET", "getuser.php?id=" + str, true);
  xmlhttp.send();
}
</script>
    </head>
    <body>
<?php
$conn = new PDO("mysql:host=localhost;dbname=Ajax", "root", "");
$reponse = $conn->prepare("select * from Person");
$reponse->execute();
?>
        <form>
            <select name="users" onchange="showUser(this.value)">

                <option value="">Select a person:</option>
<?php 
while ($row = $reponse->fetch()) {
  echo "<option value=".$row['id'].">".$row['FirstName']." ".$row['LastName']."</option>";

}
?>
            </select>
        </form>
        <br />
        <div id="txtHint"><b>Person info will be listed here.</b></div>

<h2>Code source</h2>
<pre>
<code class="lang-js">
function showUser(str) {
  if (str == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  // On vérifie que le navigateur est suffisamment récent
  if (window.XMLHttpRequest) {
    xmlhttp= new XMLHttpRequest();
  } else { // IE6 ou IE7...
      try {
        xmlhttp= new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
          return NULL;
        }
      }
  }
  // Lorsque le serveur a fini de traiter la requête ci-après :
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
      document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
    }
  }
  // On envoie une requête HTTP GET au serveur
  xmlhttp.open("GET", "getuser.php?id=" + str, true);
  xmlhttp.send();
}
</script>
</code>
</pre>
    </body>
</html>
