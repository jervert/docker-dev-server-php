import { isClick, isEnterOrSpace } from './utils.acessibility.js';
import { uuid } from './vendor.js';

document.querySelectorAll('.card--expandable').forEach(card => {
  const id = `text-${uuid()}`;
  const button = card.querySelector('.card__content-title-button');
  const text = card.querySelector('.card__content-text');
  text.setAttribute('aria-hidden', 'true');
  button.setAttribute('aria-controls', id);
  text.setAttribute('id', id);
  button.setAttribute('tabindex', '0');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('role', 'button');
  ['click', 'keydown'].forEach(event => {
    button.addEventListener(event, ev => {
      if (isClick(ev) || isEnterOrSpace(ev)) {
        ev.preventDefault();
        const ariaHiddenVisible = text.getAttribute('aria-hidden') === 'false';
        button.setAttribute(
          'aria-expanded',
          ariaHiddenVisible ? 'false' : 'true'
        );
        text.setAttribute('aria-hidden', ariaHiddenVisible ? 'true' : 'false');
      }
    });
  });
});
