import { NextApiRequest, NextApiResponse } from "next";
import carsData from "../../public/api/cars.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(carsData);
}
