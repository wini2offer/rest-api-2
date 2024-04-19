exports.getAllUsers = (req, res) => {
  res.status(200);
  res.json([
    {
      id: 1,
      name: "Mayowa",
      email: "mayowa@gmail.com",
      occupation: "Backend-Developer",
    },
    {
      id: 2,
      name: "Joseph",
      email: "joseph@gmail.com",
      occupation: "Frontend-Developer",
    },
    {
      id: 3,
      name: "Ayo",
      email: "ayo@gmail.com",
      occupation: "Backend-Developer",
    },
  ]);
};

exports.getSingleUser = (req, res) => {
  res.status(200);
  res.json([
    {
      id: 3,
      name: "Ayo",
      email: "ayo@gmail.com",
      occupation: "Backend-Developer",
    },
  ]);
};

exports.updatedUser = (req, res) => {
  res.status(200);
  res.json([
    {
      id: 3,
      name: "Ayo",
      email: "ayo@gmail.com",
      occupation: "Backend-Developer",
    },
  ]);
};

exports.createNewUser = (req, res) => {
  res.status(200);
  res.json([
    {
      id: 6,
      name: "Philip",
      email: "philip@gmail.com",
      occupation: "Fullstack-Developer",
    },
  ]);
};

exports.deleteUser = (req, res) => {
  res.status(200);
  res.json([
    {
      id: 3,
      name: "Ayo",
      email: "ayo@gmail.com",
      occupation: "Backend-Developer",
    },
  ]);
};
