import React from 'react'
import { inject, observer } from 'mobx-react'
import { Motion, spring } from 'react-motion'

import Plate from './../../images/Plate.svg'

import './renderer.sass'

@inject('IngredientStore', 'SandwichStore') @observer
export default class Renderer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			rotation: 0,
			height: 40
		}
		this.animateSandwich = this.animateSandwich.bind(this)
		this.resetSandwich = this.resetSandwich.bind(this)
		this.goBack = this.goBack.bind(this)
		this.confirmSandwich = this.confirmSandwich.bind(this)
	}
	animateSandwich(e) {
		if (!this.props.SandwichStore.finished) {
			this.setState({
				rotation: (e.clientX - window.innerWidth / 2) / (window.innerWidth / 50),
				height: 40 + -(e.clientY - window.innerHeight / 2) / (window.innerHeight / 30)
			})
		}
	}
	resetSandwich() {
		this.setState({
			rotation: 0,
			height: 40
		})
	}
	goBack() {
		this.props.SandwichStore.goBack()
	}
	confirmSandwich() {
		this.props.SandwichStore.confirmSandwich()
	}
	render() {
		const { breads, dressings, cheeses, meats, veggies } = this.props.IngredientStore
		const { started, ingredients, finished, sending, sent } = this.props.SandwichStore
		const ingredientList = []

		const currentBread = breads.find((bread) => {
			return bread.key == ingredients.bread
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

		currentBread ? ingredientList.push(
			<div className="ingredient bread">
				<img src={currentBread.rendererImage} alt={currentBread.name}/>
			</div>
		) : null
		currentDressings ? currentDressings.map((dressing) => { ingredientList.push(
			<div key={dressing.key} className="ingredient dressing">
				<img src={dressing.rendererImage} alt={dressing.name}/>
			</div> )
		}) : null
		currentCheeses ? currentCheeses.map((cheese) => { ingredientList.push(
			<div key={cheese.key} className="ingredient cheese">
				<img src={cheese.rendererImage} alt={cheese.name}/>
			</div> )
		}) : null
		currentMeats ? currentMeats.map((meat) => { ingredientList.push(
			<div key={meat.key} className="ingredient meat">
				<img src={meat.rendererImage} alt={meat.name}/>
			</div> )
		}) : null
		currentVeggies ? currentVeggies.map((veggie) => { ingredientList.push(
			<div key={veggie.key} className="ingredient veggie">
				<img src={veggie.rendererImage} alt={veggie.name}/>
			</div> )
		}) : null
		sent ? ingredientList.push(
			<div className="ingredient bread">
				<img src={currentBread.rendererImage} alt={currentBread.name}/>
			</div>
		) : null

		const sentClass = sent ? "sent" : ""

		return (
			<div id="renderer" onMouseMove={this.animateSandwich} onMouseLeave={this.resetSandwich}>
				{ !started ? <h1 className="title">Make your own sandwich!</h1> : null }
				<Motion
					defaultStyle={{
						height: 40,
						rotation: 0,
						translateY: 0
					}}
					style={{
						height: !started ? spring( this.state.height / 2, {stiffness: 250, damping: 10} ) : !sent ? spring( this.state.height, {stiffness: 250, damping: 10} ) : spring( 10, {stiffness: 100, damping: 20} ),
						rotation: started && !finished ? spring( this.state.rotation, {stiffness: 250, damping: 10} ) : spring( 0, {stiffness: 100, damping: 20} ),
						translateY: !sent ? spring( 0, {stiffness: 250, damping: 10} ) : spring( 15, {stiffness: 100, damping: 20} )
					}}
				>
					{(style) =>						
						<div className={"screen " + sentClass} style={{height: `${style.height}%`, transform: `translateY(${style.translateY}vh)`}}>
							<div className="plate"><img src={Plate} alt=""/></div>
							{ ingredientList.length ? 
								ingredientList.map((ingredient, i) => {
									return <div key={i} className="ingredient-container" style={{ transform: `rotate(${style.rotation}deg)` }}>
										{ingredient}
									</div>
								})
							: null }
						</div>
					}
				</Motion>
				{ this.props.SandwichStore.error.count ? <h3 key={'error' + this.props.SandwichStore.error.count} className="error">{this.props.SandwichStore.error.message}</h3> : null }
				{ finished && !sent ? <div className="order">
					{ !sending ?
						<div>
							<h1 className="order-title">Place your order?</h1>
							<div className="order-buttons">
								<button onClick={this.goBack}>Go back</button>
								<button onClick={this.confirmSandwich}>Order now!</button>
							</div>
						</div> : <div>
							<h1 className="ordering">Placing your order...</h1>
						</div>
					}
				</div> : null }
				{ sent ? <h2 className="enjoy">Enjoy!</h2> : null }
			</div>
		)
	}
}