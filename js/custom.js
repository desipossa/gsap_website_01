

function smothScroll() {
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0);

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}


smothScroll();


function sodaTimeline() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.section02',
            start: '0 90%',
            end: '50% 50%',
            //pin: true,
            scrub: 0.3,
            //markers: true,
        }
    });

    tl.set('.section01 .inner .itm', {
        background: 'var(--src-img) 0 0, url(./images/soda_mockup.png)',
        //duration: 10,
    })

    tl.to('.section01 .inner .itm', {
        x: 1135,
        y: 1000,
        background: 'var(--src-img) -960px 0, url(./images/soda_mockup.png)',
        //duration: 10,
    })



}

sodaTimeline();

function section02Timeline() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.section02',
            start: '0 0',
            //end: '0 0',
            pin: true,
            scrub: 1,
            //markers: true,
        }
    });

    tl
        .from('.section02 .inner h2', {
            x: 600,
            autoAlpha: 0,
        }, '+=0.5')
        .from('.section02 .inner p', {
            x: 600,
            autoAlpha: 0,
        }, '+=0.5')
}

section02Timeline();


function section03Timeline() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.section03',
            start: '0 0',
            end: '300% 0',
            pin: true,
            scrub: 1,
            markers: true,
        }
    });

    tl.set('.section03 .inner .itm', {
        autoAlpha: 0
    });
    tl.set('.section03 .inner .itm', {
        background: 'var(--src-img) 0 0, url(./images/soda_mockup.png)',
    })

    tl
        .from('.section03 .inner h2', {
            x: 600,
            autoAlpha: 0,
        })
        .from('.section03 .inner p', {
            x: 600,
            autoAlpha: 0,
        })
        .to('.section03 .inner .itm', {
            autoAlpha: 1
        })
        .to('.section03 .inner .itm', {
            autoAlpha: 1,
            background: 'var(--src-img) -96rem 0, url(../images/soda_mockup.png)',
            duration: 10,
        })
}
section03Timeline()