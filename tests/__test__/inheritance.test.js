test('inherit from other custom element should appear as root element on definition', () => {
  document.body.innerHTML = `
    <component name="great-box"></component>
    <component name="small-box" extends="great-box"></component>
  `;

  require('../../component-polyfill.js');

  window.document.dispatchEvent(new Event("DOMContentLoaded"));
  
  let component = document.querySelector('[name="small-box"]');
  let template = component.getElementsByTagName("template")[0];
  let rootElement = template.content.firstElementChild;

  expect(component.getAttribute('extends')).toBe('great-box');
  expect(rootElement.nodeName.toLowerCase()).toBe('great-box');
});


test('inherit from other custom element should appear as root element on instance', () => {
  document.body.innerHTML = `
    <component name="awesome-box"></component>
    <component name="big-box" extends="awesome-box"></component>

    <big-box></big-box>
  `;

  require('../../component-polyfill.js');

  window.document.dispatchEvent(new Event("DOMContentLoaded"));
  
  let component = document.getElementsByTagName('big-box')[0];
  let rootElement = component.shadowRoot.firstElementChild;

  expect(rootElement.nodeName.toLowerCase()).toBe('awesome-box');
});
