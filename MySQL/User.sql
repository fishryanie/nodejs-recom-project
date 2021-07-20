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

-- insert thông tin bảng người dùng
INSERT INTO `USER`
    (`tenNguoiDung`,  `tenHienThi`, `soDienThoai`, `hinhAnh`, `chucVu`, `taiKhoan`, `matKhau`, `email`, `gioiTinh`, `trangThai`, `loaiNguoiDung`)
VALUES
-- mẫu
    ( 'Phan Hồng Quân', 'Quân fuckboiz', '0979955925', 'https://img4.thuthuatphanmem.vn/uploads/2020/12/25/hinh-anh-soi-3d_042148391.jpg', 'Giám đốc', 'quan123', 'quan123', 'quan123@gmail.com', true, 2, 3),
    ( 'Đặng Hoàng Huy', 'Huy thun đơ', '0979955925', 'https://i.pinimg.com/236x/9d/65/ae/9d65aecc033dadd76d8556ae07cf24e9.jpg', 'Tạp vụ', 'huy123', 'huy123', 'huy123@gmail.com', false, 1, 1),









