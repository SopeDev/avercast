import Highbran from './../images/bread/Highbran.svg'
import Multigrain from './../images/bread/Multigrain.svg'
import Rye from './../images/bread/Rye.svg'
import White from './../images/bread/White.svg'
import Wholemeal from './../images/bread/Wholemeal.svg'

import Chipotle from './../images/dressing/Chipotle.svg'
import Ketchup from './../images/dressing/Ketchup.svg'
import Mayo from './../images/dressing/Mayo.svg'
import Mustard from './../images/dressing/Mustard.svg'

import American from './../images/cheese/American.svg'
import Cheddar from './../images/cheese/Cheddar.svg'
import CreamCheese from './../images/cheese/CreamCheese.svg'
import Mozzarella from './../images/cheese/Mozzarella.svg'
import PepperJack from './../images/cheese/PepperJack.svg'
import SwissMenu from './../images/cheese/SwissMenu.svg'
import SwissRenderer from './../images/cheese/SwissRenderer.svg'

import Bacon from './../images/meat/Bacon.svg'
import Egg from './../images/meat/Egg.svg'
import Ham from './../images/meat/Ham.svg'
import SerranoHam from './../images/meat/SerranoHam.svg'
import PepperonniMenu from './../images/meat/PepperonniMenu.svg'
import PepperonniRenderer from './../images/meat/PepperonniRenderer.svg'
import RoastBeef from './../images/meat/RoastBeef.svg'
import SalamiMenu from './../images/meat/SalamiMenu.svg'
import SalamiRenderer from './../images/meat/SalamiRenderer.svg'
import SalmonMenu from './../images/meat/SalmonMenu.svg'
import SalmonRenderer from './../images/meat/SalmonRenderer.svg'
import TurkeyBreastMenu from './../images/meat/TurkeyBreastMenu.svg'
import TurkeyBreastRenderer from './../images/meat/TurkeyBreastRenderer.svg'

import CucumberMenu from './../images/veggie/CucumberMenu.svg'
import CucumberRenderer from './../images/veggie/CucumberRenderer.svg'
import GreenPepper from './../images/veggie/GreenPepper.svg'
import JalapenoMenu from './../images/veggie/JalapenoMenu.svg'
import JalapenoRenderer from './../images/veggie/JalapenoRenderer.svg'
import LettuceMenu from './../images/veggie/LettuceMenu.svg'
import LettuceRenderer from './../images/veggie/LettuceRenderer.svg'
import OnionMenu from './../images/veggie/OnionMenu.svg'
import OnionRenderer from './../images/veggie/OnionRenderer.svg'
import OrangePepper from './../images/veggie/OrangePepper.svg'
import PickleMenu from './../images/veggie/PickleMenu.svg'
import PickleRenderer from './../images/veggie/PickleRenderer.svg'
import TomatoMenu from './../images/veggie/TomatoMenu.svg'
import TomatoRenderer from './../images/veggie/TomatoRenderer.svg'

class IngredientStore {
	breads = [
		{
			key: 'highbran',
			name: 'High bran',
			menuImage: Highbran,
			rendererImage: Highbran
		}, {
			key: 'multigrain',
			name: 'Multi grain',
			menuImage: Multigrain,
			rendererImage: Multigrain
		}, {
			key: 'rye',
			name: 'Rye',
			menuImage: Rye,
			rendererImage: Rye
		}, {
			key: 'white',
			name: 'White',
			menuImage: White,
			rendererImage: White
		}, {
			key: 'wholemeal',
			name: 'Wholemeal',
			menuImage: Wholemeal,
			rendererImage: Wholemeal
		}
	]
	dressings = [
		{
			key: 'chipotle',
			name: 'Chipotle',
			menuImage: Chipotle,
			rendererImage: Chipotle
		}, {
			key: 'ketchup',
			name: 'Ketchup',
			menuImage: Ketchup,
			rendererImage: Ketchup
		}, {
			key: 'mayo',
			name: 'Mayo',
			menuImage: Mayo,
			rendererImage: Mayo
		}, {
			key: 'mustard',
			name: 'Mustard',
			menuImage: Mustard,
			rendererImage: Mustard
		}
	]
	cheeses = [
		{
			key: 'american',
			name: 'American',
			menuImage: American,
			rendererImage: American
		}, {
			key: 'cheddar',
			name: 'Cheddar',
			menuImage: Cheddar,
			rendererImage: Cheddar
		}, {
			key: 'creamcheese',
			name: 'Cream cheese',
			menuImage: CreamCheese,
			rendererImage: CreamCheese
		}, {
			key: 'mozzarella',
			name: 'Mozzarella',
			menuImage: Mozzarella,
			rendererImage: Mozzarella
		}, {
			key: 'pepperjack',
			name: 'Pepper jack',
			menuImage: PepperJack,
			rendererImage: PepperJack
		}, {
			key: 'swiss',
			name: 'Swiss',
			menuImage: SwissMenu,
			rendererImage: SwissRenderer
		}
	]
	meats = [
		{
			key: 'bacon',
			name: 'Bacon',
			menuImage: Bacon,
			rendererImage: Bacon
		},{
			key: 'egg',
			name: 'Egg',
			menuImage: Egg,
			rendererImage: Egg
		}, {
			key: 'ham',
			name: 'Ham',
			menuImage: Ham,
			rendererImage: Ham
		}, {
			key: 'serranoham',
			name: 'Serrano ham',
			menuImage: SerranoHam,
			rendererImage: SerranoHam
		}, {
			key: 'pepperoni',
			name: 'Pepperoni',
			menuImage: PepperonniMenu,
			rendererImage: PepperonniRenderer
		}, {
			key: 'roastbeef',
			name: 'Roast beef',
			menuImage: RoastBeef,
			rendererImage: RoastBeef
		}, {
			key: 'salami',
			name: 'Salami',
			menuImage: SalamiMenu,
			rendererImage: SalamiRenderer
		}, {
			key: 'salmon',
			name: 'Salmon',
			menuImage: SalmonMenu,
			rendererImage: SalmonRenderer
		}, {
			key: 'turkey',
			name: 'Turkey',
			menuImage: TurkeyBreastMenu,
			rendererImage: TurkeyBreastRenderer
		}
	]
	veggies = [
		{
			key: 'cucumber',
			name: 'Cucumber',
			menuImage: CucumberMenu,
			rendererImage: CucumberRenderer
		},{
			key: 'greenpepper',
			name: 'Green pepper',
			menuImage: GreenPepper,
			rendererImage: GreenPepper
		}, {
			key: 'jalapeno',
			name: 'Jalapeno',
			menuImage: JalapenoMenu,
			rendererImage: JalapenoRenderer
		}, {
			key: 'lettuce',
			name: 'Lettuce',
			menuImage: LettuceMenu,
			rendererImage: LettuceRenderer
		}, {
			key: 'onion',
			name: 'Onion',
			menuImage: OnionMenu,
			rendererImage: OnionRenderer
		}, {
			key: 'orangepepper',
			name: 'Orange pepper',
			menuImage: OrangePepper,
			rendererImage: OrangePepper
		}, {
			key: 'pickle',
			name: 'Pickle',
			menuImage: PickleMenu,
			rendererImage: PickleRenderer
		}, {
			key: 'tomato',
			name: 'Tomato',
			menuImage: TomatoMenu,
			rendererImage: TomatoRenderer
		}
	]
}
export default new IngredientStore