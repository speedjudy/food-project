import User from "../../models/signupSchema";

export default async function UpdateUser(req, res) {
    const { phone, category } = req.body;
    if (!phone) {
      return res.status(422).json({ error: "Please filled the field correctly" });
    }
    try {
      const filter = { phone: phone };
      const update = { category: category };
      const user = await User.findOneAndUpdate(filter, update);
      return res.json({ status: "ok", user: token, category: user.category });
    } catch (error) {
      return res.json({ status: "error", user: false });
    }
  }
  