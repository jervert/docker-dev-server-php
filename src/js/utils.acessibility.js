export function isClick(ev) {
  return ev.type === 'click';
}

export function isEnter(ev) {
  return ev.keyCode === 'Enter';
}

export function isSpace(ev) {
  return ev.keyCode === 'Space';
}

export function isEnterOrSpace(ev) {
  return isEnter(ev) || isSpace(ev);
}
