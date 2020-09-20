---
id: introduction
title: Introduction
slug: /
custom_edit_url: null
---

This project is an experiment to define web components in a declarative way.
It introduces the new tag `<component>` to HTML.

Imagine you can define a web component like this:

import ShowExample from './show-example'

<ShowExample file="awesome-alert.html" />

### Result:

import LoadExample from './load-example'

<LoadExample file="awesome-alert.html" />

This is great because we can change `p` style without affecting `p` style outside of the component.
Also, we do not need javascript to register custom elements. Of course, since this project uses
a polyfill to support `<component>` JS is required.