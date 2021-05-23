$(document).ready(function() {

    var owl = $('.owl-carousel').owlCarousel({
        mouseDrag: false,
        loop: true,
        margin: 2,
        nav: true,
        navText: ["<div class='nav-btn prev-slide'><img src='assets/images/prev.png'></div>", "<div class='nav-btn next-slide'><img src='assets/images/next.png'></div>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });

    if (owl) {
        if ($('.owl-item.active').length == 1) {
            $('.owl-item .item').removeClass('show');
            $('.owl-item.active .item').addClass("show");
        }
    }

    owl.on('resize.owl.carousel resized.owl.carousel ',
        function(e) {
            $('.owl-item .item').removeClass('next');
            $('.owl-item .item').removeClass('prev');
            if ($('.owl-item.active').length > 1) {
                $active = $('.owl-item .item.show');
                $('.owl-item .item.show').removeClass('show');
                $('.owl-item .item').removeClass('next');
                $('.owl-item .item').removeClass('prev');
                $active.addClass('prev');
                if ($active.is('.last')) {
                    $('.owl-item .first').addClass('show');
                    $('.owl-item .first').parent().next().children('.item').addClass('prev');
                } else {
                    $active.parent().next().children('.item').addClass('show');
                    if ($active.parent().next().children('.item').is('.last')) {
                        $('.owl-item .first').addClass('next');
                    } else {
                        $('.owl-item .show').parent().next().children('.item').addClass('next');
                    }
                }
            } else {
                $('.owl-item .item').removeClass('show');
                $('.owl-item.active .item').addClass("show");
            }
        });

    $('.owl-prev').click(function() {
        $('.owl-item .item').removeClass('next');
        $('.owl-item .item').removeClass('prev');
        if ($('.owl-item.active').length > 1) {
            $active = $('.owl-item .item.show');
            $('.owl-item .item.show').removeClass('show');
            $active.addClass('next');

            if ($active.is('.first')) {
                $('.owl-item .last').addClass('show');
                $('.first').addClass('next');
                $('.owl-item .last').parent().prev().children('.item').addClass('prev');
                console.log($('.first').addClass('next'));
            } else {
                $active.parent().prev().children('.item').addClass('show');
                if ($active.parent().prev().children('.item').is('.first')) {
                    $('.owl-item .last').addClass('prev');
                } else {
                    $('.owl-item .show').parent().prev().children('.item').addClass('prev');
                }
            }
        } else {
            $('.owl-item .item').removeClass('show');
            $('.owl-item.active .item').addClass("show");
        }
    });

    $('.owl-next').click(function() {
        $('.owl-item .item').removeClass('next');
        $('.owl-item .item').removeClass('prev');
        if ($('.owl-item.active').length > 1) {
            $active = $('.owl-item .item.show');
            $('.owl-item .item.show').removeClass('show');
            $('.owl-item .item').removeClass('next');
            $('.owl-item .item').removeClass('prev');
            $active.addClass('prev');
            if ($active.is('.last')) {
                $('.owl-item .first').addClass('show');
                $('.owl-item .first').parent().next().children('.item').addClass('prev');
            } else {
                $active.parent().next().children('.item').addClass('show');
                if ($active.parent().next().children('.item').is('.last')) {
                    $('.owl-item .first').addClass('next');
                } else {
                    $('.owl-item .show').parent().next().children('.item').addClass('next');
                }
            }
        } else {
            $('.owl-item .item').removeClass('show');
            $('.owl-item.active .item').addClass("show");
        }
    });


    $(".opt-first-1").change(function() {
        if (this.checked) {
            $('#first_slide').show();
            $('#second_slide').hide();
        }
    });
    $(".opt-first-2").change(function() {
        if (this.checked) {
            $('#second_slide').show();
            $('#first_slide').hide();
        }
    });
    $(".opt-sec").change(function() {
        const checked = $(this).is(':checked');
        $(".opt-sec").map((i, el) => {
            $(el).prop("checked", false);
        });
        $(this).prop("checked", checked);
    });

});