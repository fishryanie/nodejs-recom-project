USE FLEX_DATABASE;

CREATE TABLE IF NOT EXISTS `PROFESSIONS`
(
    maNganh INT PRIMARY KEY AUTO_INCREMENT,
    tenNganh VARCHAR(255) NOT NULL,
    hinhAnh VARCHAR(1000) NULL,
    tranhThai INT(11) NOT NULL,
    mauSắc INT(11) NULL
)

INSERT INTO `PROFESSIONS` (`tenNganh`, `hinhAnh`, `trangThai`) VALUES
('Bán lẻ','https://www.digital38.com.vn/wp-content/uploads/2021/01/nganh-hang-ban-le-1.jpg'),
('Bảo hiểm','https://hongduchospital.vn/public/userfiles/customer/bao-hiem-3.png'),
('Bất động sản', 'https://toplist.vn/images/800px/cong-ty-bat-dong-san-noi-tieng-nhat-o-tp-ho-chi-minh-157560.jpg',),
('Chăm sóc khách hàng', 'https://vccivungtau.vn/wp-content/uploads/2019/06/ky-nang-cham-soc-khach-hang.jpg'),
('Giáo dục và đào tạo','https://static.tapchitaichinh.vn/images/upload/vuminh/01092019/education1.jpg'),
('Công nghệ thông tin','https://hcmuni.fpt.edu.vn/Data/Sites/1/media/2020-seo/cong-nghe-thong-tin/cong-nghe-thong-tin-va-truyen-thong-la-gi-co-hoi-viec-lam-01.jpg')