USE FLEX_DATABASE;
CREATE TABLE IF NOT EXISTS `COMPANY`
(
    maCongTy INT PRIMARY KEY AUTO_INCREMENT,
    maNganh INT NOT NULL,
    maNguoiDung INT NOT NULL,
    trangThai INT(10) NOT NULL,
    tenCongTy VARCHAR(255) NOT NULL,
    soLuongNhanVien VARCHAR(255) NULL,
    diaChi VARCHAR(255) NULL,
    hotline VARCHAR(15) NULL,
    hinhAnh VARCHAR(1000) NULL,
    moTa VARCHAR(1000) NULL,
    FOREIGN KEY (maNganh) REFERENCES PROFESSION(maNganh),
    FOREIGN KEY (maNguoiDung) REFERENCES USER(maNguoiDung)
)
INSERT INTO `COMPANY` (`maNganh`, `maNguoiDung`, `trangThai`, `tenCongTy`, `soLuongNhanVien`, `diaChi`,`hotLine`,`hinhAnh`, `moTa`) VALUES
(
    1, 1, 0, "Unilever Việt Nam","1000+","Quận 7, Tp. Hồ Chí Minh","1900 8211",
    "https://static.topcv.vn/company_logos/cong-ty-tnhh-quoc-te-unilever-viet-nam-5d6f6b70c381c.jpg",
    ""
),
(
    1, 1, 0, "FPT Software", "1000+", "Quận 9, Tp. Hồ Chí Minh","",
    "https://cdn-bmoen.nitrocdn.com/tYVbFNNtGTgAdybjnSBkQbzNFOcDSFaN/assets/static/optimized/rev-6f7d694/wp-content/uploads/sites/2/2018/03/logo_white.svg",
    ""
),
(
    2, 2, 0, "Lozi Việt Nam","51-150", "Quận 10, Tp. Hồ Chí Minh","",
    "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/71295693_2475344099180601_7676397638006079488_n.png?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=AgkNHXY3uuoAX8RZrD-&_nc_ht=scontent-hkg4-1.xx&oh=476f15849879e51b77bc417b583f77e3&oe=60FA3EA6",
    ""
),
(
    3, 3, 0, "Tiki Corporation","1000+", "Q. Tân Bình, Tp. Hồ Chí Minh","",
    "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/90203015_10158237720437769_4332317920743915520_n.png?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=xbks90aYLfEAX8x-CAO&_nc_oc=AQmcSOe0IyX3aQ0tpEQ32cUKohAL05rCBWdPpj9Fd1uPCAvuqBmT3wwmXlVYpmq-8Z-q7giWiRDCGLC4RxtUJ_Oy&_nc_ht=scontent-hkg4-1.xx&oh=9ec69b545b7184813c04ad87c9fde647&oe=60FA4DEC",
    ""
),
(   4, 3, 0,"Ngân hàng Á Châu | ACB","1000+", "Quận 3, Tp. Hồ Chí Minh","",
    "https://online.acb.com.vn/acbib/img/logo.jpg",
    ""
),
(
    5, 4,0, "LazaDa","1000+","Quận 10,Tp.Hồ Chí Minh","",
    "https://laz-img-cdn.alicdn.com/images/ims-web/TB1T7K2d8Cw3KVjSZFuXXcAOpXa.png",
    ""
),
(
    3, 5,0, "Vina Homes","1000+","Quận Cầu Giấy,Tp.Hà nội","",
    "https://diaocvinahomes.vn/wp-content/uploads/2017/06/logo-vinahomes-e1489650250439-2.png",
    ""
),
(
    4, 6, 0,"Babylons","1000+","Nam Từ Liêm,Tp.Hà Nội","",
    "http://babylons.com.vn/babylons/images/logobb_en.png",
    ""
),
(
    2,7,0, "Yody","1000+","Quận Thanh Xuân,Tp.Hà Nội","",
    "https://storage.googleapis.com/cdn.nhanh.vn/store/3138/logo_1615426885_logo-yody.pngd_yody",
    ""
),
(
    6, 8, 0, "FPT university","1000+","Quận Bình Thạnh,Tp.Hồ Chí Minh","",
    "",
    ""
)