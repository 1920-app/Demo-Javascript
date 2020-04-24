function firstRequest() {
  if (window.XMLHttpRequest) {
    var xmlhttp= new XMLHttpRequest();
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
      document.getElementById("result1").innerHTML = xmlhttp.responseText;
    }
  }
  xmlhttp.open("GET", "ajax.php?req=1", true);
  xmlhttp.send();
}



function secondRequest() {
  if (window.XMLHttpRequest) {
    var xmlhttp= new XMLHttpRequest();
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
      document.getElementById("result2").innerHTML = xmlhttp.responseText;
    }
  }
  xmlhttp.open("GET", "ajax2.php?req2=2", true);
  xmlhttp.send();
}

function thirdRequest() {
  if (window.XMLHttpRequest) {
    var xmlhttp= new XMLHttpRequest();
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
      var object = JSON.parse(xmlhttp.responseText);
      document.getElementById("result3").innerHTML = object.state + object.value;
    }
  }
  xmlhttp.open("GET", "ajax.php?req=3", true);
  xmlhttp.send();
}
