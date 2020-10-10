import React, { Component } from 'react'
import './part1.css'

export class Part1 extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[],
            items2:[],
            isLoaded: false
        }
    }
componentDidMount(){
    fetch('https://api.rootnet.in/covid19-in/contacts').then(res => res.json()).then(json => {
        console.log(json)
        this.setState({
            ...this.state,
            isLoaded:true,
            items:json.data.contacts.regional,
            items2:json.data.contacts.primary
        })
    })
}






    render() {
        var { isLoaded, items,items2}=this.state
        if(!isLoaded){
            return(
                <div>
                    loading
                </div>
            )
        }
        else{

            return (
                <div className='container'>
                    <div className='national-info'>
                    <h3>National Contacts</h3>
                    <p>
                        Helpline no. : {items2.number}
                        <br></br>
                        Tollfree no. : 1075
                        <br></br> 
                        email: {items2.email}
                        <br></br>
                        twitter: {items2.twitter}
                        <br></br>
                        facebook: {items2.facebook}
                        <br></br>
                        media: {items2.media}
                    </p>

                    </div>
                    <div>
                        <h3>State Contacts</h3>

                        <table className='part1-table'>
                            <thead>
                                <tr>
                                    <th className='part1-th'>State</th>
                                    <th className='part1-th'>contact info</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.items.map(item=>(
                                    <tr key={item.loc} className='stateTable'>
                                        <td className='part1-td'>{item.loc}</td>
                                        <td className='part1-td'>{item.number}</td>
                                    </tr>
                                ))}
                
                           
                           
                        
                            </tbody>
                        </table>
                   </div>
                        
                    
                </div>
        )}
    }
}

export default Part1
