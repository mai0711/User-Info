import './Header.css';

export const Header = ()=>{
    return(
        <header className="header">
          <div className='userInfo'>
            <h1>User Info</h1>
          </div>
          <div className='button'>
            <button>Home</button>
            <button>User list</button>
            <button>Contact us</button>
          </div>  
        </header>
    )
}