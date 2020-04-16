export function resourcePanel(foodImg, stoneImg, woodImg) {
  const holder = document.createElement('div')
  holder.classList.add('resource-area')

  const food = resourceItem('food', foodImg)
  const stone = resourceItem('stone', stoneImg)
  const wood = resourceItem('wood', woodImg)

  holder.appendChild(food)
  holder.appendChild(stone)
  holder.appendChild(wood)

  return holder
}

function resourceItem(name, img) {
  const resourceDiv = document.createElement('div')
  const resourceImage = document.createElement('div')
  resourceDiv.appendChild(resourceImage)
  resourceImage.classList.add('resource-panel')

  const icon = new Image()
  icon.src = img
  icon.classList.add('resource-image')
  resourceImage.appendChild(icon)

  const initialValue = getSavedResource(name)
  const innerText = document.createElement('p')
  innerText.innerHTML = initialValue
  innerText.classList.add('resource-text')
  resourceImage.appendChild(innerText)

  const rateDiv = document.createElement('div')
  const rateText = document.createElement('p')
  rateText.innerHTML = '0/s'
  rateDiv.classList.add('resource-rate')
  rateDiv.appendChild(rateText)
  resourceDiv.appendChild(rateDiv)

  return resourceDiv
}

function getSavedResource(name) {
  let savedResource = localStorage.getItem(name)
  if (savedResource) {
    return savedResource
  }

  savedResource = defaultValue(name)
  return savedResource
}

function defaultValue(name) {
  let items = {
    food: 50,
    stone: 50,
    wood: 50,
  }

  localStorage.setItem(name, 50)

  return items[name]
}
