import { resolveArrayConnection, resolveOffsetConnection } from '../../../../src';
import builder from '../builder';

class NumberThing {
  id: number;

  constructor(n: number) {
    this.id = n;
  }
}

class BatchLoadableNumberThing {
  id: number;

  constructor(n: number) {
    this.id = n;
  }
}

builder.node(NumberThing, {
  id: {
    resolve: (n) => n.id,
  },
  loadOne: (id) => new NumberThing(Number.parseInt(id, 10)),
  name: 'Number',
  fields: (t) => ({
    number: t.exposeInt('id', {}),
  }),
});

builder.node(BatchLoadableNumberThing, {
  id: {
    resolve: (n) => n.id,
  },
  loadMany: (ids) => ids.map((id) => new BatchLoadableNumberThing(Number.parseInt(id, 10))),
  name: 'BatchNumber',
  fields: (t) => ({
    number: t.exposeInt('id', {}),
  }),
});

builder.queryFields((t) => ({
  numbers: t.connection(
    {
      type: NumberThing,
      resolve: async (parent, args) => {
        const result = await resolveOffsetConnection({ args }, ({ limit, offset }) => {
          const items = [];

          for (let i = offset; i < Math.min(offset + limit, 200); i += 1) {
            items.push(new NumberThing(i));
          }

          return items;
        });

        if (!result) {
          return null;
        }

        return {
          totalCount: 500,
          ...result,
        };
      },
    },
    {},
    {},
  ),
}));

builder.queryFields((t) => ({
  batchNumbers: t.connection(
    {
      type: BatchLoadableNumberThing,
      resolve: (parent, args) => {
        const numbers: BatchLoadableNumberThing[] = [];

        for (let i = 0; i < 200; i += 1) {
          numbers.push(new BatchLoadableNumberThing(i));
        }

        const result = resolveArrayConnection({ args }, numbers);

        return result && { totalCount: 500, ...result };
      },
    },
    {},
    {},
  ),
  extraNode: t.node({
    id: () => 'TnVtYmVyOjI=',
  }),
  moreNodes: t.nodeList({
    ids: () => ['TnVtYmVyOjI=', { id: 10, type: NumberThing }],
  }),
}));
