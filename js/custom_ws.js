const slides = document.querySelectorAll('.visualSlide .swiper-slide');

const mainVisualSlide = new Swiper('.visualSlide', {
    loop: true,
    effect: 'fade',
    touchRatio: 0,//드래그 금지
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    on: {
        init: () => {
            // document.querySelector('h1').innerText = slides[0].querySelector('h2').innerText;
            // const itm = slides[0].querySelector('h2');
            // mainVisualSlideTimeline(itm)

            const itms = slides[0].querySelectorAll('.ani-itm');
            //mainVisualSlideStartTimeline(itms, 0);
            //mainVisualSlideEndTimeline(itms, 0);
            mainVisualSlideTimeline(itms, 0)
        },
        slideChangeTransitionStart: function () {
            //console.log(this.realIndex);
            //document.querySelector('h1').innerText = this.realIndex;
            const itms = slides[this.realIndex].querySelectorAll('.ani-itm');
            //mainVisualSlideStartTimeline(itms, this.realIndex)
            mainVisualSlideTimeline(itms, this.realIndex)
        },

        // slideChangeTransitionEnd: function () {
        //     const itms = slides[this.realIndex].querySelectorAll('.ani-itm');
        //     mainVisualSlideEndTimeline(itms, this.realIndex)
        // }
    }
})


function mainVisualSlideStartTimeline(itm, num) {
    const tl = gsap.timeline();

    tl.set(itm[0], { x: 300, autoAlpha: 0, });
    tl.set(itm[1], { x: 300, autoAlpha: 0, });
    tl.set(itm[2], { x: 300, autoAlpha: 0, });
    tl.set(itm[3], { x: 300, autoAlpha: 0, });
}


function mainVisualSlideEndTimeline(itm, num) {
    const tl = gsap.timeline();

    tl.to(itm[0], { x: 0, autoAlpha: 1, });
    tl.to(itm[1], { x: 0, autoAlpha: 1, });
    tl.to(itm[2], { x: 0, autoAlpha: 1, });
    tl.to(itm[3], { x: 0, autoAlpha: 1, });
}


function mainVisualSlideTimeline(itm, num) {
    // itm.forEach(it => {
    //     gsap.to(it, { clearProps: true })
    // });

    const tl = gsap.timeline();
    tl.fromTo(itm[0], { x: 300, autoAlpha: 0, }, { x: 0, autoAlpha: 1, delay: 1 });
    tl.fromTo(itm[1], { x: 300, autoAlpha: 0, }, { x: 0, autoAlpha: 1, });
    tl.fromTo(itm[2], { x: 300, autoAlpha: 0, }, { x: 0, autoAlpha: 1, });
    tl.fromTo(itm[3], { x: 300, autoAlpha: 0, }, { x: 0, autoAlpha: 1, })
}