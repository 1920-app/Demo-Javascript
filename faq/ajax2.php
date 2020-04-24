<?php

if (isset($_GET['req2'])) {
  $value = $_GET['req2'];
  if ($value === '2') {
    for ($i = 0; $i < 10; $i++) {}
    echo "Réponse immédiate";
  }
}
