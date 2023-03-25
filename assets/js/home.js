//when document is loaded
$(document).ready(function(){
    $('input[type="date"]').change(function(){
        (this.value.split("-").reverse().join("/"));
     });
});
$("#list #description").on("click", function(){
    console.log(this.text())
});