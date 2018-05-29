import React from 'react'

import Renderer from './renderer/renderer'
import Menu from './menu/menu'

export default class Layout extends React.Component {
	render() {
		return (
			<div id="layout">
				<Renderer></Renderer>
				<Menu></Menu>
			</div>
		)
	}
}