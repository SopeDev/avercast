import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react';

import Renderer from './components/renderer/renderer'
import Menu from './components/menu/menu'
import Display from './components/display/display'

import IngredientStore from './stores/IngredientStore'
import SandwichStore from './stores/SandwichStore'

import './index.sass'

const stores = { IngredientStore, SandwichStore }
const app = document.getElementById('app')

ReactDOM.render(
	<Provider {...stores}>
		<div id="layout">
			<Menu></Menu>
			<Renderer></Renderer>
			<Display></Display>
		</div>
	</Provider>
, app);