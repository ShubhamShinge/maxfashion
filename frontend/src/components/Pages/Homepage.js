import Offers from "../Offers/Offers.js"
import Items from "../Items/Items.js"
import ShopByCategory from '../ShopByCategory/ShopByCategory.js'
import BudgetStore from '../Budget Store/BudgetStore.js';

export default function Homepage({setLoginModalIsOpen}){
    
    return(
        <>
      <Offers/>
      <Items setLoginModalIsOpen={setLoginModalIsOpen}/>
      <ShopByCategory/>
      <BudgetStore/>
        </>
    )
}