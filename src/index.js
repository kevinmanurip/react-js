import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

// COMPONENTS
import Header from './components/header';
import NewsList from './components/news_list';

class App extends Component {
    state = {
        news:JSON
    }

    render() {
        console.log()
        return (
            <div>
                <Header/>
                <NewsList news={this.state.news}>
                    <h3>This news today!</h3>
                </NewsList>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));