import './App.css';
import {Component} from "react";

class App extends Component{
  constructor(props){
      super(props);
      this.state = {
       listaDesejos: [],
       descricao: '',
      }
  };

  buscarDesejos = () => {
    console.log('Fazer a chamada para a API')
    fetch('http://localhost:5000/api/desejo')
    .then(r => r.json()) 
    .then(data => this.setState({listaDesejos: data}) )  
    .catch(erro => console.log(erro)) 
}

cadastrarDesejos = (desejo) => {
  desejo.preventDefault();

  fetch('http://localhost:5000/api/desejo', {
      method: 'POST', 
      body: JSON.stringify({ descricao : this.state.descricao}),
      headers :{
          "Content-Type" : "application/json"
      }
  })
  
  .then(console.log("desejo cadastrado."))
  .catch(erro => console.log(erro))  
  .then(this.buscarDesejos)
  .then(this.setState({ descricao: ''}))
}

componentDidMount(){
  this.buscarDesejos()
}


  render() {
    return(<div>
      <h1>WishList</h1>
      </div>
      )
  }

}

export default App;
