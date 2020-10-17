---
id: introduction
title: Introduction
slug: /
custom_edit_url: null
hide_table_of_contents: true
---

This project is an experiment to define web components in a declarative way.
It introduces the new tag `<component>` to HTML.

Imagine you can define a web component like this:

import ShowExample from './show-example'

<ShowExample file="awesome-alert.html" />

### Result:

import LoadExample from './load-example'

<LoadExample file="awesome-alert.html" />

The example above shows us:
1. we can declarative define a new custom element using `<component>` tag;
2. we can style elements inside a component without affecting the same elements outside.
3. we can inherit template and styles from other elements using `extends` attribute.

That's great because now we can create small components just for styling pourpose.
We can see this phenomenon in [style-components](https://styled-components.com) community. People are making small components
just for styling pourpose and making templates more readable.

`tag-components` are not just for slyling. In fact, it also support **template** and **script**, but none of them are required:

<ShowExample file="component-structure.html" />

### Installing

Are you interesting in using this? Just add this Polyfill in the `<head>` of your HMTL, like this:

```html
 <head>
  <script src="https://unpkg.com/tag-components@0.1.2/component-polyfill.js"></script>
 </head>
```

PS: we will use the words `components` and `custom elements` interchangeably in this website.