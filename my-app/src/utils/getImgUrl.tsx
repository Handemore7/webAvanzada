const baseExtensionsUrl = '/images/';

export const getImgUrl = (imgName: string = '') => {
  return `${baseExtensionsUrl}${imgName}`;
}