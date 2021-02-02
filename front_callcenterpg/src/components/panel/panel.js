// Imports
import React, {Component} from 'react';
import api from '../../service/api';
import './panel.css';

class Panel extends Component{
    constructor(props){
        super(props);

        this.state={
            datas: [],
        }
    }
    

async componentDidMount(){
    const response = await api.get('/categories');
   // const responseAll = await api.get('/all');
    this.setState({datas: response.data});
    // datas received api response
    console.log(response.data);
   // this.setState({datas: responseAll.data});
   // console.log(responseAll.data);

}


renderOption(){
    return this.state.datas.map(data => {
        return <option key={data} value={data}>{data}</option>
    })
}


async componentDidUpdate(response){
   await console.log("oi");

   
}


render(){
   // const {datas} = this.state;
   // console.log(datas);
<span>Selecione a situação</span>
    return(
        <div>
        <span>Selecione a situação</span>
            <select id="list">
                {this.renderOption()}
            </select>
            
        </div>
       
    )
   
}



}

export default Panel;