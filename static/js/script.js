document.addEventListener("DOMContentLoaded", function(event) {
    
    
    // 220220 change to 6 from 7
    // best sellers book slider
    $('.bestSellers').slick({
        // 160220 set autoplay: false
        autoplay: false,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1020,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // new and trending book slider
    $('.newAndTrending').slick({
        // 160220 set autoplay: false
        autoplay: false,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1020,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    // best deal book slider
    $('.bestDeal').slick({
        // 160220 set autoplay: false
        autoplay: false,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1020,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    // 0902 for bootstrap spinner
    $("#quantity").inputSpinner();
    
    
    // newsletter subscription AJAX
    $("#subscription").click(function() {
       let sub_email = $("#sub_email").val(); 
       
        $.ajax({
            url: "/subscription/",
            type:'GET',
            data: {
                'sub_email': sub_email
            },
            dataType: 'html',
            success: function (response) {
                subscribed = JSON.parse(response);
                if (subscribed[0] === 'True') {
                    alert('You have successfully subscribed to our newsletter. Check your email for confirmation.');
                }
            }
        });
    });
});

	