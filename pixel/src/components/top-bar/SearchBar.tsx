import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


// Search Box is empty
const EmptySearch = ({setActiveSearchBox}:{setActiveSearchBox:Function}) => {

  const navigate = useNavigate();
  
  const setSearchBoxAndSubmit = (text:string) => {
    // setSearchText(text);

    //add value to search box
    // const searchBox = document.getElementById('search-text-box') as HTMLInputElement
    // searchBox.value = text

    // const form = document.getElementById('search-box-form')
    // form?.dispatchEvent(new Event('submit', {cancelable: true, bubbles: true}))

    navigate(`/category/${text}`)
    setActiveSearchBox(false)
  }

  return(
    <>
      <div className="resent">
      <p className='sub-title'>Resent</p>
        <div className="option">
          <button className='label' onClick={() => setSearchBoxAndSubmit("Girls")}>Girls</button>
          <button className='label' onClick={() => setSearchBoxAndSubmit("Boys")}>Boys</button>
        </div>
      </div>

      <hr />

      <div className="trending">
        <p className='sub-title'>Trending</p>
        <div className="option">
          <button className='label' onClick={() => setSearchBoxAndSubmit("Boys")}>Boys</button>
          <button className='label' onClick={() => setSearchBoxAndSubmit("Mal Palathuru")}>Mal Palathuru</button>
        </div>
        
      </div>
      
      <hr />

    </>
  )
}

// Search Box is not empty
const NotEmptySearch = ({searchText, setSearchText}: {searchText: string, setSearchText:Function}) => {
  return(
    <div>
      {searchText}
    </div>
  )
}





interface OutsideSearchWindowProps {
  searchText: string;
  setSearchText: (searchText: string) => void;
  setActiveSearchBox: (activeSearchBox: boolean) => void;
}
const OutsideSearchWindow = ({searchText, setSearchText, setActiveSearchBox}: OutsideSearchWindowProps) => {
  return (
    <div id='search-api-container'>
      {searchText === '' ? <EmptySearch setActiveSearchBox={setActiveSearchBox} /> : <NotEmptySearch searchText={searchText} setSearchText={setSearchText} />}
    </div>
  )
}




export default function SearchBar() {
  const[activeSearchBox, setActiveSearchBox] = useState(false);
  const[searchText, setSearchText] = useState('');
  
  const searchTrigger = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setActiveSearchBox(false);
    const searchBoxValue = (document.getElementById('search-text-box') as HTMLInputElement).value
    setSearchText(searchBoxValue);

    console.log(searchBoxValue);
  }

  return (
    <div>
      {activeSearchBox && <div className='back-drop' onClick={() => setActiveSearchBox(false)}></div>}
      <span className="searchTextBox">
        <div className="icon-div">
          <SearchRoundedIcon className='icon' />
        </div>

        <form onSubmit={searchTrigger} id='search-box-form'>
          <input type="text" placeholder='Search Images' id='search-text-box' value={searchText} onClick={() => setActiveSearchBox(true)} onChange={e => setSearchText(e.target.value)} />
        </form>

        {activeSearchBox && <OutsideSearchWindow searchText={searchText} setSearchText={setSearchText} setActiveSearchBox={setActiveSearchBox} />}
      </span>
    </div>
  );
}
