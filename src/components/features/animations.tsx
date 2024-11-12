import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export const testAnimation = (cardRef: HTMLDivElement[]) => {

  gsap.registerPlugin(ScrollTrigger)
    const t1 = gsap.timeline({
      scrollTrigger: {
          trigger: cardRef[0],
          start: 'top 75%', // when the top of the trigger hits the bottom 25% mark of the viewport
          end: '+=0', // end immediately after starting, so it doesn't stretch beyond the start
          scrub: false, // disable scrubbing, so the animation happens all at once
          once: true // trigger the animation only once
      }
    });

    for (const card of cardRef) {
      t1.from(card, {
        opacity: 0,
        duration: 3
      }, 0);
    }

}

export const onHoverBobAnimation = (cardRef: HTMLDivElement) => {
  
  let  hover = false;
  cardRef.addEventListener("mouseenter", hoverOn);
  cardRef.addEventListener("mouseleave", hoverOff);
  const tween = gsap.to(cardRef, {
    duration:1, 
    y: -3,
    paused:true,                                
    repeat:1, 
    yoyo:true, 
    ease:"sine.inOut",
    onComplete:checkHover                                
  });
  
  function hoverOn() {
    hover = true
    console.log(tween.totalProgress())
    tween.play()
    if(tween.totalProgress() == 1){
      tween.restart()
    }
  }
  
  function hoverOff() {
    hover = false
  }
  
  function checkHover() {
    if(hover){
      tween.restart()
    }
  }
}

export const onLoadSimultaneousAnimation = (cardRef: HTMLDivElement[]) => {

  gsap.registerPlugin(ScrollTrigger)
    const t1 = gsap.timeline({
      scrollTrigger: {
          trigger: cardRef[0],
          start: 'top 75%', // when the top of the trigger hits the bottom 25% mark of the viewport
          end: '+=0', // end immediately after starting, so it doesn't stretch beyond the start
          scrub: false, // disable scrubbing, so the animation happens all at once
          once: true // trigger the animation only once
      }
    });
  // const t1 = gsap.timeline({ defaults: { ease: 'power3.out' } });

  let left = true, top = true;

  for (const card of cardRef) {
    t1.from(card, {
      x: Number(`${left ? '-' : ''}500`),
      y: Number(`${top ? '0' : '500'}`),
      opacity: 0,
      duration: 2
    }, 0);

    if (left && top) {
      left = false;
    } else if (!left && top) {
      top = false;
      left = true;
    } else {
      left = false;
      top = false;
    }
    
  }
}

export const onLoadSimultaneousHeader = (
  navRef: HTMLDivElement[],
  headerRef: HTMLDivElement | null,
  contactRef: HTMLDivElement | null
) => {
  const t1 = gsap.timeline({ defaults: { ease: 'power3.out' } });

  t1.from(navRef[1], {
    x: -300,
    y: -300,
    duration: 1.5
  }, 0)
  t1.from(navRef[0], {
    x: -300,
    y: -300,
    duration: 1.5
  }, 0)

  t1.from(navRef[2], {
    x: 300,
    y: -300,
    duration: 1.5
  }, 0)
  t1.from(navRef[3], {
    x: 300,
    y: -300,
    duration: 1.5
  }, 0)
  t1.from(headerRef, {
    x: -300,
    y: -300,
    duration: 1.5
  }, 0)
  t1.from(contactRef, {
    x: 300,
    y: -300,
    duration: 1.5
  }, 0)
}


