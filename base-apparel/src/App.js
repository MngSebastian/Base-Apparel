import './App.css';
import rightBackground from './base-apparel-coming-soon-master/images/bg-pattern-desktop.svg'
import leftBackground from './base-apparel-coming-soon-master/images/hero-desktop.jpg' 
import logo from './base-apparel-coming-soon-master/images/logo.svg'

function App() {
  return (
    <div className="App">
      <div className='background'>
        <div>
          <img className='leftBackground' src={rightBackground} alt='Left Background Image'/>
          <div className='information'>
            <div className='logo'>
              <img src={logo}/>
            </div>
            <div className='title-paragraph-form'>
              <div className='title-paragraph'>
                <h4>We're</h4>
                <h2>COMING</h2>
                <h2>SOON</h2>
                <p>Hello fellow shoppers! We're currently building our new fashion store. <br></br>
                Add your email below to stay up-to-date with announcements and our launch deals.</p>
              </div>
              <div className='form'>
                <form>
                  <label for="email"></label>
                  <input type="email" placeholder="Email Address" id="email" name="email"/>
                </form>
                  <button className='btn'>v</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className='rightBackground' src={leftBackground} alt='Right Background Image'/>
          
        </div>
      </div>
    </div>
  );
}

export default App;
// Receive an error message when the form is submitted if:
// The input field is empty
// The email address is not formatted correctly