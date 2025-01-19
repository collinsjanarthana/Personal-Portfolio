const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: "Method Not Allowed",
        };
    }

    const { firstName, lastName, email, message, phone } = JSON.parse(event.body);

    const name = `${firstName} ${lastName}`;
    const mail = {
        from: name,
        to: "collinsjanarthana@gmail.com", // Replace with your email
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Message: ${message}</p>`,
    };

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail(mail);
        return {
            statusCode: 200,
            body: JSON.stringify({ status: "Message Sent" }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
