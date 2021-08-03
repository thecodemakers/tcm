var evalid=false;
  var nvalid=false;
  $(".email-input").change(function() {
    var email = this.value;
    // console.log(value);
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    $(".err-email").removeClass("d-none").addClass("d-inline");
    evalid=false;
    $(".submit-button").prop("disbaled","true").css("background","lightgrey");
  }else{
    $(".err-email").removeClass("d-inline").addClass("d-none");
    evalid=true;
  }
  if(nvalid==true && evalid==true){
    $(".submit-button").removeAttr("disbaled")
      $(".submit-button").css("background","#18d26e");
  }
  });
  $(".name-input").change(function() {
    var name = this.value;
    // if()
    if(name.trim() == ''){
      $(".err-name").removeClass("d-none").addClass("d-inline")
      nvalid=false;
      $(".submit-button").prop("disbaled","true").css("background","lightgrey");
    }
    var regex = /^([a-zA-Z])[a-zA-Z ]*$/;
    if(!regex.test(name.trim())){
      $(".err-name").removeClass("d-none").addClass("d-inline")
      nvalid=false;
      $(".submit-button").prop("disbaled","true").css("background","lightgrey");
    }
    else{
      $(".err-name").removeClass("d-inline").addClass("d-none")
      nvalid=true;
    }
    if(nvalid==true && evalid==true){
      $(".submit-button").removeAttr("disbaled")
       $(".submit-button").css("background","#18d26e");  }
  });