$(document).ready(function() {
    // $('body').hide()
    $('.add-file').hide();

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
});

