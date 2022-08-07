import React, { Component } from 'react';
import './App.css';
import Floor1 from './Floor1';
import Floor2 from './Floor2';
import Floor3 from './Floor3';
import DataFloor2 from './data/sport-categories.json'
import DataFloor3 from './data/content-by-sport.json';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            floor2Categories: [],
            floor3Articles: []
        }
            
    }
    componentDidMount() {
        this.setState({ 
            floor2Categories: DataFloor2.data.categories.map((categorie) => {
            return categorie;}),
            floor3Articles: DataFloor3.data.articles.map((article) => {
            return article;})
    })}
    render(){
        return (
            <div className="App">
                <Floor1 />
                <Floor2 categories={this.state.floor2Categories}/>
                <Floor3 articles={this.state.floor3Articles}/>
            </div>
        );
    }
}

export default App;

// Exemple de code que j'ai utilisé pour faire appel à une api.

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             floor2Img: []
//         }
//     }
//     componentDidMount() {
//         fetch('https://dog.ceo/api/breeds/image/random/5')
//         .then(res => {
//             return res.json()})
//             .then((data) => {
//                 this.setState({ floor2Img: data.message })
//             })
//         }
//         render(){
//             return (
//                 <div className="App">
//         <Floor1 />
//         <Floor2 url={this.state.floor2Img}/>
//         <Floor3 />
//       </div>
//     );
//   }
// }
