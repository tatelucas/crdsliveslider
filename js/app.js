$(document).foundation()


;(function(e,t,n,r){function u(t,n){o=e.extend({},s,n);if(o.formKey){o["url"]="https://docs.google.com/forms/d/"+o.formKey+"/viewform?embedded=true"}}var i="jqGoogleForms",s={},o={};e.fn[i]=function(t){return this.each(function(n){if(!e.data(this,"plugin_"+i)){e.data(this,"plugin_"+i,new u(this,t))}})};e.fn[i]().sendFormData=function(t){if(o.formKey){e.ajax({url:"https://docs.google.com/forms/d/"+o.formKey+"/formResponse",data:t,type:"POST",dataType:"xml"})}else{console.log("jqGoogleForms: No form key!")}}})(jQuery,window,document)

$.noConflict();
jQuery( document ).ready(function( $ ) {

  $('.slider').on('moved.zf.slider', function(){
    var currentcount = $("#slider-value").val();
    console.log(currentcount);
    $(".slider-handle").html(currentcount);
  });


  var googleForm = $(window).jqGoogleForms({"formKey": "1rupjr7gvqUU203fwjmeUlIiVwCA8BdkD-mP6M6s3wxQ"});
    $("#slider-submit").click(function() {
      var slidervalue = $('#slider-value').val();
      if (slidervalue > 0) {
        googleForm.sendFormData({
          "entry.1403910056": $('#slider-value').val()
        });
        $("#slider-submit").attr("disabled","disabled");
        $(".slider-container").html("<h4 class='strong text-center'>Thank you!.</h4>");
      } else {
        $(".slider-container > .medium-12.columns").append("<div class='alert callout small'>Please select a number higher than 0.</div>");
      }
    });
});
