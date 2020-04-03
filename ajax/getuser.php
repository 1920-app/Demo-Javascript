<?php

$id = $_GET["id"];


// Create connection
$conn = new PDO("mysql:host=localhost;dbname=Ajax", "root", "");


$reponse = $conn->prepare("select * from Person where id=?");
$reponse->execute([$id]);


?>
<table border='1'>
<tr>
<th>Firstname</th>
<th>Lastname</th>
<th>Age</th>
<th>Hometown</th>
<th>Job</th>
</tr>
<?php
if ($reponse->rowCount() > 0) {
    // output data of each row
    while ($row = $reponse->fetch()) {
        echo "<tr>";
        echo "<td>" . $row['FirstName'] . "</td>";
        echo "<td>" . $row['LastName'] . "</td>";
        echo "<td>" . $row['Age'] . "</td>";
        echo "<td>" . $row['Hometown'] . "</td>";
        echo "<td>" . $row['Job'] . "</td>";
        echo "</tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}


?>
