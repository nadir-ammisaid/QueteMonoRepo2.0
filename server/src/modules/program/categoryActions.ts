// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions

import type { RequestHandler } from "express";

const browse: RequestHandler = (req, res) => {
  if (req.query.q != null) {
    const filteredCategories = categories.filter((category) =>
      category.name.includes(req.query.q as string),
    );

    res.json(filteredCategories);
  } else {
    res.json(categories);
  }
};

/* ************ */

const read: RequestHandler = (req, res) => {
  // console.log(`Incoming request with params:`, req.params);

  const parsedId = Number.parseInt(req.params.id);

  const category = categories.find((p) => p.id === parsedId);

  if (category != null) {
    res.json(category);
  } else {
    // console.log(`Program not found for ID: ${parsedId}`);
    res.sendStatus(404);
    // res.status(404).send("Program not found");
  }
};

// Export them to import them somewhere else

export default { browse, read };
