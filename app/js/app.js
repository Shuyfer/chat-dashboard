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
        $('.left__menu').css({'display': 'flex','grid-column': '1'});

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


// $(function typeIt() {
//     let counter = 0;
//     $('.action-user').removeAttribute("hidden");
//     let i = setInterval(function(){
//         $('.action-user').innerHTML = telecopy.substr(0, counter) + cursor;
//         counter++;
//         alert('');
//         if(counter === telecopy.length + 1) {
//             clearInterval(i);
//         }
//     }, 100);
// });
