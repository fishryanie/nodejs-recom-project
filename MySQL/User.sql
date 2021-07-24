-- SỬ DỤNG DATABASE
USE FLEX_DATABASE;
-- TẠO BẢNG
CREATE TABLE IF NOT EXISTS `USER`
(
    maNguoiDung INT PRIMARY KEY AUTO_INCREMENT,
    tenNguoiDung VARCHAR(255) NOT NULL,
    tenHienThi VARCHAR(255) NOT NULL,
    soDienThoai VARCHAR(15) NOT NULL,
    hinhAnh VARCHAR(1000) NULL,
    chucVu VARCHAR(255) NOT NULL,
    taiKhoan VARCHAR(255) NOT NULL,
    matKhau VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    gioiTinh BOOLEAN NULL,
    trangThai INT(10) NULL,
    loaiNguoiDung int(10) NULL
)
-- insert dữ liệu mẫu
INSERT INTO `USER`
    (`tenNguoiDung`,  `tenHienThi`, `soDienThoai`, `hinhAnh`, `chucVu`, `taiKhoan`, `matKhau`, `email`, `gioiTinh`, `trangThai`, `loaiNguoiDung`)
VALUES
    -- mẫu
    ( 'Phan Hồng Quân', 'Quân fuckboiz', '0979955925', 'https://img4.thuthuatphanmem.vn/uploads/2020/12/25/hinh-anh-soi-3d_042148391.jpg', 'Giám đốc', 'quan123', 'quan123', 'quan123@gmail.com', true, 2, 3),
    ( 'Đặng Hoàng Huy', 'Huy thun đơ', '0979955925', 'https://i.pinimg.com/236x/9d/65/ae/9d65aecc033dadd76d8556ae07cf24e9.jpg', 'Tạp vụ', 'huy123', 'huy123', 'huy123@gmail.com', false, 1, 1),
    ('Nguyễn Thành Đạt','Đạt ngựa','0979955925','https://i.pinimg.com/originals/c6/dc/8c/c6dc8c2764bf1a42b11e97eb095a9593.png','Nhân viên','Dat123','Dat123','Dat123@gmail.com',false,1,2),
    ('Lê Quốc Đại','Đại kibo','0979955925','https://static3.cbrimages.com/wordpress/wp-content/uploads/2019/08/Green-Lantern-Larfleeze-Feature.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5','Nhân viên','Dai123','Dai123','Dai123@gmail.com',true,1,2),
    ('Đắc Nhân Tâm','Tâm Đạo Lý','0979955925','http://americastarbooks.com/wp-content/uploads/2018/11/noi-dung-sach-dac-nhan-tam.jpg','Trưởng Phòng','tam123','tam123','tam123@gmail.com',true,1,2),
    ('Nguyễn Thành Nhân','N@!@##','0979955925','http://americastarbooks.com/wp-content/uploads/2018/11/noi-dung-sach-dac-nhan-tam.jpg','Nhân Viên','Nhan123','Nhan123','nhan123@gmail.com',true,1,2),
    ('Trương lý thuyết','Trương lý thuyết','0979955925','https://static3.cbrimages.com/wordpress/wp-content/uploads/2019/08/Green-Lantern-Larfleeze-Feature.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5','Nhân Viên','Thuyet123','Thuyet123','Thuyet123@gmail.com',true,1,2),
    ('Nguyễn Đại Hậu','Hau kkkkk','0979955925','https://upload.wikimedia.org/wikipedia/vi/8/80/Green_Lantern_Rebirth_6.jpg','Nhân Viên','hau123','hau123','hau123@gmail.com',false,1,2),
    ('Lăng Vân Triệt',' Triệt sản','0979955925', 'https://scontent-hkg4-1.xx.fbcdn.net/v/t1.18169-0/p526x296/14067583_1741845112755823_3195132005291546492_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=5tAZzmc1WY8AX_AEfSb&_nc_ht=scontent-hkg4-1.xx&oh=222e264b4b33d58a20a2a2837c45fa5b&oe=60FADA44','Nhân Viên','triet','triet','triet123@gmail.com',false,1,2),
    ('Càn long','Long đao', '0979955925', 'https://media.techz.vn/resize_x355x/media2019/source/Nhung-do/A-Chuyen-La/Tiet-lo-moi-tinh-dong-tinh-cua-hoang-de-can-long-2.jpg','Nhân viên','long123','long123','long123@gmail.com',false,1,2)








