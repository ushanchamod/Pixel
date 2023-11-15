

const WelcomeCategory = ({category}: {category: string}) => {
  
  if(category) return (
    <div className="welcome-section">

      <div className="back-image">
        <span></span>
        <img src="https://images.unsplash.com/photo-1699539963148-d8701725421b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="category" />
      </div>

      <div className="content">
        <h1 className="title">{category}</h1>
        <p className="description">Shop {category} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem accusamus, itaque quasi illo velit a! Provident commodi possimus,  of products</p>
      </div>
    </div>
  )
}

export default WelcomeCategory