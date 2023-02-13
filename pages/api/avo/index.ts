import { IncomingMessage, ServerResponse } from "http";
import Database from "../../../database/db";

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
  const db = new Database();
  const allEntries = await db.getAll();
  const length = allEntries.length;

  res.statusCode = 200;
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify({ length, data: allEntries }));
};

export default allAvos;
