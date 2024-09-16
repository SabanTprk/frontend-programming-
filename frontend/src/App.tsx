import { useState } from 'react';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faChevronRight } from '@fortawesome/free-solid-svg-icons';
import data from './data.json';


function App() {
const [value, setValue] = useState<string>('');
const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue(event.target.value);
}
const onSearch = (searchTerm: string) => {
  setValue(searchTerm);
  console.log("search ", searchTerm);
}
  return (
    
    <div className='container'>
      <div className='now left-container'>
        <div className='title-container'><p className='title'>Available Recipients</p></div>
        <div className='bar-controller'>
          
        <div className='search-bar-container'>
          <div><FontAwesomeIcon id='search-icon' icon={faMagnifyingGlass} /></div>
          <div><input type="text" value={value} onChange = {onChange} placeholder='Search'/></div>
          <div className='dropdown'>
          {data.filter(item =>{
            const searchTerm = value.toLowerCase();
            const email = item.email.toLowerCase();
            return searchTerm && email.startsWith(searchTerm) && email !== searchTerm;
          }).slice(0,3)
          .map((item, index) => (
          <div key={index} className='dropdown-row' onClick={()=> onSearch(item.email)}>
          {item.email}
          </div>
          ))}
          </div>   
          </div>
          
        <div className='List-bar-container'> 
          <FontAwesomeIcon id='Check-icon' icon={faChevronRight} />
          <div className="custom-select">
          <select>
          <option value="">posteffect.ai</option>
            <option value="">gmail.com</option>
            <option value="">hotmail.com</option>
            <option value="">outlook.com</option>
            <option value="">yahoo.com</option>
          </select>
          </div>
          <div className='List-container-title'></div>
          </div>
        </div>
        </div>
        

      <div className='now right-container'>
        <div className='title-container'><p className='title'>Selected Recipients</p></div>

        <div className='bar-controller'>
        <div className='List-bar-container1'>
          <FontAwesomeIcon id='angle-right-icon' icon={faChevronRight} />
          <div className='List-container-title'>Company Recipients</div>
          </div>
        <div className='List-bar-container'>
          <FontAwesomeIcon id='angle-right-icon' icon={faChevronRight} />
          <div className='List-container-title'>Email Recipients</div>
          </div>
          <div className='clear-btn'>
          <button className='button'>All Clear</button>
          </div>
        </div>

        </div>
    </div>
  )
}

export default App
