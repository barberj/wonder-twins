function fetchData(){
  $.ajax({
    url: "/transactions"
  }).done(function (data){
    console.log(data);
  });
};

$( document ).ready(function() {
  fetchData();
});
