const vh = (prop, v, h) => ({
  [prop('Top')]: v,
  [prop('Right')]: h,
  [prop('Bottom')]: v,
  [prop('Left')]: h,
});

const thb = (prop, top, h, bottom) => ({
  [prop('Top')]: top,
  [prop('Right')]: h,
  [prop('Bottom')]: bottom,
  [prop('Left')]: h,
});

const trbl = (prop, top, right, bottom, left) => ({
  [prop('Top')]: top,
  [prop('Right')]: right,
  [prop('Bottom')]: bottom,
  [prop('Left')]: left,
});

// Usage
// TRBL(mod => `border${mod}Color`);
module.exports = prop => function(val) {
  switch (arguments.length) {
    case 1:
      return {
        [prop('')]: val,
      };
      break;
    case 2:
      return vh(prop, ...arguments);
      break;
    case 3:
      return thb(prop, ...arguments);
      break;
    case 4:
      return trbl(prop, ...arguments);
      break;
    default:
      // error
      console.log('error');
  }
}
