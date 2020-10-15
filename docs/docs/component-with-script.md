---
id: component-with-script
title: Component with Script
custom_edit_url: null
hide_table_of_contents: true
---

import LoadExample from './load-example'
import ShowExample from './show-example'

A component may be composed of three parts: **template**, **style** and **script**. None of them are required.

<ShowExample file="component-structure.html" />

Until now we saw template and style. Let's get started with `<script>`.

HTML Custom Elements must be registered with a class inheriting from an existing element class, such as HTMLElement.

The script tag must contain a class with the same name of the component but written in CamelCase.

The following example shows the component's class implementing the **connectedCallback** method which is part of the lifecycle from web components. This method is called once the component is appended to the DOM.

<ShowExample file="component-with-script.html" />

<LoadExample file="component-with-script.html" />
