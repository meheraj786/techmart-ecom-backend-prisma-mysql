const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createSubCategory = async (req, res) => {
  try {
    const { name, description, categoryId } = req.body;

    if (!name || !categoryId) {
      return res.status(400).json({ message: "Name and categoryId are required" });
    }
    const existingSub = await prisma.subcategory.findFirst({
      where: { name },
    });

    if (existingSub) {
      return res.status(400).json({ message: "Subcategory already exists" });
    }
    const category = await prisma.category.findFirst({
      where: { id: categoryId },
    });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const newSubcategory = await prisma.subcategory.create({
      data: {
        name,
        description,
        category: { connect: { id: categoryId } },
      },
    });

    res.status(201).json({
      message: "Subcategory successfully created",
      data: newSubcategory,
    });
  } catch (error) {
    console.error(" Error creating subcategory:", error);
    res.status(400).json({
      message: "Something went wrong",
      error: error.message,
    });
  } finally {
    await prisma.$disconnect();
  }
};
