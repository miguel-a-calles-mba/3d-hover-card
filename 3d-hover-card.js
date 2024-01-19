/* select cards */
const cssQuery = '.card';

/* rotate card */
const perspective = 500; // pixels
const rotate = 3; // degress
const transformEnter = 0.1; // seconds
const transformLeave = 0.5; // seconds

/* cursor pointer */
const cursorPointerSrc = "./assets/img/cursor-pointer.png";
const xOffset = -262.5; // pixels, half the size of cursor-pointer.png
const yOffset = -262.5; // pixels, half the size of cursor-pointer.png

document.querySelectorAll(cssQuery).forEach(function(el) {
  el.style.overflow = 'hidden';

  /* create cursor pointer */
  const cursorPointerEl = document.createElement('img');
  cursorPointerEl.src = cursorPointerSrc;
  cursorPointerEl.style.position = 'absolute';
  cursorPointerEl.style.zIndex = '1';
  cursorPointerEl.style.marginLeft = `${xOffset*2}px`;
  cursorPointerEl.style.marginTop = `${yOffset*2}px`;
  el.appendChild(cursorPointerEl);

  el.addEventListener("mouseenter", function(event){
    /* rotate card */
    el.style.setProperty("transition", `transform ${transformEnter}s`);
  });

  el.addEventListener("mousemove", function(event){
    /* rotate card */
    const rotateX = rotate * (((this.offsetHeight / 2) - event.layerY) / (this.offsetHeight / 2));
    const rotateY = -rotate * (((this.offsetWidth / 2) - event.layerX) / (this.offsetWidth / 2));
    el.style.setProperty("transform", `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);

    /* cursor pointer */
    cursorPointerEl.style.marginLeft = `${event.layerX + xOffset}px`;
    cursorPointerEl.style.marginTop = `${event.layerY + yOffset}px`;
  });

  el.addEventListener("mouseleave", function(event){
    /* rotate card */
    el.style.setProperty("transition", `transform ${transformLeave}s`);
    el.style.setProperty("transform", `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`);

    /* cursor point */
    cursorPointerEl.style.marginLeft = `${xOffset*2}px`;
    cursorPointerEl.style.marginTop = `${yOffset*2}px`;
  });
});
