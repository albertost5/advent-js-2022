function fitsInOneBox(boxes) {
    let fit = true;
    const boxesSorted = boxes.sort((a,b) =>  a.l - b.l);
    boxesSorted.forEach( (box, index) => {
      if( boxes[index+1] ){
        if( !(box.l < boxes[index+1].l && box.w < boxes[index+1].w && box.h < boxes[index+1].h) ) fit = false;
      }
    });
    
    return fit;
  }