export const cls = (...classes: string[]) => {
  return classes.join(' ');
};

export const imageUrl = (avatarId: string, size: string) => {
  return `https://imagedelivery.net/bEkujZS_peOI5CBbBTrPLA/${avatarId}/${size}`;
};
