export const arrProfessions = [
    {
        name: 'Lấy danh sách ngành',
        methot: 'GET' ,
        url: 'http://27.65.215.87:8000/professions/getall'
    },
    {
        name: 'Lấy danh sách ngành theo mã',
        methot: 'GET' ,
        url: 'http://27.65.215.87:8000/professions/gebyid/:maNganh'
    },
    {
        name: 'Thêm ngành',
        methot: 'POST' ,
        url: 'http://27.65.215.87:8000/professions/create',
        result: '{tenNganh, trangThai}'
    },
    {
        name: 'Cập nhật ngành theo mã',
        methot: 'PUT' ,
        url: 'http://27.65.215.87:8000/professions/update/:maNganh',
        result: '{maNganh, tenNganh}'
    },
    {
        name: 'Xóa ngành theo mã',
        methot: 'DELETE' ,
        url: 'http://27.65.215.87:8000/professions/deletebyid/:maNganh',
        result: '{maNganh}'
    },
    {
        name: 'Xóa tất cả ngành',
        methot: 'DELETE' ,
        url: 'http://27.65.215.87:8000/professions/deleteall',
    },
]