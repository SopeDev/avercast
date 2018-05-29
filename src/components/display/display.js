import React from 'react'
import { inject, observer } from 'mobx-react'

import './display.sass'

@inject('IngredientStore', 'SandwichStore') @observer
export default class Display extends React.Component {
	render() {
		const { breads, dressings, cheeses, meats, veggies } = this.props.IngredientStore
		const { started, ingredients, finished } = this.props.SandwichStore
		const ingredientList = []

		const currentBreads = ingredients.bread.map((setBread) => {
			return breads.find((bread) => {
				return bread.key == setBread
			})
		})
		const currentDressings = ingredients.dressing.map((setDressing) => {
			return dressings.find((dressing) => {
				return dressing.key == setDressing
			})
		})
		const currentCheeses = ingredients.cheese.map((setCheese) => {
			return cheeses.find((cheese) => {
				return cheese.key == setCheese
			})
		})
		const currentMeats = ingredients.meat.map((setMeat) => {
			return meats.find((meat) => {
				return meat.key == setMeat
			})
		})
		const currentVeggies = ingredients.veggie.map((setVeggie) => {
			return veggies.find((veggie) => {
				return veggie.key == setVeggie
			})
		})

		currentBreads ? currentBreads.map((bread) => { ingredientList.push(bread.name) }) : null
		currentDressings ? currentDressings.map((dressing) => { ingredientList.push(dressing.name) }) : null
		currentCheeses ? currentCheeses.map((cheese) => { ingredientList.push(cheese.name) }) : null
		currentMeats ? currentMeats.map((meat) => { ingredientList.push(meat.name) }) : null
		currentVeggies ? currentVeggies.map((veggie) => { ingredientList.push(veggie.name) }) : null

		return (
			<div id="display">
				<h2>Avercast</h2>
				<h1>Sandwich</h1>
				{ started ? <h3>Your Sandwich:</h3> : null }
				<ul>
					{ingredientList.length ? ingredientList.map((ingredient, i) => {
						return <li key={'ingredient' + i}>{ingredient}</li>
					}) : null}
				</ul>
			</div>
		)
	}
}