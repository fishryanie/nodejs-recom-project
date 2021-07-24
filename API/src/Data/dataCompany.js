export const arrCompany =
[
    {
        name: 'Lấy danh sách tất cả công ty',
        methot: 'GET' ,
        url: 'http://27.65.215.87:8000/company/getall'
    },
    {
        name: 'Lấy danh sách công ty theo mã',
        methot: 'GET' ,
        url: 'http://27.65.215.87:8000/company/gebyid/:maCongTy'
    },
    {
        name: 'Lấy danh sách 10 công ty nổi bật hàng đầu',
        methot: 'GET',
        url: 'http://27.65.215.87:8000/company/gettop10'
    },
    {
        name: 'Thêm công ty',
        methot: 'POST' ,
        url: 'http://27.65.215.87:8000/company/insertcompany'
    },
    {
        name: 'Cập nhật công ty',
        methot: 'PUT' ,
        url: 'http://27.65.215.87:8000/company/update/:maCongTy'
    },
    {
        name: 'Xóa công ty',
        methot: 'DELETE' ,
        url: 'http://27.65.215.87:8000/company/delete/:maCongTy'
    },



]