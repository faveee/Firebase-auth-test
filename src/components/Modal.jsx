import './App.css';
import { useState } from 'react';

function App() {

const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <div className='menu-container'>
        <div className='kode'>
        <button className='trigger' onClick={() => {setOpen(!open)}}>
          {open ? 'Close' : 'Notes'}
</button>
</div>

        <div className={`dropdown-page ${open? 'active' : 'inactive'}`} >
        <h3 className='dropdown-item'>Notes</h3>
        </div>
    </div>
    </div>
  );
}
