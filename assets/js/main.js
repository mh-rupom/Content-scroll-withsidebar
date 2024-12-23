// alert('hello')
(function($){
    $(document).on('click','.item_h2, .item_h3',function(){
        let data_id = $(this).data('id');
        window.history.pushState(null, null, `#${data_id}`);
        let target_element = $('#'+data_id);
        if (target_element.length) {
            let target_offset = target_element.offset().top; 
            $('html, body').animate({ scrollTop: target_offset - 10}, 800, function () {
                // console.log('Animation completed'); 
            });
        }
    })
    $('.sidebar_item:first').css({
        'background': '#6c5ce7',
        'color': 'white',
    });
    $(window).scroll(function () {
        let content_top = $('.cs_container').offset().top; 
        $('.item_h2_or_h3').each(function () {
            let item_top = $(this).offset().top; 
            let scroll_position = $(window).scrollTop(); 
            if (item_top - scroll_position <= 30 && item_top - scroll_position >= 0) {
                let a_item_id = $(this).attr("id");
                $('.sidebar_item').css('background', '');
                $('.sidebar_item').css('color', '');
                $(`.sidebar_item[data-id="${a_item_id}"]`).css({
                    'background': '#6c5ce7',
                    'color': 'white',
                });
            }
        });
    });
})(jQuery)