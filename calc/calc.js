$(function(){
    $("#calc_button").click(function(){
        var expression = $("#calc_input").val();
        var result = eval(expression);
        console.log(expression);
        $("#calc_output").text(result)
    });
});