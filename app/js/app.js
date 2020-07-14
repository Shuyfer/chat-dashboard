$(document).ready(function() {
    // $('body').hide()
    $('.add-file').hide();

    $('.left__menu').on('click', function() {
        $(this).css('display', 'none');
        $('.list__chats').css({'grid-column': '1/3', 'margin-left': '30px'});
        $('.open-menu').css('display', 'block');
        $('.chat').css('grid-column', '3/7');
    });
    $('.open-menu').on('click', function() {
        $(this).css('display', 'none');
        $('.list__chats').css({'grid-column': '2/4', 'margin-left': '0px'});
        $('.chat').css('grid-column', '4/7');
    });
});

    $(function(){
        $('#add-files-btn').hover(function(){
                $('#add-file').show();
                $('#add-video').show(200);
                $('#add-image').show(400);
            },
        function(){
            if($('#add-file').is(":hover"))
                $('.add-file').hide();
        });
    });
// $(function () {
//     $('.left__menu').on('click', function() {
//         alert('');
//         $('.shape').css('color', 'red');
//     });
//
// });
