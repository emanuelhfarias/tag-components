---
id: introduction
title: Introduction
slug: /
custom_edit_url: null
---

This project is an experiment to define web components in a declarative way.
It introduces the new tag `<component>` to HTML.

Image you can define a web component like this:
```html
<component name="awesome-alert" extends="p">
  <style>
    p {
      color: #FFF;
      background-color: #3778e5;
      border-radius: 6px;
    }
  </style>
</component>

<awesome-alert>awesome box!</awesome-alert>
```

### Result:
<awesome-alert>awesome box!</awesome-alert>

Awesome!