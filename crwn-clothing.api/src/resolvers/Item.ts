import { Context } from '../utils';

export const Item = {
  collection: ({ id }, args, ctx: Context) => {
    return ctx.prisma.item({ id }).collection();
  },
};
