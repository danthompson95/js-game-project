import _ from 'lodash'
import * as build from './modules/builder.js'
import * as utils from './modules/gameCore'

// initial import of images
import woodImage from './icons/tree.png'
import stoneImage from './icons/stone.png'
import foodImage from './icons/food.png'
import manImage from './icons/man.png'

// initial css import
import './css/main.css'

function resourceArea() {
  const element = document.createElement('div')
  element.setAttribute('id', 'resourceContent')

  const resourcePanels = build.resourcePanel(foodImage, stoneImage, woodImage)
  element.appendChild(resourcePanels)

  const workerPanels = build.workerPanel(manImage)
  element.appendChild(workerPanels)

  document.body.appendChild(element)
}

function buildingsArea() {
  const element = document.createElement('div')
  element.setAttribute('id', 'buildingContent')

  const button = document.createElement('button')
  button.setAttribute('type', 'button')
  button.setAttribute('id', 'farmerBuy')
  button.innerHTML = 'buy farmer (25 food)'
  button.addEventListener('click', () => {
    addFarmer()
  })
  element.appendChild(button)

  const rates = document.createElement('p')
  rates.setAttribute('id', 'farmerRate')
  element.appendChild(rates)

  //const houses = build.housePanel()
  //element.appendChild(houses)

  document.body.appendChild(element)
}

function addFarmer() {
  const currentFood = document.getElementById('foodValue')
  let farmerRate = document.getElementById('farmerRate')
  if (farmerRate.innerHTML == '') {
    farmerRate.innerHTML = 0 + 0.1
  } else {
    farmerRate.innerHTML = (parseFloat(farmerRate.innerHTML) + 0.1).toFixed(2)
  }
  currentFood.innerHTML = (parseFloat(currentFood.innerHTML) - 25).toFixed(2)
  const currentWorkers = document.getElementById('workerValue')
  currentWorkers.innerHTML = parseInt(currentWorkers.innerHTML) + 1
}

function runInitial() {
  resourceArea()
  buildingsArea()
}

window.setInterval(() => {
  utils.progressValues()
}, 1000)
