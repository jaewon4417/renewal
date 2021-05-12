(function($){
// 메인 슬라이드
    $(".article1 .slide_group").slick({
        autoplay: true, // 자동재생
        autoplaySpeed: 1000, // 간격시간
        dots: true, // 동그라미버튼
        speed: 600, // 바뀌는시간(생략가능)
        slidesToShow: 1, // 보여질슬라이드수(생략가능)
        slidesToScroll: 1, // 이동슬라이드수(생략가능)
        pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
        pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
        pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
        cssEase: 'linear', // 속도함수(생략가능)
        draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
        fade: true, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
        arrows: false, // 좌우화살표 사용여부(생략가능)
        prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>'
    })

    // article5
    // 미니 슬릭슬라이드
$(".article5 .slide_group2").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    speed: 150, // 바뀌는시간(생략가능)
    slidesToShow: 3, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    cssEase: 'linear', // 속도함수(생략가능)
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    centerMode:true,  // 미니슬라이드모드(slidesToShow 값이 2 이상이어야 함)
    centerPadding:"0px", // 좌우측 끝에 보여질 이미지 넓이값
    // responsive:[
    //     { breakpoint:1025,
    //       settings:{ slidesToShow: 1, centerPadding:"150px" }
    //     },
    //     { breakpoint:501,
    //       settings:{ slidesToShow: 1, centerMode:false }
    //     }
    // ]
})

}) (jQuery)