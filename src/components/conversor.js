import React, {Component} from "react";
import './conversor.css'

export default class Conversor extends Component{

    constructor(props){
        super(props);
        this.state = {
            moedaA_valor:'',
            moedaB_valor:0
        }
        this.converter = this.converter.bind(this);
    }
    converter(){
        let de_para =`${this.props.moedaA}_${this.props.moedaB}`
        let url =`https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=c6f9ed41d5d71ae83376`
     fetch(url).then(res=>{
         return res.json()
     })
     .then(json=>{
         let cotacao = json[de_para];
         let moedaB_valor =( parseFloat(this.state.moedaA_valor) * cotacao ).toFixed(2)
        this.setState({moedaB_valor})
        })
    }

    render(){
    return (
        <div className='conversor'>
            <p>{this.props.moedaA} pra {this.props.moedaB}</p>
            <input type='text' onChange={(event) =>{this.setState({moedaA_valor:event.target.value})}}></input>
            <button type='button' onClick={this.converter}>Converter

            </button>
            <p>{this.state.moedaB_valor}</p>

        </div>
    )
    }
}