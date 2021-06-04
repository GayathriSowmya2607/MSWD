import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'Sowmya',
    number: 9398108433
  },
  {
    id: 2,
    name: 'Gayathri',
    number: 9182760111
  },
  {
    id: 3,
    name: 'Vamsi',
    number: 7013508394
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)