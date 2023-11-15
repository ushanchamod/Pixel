import { Link } from "react-router-dom"


const categories = [
  'Nature',
  'Technology',
  'Travel',
  'Food',
  'Health',
  'Fitness',
  'Fashion',
  'Art',
  'Music',
  'Movies',
  'Books',
  'Sports',
  'Science',
  'History',
  'Education',
  'Business',
  'Finance',
  'Home Decor',
  'Pets',
  'Gardening',
];

const HomeNavCategory = () => {
  return (
    <ul id="HomeNavCategory">
      {
        categories.map((category, index) => {
          return (
            <Link to={`/category/${category.toLowerCase()}`} key={index}><li>{category}</li></Link>
          )
        })
      }

      
    </ul>
  )
}

export default HomeNavCategory