test('attributes should propagate to root element h2', () => {
  document.body.innerHTML = `
    <component name="little-box" extends="h2"></component>
    <little-box color="silver"></little-box>
  `;

  require('../../component-polyfill.js');

  window.document.dispatchEvent(new Event("DOMContentLoaded"));

  let component = document.getElementsByTagName("little-box")[0];
  let rootElement = component.shadowRoot.firstElementChild;

  expect(rootElement.getAttribute('color')).toBe('silver');
});