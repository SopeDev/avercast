import { observable } from 'mobx'

class SandwichStore {
	@observable started = false
	@observable finished = false
	@observable sending = false
	@observable sent = false
	@observable ingredients = {
		bread: [],
		dressing: [],
		cheese: [],
		meat: [],
		veggie: []
	}
	@observable sandwiches = []
	@observable error = {
		message: '',
		timeout: null,
		count: 0
	}
	start() {
		this.started = true
	}
	setBread(bread) {
		if (!this.ingredients.bread.length) {
			this.ingredients.bread.push(bread)
		} else {
			this.ingredients.bread = []
			this.ingredients.bread.push(bread)
		}
	}
	setDressing(dressing) {
		if (!this.ingredients.dressing.length) {
			this.ingredients.dressing.push(dressing)
		} else if (this.ingredients.dressing.find((setDressing) => { return setDressing == dressing })) {
			const index = this.ingredients.dressing.findIndex((setDressing) => { return setDressing == dressing })
			this.ingredients.dressing.splice(index, 1)
		} else if (this.ingredients.dressing.length < 2) {
			this.ingredients.dressing.push(dressing)
		} else {
			this.setError('Max number of ingredients reached.')
		}
	}
	setCheese(cheese) {
		if (!this.ingredients.cheese.length) {
			this.ingredients.cheese.push(cheese)
		} else if (this.ingredients.cheese.find((setCheese) => { return setCheese == cheese })) {
			const index = this.ingredients.cheese.findIndex((setCheese) => { return setCheese == cheese })
			this.ingredients.cheese.splice(index, 1)
		} else if (this.ingredients.cheese.length < 2) {
			this.ingredients.cheese.push(cheese)
		} else {
			this.setError('Max number of ingredients reached.')
		}
	}
	setMeat(meat) {
		if (!this.ingredients.meat.length) {
			this.ingredients.meat.push(meat)
		} else if (this.ingredients.meat.find((setMeat) => { return setMeat == meat })) {
			const index = this.ingredients.meat.findIndex((setMeat) => { return setMeat == meat })
			this.ingredients.meat.splice(index, 1)
		} else if (this.ingredients.meat.length < 3) {
			this.ingredients.meat.push(meat)
		} else {
			this.setError('Max number of ingredients reached.')
		}
	}
	setVeggie(veggie) {
		if (!this.ingredients.veggie.length) {
			this.ingredients.veggie.push(veggie)
		} else if (this.ingredients.veggie.find((setVeggie) => { return setVeggie == veggie })) {
			const index = this.ingredients.veggie.findIndex((setVeggie) => { return setVeggie == veggie })
			this.ingredients.veggie.splice(index, 1)
		} else if (this.ingredients.veggie.length < 4) {
			this.ingredients.veggie.push(veggie)
		} else {
			this.setError('Max number of ingredients reached.')
		}
	}
	saveSandwich() {
		this.finished = true
	}
	goBack() {
		this.finished = false
	}
	confirmSandwich() {
		this.sending = true
		setTimeout(() => {
			this.sending = false
			this.sent = true
		}, 2000) 
	}
	setError(error) {
		this.error.message = error
		this.error.count = this.error.count + 1
		clearTimeout(this.error.timeout)
		this.error.timeout = setTimeout(() => {
			this.error.message = ""
			this.error.count = 0
		}, 3000)
	}
}
export default new SandwichStore