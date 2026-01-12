import prisma from "../db/prisma.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user || password !== "skill123") {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ userId: user.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
