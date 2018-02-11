import * as b from "bobril";

declare module "bobril" {
  interface IBobrilComponent {
    onSwipeLeft?(ctx: Object, event: b.IBobrilMouseEvent): boolean;
    onSwipeRight?(ctx: Object, event: b.IBobrilMouseEvent): boolean;
  }
}

let pointerId: number | null;
let startX: number;
let startY: number;
let lastX: number;
let lastY: number;
let totalX: number;
let totalY: number;

function handlePointerDown(ev: b.IBobrilPointerEvent): boolean {
  if (b.pointersDownCount() === 1) {
    pointerId = ev.id;
    startX = ev.x;
    startY = ev.y;
    lastX = startX;
    lastY = startY;
    totalX = 0;
    totalY = 0;
  } else pointerId = null;
  return false;
}

function handlePointerMove(ev: b.IBobrilPointerEvent): boolean {
  if (ev.id === pointerId) {
    totalX += Math.abs(ev.x - lastX);
    totalY += Math.abs(ev.y - lastY);
    lastX = ev.x;
    lastY = ev.y;
  }
  return false;
}

function handlePointerUp(
  ev: b.IBobrilPointerEvent,
  _target: Node | undefined,
  node: b.IBobrilCacheNode | undefined
): boolean {
  if (ev.id === pointerId) {
    pointerId = null;
    let deltaX = Math.abs(ev.x - startX);
    let deltaY = Math.abs(ev.y - startY);
    if (deltaX < 75) return false; // too small horizontal move
    if (deltaY / deltaX >= 0.3) return false; // too much vertial for horizontal move
    if (totalX > deltaX * 1.5) return false; // too much shaking hand
    if (totalY > deltaX * 0.7) return false; // too much shaking hand
    let method = "onSwipe" + (ev.x > startX ? "Right" : "Left");
    b.ignoreClick(ev.x, ev.y);
    b.bubble(node, method, ev);
  }
  return false;
}

export function init() {
  b.addEvent("!PointerDown", 70, handlePointerDown);
  b.addEvent("!PointerMove", 70, handlePointerMove);
  b.addEvent("!PointerUp", 70, handlePointerUp);
}
