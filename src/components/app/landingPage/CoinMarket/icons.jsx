const iconUrls = {
  UNI: '/img/coins/UNI.svg',
  BFT: '/img/coins/BFT.svg',
  BNB: '/img/coins/BNB.svg',
  BUSD: '/img/coins/BUSD.svg',
  LINK: '/img/coins/LINK.svg',
  LUNA: '/img/coins/LUNA.svg',
  USDT: '/img/coins/USDT.svg',
}

export const icons = Object.keys(iconUrls).reduce((acc, key) => {
  acc[key] = <img src={iconUrls[key]} alt={key} width={50} height={50} />

  return acc
}, {})

console.log(icons)

export const getIcon = (symbol) => icons[symbol] || null
