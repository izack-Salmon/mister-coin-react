import { NavLink, withRouter } from "react-router-dom";

function _AppHeader() {
    return (
        <header className="App-header">
            <section className='container'>
                <h1 className='logo'>Mister Coin</h1>
            </section>
            <nav>
                <NavLink activeClassName="my-active" exact to='/'>Home</NavLink>
                <NavLink activeClassName="my-active" to='/contact'>contact</NavLink>
                <NavLink activeClassName="my-active" to='/Statistic'>Statistic</NavLink>
            </nav>
        </header>

    )
}

export const AppHeader = withRouter(_AppHeader)