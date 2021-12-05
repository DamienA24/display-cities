import express from "express";
import asyncHandler from "../../utils/asyncHandler";
import { getCities } from "./cities";

const router = express.Router();

router.get(
  "/:code",
  asyncHandler(async (req, res) => {
    const { code } = req.params;
    const result = await getCities(code);
    res.json(result);
  })
);

export default router;
