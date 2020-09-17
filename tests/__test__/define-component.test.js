test('automatically define a custom element', () => {
  document.body.innerHTML = `
    <component name="green-box"></component>
  `;

  require('../../component-polyfill.js');

  window.document.dispatchEvent(new Event("DOMContentLoaded"));

  expect(window.customElements.get('green-box')).toBeDefined();
  expect(window.customElements.get('random-component')).toBeUndefined();
});

test('automatically define several custom elements', () => {
  document.body.innerHTML = `
    <component name="alert-box"></component>
    <component name="select-menu"></component>
    <component name="authors-title"></component>
    <component name="books-title"></component>
  `;

  require('../../component-polyfill.js');

  window.document.dispatchEvent(new Event("DOMContentLoaded"));

  expect(window.customElements.get('alert-box')).toBeDefined();
  expect(window.customElements.get('select-menu')).toBeDefined();
  expect(window.customElements.get('authors-title')).toBeDefined();
  expect(window.customElements.get('books-title')).toBeDefined();
});