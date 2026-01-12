import prisma from "../db/prisma.js";

export const markTaskDone = async (req, res) => {
  const { userId, module, submodule, taskNumber } = req.body;

  try {
    await prisma.progress.upsert({
      where: {
        userId_module_submodule_taskNumber: {
          userId: Number(userId),
          module,
          submodule,
          taskNumber
        }
      },
      update: {
        completed: true
      },
      create: {
        userId: Number(userId),
        module,
        submodule,
        taskNumber,
        completed: true
      }
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save progress" });
  }
};

export const getUserProgress = async (req, res) => {
  try {
    const progress = await prisma.progress.findMany({
      where: { userId: Number(req.params.userId) }
    });

    res.json(progress);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch progress" });
  }
};