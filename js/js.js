

 $(document).ready(function(){
    $("button").click(function() {
    $('html,body').animate({
        scrollTop: $("#learn-more").offset().top-100},
        'slow');
});
 });