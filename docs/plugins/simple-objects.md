---
name: Simple Objects
menu: Plugins
---

# Simple Objects Plugin

The Simple Objects Plugin provides a way to define objects and interfaces without defining type
definitions for those objects, while still getting full type safety.

## Usage

### Install

```bash
yarn add @giraphql/plugin-simple-objects
```

### Setup

```typescript
import SimpleObjectsPlugin from '@giraphql/plugin-simple-objects';
const builder = new SchemaBuilder({
  plugins: [SimpleObjectsPlugin],
});
```

### Example

```typescript
import SchemaBuilder from '@giraphql/core';
import SimpleObjectsPlugin from '@giraphql/plugin-simple-objects';

const builder = new SchemaBuilder({
  plugins: [SimpleObjectsPlugin],
});

const ContactInfo = builder.simpleObject('ContactInfo', {
  fields: (t) => ({
    email: t.string({
      nullable: false,
    }),
    phoneNUmber: t.string({
      nullable: true,
    }),
  }),
});

const Node = builder.simpleInterface('Node', {
  fields: (t) => ({
    id: t.id({
      nullable: false,
    }),
  }),
});

const UserType = builder.simpleObject('User', {
  interfaces: [Node],
  fields: (t) => ({
    firstName: t.string({}),
    lastName: t.string({}),
    contactInfo: t.field({
      type: ContactInfo,
      nullable: false,
    }),
  }),
});

builder.queryType({
  fields: (t) => ({
    user: t.field({
      type: UserType,
      args: {
        id: t.arg.id({ required: true }),
      },
      resolve: (parent, args, { User }) => {
        return {
          id: '1003',
          firstName: 'Leia',
          lastName: 'Organa',
          contactInfo: {
            email: 'leia@example.com',
            phoneNUmber: null,
          },
        };
      },
    }),
  }),
});
```

## Limitations

When using simpleObjects in combination with other plugins like authorization, those plugins may use
`unknown` as the parent type in some custom fields \(eg. `parent` of a permission check function on
a field\).
