USE FLEX_DATABASE;
CREATE TABLE IF NOT EXISTS `REVIEW`
(
    maReview INT PRIMARY KEY AUTO_INCREMENT,
    maNguoiDung INT,
    trangThai INT(11) NOT NULL,
    soSao VARCHAR(255) NULL,
    noiDung VARCHAR(1000) NULL,
    thoiGian VARCHAR(255) NULL,
    FOREIGN KEY (maNguoiDung) REFERENCES USER(maNguoiDung)
)
INSERT INTO `REVIEW` (`maNguoiDung`, `trangThai`, `soSao`, `noiDung`, `thoiGian`) VALUES
(1, 1, "⭐  ⭐  ⭐  ⭐  ⭐ ", "Công ty xịn xò quá, không làm mà vẫn có lương", "12:00 - 15/05/2020"),
(1, 1, "⭐  ⭐  ⭐  ⭐  ⭐ " , "Công ty xịn xò quá, không làm mà vẫn có lương", "12:00 - 15/05/2020"),
(1, 1, "⭐  ⭐  ⭐  ⭐  ⭐ " , "Công ty xịn xò quá, không làm mà vẫn có lương", "12:00 - 15/05/2020"),
(1, 1, "⭐  ⭐  ⭐  ⭐  ⭐ " , "Công ty xịn xò quá, không làm mà vẫn có lương", "12:00 - 15/05/2020"),
(1, 1, "⭐  ⭐  ⭐  ⭐  ⭐ " , "Công ty xịn xò quá, không làm mà vẫn có lương", "12:00 - 15/05/2020")

