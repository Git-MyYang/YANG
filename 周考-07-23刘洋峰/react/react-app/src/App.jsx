import { Component} from 'react'
import './App.css'
import image from "./assets/搜索.png"

class App extends Component {

  
  state = {
    title: '',
    count: 0,
    list: []
  }

  submit = (event) => {
    this.state.list.push(this.state.title)
  }
  render() {

    const { count, title, list} = this.state


    return (
      <div className='box'>
        <header className='nav'><h2>搜索</h2></header>
        <main>
          <div className='searchs'><input type="text" className='inp' value={title}  onChange={e => this.setState({ title: e.target.value })} /><img className='image' onClick={this.submit} src={image} alt="" /></div>
          <ul>{list.map((v,i) => {return <li key={i}>{v}</li>})}</ul>
          
          <div className='infos'>{title}</div>
        </main>
      </div>
    )
  }
}

export default App
