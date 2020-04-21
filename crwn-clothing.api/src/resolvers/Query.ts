import { Context } from '../utils';

export const Query = {
  collections(parent, args, ctx: Context) {
    return ctx.prisma.collections();
  },
  collection(parent, { id }, ctx: Context) {
    return ctx.prisma.collection({ id });
  },
  getCollectionsByTitle(parent, { title }, ctx: Context) {
    return ctx.prisma.collection({ title });
  },
};
