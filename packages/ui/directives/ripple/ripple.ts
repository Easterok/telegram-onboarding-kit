import { Directive } from 'vue';

function rippleShow(e: MouseEvent | TouchEvent) {
  const rootEl = e.currentTarget as HTMLElement | null;

  if (!rootEl) {
    return;
  }

  const ink = rootEl.querySelector(
    "[data-ripple-ink='true']"
  ) as HTMLElement | null;

  if (!ink) {
    return;
  }

  const rect = rootEl.getBoundingClientRect();

  const offset = {
    top:
      rect.top +
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0),
    left:
      rect.left +
      (window.pageXOffset ||
        document.documentElement.scrollLeft ||
        document.body.scrollLeft ||
        0),
  };

  let h = ink.offsetHeight;
  let w = ink.offsetWidth;

  const style = getComputedStyle(ink);

  h -=
    parseFloat(style.paddingTop) +
    parseFloat(style.paddingBottom) +
    parseFloat(style.borderTopWidth) +
    parseFloat(style.borderBottomWidth);
  w -=
    parseFloat(style.paddingLeft) +
    parseFloat(style.paddingRight) +
    parseFloat(style.borderLeftWidth) +
    parseFloat(style.borderRightWidth);

  const maxSize = Math.max(rect.width, rect.height);

  ink.style.width = `${maxSize}px`;
  ink.style.height = `${maxSize}px`;

  const x =
    (e instanceof MouseEvent ? e.pageX : e.touches[0].pageX) -
    offset.left +
    document.body.scrollTop -
    w / 2;
  const y =
    (e instanceof MouseEvent ? e.pageY : e.touches[0].pageY) -
    offset.top +
    document.body.scrollLeft -
    h / 2;

  ink.style.left = `${x}px`;

  ink.style.top = `${y}px`;

  ink.classList.add('tok-ripple-ink_active');

  // memory leak?
  ink.addEventListener(
    'animationend',
    () => {
      ink.classList.remove('tok-ripple-ink_active');
    },
    { once: true }
  );
}

function removeListeners(el: HTMLElement) {
  el.removeEventListener('mousedown', rippleShow);
}

function mounted(el: HTMLElement) {
  const ink = document.createElement('span');

  ink.setAttribute('role', 'presentation');
  ink.setAttribute('aria-hidden', 'true');
  ink.setAttribute('data-ripple-ink', 'true');

  ink.classList.add('tok-ripple-ink');

  el.appendChild(ink);
  el.classList.add('tok-ripple');

  const rect = el.getBoundingClientRect();
  const maxSize = Math.max(rect.width, rect.height);

  ink.style.width = `${maxSize}px`;
  ink.style.height = `${maxSize}px`;

  el.addEventListener('mousedown', rippleShow);
}

function beforeUnmount(el: HTMLElement) {
  removeListeners(el);
}

export const RippleDirective: Directive<HTMLElement> = {
  mounted,
  beforeUnmount,
};
