"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
  let components = document.getElementsByTagName("component");

  Array.from(components).forEach((component, index) => {
    let componentName = component.getAttribute("name");

    if (componentName) {
      customElements.define(componentName,
        class extends HTMLElement {
          constructor() {
            super()
            let template = component.getElementsByTagName('template')[0];
            let templateContent = template.content;

            const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(templateContent.cloneNode(true));

            let script = component.getElementsByTagName('script')[0];
          }
        }
      );
    }
  })
});