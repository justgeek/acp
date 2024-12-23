export const routes = {
  openings: {
    path: 'openings',
    children: {
      details: {
        path: (id: string) => `openings/${id}`,
      },
    },
  },
};
