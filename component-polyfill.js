"use strict";

(() => {
  function registerComponents () {
    let components = document.getElementsByTagName("component");

    Array.from(components).forEach((component) => {
      register(component)
    })

    function register(component) {
      let componentName = component.getAttribute('name');

      if (!componentName) {
        console.warn('components must have a name attribute');
        return;
      }

      registerTemplate(component);
      registerRootElement(component);
      registerStyle(component);

      let scriptTag = component.getElementsByTagName('script');

      if (customElements.get(componentName) === undefined) {
        if (scriptTag.length > 0) {
          // TODO: don't use eval
          customElements.define(componentName, baseHtmlElementClass(component, eval(`(${scriptTag[0].text.trim()})`)));
        } else {
          customElements.define(componentName, baseHtmlElementClass(component));
        }
      }
    }

    function registerTemplate(component) {
      let template = component.getElementsByTagName('template')
      if (template.length === 0) {
        component.insertBefore(document.createElement('template'), component.firstChild);
      }
    }

    function registerRootElement(component) {
      let extendsElement = component.getAttribute('extends');
      let componentName = component.getAttribute('name');

      if (componentName === extendsElement) {
        console.warn("components can't inherit from itself.");
        return;
      }

      let template = component.getElementsByTagName('template');
      if (template[0].content.firstElementChild === null) {
        let slot = document.createElement('slot');
        let rootElement = slot;

        if (extendsElement) {
          rootElement = document.createElement(extendsElement);
          rootElement.appendChild(slot);
        }

        template[0].content.appendChild(rootElement);
      }
    }

    function registerStyle(component) {
      let style = component.getElementsByTagName('style');
      if (style.length > 0) {
        component.getElementsByTagName('template')[0].content.appendChild(style[0]);
      }
    }

    function baseHtmlElementClass (component, componentsClass) {
      if (!componentsClass) componentsClass = HTMLElement;

      return class extends componentsClass {
        constructor(...args) {
          const self = super(...args);

          let template = component.getElementsByTagName('template')[0];
          if (template) {
            let templateContent = template.content;
            const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(templateContent.cloneNode(true));
          }

          this.propagateAttributes()

          return self;
        }

        propagateAttributes() {
          let rootElement = this.shadowRoot.firstElementChild

          Array.from(this.attributes).forEach((attribute) => {
            rootElement.setAttribute(attribute.name, attribute.value);
          })
        }
      }
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = registerComponents;
  } else {
    document.addEventListener("DOMContentLoaded", function(event) {
      registerComponents();
    });
  }
})()