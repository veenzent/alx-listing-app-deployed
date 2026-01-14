import type { NextApiRequest, NextApiResponse } from 'next';
import { PROPERTYLISTINGSAMPLE } from '@/constants/properties';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const numericId = typeof id === 'string' && !isNaN(Number(id)) ? Number(id) : id;
  const found = PROPERTYLISTINGSAMPLE.find((p) => p.id === numericId || String(p.id) === String(id));

  if (!found) {
    return res.status(404).json({ message: 'Property not found' });
  }

  return res.status(200).json(found);
}
