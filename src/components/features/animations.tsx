
export const projectsFlyIn = (gsapTimelineInstance, projectRef) => {
  let axis = 'x', negative = true;

  for (const project of projectRef) {
    gsapTimelineInstance.from(project, {
      [`${axis}`]: Number(`${negative ? '-' : ''}500`),
      opacity: 0,
      duration: 0.5
    });
    if (axis === 'y') negative = !negative;
    axis = axis === 'x' ? 'y' : 'x';
    
  }
}


export const stuckInCeilingAnimation = (gsapTimelineInstance, ref1, ref2) => {
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
