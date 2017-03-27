# Typescript Definitions for [Mithril 1.1](https://github.com/lhorie/mithril.js)

Requires TypeScript 2.x.

This is the **global** version of [mithril types](https://github.com/spacejack/mithril.d.ts). Use this when you want to include mithril.js in a separate script tag and use the `m` global.

## Install

When this is merged to DefinitelyTyped, you can install with:

	npm install @types/mithril-global

Alternately, install directly from this Github repo with:

	npm install -D github:spacejack/mithril-global.d.ts#dt-global

If you are writing modules but are NOT bundling mithril (using mithril.js in a script tag) then you will need to add the following type definition file to your project:

```typescript
// types.d.ts
import * as _m from 'mithril-global'

declare global {
  const m: typeof _m;
}
```

in order to use the `m` global within a module context.
