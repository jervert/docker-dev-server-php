export function isClick(ev) {
  return ev.type === 'click';
}

export function isEnter(ev) {
  return ev.code === 'Enter';
}

export function isSpace(ev) {
  return ev.code === 'Space';
}

export function isEnterOrSpace(ev) {
  return isEnter(ev) || isSpace(ev);
}
