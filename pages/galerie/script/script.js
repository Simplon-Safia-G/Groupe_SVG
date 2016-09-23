function setGalery(){
  var dir = "/pages/galerie/galery/";
  var ext = ".svg";
  var i = 1;

  $.ajax({
    url: dir,
    type: "get",
    dataType: "svg",
    error: function(err){
      console.log(err)
    },
    success: function(data){
      console.log($(data));
      $(".main").html("<section class='page"+ i +" tps-section'></section>");
      console.log(this);
      $(data).each(function(){
        console.log("this = ", this);
        var filename = this.url;
        console.log("filename =", filename);
        var elem = document.createElement("div");
        elem.setAttribute("style", "background:url("+filename+") center center; background-repeat: no-repeat; background-size: contain;");
        elem.setAttribute("class", "tps-wrapper");
        $(".main").children("section").append(elem);
      })
      i++;
    }
  });
};

$(document).on('ready', setGalery);
