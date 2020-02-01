const express = require("express");
const router = express.Router();
const Category = require("../../models/Category");

router.get("/list", (req, res) => {
  Category.aggregate(
    [
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "category_id",
          as: "products"
        }
      },
      {
        $project: {
          _id: 1,
          name: 1,
          product_list: "$products",
          number_of_product: { $size: "$products" }
        }
      }
    ],
    function(err, result) {
      if (err) res.status(500).json(err);
      res.json({ status: 200, data: result });
    }
  );
});

module.exports = router;
