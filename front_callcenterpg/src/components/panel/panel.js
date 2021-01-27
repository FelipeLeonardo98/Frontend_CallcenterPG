// Imports
import React, {Component} from 'react';
import api from '../../service/api';
import './panel.css';

class Panel extends Component{
    state={
        datas: [],
    }

async componentDidMount(){
    const response = await api.get('/categories');
    //const responseAll = await api.get('/all');
    this.setState({datas: response.data});
    // datas received api response
   // console.log(response.data);
}

renderOption(){
    return this.state.datas.map(data => {
        return <option key={data} value={data}>{data}</option>
    })
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
/*  <select>
                    <option value="{data._id}">{data.category}</option>
                </select>*/

}

export default Panel;