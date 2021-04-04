const baseExtensionsUrl = `${process.env.PUBLIC_URL}/images/`;

export const getImgUrl = (imgName: string = '') => {
  return `${baseExtensionsUrl}${imgName}`;
}