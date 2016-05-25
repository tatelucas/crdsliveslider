$(document).foundation()

console.log("lorem1");

;(function(e,t,n,r){function u(t,n){o=e.extend({},s,n);if(o.formKey){o["url"]="https://docs.google.com/forms/d/"+o.formKey+"/viewform?embedded=true"}}var i="jqGoogleForms",s={},o={};e.fn[i]=function(t){return this.each(function(n){if(!e.data(this,"plugin_"+i)){e.data(this,"plugin_"+i,new u(this,t))}})};e.fn[i]().sendFormData=function(t){if(o.formKey){e.ajax({url:"https://docs.google.com/forms/d/"+o.formKey+"/formResponse",data:t,type:"POST",dataType:"xml"})}else{console.log("jqGoogleForms: No form key!")}}})(jQuery,window,document)

$.noConflict();
jQuery( document ).ready(function( $ ) {
var googleForm = $(window).jqGoogleForms({"formKey": "1dTkBoeGtI3lpZ633FnKSKpOUjW2oqntxuqtMPUfMM5Q"});
  console.log("lorem2");
  $(".test").click(function() {

    console.log("lorem3");
    var googleForm = $(this).jqGoogleForms({"formKey": "1dTkBoeGtI3lpZ633FnKSKpOUjW2oqntxuqtMPUfMM5Q"});
    googleForm.sendFormData({
        "entry.536674271": $("#brave-at-home-email").val(),
        "entry.1518504969": $("#brave-at-home-username").val(),
        "entry.513917709": $("#brave-at-home-userid").val(),
        "entry.944726760": $("#brave-at-home-help").val(),
        "entry.822227415": $("#brave-at-home-prayer").val(),
    });
  });
});
