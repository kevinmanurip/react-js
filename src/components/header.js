import React, { Component } from 'react';
import '../css/styles.css'

class Header extends Component {

    state = {
        keywords: ''
    }

    inputChangeHandler = (event) => {
        this.setState({
            keywords: event.target.value
        })
    }

    render() {
        
        // const style = {
        //     background: 'red'
        // }

        // if (this.state.keywords !== ''){
        //     style.background = 'red'
        // } else {
        //     style.background = 'blue'
        // }

        return (
            <header style = {{background:'red'}}>
                <div className="logo border-google">Google</div>
                <input
                    type="text" 
                    onChange={this.inputChangeHandler}
                />
            </header>
        )
    }
}

export default Header;