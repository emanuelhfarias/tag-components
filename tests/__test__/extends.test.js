test('extends from p should have p as root element on definition', () => {
  document.body.innerHTML = `
    <component name="authors-title" extends="p"></component>
  `;

  require('../../component-polyfill.js');

  window.document.dispatchEvent(new Event("DOMContentLoaded"));

  let component = document.getElementsByTagName("component")[0];
  let template = component.getElementsByTagName("template")[0];
  let extendsElementClass = template.content.firstElementChild.constructor.name;

  expect(extendsElementClass).toBe('HTMLParagraphElement');
});

test('extends from h2 should have h2 as root element on instance', () => {
  document.body.innerHTML = `
    <component name="little-title" extends="h2"></component>
    <little-title></little-title>
  `;

  require('../../component-polyfill.js');

  window.document.dispatchEvent(new Event("DOMContentLoaded"));

  let component = document.getElementsByTagName("little-title")[0];
  let extendsElementClass = component.shadowRoot.firstElementChild.constructor.name;

  expect(extendsElementClass).toBe('HTMLHeadingElement');
});
