export const arrComment = [
    {
        name: 'Xem tất cả comment',
        methot: 'GET' ,
        url: 'http://27.65.215.87:8000/comment/getall',
    }
    ,{
        name: 'Xem comment theo mã',
        methot: 'GET' ,
        url: 'http://27.65.215.87:8000/comment/getbyid/:maComment',
        result: '{maComment}'
    }
    ,{
        name: 'Thêm comment',
        methot: 'POST' ,
        url: 'http://27.65.215.87:8000/comment/create',
        result: '{trangThai}'
    },
    ,{
        name: 'Cập nhật comment',
        methot: 'UPDATE' ,
        url: 'http://27.65.215.87:8000/comment/updatebyid/:maComment',
        result: '{maComment, trangThai}'
    },
    ,{
        name: 'Xóa comment',
        methot: 'DELETE' ,
        url: 'http://27.65.215.87:8000/comment/deletebyid/:maComment',
        result: '{maComment, trangThai}'
    },

]