import { isClick, isEnterOrSpace } from './utils.acessibility.js';

document.querySelectorAll('.card--expandable').forEach(card => {
  const button = card.querySelector('.card__content-title-button');
  const text = card.querySelector('.card__content-text');
  text.setAttribute('aria-hidden', 'true');
  button.setAttribute('tabindex', '0');
  button.setAttribute('role', 'button');
  ['click', 'keydown'].forEach(event => {
    button.addEventListener(event, ev => {
      if (isClick(ev) || isEnterOrSpace(ev)) {
        ev.preventDefault();
      }
      const ariaHiddenVisible = text.getAttribute('aria-hidden') === 'false';
      text.setAttribute('aria-hidden', ariaHiddenVisible ? 'true' : 'false');
    });
  });
});
