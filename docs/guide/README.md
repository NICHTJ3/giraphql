---
name: Getting Started
menu: Guide
---

# Guide

## Getting started

### Installing

```bash
yarn add @giraphql/core apollo-server
```

### Create a simple schema

```typescript
import SchemaBuilder from '@giraphql/core';

const builder = new SchemaBuilder();

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      args: {
        name: t.arg.string({}),
      },
      resolve: (parent, { name }) => `hello, ${name || 'World'}`,
    }),
  }),
});

const schema = builder.toSchema({});
```

### Create a server

The schema generated by GiraphQL is a standard graphql.js schema and can be used with several
graphql server implementations including apollo server.

```typescript
import { ApolloServer } from 'apollo-server';

const server = new ApolloServer({
  schema,
});

server.listen(3000);
```
