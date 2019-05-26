import React, { Component } from 'react';
import Header from './components/Header';
import Controls from './components/Controls';
import Grid from './components/Grid/Grid';
import './styles/style.scss';

class App extends Component {
    render() {
        return (
            <section className="content">
                <Header />
                <Controls />
                <Grid />
            </section>
        )
    }
}

export default App;