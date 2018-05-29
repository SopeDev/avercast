import React from 'react'
import { inject, observer } from 'mobx-react'

import './menu.sass'

class Tab extends React.Component {
	render() {
		const { ingredients, setIngredients, max, currentTab, type, nextType, set, setIngredient, setCurrentTab, validateAdvance } = this.props

		const ingredientList = ingredients.map((ingredient) => {
			const selected = Array.from(setIngredients).find((setIngredient) => {return ingredient.key == setIngredient}) ? 'selected' : ''
			return <li key={ingredient.key} onClick={()=>{setIngredient(ingredient.key, type)}} className={selected}><img src={ingredient.menuImage} alt={ingredient.name}/><span>{ingredient.name}</span></li>
		})
		return (
			<div className={"tab " + type + "-menu" + (currentTab === type ? " active" : "") + (set ? " set" : "")}>
				<h2 onClick={()=>{setCurrentTab(type)}}>{type}</h2>
				<p>Select your {type}:</p>
				<span>({setIngredients.length}/{max} max)</span>
				<ul>
					{ingredientList}
				</ul>
				<button onClick={()=>{validateAdvance(type, nextType)}} className="next">Next</button>
			</div>
		)
	}
}

@inject('IngredientStore', 'SandwichStore') @observer
export default class Menu extends React.Component {
	constructor() {
		super()
		this.state = {
			currentTab: 'start'
		}
		this.start = this.start.bind(this)
		this.saveSandwich = this.saveSandwich.bind(this)
		this.setCurrentTab = this.setCurrentTab.bind(this)
		this.setIngredient = this.setIngredient.bind(this)
		this.validateAdvance = this.validateAdvance.bind(this)
	}
	start() {
		this.props.SandwichStore.start()
		this.setCurrentTab('bread')
	}
	saveSandwich() {
		this.props.SandwichStore.saveSandwich()
	}
	setCurrentTab(tab) {
		this.setState({currentTab: tab})
	}
	setIngredient(ingredient, type) {
		if (!this.props.SandwichStore.finished) {
			switch(type) {
				case "bread":
					this.props.SandwichStore.setBread(ingredient)
					break;
				case "dressing":
					this.props.SandwichStore.setDressing(ingredient)
					break;
				case "cheese":
					this.props.SandwichStore.setCheese(ingredient)
					break;
				case "meat":
					this.props.SandwichStore.setMeat(ingredient)
					break;
				case "veggie":
					this.props.SandwichStore.setVeggie(ingredient)
					break;
			}
		}
	}
	validateAdvance(fromTab, toTab) { 
		switch(fromTab) {
			case 'bread':
				if (!this.props.SandwichStore.ingredients.bread.length) {
					this.props.SandwichStore.setError('Please select your type of bread.')
				} else {
					this.setCurrentTab(toTab)
				}
				break;
			case 'dressing':
				if (!this.props.SandwichStore.ingredients.dressing.length) {
					this.props.SandwichStore.setError('Please select at least one dressing.')
				} else {
					this.setCurrentTab(toTab)
				}
				break;
			case 'cheese':
				if (!this.props.SandwichStore.ingredients.cheese.length) {
					this.props.SandwichStore.setError('Please select at least one cheese.')
				} else {
					this.setCurrentTab(toTab)
				}
				break;
			case 'meat':
				if (!this.props.SandwichStore.ingredients.meat.length) {
					this.props.SandwichStore.setError('Please select at least one meat.')
				} else {
					this.setCurrentTab(toTab)
				}
				break;
			case 'veggie':
				if (!this.props.SandwichStore.ingredients.veggie.length) {
					this.props.SandwichStore.setError('Please select at least one veggie.')
				} else {
					this.setCurrentTab(toTab)
				}
				break;
		}
	}
	render() {
		const { breads, dressings, cheeses, meats, veggies } = this.props.IngredientStore
		const { ingredients } = this.props.SandwichStore

		return (
			<div id="menu">
				<div className={"tab start" + (this.state.currentTab === "start" ? " active" : "")}>
					<h2 onClick={this.start}>Start</h2>
				</div>
				<Tab
					ingredients={breads}
					setIngredients={this.props.SandwichStore.ingredients.bread}
					max={1}
					currentTab={this.state.currentTab}
					type="bread"
					nextType="dressing"
					set={ingredients.bread.length}
					setIngredient={this.setIngredient}
					setCurrentTab={this.setCurrentTab}
					validateAdvance={this.validateAdvance}
				/>
				<Tab
					ingredients={dressings}
					setIngredients={this.props.SandwichStore.ingredients.dressing}
					max={2}
					currentTab={this.state.currentTab}
					type="dressing"
					nextType="cheese"
					set={ingredients.dressing.length}
					setIngredient={this.setIngredient}
					setCurrentTab={this.setCurrentTab}
					validateAdvance={this.validateAdvance}
				/>
				<Tab
					ingredients={cheeses}
					setIngredients={this.props.SandwichStore.ingredients.cheese}
					max={2}
					currentTab={this.state.currentTab}
					type="cheese"
					nextType="meat"
					set={ingredients.cheese.length}
					setIngredient={this.setIngredient}
					setCurrentTab={this.setCurrentTab}
					validateAdvance={this.validateAdvance}
				/>
				<Tab
					ingredients={meats}
					setIngredients={this.props.SandwichStore.ingredients.meat}
					max={3}
					currentTab={this.state.currentTab}
					type="meat"
					nextType="veggie"
					set={ingredients.meat.length}
					setIngredient={this.setIngredient}
					setCurrentTab={this.setCurrentTab}
					validateAdvance={this.validateAdvance}
				/>
				<Tab
					ingredients={veggies}
					setIngredients={this.props.SandwichStore.ingredients.veggie}
					max={4}
					currentTab={this.state.currentTab}
					type="veggie"
					nextType="save"
					set={ingredients.veggie.length}
					setIngredient={this.setIngredient}
					setCurrentTab={this.setCurrentTab}
					validateAdvance={this.validateAdvance}
				/>
				<div className={"tab save" + (this.state.currentTab === "save" ? " active" : "")}>
					<h2 onClick={this.saveSandwich}>It's ready!</h2>
				</div>
			</div>
		)
	}
}