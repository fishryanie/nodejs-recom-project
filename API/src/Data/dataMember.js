export const arr = [
    {
        name: 'Lấy danh sách tổng người dùng',
        methot: 'GET' ,
        url: 'http://27.65.215.87:8000/user/getall'
    },
    {
        name: 'Lấy danh sách người dùng yêu thích',
        methot: 'GET' ,
        url: 'http://27.65.215.87:8000/user/getFavorite'
    },
    {
        name: 'Lấy danh sách người dùng trong thùng rác',
        methot: 'GET' ,
        url: 'http://27.65.215.87:8000/user/getTrash'
    },
    {
        name: 'Lấy danh sách người theo mã ngừoi dùng',
        methot: 'GET' ,
        url: 'http://27.65.215.87:8000/user/detail/:maNguoiDung'
    },
    {
        name: 'Đăng nhập',
        methot: 'POST' ,
        url: 'http://27.65.215.87:8000/user/login',
        result:'{taiKhoan, matKhau}'
    },
    {
        'name': 'Đăng kí',
        'methot': 'POST' ,
        'url': 'http://27.65.215.87:8000/user/register',
    },
    {
        'name': 'Quên mật khẩu',
        'methot': 'POST' ,
        'url': 'http://27.65.215.87:8000/user/forgotPassword',
        'result':'{new password, email}'
    },
    {
        'name': 'Thay đổi thông tin chi tiết người dùng theo mã',
        'methot': 'PUT' ,
        'url': 'http://27.65.215.87:8000/user/update/:maNguoiDung'
    },
    {
        'name': 'Thay đổi mật khẩu người dùng',
        'methot': 'PUT' ,
        'url': 'http://27.65.215.87:8000//user/switchingPassword/:maNguoiDung'
    },
    {
        'name': 'Thay đổi trạng thái người dùng',
        'methot': 'PUT' ,
        'url': 'http://27.65.215.87:8000/user/statusChange/:maNguoiDung'
    },
    {
        'name': 'Xóa người dùng theo mã',
        'methot': 'DELETE' ,
        'url': 'http://27.65.215.87:8000/user/delete/:maNguoiDung'
    },
    {
        'name': 'Xóa tất cả người dùng',
        'methot': 'DELETE' ,
        'url': 'http://27.65.215.87:8000/user/deleteAll'
    }
]