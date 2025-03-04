const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.json());

const RAZORPAY_SECRET = "YOUR_RAZORPAY_SECRET"; // Get from Razorpay Dashboard

// Webhook Endpoint
app.post("/webhook", async (req, res) => {
    const secret = RAZORPAY_SECRET;
    const receivedSignature = req.headers["x-razorpay-signature"];
    
    const expectedSignature = crypto
        .createHmac("sha256", secret)
        .update(JSON.stringify(req.body))
        .digest("hex");

    if (expectedSignature !== receivedSignature) {
        return res.status(400).send("Invalid signature");
    }

    // Extract payment details
    const paymentId = req.body.payload.payment.entity.id;
    const email = req.body.payload.payment.entity.email;

    // Send service link via email
    sendServiceLink(email, paymentId);

    res.json({ status: "success" });
});

// Function to Send Email
async function sendServiceLink(email, paymentId) {
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "varun43483@gmail.com",
            pass: "Varun@2004",
        },
    });

    let mailOptions = {
        from: '"X-Ray MK I" <your-email@gmail.com>',
        to: email,
        subject: "Your Service Link - X-Ray MK I",
        text: `Thank you for your payment (Payment ID: ${paymentId}). Your service is now active. Access it here: https://yourwebsite.com/service`,
    };

    await transporter.sendMail(mailOptions);
}

app.listen(3000, () => console.log("Server running on port 3000"));
