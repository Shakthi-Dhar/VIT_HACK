import React, { Component } from 'react'
import './part3b.css'

export class Part3b extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[],
            stateSelected:'0',
            stateLoaded:'false',
            typeSelected:'0',
            typeLoaded:'false'
        }
        this.handleSubmitState=this.handleSubmitState.bind(this)
        this.handleSubmitType=this.handleSubmitType.bind(this)
    }
    componentDidMount(){
        fetch("https://api.rootnet.in/covid19-in/hospitals/medical-colleges").then(res => res.json()).then(json => {
            console.log(json)
            this.setState({
                ...this.state,
                isLoaded:true,
                items:json.data.medicalColleges
                
            })
        })
    }

   

    handleSubmitState(event){
        event.preventDefault()
    }
    handleSubmitType(event){
        event.preventDefault()
    }

    handleSubmitState = event => {
        this.setState({
            ...this.state,
            stateSelected:event.target.value,
            stateLoaded:true
        } )
    }

    handleSubmitType = event => {
        this.setState({
            ...this.state,
            typeSelected:event.target.value,
            typeLoaded:true


        })
    }

    getUnique(arr,comp){
        const unique = arr
        .map(e => e[comp])
        .map((e,i,final)=> final.indexOf(e)===i && i)
        .filter(e => arr[e])
        .map( e=> arr[e]);
        return unique;
    }


    render() {
        const uniqueState = this.getUnique(this.state.items,"state");
        const uniqueType = this.getUnique(this.state.items,"ownership")
        const item_data = this.state.items
        if(!this.state.isLoaded){
            return(
                <div>loading</div>
            )
        }
        else{
            return(
                <div className='container-part3b'>
                    <form onSubmit={this.handleSubmitState}>
                        <label>
                            <select value={this.state.items} onChange={this.handleSubmitState}>
                                {uniqueState.map(item=>(
                                    <option key={item.state} value={item.state} >
                                        {item.state}
                                    </option>
                                ))}
                            </select>
                        </label>
                        </form>
                        {/* <input type='submit' value='Submit' /> */}
                        <form onSubmit={this.handleSubmitType}>
                        <label>
                            <select value={this.state.items} onChange={this.handleSubmitType}>
                                {uniqueType.map(item=>(
                                    <option key={item.ownership} value={item.ownership} >
                                        {item.ownership}
                                    </option>
                                ))}
                            </select>
                        </label>
                        {/* <input type='submit' value='Submit' /> */}
                        </form>
                        
                        
                        <table className='part3b-table'>
                            <thead>
                                <tr>
                                <th className='part3b-th'>State</th>
                                <th className='part3b-th'>Name</th>
                                <th className='part3b-th'>City</th>
                                <th className='part3b-th'>Ownership</th>
                                <th className='part3b-th'>Admission capacity</th>
                                <th className='part3b-th'>Hospital beds</th>
                                </tr>
                            </thead>
                            
                                {this.state.items.map(item=>{
                                    if((item.state.indexOf(this.state.stateSelected)>=0)&&(!this.state.typeSelected)){
                                        return(
                                            <tbody>
                                                <tr>
                                                <td className='part3b-td'>{item.state}</td>
                                                <td className='part3b-td'>{item.name}</td>
                                                <td className='part3b-td'>{item.city}</td>
                                                <td className='part3b-td'>{item.ownership}</td>
                                                <td className='part3b-td'>{item.admissionCapacity}</td>
                                                <td className='part3b-td'>{item.hospitalBeds}</td>
                                                </tr>
                                            </tbody>
                                        )
                                    }
                                    else if((item.state.indexOf(this.state.stateSelected)>=0)&&(item.ownership.indexOf(this.state.typeSelected))){
                                        return(
                                            <tbody>
                                                <tr>
                                                <td className='part3b-td'>{item.state}</td>
                                                <td className='part3b-td'>{item.name}</td>
                                                <td className='part3b-td'>{item.city}</td>
                                                <td className='part3b-td'>{item.ownership}</td>
                                                <td className='part3b-td'>{item.admissionCapacity}</td>
                                                <td className='part3b-td'>{item.hospitalBeds}</td>
                                                </tr>
                                            </tbody>
                                        )
                                    }

                                })}
                            
                        </table>

                        
        
                    
                </div>
            )
        }
    }
}

export default Part3b
