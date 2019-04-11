$('.source').on('mouseover', function () {
    var $src = $(this),
        $srcImg = $src.find('.subtitle-logo').html(),
        $srcTxt = $src.find('.dropdown-child-item').html(),
        $srcSgn = $src.find('.subtitle-text').html();
    
    $('.sub-logo').html($srcImg);
    $('.title').html($srcTxt);
    $('.sub-text').html($srcSgn);
});