export const onLoadAnimation = (
  projectsHeaderRef: HTMLHeadingElement | null,
  aboutMeRef: HTMLParagraphElement | null,
  nameRef: HTMLHeadingElement | null,
  jobTitleRef: HTMLParagraphElement | null
) => {

  gsap.registerPlugin(TextPlugin);
  const t1 = gsap.timeline({ defaults: { ease: 'power3.out' } });
  // const jobTitles = ["Software Engineer", "Full Stack Developer", "DevOps Engineer", "AWS Certified Solution's Architect"]

  t1.from(projectsHeaderRef, {
    duration: 2,
    rotate: '-=360',
    y: -500,
    x: -500
  })
  t1.from(aboutMeRef, {
    duration: 1,
    ease: "bounce.out",
    y: -500
  }, 1.25);
  t1.from(jobTitleRef, {
    duration: 1,
    ease: "bounce.out",
    y: -500
  }, 1.75);
  t1.from(nameRef, {
    duration: 4,
    opacity: 0,
    ease: "none",
  }, 3),
  t1.to(jobTitleRef, {
    duration: 2,
    delay: -1,
    text: "Full Stack Developer",
    ease: "none",
  })
  t1.to(jobTitleRef, {
    duration: 2,
    delay: 2,
    text: "DevOps Engineer",
    ease: "none",
  })
  t1.to(jobTitleRef, {
    duration: 2,
    delay: 2,
    text: "AWS Solution's Architect",
    ease: "none",
  })
  t1.to(jobTitleRef, {
    duration: 2,
    delay: 2,
    text: "Software Engineer",
    ease: "none",
  })
}


export const projectsFlyIn = (projectRef: HTMLDivElement[]) => {
  const t1 = gsap.timeline({delay: 3.5, defaults: { ease: 'power3.out' } });
  let axis = 'x', negative = true;

  for (const project of projectRef) {
    t1.from(project, {
      [`${axis}`]: Number(`${negative ? '-' : ''}500`),
      opacity: 0,
      duration: 0.5
    });
    if (axis === 'y') negative = !negative;
    axis = axis === 'x' ? 'y' : 'x';
    
  }
}

export const onLoadHeader = (
  navRef: HTMLDivElement[],
  headerRef: HTMLDivElement | null,
  contactRef: HTMLDivElement | null
) => {
  const t1 = gsap.timeline({ defaults: { ease: 'power3.out' } });

  t1.from(navRef[1], {
    x: -500,
    y: -500,
    duration: 1
  }, .5)
  t1.from(navRef[0], {
    x: -500,
    y: -500,
    duration: 1
  }, 1)

  t1.from(navRef[2], {
    x: 500,
    y: -500,
    duration: 1
  }, .5)
  t1.from(navRef[3], {
    x: 500,
    y: -500,
    duration: 1
  }, 1)
  t1.from(headerRef, {
    x: -500,
    y: -500,
    duration: 1
  }, 1.5)
  t1.from(contactRef, {
    x: 500,
    y: -500,
    duration: 1
  }, 1.5)
}


export const stuckInCeilingAnimation = (gsapTimelineInstance: gsap.core.Timeline, ref1: HTMLDivElement, ref2: HTMLDivElement) => {
  gsapTimelineInstance.to(ref1, {
    y: -500,
    stagger: 1,
    duration: 0.5
  })
  gsapTimelineInstance.to(ref1, {
    duration: .75,
  })
  gsapTimelineInstance.to(ref1, {
    rotation: 10,
    duration: 0.15,
    ease: 'none'
  })
  for (let i = 0; i < 2; i++) {
    gsapTimelineInstance.to(ref1, {
      rotation: -10,
      duration: 0.15,
      ease: 'none'
    })
    gsapTimelineInstance.to(ref1, {
      rotation: 10,
      duration: 0.15,
      ease: 'none'
    })
  }
  gsapTimelineInstance.to(ref1, {
    rotation: -5,
    duration: 1,
  })
  for (let i = 0; i < 2; i++) {
    gsapTimelineInstance.to(ref1, {
      rotation: -10,
      duration: 0.15,
      ease: 'none'
    })
    gsapTimelineInstance.to(ref1, {
      rotation: 10,
      duration: 0.15,
      ease: 'none'
    })
  }
  gsapTimelineInstance.to(ref2, {
    y: -600,
    duration: 1,
    ease: 'none'
  })
  gsapTimelineInstance.to([ref1, ref2], {
    y: 0,
    rotation: 0,
    delay: .35,
    duration: 1
  })

}
