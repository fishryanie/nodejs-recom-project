const nodemailer = require('nodemailer');

exports.sendMail = (newPassword, toMail) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'quanphps14761@fpt.edu.vn',
          pass: '2171998Ryanphan'
        }
      });
    let mailOptions = {
        from: "quanphps14761@fpt.edu.vn",
        to: toMail,
        subject: '[Recom App] Notification your password',
        text:`Hi ${toMail}, \n \nMật khẩu tạm thời của bạn là : ${newPassword} \nHãy vào trang cá nhân và đổi lại mật khẩu \n\nThanks, \nThe Recom Team
        `
    };
    transporter.sendMail(mailOptions, (error, info) =>{
        console.log(error ? error : 'Email sent: ' + info.response)
    });
}


