import { Link } from "react-router-dom";

function Navbar(props) {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme={`${props.mode === 'light' ? 'light':'dark'}`}>
      <div className="container-fluid mx-4">
        <Link className="navbar-brand fw-bold text-success" to="/">TextAnalyzer</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{"--bs-scroll-height": 100 + 'px'}}>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">About</Link>
            </li>
          </ul>
          <div>
            <span className="myCursor mx-2 text-light bi bi-sun-fill" onClick={props.toggleMode}><svg className='mx-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={`${props.mode === 'dark' ? 'orange':'dark'}`} viewBox="0 0 16 16">
              <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
              </svg> <span className={`text-${props.mode === 'dark' ? 'light':'dark'}`}>{props.modeText}</span>
            </span>
            <span className="myCursor mx-2 text-light"><svg className='mx-2 bi bi-share' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" viewBox="0 0 16 16">
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
              </svg> <span className={`text-${props.mode === 'dark' ? 'light':'dark'}`}>Share</span> 
            </span>
          </div>
        </div>
      </div>
    </nav>
    );
}

export default Navbar;

Navbar.defaultProps = {
    // title: 'CodeCommandos'
}

// Navbar.propTypes = {                             // these all are props check to catch the invalid props type.
//     title: PropTypes.string.isRequired,
// };


