<?php

class MyObj {
  public $state;
  public $value;
}

if (isset($_GET['req'])) {
  $large_number =  500000000;
  $value = $_GET['req'];
  if ($value === '1') {
    for ($i = 0; $i < $large_number; $i++) {}
    echo "Réponse après un certain temps";
  } else if ($value === '3') {
    $myobj = new MyObj();
    $myobj->state = "OK";
    $myobj->value = "This is the response";
    echo json_encode($myobj);
  }
}
