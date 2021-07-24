export const arrReview = [
    {
        name: 'Xem tất cả review',
        methot: 'GET' ,
        url: 'http://27.65.215.87:8000/review/getall',
    }
    ,{
        name: 'Xem review theo mã',
        methot: 'GET' ,
        url: 'http://27.65.215.87:8000/review/getbyid/:maReview',
        result: '{maRiview}'
    }
    ,{
        name: 'Thêm review',
        methot: 'POST' ,
        url: 'http://27.65.215.87:8000/review/create',
        result: '{trangThai}'
    },
    ,{
        name: 'Cập nhật review',
        methot: 'UPDATE' ,
        url: 'http://27.65.215.87:8000/review/update/:maReview',
        result: '{maRiview, trangThai}'
    },
    ,{
        name: 'Xóa review',
        methot: 'DELETE' ,
        url: 'http://27.65.215.87:8000/review/delete/:maReview',
        result: '{maRiview, trangThai}'
    },

]