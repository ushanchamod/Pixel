import { useParams } from "react-router-dom"
import './style.scss'
import WelcomeCategory from "./WelcomeCategory"
import CategoryGrid from "./CategoryGrid"


const Category = () => {
  const {categoryName} = useParams<{categoryName: string}>()
  
  if(categoryName) return (
    <div id="category-container">
      <WelcomeCategory category={categoryName} />
      <CategoryGrid />
    </div>
    
  )
}

export default Category