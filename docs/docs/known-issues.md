---
id: known-issues
title: Known Issues
custom_edit_url: null
---

The polyfill has three issues:

* Flickering while components have not been registered;

* Maximum call stack size exceeds when the component call itself (component inception);

* usage of `eval()` to load the component's **class** from `<script>` (security concern).

### Inception example

The component call itself.

```html
<component name="cool-table">
  <template>
    <cool-table></cool-table>
  </template>
</component>
```

You can see a message error on dev tools console: `Maximum call stack size...`.

This issue is still open.