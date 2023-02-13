import { NextApiRequest, NextApiResponse } from "next";
import Database from "../../../database/db";

const avosById = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id as string;
  const db = new Database();
  const avo = await db.getById(id);

  res.status(200).setHeader("content-type", "application/json").json(avo);
};

export default avosById;
