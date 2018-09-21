const Appt = require("../models").Appointment;

const create = (req, res) => {
  Appt.create(req.body).then(() =>
    res
      .status(201)
      .json({ success: true, message: "Appointment Created" })
  );
};

const getAll = (req, res) => {
  Appt.findAll().then(appts => res.json(appts));
};

module.exports = { create, getAll };
攀