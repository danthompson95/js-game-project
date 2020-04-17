import '../css/resourcePanels.css'
import * as data from './data'

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

export function workerPanel(manImage) {
  const workerDiv = document.createElement('div')
  const innerDiv = document.createElement('div')
  workerDiv.classList.add('resource-area')
  const workerImage = document.createElement('div')
  workerDiv.appendChild(innerDiv)
  innerDiv.appendChild(workerImage)
  workerImage.classList.add('resource-panel')

  const icon = new Image()
  icon.src = manImage
  icon.classList.add('resource-image')
  workerImage.appendChild(icon)

  const innerText = document.createElement('p')
  innerText.setAttribute('id', 'workerValue')
  innerText.classList.add('resource-text')
  let savedWorkers = localStorage.getItem('totalWorkers')
  let currentWorkers = 0

  if (savedWorkers) currentWorkers = savedWorkers

  innerText.innerHTML = `${currentWorkers}`

  workerImage.appendChild(innerText)

  return workerDiv
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
  let currentTier = localStorage.getItem('currentTier')
  let maxResource
  let identifier = name + 'Max'
  if (currentTier) {
    maxResource = data.initialData.tier[currentTier][identifier]
  } else {
    maxResource = data.initialData.tier[0][identifier]
  }
  innerText.innerHTML = `${initialValue}/${maxResource}`
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
