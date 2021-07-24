USE FLEX_DATABASE;
CREATE TABLE IF NOT EXISTS `COMMENT`
(
    maComment INT PRIMARY KEY AUTO_INCREMENT,
    maReview INT,
    maNguoiDung INT,
    trangThai INT NOT NULL,
    thoiGian VARCHAR(255) NULL,
    noiDung VARCHAR(255) NULL,
    FOREIGN KEY (maReview) REFERENCES REVIEW(maReview),
    FOREIGN KEY (maNguoiDung) REFERENCES USER(maNguoiDung)
)

INSERT INTO COMMENT ( maReview, maNguoiDung, trangThai, thoiGian, noiDung ) VALUES
(1,2,1,"12:00 - 23/5/2021", "Công ty như cẹc"),
(1,7,1,"12:00 - 23/5/2021", "Công ty vip qué"),
(1,5,1,"12:00 - 23/5/2021", "Đừng zô làm nhà mng"),
(1,6,1,"12:00 - 23/5/2021", "Công ty như cẹc"),
(1,1,1,"12:00 - 23/5/2021", "Công ty như cẹc")