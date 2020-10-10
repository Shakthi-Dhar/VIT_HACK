import React, { Component } from 'react'
import './part2.css'

export class Temp extends Component {
    constructor(props){
        super(props);
        this.state={
          items : [],
          isLoaded: false,
        }
      }
      componentDidMount(){
      
        fetch('https://api.rootnet.in/covid19-in/notifications')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded : true,
            items : json.data.notifications,
          })
        }
        );
      
    }
    render() {

        var string_fixer='&nbsp'
    //if(this.state.items.indexOf(';')>=0){
      return(
        <tbody>
        {this.state.items.map(item=>{
        if(item.title.indexOf(';')>=0){
            return(
          <tr key={item.title}>
              <td className='part2-td'>-</td >
              <td className='part2-td'>{item.title.substring(10)}</td >
              <td className='part2-td'>{item.link}</td >
              </tr>
            )}
        else{
            return(
                <tr key={item.title}>
                    <td className='part2-td'>{item.title.substring(0,10)}</td >
                    <td className='part2-td'>{item.title.substring(10)}</td >
                    <td className='part2-td'>{item.link}</td >
                </tr>
            )
        }
            
            
            })}
         </tbody> 
      )
    //}
    // else{
    //     return(
    //       <tbody>
    //       {this.state.items.map(item=>(
    //         <tr key={item.title}>
    //             <td >{item.title.substring(0,10)}</td >
    //             <td >{item.title.substring(10)}</td >
    //             <td >{item.link}</td >
    //             </tr>
           
                 
    //     ))}
    //     </tbody>
    //     )
  
    //   }

        // return (
        //     <div>
                
        //     </div>
        // )
    }
}

export default Temp
