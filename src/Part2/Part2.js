import React, { Component } from 'react';
import './part2.css'
import Temp from './Temp'
export class Part2  extends Component {
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

  // table_data() {
  //   var string_fixer='&nsbp'
  //   if(this.state.items.title.indexOf(string_fixer)===0){
  //     return(
  //       <tbody>
  //       {this.state.items.map(item=>(
  //         <tr key={item.title}>
  //             <td>{item.title}</td>
  //             <td>{item.link}</td>
  //             </tr>
         
               
  //     ))}
  //     </tbody> 
  //     )
  //   }
  //   else{
  //     return(
  //       <tbody>
  //       {this.state.items.map(item=>(
  //         <tr key={item.title}>
  //             <td>{item.title.substring(0,11)}</td>
  //             <td>{item.title.substring(11)}</td>
  //             <td>{item.link}</td>
  //             </tr>
         
               
  //     ))}
  //     </tbody>
  //     )

  //   }

    
  // }
    
  render() {
    
    var { isLoaded, items}=this.state
    if(!isLoaded){
        return(
            <div>
                loading
            </div>
        )
    }
    else{

        return (
            <div className='container-part2'>
               <table className='table-part2'>
                   <thead>
                        <tr>
                            <th className='part2-th'>Date</th>
                            <th className='part2-th'>Notification Title</th>
                            <th className='part2-th'>Link</th>
                        </tr>
                   </thead>
                   {this.table_data}
                   {/* <tbody>
                   {this.state.items.map(item=>(
                           <tr key={item.title}>
                               <td>{item.title.substring(0,11)}</td>
                               <td>{item.title.substring(11)}</td>
                               <td>{item.link}</td>
                               </tr>
                          
                                
                       ))} 

                   </tbody> */}
                   <Temp></Temp>
               </table>
                    
                
            </div>
    )}}
}
export default Part2;
