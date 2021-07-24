import React,{useEffect} from 'react'
import logo from '../Assets/img/logoRecom.jpg'
import {arr} from "../Data/dataMember"
export default function Member() {
    let stt = 0;


    console.log(arr)
    return (
        <div>
            <table className="table table-light table-striped table-hover" style={{border: "none"}}>
            <thead><tr><th>Stt</th><th>Name of mode</th><th>Url</th><th>Methot</th><th>Result</th></tr></thead>
            <tbody> {arr?.map((item, index) => {
                return (
                    <tr key ={index}>
                        <td className="">{stt ++}</td>
                        <td className=''>{item.name}</td>
                        <td className=''>  <a href={item.url}>{item.url}</a></td>
                        <td className=''>{item.methot}</td>
                        <td className=''>{item.result}</td>
                    </tr>
                )})}
            </tbody>
        </table>
    </div>

    )
}
