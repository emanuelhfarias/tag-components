test('template exists on component definition tag', () => {
  document.body.innerHTML = `
    <component name="awesome-box"></component>
  `;

  require('../../component-polyfill.js');

  window.document.dispatchEvent(new Event("DOMContentLoaded"));

  let component = document.getElementsByTagName("component")[0];
  let template = component.getElementsByTagName("template")[0];

  expect(template).toBeDefined();
});

test('slot exists on component definition tag', () => {
  document.body.innerHTML = `
    <component name="awesome-green-box"></component>
  `;

  require('../../component-polyfill.js');

  window.document.dispatchEvent(new Event("DOMContentLoaded"));

  let component = document.getElementsByTagName("component")[0];
  let template = component.getElementsByTagName("template")[0];
  let slot = template.content.firstElementChild.constructor.name;

  expect(slot).toBe('HTMLSlotElement');
});

test('shadow root exists on component instance', () => {
  document.body.innerHTML = `
    <component name="awesome-yellow-box"></component>
    <awesome-yellow-box></awesome-yellow-box>
  `;

  require('../../component-polyfill.js');

  window.document.dispatchEvent(new Event("DOMContentLoaded"));

  let component = document.getElementsByTagName("awesome-yellow-box")[0];

  expect(component.shadowRoot).toBeDefined();
});

test('slot exists on component instance', () => {
  document.body.innerHTML = `
    <component name="awesome-grey-box"></component>
    <awesome-grey-box></awesome-grey-box>
  `;

  require('../../component-polyfill.js');

  window.document.dispatchEvent(new Event("DOMContentLoaded"));

  let component = document.getElementsByTagName("awesome-grey-box")[0];
  let slot = component.shadowRoot.firstElementChild.constructor.name;

  expect(slot).toBe('HTMLSlotElement');
});