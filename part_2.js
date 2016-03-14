// Visit a Wikipedia page like this one: https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming) then write a peice of jQuery code that will fadeOut any link you click on without following the link. (15%)
$("a").click(function(e){
  e.preventDefault();
  $(this).fadeOut();
});
