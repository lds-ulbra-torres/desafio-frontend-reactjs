import React, { Component, div } from 'react';
import axios from 'axios';
import './components/styles.css';

const baseURL = 'https://desafio-lds.herokuapp.com/';
const api = axios.create({ baseURL });

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: null,
      titulo: "",
      horario: "",
      editTitulo: "",
      editHorario: "",
      editID: ""
    }
    this.getData();
  }

  getData = async () => {
    const result = await api.get('/compromissos')
    this.setState({ data: result.data })
    console.log(result.data);
  };

  onChange = event => {
    const { name, value } = event.target
    console.log(name, value);
    this.setState({ [name]: value })
  };

  onChangeData = (event, i) => {
    const data2 = this.state.data
    const { name, value } = event.target
    console.log(name, value);
    if (name === 'titulo')
      this.setState({ data: data2.map((e, index) => index !== i ? e : { [name]: value, 'horario': e.horario, '_id': e._id }) })
    else
      this.setState({ data: data2.map((e, index) => index !== i ? e : { [name]: value, 'titulo': e.titulo, '_id': e._id }) })
  };

  postData = async () => {

    const { horario, titulo } = this.state
    const data = { titulo, horario }
    const result = await api.post('/compromissos', data)
    this.setState({ data: [...this.state.data, data] })
  };

  delete = async e => {

    await api.delete(`/compromissos/${e._id}`);
    const post = this.state.data
    const data = post.filter(p => p.id !== e.id ? p : null);

    this.setState({ data });
  };

  edit = async data => {
    this.setState({
      editHorario: data.horario,
      editTitulo: data.titulo,
      editID: data._id
    });
  };

  update = async () => {
    const { editHorario, editTitulo, editID } = this.state;
    const data2 = { titulo: editTitulo, horario: editHorario, _id: editID };

    await api.put(`/compromissos/${editID}`, data2);

    const post = this.state.data
    const data = post.map(p => p._id !== editID ? p : data2);

    this.setState({
      data,
      editID: null
    });
  };

  cancelar = async () => {
    this.setState({ editID: null });
  };

  render() {
    const { data, editTitulo, editHorario, editID } = this.state;
    return (
      <div className="container.fluid">

        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-5">
            <h1 className="titul">Gerenciador de Compromissos</h1>
          </div>
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <input className="pesquisar" placeholder="Pesquisar"></input>
          </div>
          <div className="col-md-3"></div>
        </div>

        <div className="row">

          <div className="col-md-3"></div>
          <div className="col-md-6" >
            <table>
              <tr className="titulos">
                <th className="tableTitulo">Titulo</th>
                <th className="tableHorario">Horário/Data</th>
                <th></th>
                <th></th>
              </tr>
              {data && data.map((e, i) =>

                editID !== e._id ?

                  <tr key={e.titulo}>
                    <td className="inserir">{e.titulo}</td>
                    <td className="horario">{e.horario}</td>
                    <td className="ajustar"><button className="btn btn-primary editar" onClick={() => this.edit(e)}>Editar</button></td>
                    <td><button className="btn btn-danger excluir" onClick={() => this.delete(e)}>Apagar</button></td>
                  </tr>
                  :
                  //////
                  <tr>
                    <td><input className="inserir" value={editTitulo} onChange={this.onChange} name="editTitulo"></input></td>
                    <td><input className="ajuste horario" value={editHorario} onChange={this.onChange} name="editHorario" type="datetime-local"></input></td>
                    <td><button className="btn btn-primary editar" onClick={this.update}>Atualizar</button></td>
                    <td><button className="btn btn-danger excluir" onClick={this.cancelar}>Cancelar</button></td>
                  </tr>
                //////
              )}
                <tr>
                  <td><input className="inserir" placeholder="Título" onChange={this.onChange} name="titulo"></input></td>
                  <td><input className="horario" onChange={this.onChange} name="horario" type="datetime-local"></input></td>
                  <td></td>
                  <td><button className="btn btn-success botao" onClick={this.postData}>Salvar</button></td>
                </tr>
              </table>
            </div>
          <div className="col-md-3"></div>
        </div>
      </div >
    );
  }
}


export default App;