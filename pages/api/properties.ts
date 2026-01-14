import type { NextApiRequest, NextApiResponse } from "next";
import { PROPERTYLISTINGSAMPLE } from "@/constants/properties";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Currently we only support GET; this can be expanded later
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    return res.status(200).json(PROPERTYLISTINGSAMPLE);
}
