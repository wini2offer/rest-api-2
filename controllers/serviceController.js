exports.getAllService = (req, res) => {
  res.status(200);
  res.json([
    {
      id: 30,
      type: "Residential Fumigation",
      price: "6000 per session",
      frequency: "Monthly",
      duration: " 1-day treatment",
    },

    {
      id: 10,
      type: "Regular Cleaning",
      price: "6000 per session",
      frequency: "Weekly",
      duration: "2 hours per session",
    },

    {
      id: 15,
      type: "Fitness Training",
      price: "10000 per session",
      frequency: "One Time",
      duration: "1.5 hours per session",
    },
  ]);
};

exports.getSingleService = (req, res) => {
  res.status(200);
  res.json([
    {
      id: 15,
      type: "Fitness Training",
      price: "10000 per session",
      frequency: "One Time",
      duration: "1.5 hours per session",
    },
  ]);
};

exports.updatedService = (req, res) => {
  res.status(200);
  res.json([
    {
      id: 15,
      type: "Fitness Training",
      price: "10000 per session",
      frequency: "One Time",
      duration: "1.5 hours per session",
    },
  ]);
};

exports.createNewService = (req, res) => {
  res.status(200);
  res.json([
    {
      id: 15,
      type: "Fitness Training",
      price: "10000 per session",
      frequency: "One Time",
      duration: "1.5 hours per session",
    },
  ]);
};

exports.deleteService = (req, res) => {
  res.status(200);
  res.json([
    {
      id: 15,
      type: "Fitness Training",
      price: "10000 per session",
      frequency: "One Time",
      duration: "1.5 hours per session",
    },
  ]);
};
