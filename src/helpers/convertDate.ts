export const convertDate = (created: string) => {
  return new Date(created).toLocaleDateString('es-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
