const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const razorpay = new Razorpay({
    key_id: "rzp_test_WmyWrKo8Pjncen",
    key_secret: "P8FWatVljETlmRJ6dwZLJsri
",
});

app.post("/create-order", async (req, res) => {
    const options = {
        amount: 500, // ₹500.00
        currency: "INR",
        receipt: "order_rcptid_11",
    };

    try {
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
