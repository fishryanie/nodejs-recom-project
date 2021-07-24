import React from 'react'
import { arrProfessions } from "../Data/dataProfessions";
export default function Professions() {
    let stt = 0
    return (
        <section>

        <div>
            <table className="table table-light table-striped table-hover" style={{border: "none"}}>
            <thead><tr><th>Stt</th><th>Name of mode</th><th>Url</th><th>Methot</th><th>Result</th></tr></thead>
            <tbody className="contentBody">
            {arrProfessions?.map((item, index) => {
                return (
                    <tr key ={index}>
                        <td className="">{stt ++}</td>
                        <td className=''>{item.name}</td>
                        <td className=''>  <a href={item.url}>{item.url}</a></td>
                        <td className=''>{item.methot}</td>
                        <td className=''>{item.result}</td>
                </tr>
                )
            })}
            </tbody>
        </table>
        </div>
        </section>
    )
}
