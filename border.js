const border = {
  borderWidth: number,
  borderStyle: enum('solid', 'dotted', 'dashed'),
  borderColor: color,

  borderTopWidth: number,
  borderTopColor: color,

  borderRightWidth: number,
  borderRightColor: color,

  borderBottomWidth: number,
  borderBottomColor: color,

  borderLeftWidth: number,
  borderLeftColor: color,

  borderRadius: number,
  borderTopLeftRadius: number,
  borderTopRightRadius: number,
  borderBottomRightRadius: number,
  borderBottomLeftRadius: number,
}

function border(width, style, color) {
  return {
    borderWidth: width,
    borderStyle: style,
    borderColor: color,
  }
}

function border(width, color) {
  return {
    borderWidth: width,
    borderColor: color,
  }
}

function border(width, style) {
  return {
    borderWidth: width,
    borderStyle: style,
  }
}

function border(width) {
  return {
    borderWidth: width,
  }
}

function borderWidth(width) {
  return {
    borderWidth: width,
  }
}

function borderWidth(v, h) {
  return {
    borderTopWidth: v,
    borderRightWidth: h,
    borderBottomWidth: v,
    borderLeftWidth: h,
  }
}

function borderWidth(top, h, bottom) {
  return {
    borderTopWidth: top,
    borderRightWidth: h,
    borderBottomWidth: bottom,
    borderLeftWidth: h,
  }
}

function borderWidth(top, right, bottom, left) {
  return {
    borderTopWidth: top,
    borderRightWidth: right,
    borderBottomWidth: bottom,
    borderLeftWidth: left,
  }
}

function borderColor(color) {
  return {
    borderColor: color,
  }
}

function borderColor(v, h) {
  return {
    borderTopColor: v,
    borderRightColor: h,
    borderBottomColor: v,
    borderLeftColor: h,
  }
}

function borderColor(top, h, bottom) {
  return {
    borderTopColor: top,
    borderRightColor: h,
    borderBottomColor: bottom,
    borderLeftColor: h,
  }
}

function borderColor(top, right, bottom, left) {
  return {
    borderTopColor: top,
    borderRightColor: right,
    borderBottomColor: bottom,
    borderLeftColor: left,
  }
}
