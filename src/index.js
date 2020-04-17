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

  return element
}

document.body.appendChild(component())

window.setInterval(() => {
  utils.progressValues()
}, 1000)
