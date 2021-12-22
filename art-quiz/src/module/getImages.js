export const getLinkToJSON = async () => {
  const url = `https://raw.githubusercontent.com/Diluks93/image-data/master/images.json`;
  const res = await fetch(url);
  const imagesData = await res.json();

  const arrayChunksDataImages = [];
  const MAX_VALUE_CHUNK = 10;
  for( let i = 0; i <= imagesData.length; i += MAX_VALUE_CHUNK)
    arrayChunksDataImages.push(imagesData.slice(i, i + MAX_VALUE_CHUNK))

  return arrayChunksDataImages;
}
