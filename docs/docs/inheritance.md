---
id: inheritance
title: Inheritance
custom_edit_url: null
---

import LoadExample from './load-example'
import ShowExample from './show-example'


The `extends` attribute from `<component>` sets the root element of Shadow Tree. You can extends from a custom element. The inheritance happens in style and template. You can start creating a new component
with the same style and template from another one and customize only some parts of it. Leaving some slots can help with that.

Lets start with a simple example:

<ShowExample file="base-badge.html" />

<LoadExample file="base-badge.html" />

<br/><br/>

Now that we defined a **base badge** component we can create a more specific kind of badge, a **numbered badge**. To do that, we are going to extend from the `base-badge`.

<ShowExample file="numbered-badge.html" />

<LoadExample file="numbered-badge.html" />
