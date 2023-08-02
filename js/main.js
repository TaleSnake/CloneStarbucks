

const badgesEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function () {
   gsap.to(window, .4, {
       scrollTo: 0
   })
});
window.addEventListener('scroll', _.throttle( function() {
    if(window.scrollY > 500) {
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgesEl, .6, {
            opacity: 0,
            display: 'none'
        });
        gsap.to(toTopEl, .2, {
           x: 0
        });
    }else {
        gsap.to(badgesEl, .6, {
            opacity: 1,
            display: 'block'
        });
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }
}, 300));




const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, idx) {
    gsap.to(fadeEl, 1.6, {
        delay: (idx +1) * 0.4,
        opacity: 1,
    })
});


// Swiper
new Swiper('.notice .swiper', {
    // Optional parameters
    direction: 'vertical',
    autoplay: true,
    loop: true,
});

new Swiper('.promotion .swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,    // 노출 수
    spaceBetween: 10,   // 사이여백
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //     delay:500
    // }

    // If we need pagination
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable:true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.promotion .swiper-next',
        prevEl: '.promotion .swiper-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});
new Swiper('.awards .swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 5,    // 노출 수
    spaceBetween: 20,   // 사이여백
    loop: true,
    autoplay: true,
    // Navigation arrows
    navigation: {
        nextEl: '.awards .swiper-next',
        prevEl: '.awards .swiper-prev',
    },
});


const promotionEl = document.querySelector('.promotion')
const promoToggleEl = document.querySelector('.toggle-promotion')
let isHidePromo = false

promoToggleEl.addEventListener('click', function () {
    isHidePromo = !isHidePromo
    if(isHidePromo) {
        promotionEl.classList.add('hide');
    }else {
        promotionEl.classList.remove('hide');
    }
})


function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObj(selector, delay, size) {
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: delay
    })
}

floatingObj('.floating1', 1, 15)
floatingObj('.floating2', .5, 15)
floatingObj('.floating3', 1.5, 20)



const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({ // 화면에 보여진다는 판단 근거
            triggerElement: spyEl,
            triggerHook: .6
        })
        .setClassToggle(spyEl, 'show') // 실행될 부분  class에 show 라는 클레스를 추가해 준다.
        .addTo(new ScrollMagic.Controller());
})

