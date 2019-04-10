$('.dropdown-child').on('mouseover', function () {
    var $src = $(this),
        $srcImg = $src.find('.source__img').html(),
        $srcTxt = $src.find('.dropdown-child-item').html(),
        $srcSgn = $src.find('.source__sgn').html();
    
    $('.target--img').html($srcImg);
    $('.title').html($srcTxt);
    $('.target--sgn').html($srcSgn);
});
