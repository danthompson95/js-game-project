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

function component() {
  const element = document.createElement('div')
  element.setAttribute('id', 'mainContent')

  const panels = build.resourcePanel(foodImage, stoneImage, woodImage)
  element.appendChild(panels)

  return element
}

document.body.appendChild(component())
