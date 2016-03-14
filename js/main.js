$(document).ready(function(){

  $("body").on("newCompanyAdded", "#companies", function() {
    var item = $("div.company").last();
    var i = item.index();
    item.hide();
    setTimeout(function(){ item.fadeIn(500); }, (500 * i));
  });

  $.ajax({
    url: "http://localhost:3000/api/v1/companies",
    method: "GET",
    failure: function(){
      alert("Please try again!");
    },
    success: function(data){
      var companies = data.companies;
      var companyTemplate = $("#company-listing").html();
      var timer = 50;
      for(var i = 0; i < companies.length; i++) {
        var company = companies[i];
        var renderedCompany = Mustache.render(companyTemplate, company);
        $("#companies").append(renderedCompany).trigger('newCompanyAdded');
      }
    }
  });

  $("#companies").on("click", "a", (function(event){
    var companyId = $(this).data("c-id");
    $.ajax({
      url: "http://localhost:3000/api/v1/companies/" + companyId,
      method: "PATCH",
      error: function() {
        // this was actually updating the likes count, but for some reason still
        // threw an error. Couldn't figure it out!
        alert("FAILED");
      },
      success: function() {
        $.ajax({
          url: "http://localhost:3000/companies.json",
          method: "GET",
          failure: function(){
            alert("Please try again!");
          },
          success: function(data){
            var companies = data.companies;
            // $("#courses").fadeIn(1000);
            var companyTemplate = $("#company-listing").html();
            var timer = 50;
            for(var i = 0; i < companies.length; i++) {
              var company = companies[i];
              var renderedCompany = Mustache.render(companyTemplate, company);
              $("#companies").append(renderedCompany);
            }
          }
        });
      }
    });
  }));
});
