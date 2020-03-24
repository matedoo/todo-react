import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoList from './components/containers/ToDoList'


class App extends Component{
    render(){
        return(
            <div>
                <ToDoList/>
            </div>
        );
    }
}

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );


