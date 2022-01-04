const nodeMailer = require('../config/nodemailer');

// old method
// newComment = function(...something...);
// module.exports = newComment


// this is another way of exporting a method
exports.newComment = (comment) =>{
    // console.log("inside comment mailer",comment)
    let htmlString = nodeMailer.renderTemplate({comment:comment}, '/comments/new_comment.ejs')


    nodeMailer.transporter.sendMail({
        from: 'yash.narvekar01@gmail.com',
        to: comment.user.email,
        subject: "New Comment Published!!",
        html: htmlString

    },(err,info) =>{
        if(err){
            console.log('Error in sending mail',err);
            return;
        }
        console.log('Message sent',info);
        return;
    } );

}