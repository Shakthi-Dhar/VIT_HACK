import React ,{useState,useEffect,Component} from 'react'
import './part3a.css'


// const Part3a = () => {

//     const [items=[],setItems]=useState(null)
//     const [loading,setLoding]=useState(true)

//     useEffect(async ()=> {
//         const response=await fetch("https://api.rootnet.in/covid19-in/hospitals/beds")
//         const data1=await response.json();
//         console.log(data1)
//         const [item]=data1.data.regional
//         setItems(item)
//         console.log(data1)
//     },[])




//     return (
//         <div className="container-part3a">
//             <table>
//             <table className='part1-table'>
//                             <thead>
//                                 <tr>
//                                     <th className='part1-th'>State</th>
//                                     <th className='part1-th'>contact info</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {items.map(item=>(
//                                     <tr key={item.loc} className='stateTable'>
//                                         <td className='part1-td'>{item.loc}</td>
//                                         <td className='part1-td'>{item.number}</td>
//                                     </tr>
//                                 ))}
                
                           
                           
                        
//                             </tbody>
//                         </table>
//             </table>
//         </div>
//     )
// }

// export default Part3a


export class Part3a extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[],
            items2:[],
            items3:[],
            isLoaded: false
        }
    }
componentDidMount(){
    fetch("https://api.rootnet.in/covid19-in/hospitals/beds").then(res => res.json()).then(json => {
        console.log(json)
        this.setState({
            ...this.state,
            isLoaded:true,
            items:json.data.regional,
            items2:json.data.summary,
            items3:json.data.sources
        })
    })
}
render() {
return(
    <div className='container-part3a'>
                    {/* <div className='national-info'>
                    <h3>National Contacts</h3>
                    <p>
                        Helpline no. : {items2.number}
                        // <br></br>
                        Tollfree no. : 1075
                        // <br></br> 
                        email: {items2.email}
                        // <br></br>
                        twitter: {items2.twitter}
                        // <br></br>
                        facebook: {items2.facebook}
                        // <br></br>
                        media: {items2.media}
                    </p>

                    </div> */}
                    <div className='part3a-summary'>
                        <h3>Summary</h3>
                        <p>rural hospitals:{this.state.items2.ruralHospitals}</p>
                        <p>rural beds: {this.state.items2.ruralBeds}</p>
                        {/* <br></br> */}
                        <p>urban hospitals: {this.state.items2.urbanHospitals}</p>
                        {/* <br></br> */}
                        <p>urban beds: {this.state.items2.urbanBeds}</p>
                        {/* <br></br> */}
                        <p>total hospitals: {this.state.items2.totalHospitals}</p>
                        {/* <br></br> */}
                        <p>total beds: {this.state.items2.totalBeds}</p>
                        {/* <br></br> */}
                    </div>
                    <div>
                        <h3>Hospitals and Beds state wise distribution</h3>

                        <table className='part3a-table'>
                            <thead>
                                <tr>
                                    <th className='part3a-th'>State</th>
                                    <th className='part3a-th'>rural hospitals</th>
                                    <th className='part3a-th'>rural beds</th>
                                    <th className='part3a-th'>urban hospitals</th>
                                    <th className='part3a-th'>urban beds</th>
                                    <th className='part3a-th'>total hospital</th>
                                    <th className='part3a-th'>total beds</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.items.map(item=>(
                                    <tr key={item.loc} className='stateTable'>
                                        <td className='part3a-td'>{item.state}</td>
                                        <td className='part3a-td'>{item.ruralHospitals}</td>
                                        <td className='part3a-td'>{item.ruralBeds}</td>
                                        <td className='part3a-td'>{item.urbanHospitals}</td>
                                        <td className='part3a-td'>{item.urbanBeds}</td>
                                        <td className='part3a-td'>{item.totalHospitals}</td>
                                        <td className='part3a-td'>{item.totalBeds}</td>
                                    </tr>
                                ))}
                
                           
                           
                        
                            </tbody>
                        </table>
                   </div>
                   <div>
                       <p>source: https://pib.gov.in/PressReleasePage.aspx?PRID=1539877</p>
                   </div>
                        
                    
                </div>
)
}}
export default Part3a