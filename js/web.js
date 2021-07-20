import {axios} from"axios"
let danhSach = [];
let layDanhSach = async () =>{
    try{
        let result = await axios({
            url: '../API/api.json', //url backend qui dinh
            method: 'GET',
            responseType: 'json' //Kieu du lieu server tra be BE qui dinh
        })
        danhSach = result.data;
        renderAPI(danhSach);
    }catch{
        console.log(err);
    }
}

const objectAjax = {
    url: '../API/api.json', //url backend qui dinh
    method: 'GET',
    responseType: 'json' //Kieu du lieu server tra be BE qui dinh
}
const promise = axios(objectAjax);
//Thanh Cong
promise.then(result => {
    console.log('result',result.data);
})
//That bai
promise.catch(err => {
    console.log(err);
})

let stt = 0;
const renderAPI = (result) => {
    const contentBody= result.reduce((content, item) => {
    return content += `
    <tr>
        <td scope="col">${stt++}</td>
        <td scope="col">${item.name}</td>
        <td scope="col"><a href=${item.url}>${item.url}</a> </td>
        <td class="text-center" scope="col">${item.methot}</td>

    </tr>`
},"")
    document.querySelector('.contentBody').innerHTML = contentBody
}
layDanhSach();