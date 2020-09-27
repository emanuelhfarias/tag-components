---
id: basics
title: Basics
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import ShowExample from './show-example'
import LoadExample from './load-example'

The most basic component is:

```html
  <component name="my-element"></component>
```

We must define a name, that's it.

Then you can call it:

```html
<my-element>Hello!</my-element>
```

### Result
<img alt="Docusaurus with Keytar" src={useBaseUrl('img/basics-dom-example.png')} />

Examining DOM we can see that has been added inside `<component>` the `<template>` tag with an empty `<slot>`.
When we call the custom element it has been attached a Shadow Root element. Also, every content inside
`<my-element>..</my-element>` will be placed in the `<slot>` location.

The `document-fragment` means that this component is isolated and you can change styles inside and won't affect other elements outside this component.

Until now all components that we define have a name with a dash, which leads us to

### Naming convetions

The recomendation is to use **kebab-case** for naming components with at least two words.
Altought it will work with only one word, HTML can one day make this tag official and you will have a naming conflict.

### Template

Let's give our component a template:

<ShowExample file="basic-template-example.html" />

<LoadExample file="basic-template-example.html" />

<br /><br />

### Style

And now some style:

```html
<component name="country-chooser">
  <template>
    <select>
      <option value="" selected>pick a drink</option>
      <option value="caipirinha">🍹 Caipirinha</option>
      <option value="martini">🍸 Dry Martini</option>
      <option value="wine">🍷 Wine</option>
    </select>
  </template>

  <style>
    select {
      -webkit-appearance: none;
      padding: 0.4rem;
      outline: none;
      border: none;
      border-radius: 0;
      border-bottom: 2px solid #922921;
    }

    select, option {
      font-size: 16px;
      background-color: #c13329;
      color: white;
    }
  </style>
</component>

<country-chooser></country-chooser>
```

<LoadExample file="basic-template-example-styled.html" />

### Slots

The `<slot>` element gives user a way to customize an already existing custom element
by passing content that will replace the slot node in components node tree.

<ShowExample file="submit-button.html" />

<LoadExample file="submit-button.html" />

The example below shows a button with the text being passed.
Slots can accept any element, if fact, you can pass a tree of elemetns.

#### Named Slots
TODO

#### Slots fallback

If you don't specify content when calling the component, it will assume the content that is already on slot.

<ShowExample file="submit-button-fallback.html" />

<LoadExample file="submit-button-fallback.html" />

#### Slots Caveats

Not all elements can be slotted, for exemple, the `<option>` element cannot be slotted with any node tree,
it only accept text.
