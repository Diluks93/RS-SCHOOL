export const getLinkToJSON = async () => {
  const url =
    `https://raw.githubusercontent.com/Diluks93/image-data/master/images.json`,
    res = await fetch(url),
    data = await res.json();

  let array = [];
  for( let i = 0; i <= data.length; i += 10)
    array.push(data.slice(i, i + 10))

  return array;
}
