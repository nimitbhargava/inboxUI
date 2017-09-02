$(document).ready(function(){
    $('.show-alpha').click(function () {
        $('.recent').hide();
        $('.alphabetically').show();
    });
    $('.show-recent').click(function () {
        $('.alphabetically').hide();
        $('.recent').show();
    });
});