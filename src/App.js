import {Component} from 'react'

import PlayList from './components/PlayList'

import './App.css'

// Replace your code here

class App extends Component {
  render() {
    return (
      <>
        <div className="main-container1">
          <h1 className="heading">Ed Sheeran</h1>
          <p className="paragraph">Singer</p>
        </div>
        <PlayList />
      </>
    )
  }
}
export default App
