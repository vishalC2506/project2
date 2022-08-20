function validation() {
    let piplineName = document.getElementById("piplineName").value;
    let projectName = document.getElementById("projectName").value;
    let bucketName = document.getElementById("bucketName").value;
    let password = document.getElementById("password").value;
    let runTimer = document.getElementById("runTimer").value;
    let file = document.getElementById("search").value;
  
    let Check = /^[A-Za-z0-9][A-Za-z_:/.]{5,}$/;
    let timer = /^[0-9]{1,3}$/;
    if (!piplineName.match(Check)) {
      alert("please enter valid piplineName");
      let check = document.getElementById("piplineName");
      check.focus();
      check.style.backgroundColor = "rgb(242, 120, 116)";
      return false;
    }
    if (!projectName.match(Check)) {
      alert("please enter valid project name");
      let check = document.getElementById("projectName");
      check.focus();
      check.style.backgroundColor = "rgb(242, 120, 116)";
      return false;
    }
    if (!bucketName.match(Check)) {
      alert("please enter valid bucket name");
      let check = document.getElementById("bucketName");
      check.focus();
      check.style.backgroundColor = "rgb(242, 120, 116)";
      return false;
    }
    if (!password.match(Check)) {
      alert("please enter valid password");
      let check = document.getElementById("password");
      check.focus();
      check.style.backgroundColor = "rgb(242, 120, 116)";
      return false;
    }
    if (!file.match(Check)) {
      alert("please enter valid file name");
      let check = document.getElementById("search");
      check.focus();
      check.style.backgroundColor = "rgb(242, 120, 116)";
      return false;
    }
    if (!runTimer.match(timer)) {
      alert("please enter valid time run");
      let check = document.getElementById("runTimer");
      check.focus();
      check.style.backgroundColor = "rgb(242, 120, 116)";
      return false;
    }
  
    return true;
  }
  