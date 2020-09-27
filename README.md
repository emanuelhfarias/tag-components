# Tag Components

This project is an experiment to define web components in a declarative way. It introduces the new tag `<component>` to HTML. It also implements a polyfill, see  `component-polyfill.js`.

### How to use?
Just add this script tag in the `<head>` of your HTML, like this:
```html
 <head>
   <script src="https://unpkg.com/tag-components@0.1.2/component-polyfill.js"></script>
 </head>
```

If you want to import in a JS file, install package from npm:
```sh
$ yarn add tag-components
```
then
```javascript
const registerComponents = require('tag-components');
```
