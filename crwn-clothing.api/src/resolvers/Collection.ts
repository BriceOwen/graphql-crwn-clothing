import { Context } from '../utils';

export const Collection = {
  items: ({ id }, args, ctx: Context) => {
    return ctx.prisma.collection({ id }).items();
  },
};
