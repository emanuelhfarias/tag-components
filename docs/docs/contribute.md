---
id: contribute
title: Contribute
custom_edit_url: null
hide_table_of_contents: true
---

The easiest way to contribute is to improve the website content.
If you find any english errors or want to complement any text you can open
a Pull Request on [GihHub repository](https://github.com/emanuelhfarias/tag-components/tree/master/docs). You don't need to clone the repository to change the docs.
You can write markdown direct on GitHub.

This website is made using [Docusaurus 2](https://v2.docusaurus.io/). All articles are written in Markdown.

Here are the list of articles:

* [Introduction](https://github.com/emanuelhfarias/tag-components/blob/master/docs/docs/introduction.md)
* [Basics](https://github.com/emanuelhfarias/tag-components/blob/master/docs/docs/basics.md)
* [Propagating Attributes](https://github.com/emanuelhfarias/tag-components/blob/master/docs/docs/propagating-attributes.md)
* [Inheritance](https://github.com/emanuelhfarias/tag-components/blob/master/docs/docs/inheritance.md)
* [Component with Script](https://github.com/emanuelhfarias/tag-components/blob/master/docs/docs/component-with-script.md)
* [Proposal](https://github.com/emanuelhfarias/tag-components/blob/master/docs/docs/proposal.md)
* [Contribute](https://github.com/emanuelhfarias/tag-components/blob/master/docs/docs/contribute.md)
* [Known Issues](https://github.com/emanuelhfarias/tag-components/blob/master/docs/docs/known-issues.md)

## Community Components

Another way to contribute is adding your own component to the list of
**Community Components**.

All components should have the code and an live example.
Since Markdown does't accept custom elements, we are using [MDX](https://mdxjs.com/),
which accepts us to write markdown and call React Components inside markdown.

To add a new component you need to create two files, one for the article and other for the compoenent's code.

* the article should go to `docs/components/your-component.md`
* the component's code shoud go to `docs/components-sources/your-component.html`

To show the component's code you just need to call this function:

```jsx
<ShowExample file="your-component.html" />
```

and to show the component itself, call this function

```jsx
<LoadExample file="your-component.html" />
```

Don't forget to import these functions first:

```jsx
import LoadExample from '../load-example'
import ShowExample from '../show-example'
```

Here is an [example](https://github.com/emanuelhfarias/tag-components/blob/master/docs/docs/components/alert-box.md).

### caveats

Everytime you change `your-component.html`, you need to restart the server: `yarn start`.

## Polyfill

If you want to see or change the Polyfill, this is the code your are looking for:
[component-polyfill.js](https://github.com/emanuelhfarias/tag-components/blob/master/component-polyfill.js)

#### Automated Tests

The polyfill tests are written using [Jest](https://jestjs.io/).
You can see the tests [here](https://github.com/emanuelhfarias/tag-components/tree/master/tests).
