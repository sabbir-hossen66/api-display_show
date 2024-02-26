const shop = {
  name: 'lala',
  address: "barisal",
  village: {
    gram: 'udaypur',
    post: 'udaypur',
    zella: 'rongpur'
  },
  isNew: false,
  isOld: true

}

// console.log(shop);
const shopJson = JSON.stringify(shop)
const shopObj = JSON.parse(shopJson)
console.log(shopObj);