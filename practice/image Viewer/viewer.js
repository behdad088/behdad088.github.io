$(function(){
    test();
});



function test(){
    $('.viewer-unit').first().addClass('viewer-active');
    $('.selector-unit').first().addClass('viewer-active');
    setInterval(viewerTimer, 4000)

    $('.selector-unit').click(function(){
        var siblings = $(this).parent().children(),
            position = siblings.index($(this));
        console.log(position);
        $('.viewer-unit').removeClass('viewer-active').eq(position).addClass('viewer-active');
        siblings.removeClass('viewer-active');
        $(this).addClass('viewer-active');
    });



    $('.view-next, .view-prev').click(function(){
        var curActive = $('.viewer-belt').find('.viewer-active'),
            position = $('.viewer-belt').children().index(curActive),
            num = $('.viewer-belt').children().length;

        if($(this).hasClass('view-next')){
            if(position < num -1){
                $('.viewer-active').removeClass('viewer-active').next().addClass('viewer-active');
            }else{
                $('.viewer-unit').removeClass('viewer-active').first().addClass('viewer-active');
                $('.selector-unit').removeClass('viewer-active').first().addClass('viewer-active');
            }
        }else{
            if(position == 0){
                $('.viewer-unit').removeClass('viewer-active').last().addClass('viewer-active');
                $('.selector-unit').removeClass('viewer-active').last().addClass('viewer-active');
            }else{
                $('.viewer-active').removeClass('viewer-active').prev().addClass('viewer-active');
            }
        }
    });
}
function viewerTimer(){
    var curActive = $('.viewer-belt').find('.viewer-active'),
        position = $('.viewer-belt').children().index(curActive),
        num = $('.viewer-belt').children().length;

    if(position < num -1){
        $('.viewer-active').removeClass('viewer-active').next().addClass('viewer-active');
    }else{
        $('.viewer-unit').removeClass('viewer-active').first().addClass('viewer-active');
        $('.selector-unit').removeClass('viewer-active').first().addClass('viewer-active');
    }
}
