import React,{useEffect} from 'react'
import { arrReview } from "../Data/dataReview";
export default function Company() {
    let stt = 0;
    return (
        <div>
            <table className="table table-light table-striped table-hover" style={{border: "none"}}>
                <thead><tr><th>Stt</th><th>Name of mode</th><th>Url</th><th>Methot</th><th>Result</th></tr></thead>
                <tbody>{arrReview?.map((item, index) => {
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
