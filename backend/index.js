const express = require("express");
const cors = require("cors");

const Account = require("./models/Account");

const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/login", async (req, res) => {
  console.log(req.body);

  const { username, password } = req.body;

  try {
    const foundAcc = await Account.findOne({
      username: username,
      password: password,
    });

    if (!foundAcc) {
      return res.status(404).json({ error: "Account not found" });
    }

    return res.status(200).json({
      message: "login successful",
      account: {
        username: foundAcc.username,
        name: foundAcc.name,
        address: foundAcc.address,
        email: foundAcc.email,
        role: foundAcc.accountRole,
        id: foundAcc._id,
      },
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching the account" });
  }
});

app.listen(port, () => {
  console.log("app is now listening at port:", port);
});
