import React, { useState } from 'react'
import '../Menu/Menu.css'

const Menu = () => {
  const [active, setActive] = useState({
    isActive: false
  });
  const toggler = (e) => {
    e.preventDefault()
    if (active.isActive) {
      setActive({
        isActive: false,
      })
    } else {
      setActive({
        isActive: true,
      })
    }
  };
  if (active.isActive) {
    return (
      <div id='bg-color'>
        <div className='can mx-auto d-block' >
          <ul className='nav' id='nav-border'>
            <li className='nav-item link-bg'>
              <a className='nav-link' id='links' data-bs-toggle='tab' href='/menu' onClick={toggler}>Menu</a>
            </li>
            <li className='nav-item link-bg'>
              <a className='nav-link links' id='links' data-bs-toggle='tab' href='/starters' onClick={toggler}>Starters</a>
            </li>
          </ul>
          <div className='container menu'>
            <form>
              <div className='tab-pane container'>
                <div id="menu">
                  <h1><b>Margherita</b> <span>$12.50</span></h1>
                  <p>Fresh tomatoes, fresh mozzarella, fresh basil</p>
                  <hr className='hr' />
                  <h1><b>Formaggio</b> <span>$15.50</span></h1>
                  <p>Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)</p>
                  <hr className='hr' />
                  <h1><b>Chicken</b> <span>$17.00</span></h1>
                  <p>Fresh tomatoes, mozzarella, chicken, onions</p>
                  <hr className='hr' />
                  <h1><b>Pineapple'o'clock</b> <span>$16.50</span></h1>
                  <p>Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil</p>
                  <hr className='hr' />
                  <h1><b>Meat Town</b> <span>Hot! </span><span>$20.00</span></h1>
                  <p>Fresh tomatoes, mozzarella,    pepperoni, sausage, beef, chicken</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div id='bg-color'>
        <div className='can mx-auto d-block' >
          <ul className='nav' id='nav-border'>
            <li className='nav-item link-bg'>
              <a className='nav-link links' id='links' data-bs-toggle='tab' href='/starters' onClick={toggler}>Starters</a>
            </li>
            <li className='nav-item link-bg'>
              <a className='nav-link links' id='links' data-bs-toggle='tab' href='/menu' onClick={toggler}>Menu</a>
            </li>
          </ul>
          <div className='container menu'>
            <form>
              <div className='tab-pane container'>
                <div id="starters">
                  <h1><b>Today's Soup</b> <span>Seasonal </span><span>$5.50</span></h1>
                  <p>Ask the waiter</p>
                  <hr className='hr'/>
                  <h1><b>Bruschetta</b> <span>$8.50</span></h1>
                  <p>Bread with pesto, tomatoes, onion, garlic</p>
                  <hr className='hr'/>
                  <h1><b>Garlic bread</b> <span>$9.50</span></h1>
                  <p>Grilled ciabatta, garlic butter, onions</p>
                  <hr className='hr'/>
                  <h1><b>Tomozzarella</b> <span>$10.50</span></h1>
                  <p>Tomatoes and mozzarella</p>
                  <hr className='hr'/>
                  <h1><b>Mozzarella Sticks</b> <span>$10.00</span></h1>
                  <p>Fried mozzarella sticks with a side of maranera sauce</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
};
export default Menu;