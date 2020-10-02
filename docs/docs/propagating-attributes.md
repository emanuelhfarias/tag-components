---
id: propagating-attributes
title: Propagating Attributes
custom_edit_url: null
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import ShowExample from './show-example'
import LoadExample from './load-example'

To facilitate styling based on attributes, `tag-components` propagates every attribute defined in the custom element to the root element of shadow tree.

<ShowExample file="propagating-attribute-alert-box.html" />

<LoadExample file="propagating-attribute-alert-box.html" />

You can see the `<p>` element has the same attribute `success` defined in `<alert-box>`. `tag-components` propagates so you can easely add styles based on this attribute. The other way would be to style based on `:host[success]`.

<img alt="Propagating Attributes" src={useBaseUrl('img/alert-box-attribute.png')} />

### Defining template

Let's say you want to define your own template for your component, how attributes propagation will work?

<ShowExample file="propagating-attribute-with-template.html" />

<LoadExample file="propagating-attribute-with-template.html" />

Examining the DOM you can see the attributes passed in `my-alert` will propagate to
the root element (in this case `p`). Also, since the root element already has an attribute,
it will merge maintaining both.

<img alt="Propagating Attributes with templates" src={useBaseUrl('img/propagating-attribute-with-template.png')} />
