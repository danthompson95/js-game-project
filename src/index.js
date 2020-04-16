import _ from 'lodash'
import * as build from './modules/builder.js'

// initial import of images
import woodImage from './icons/tree.png'
import stoneImage from './icons/stone.png'
import foodImage from './icons/food.png'

// initial css import
import './css/main.css'
import './css/resourcePanels.css'

function component() {
  const element = document.createElement('div')
  element.setAttribute('id', 'mainContent')

  const panels = build.resourcePanel(foodImage, stoneImage, woodImage)
  element.appendChild(panels)

  return element
}

document.body.appendChild(component())
