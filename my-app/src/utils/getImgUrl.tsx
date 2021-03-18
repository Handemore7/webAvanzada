const baseExtensionsUrl = '/images/';

export const getImageSrcFromFilename = (imgName: string = '') => {
  return `${baseExtensionsUrl}${imgName}`;
}