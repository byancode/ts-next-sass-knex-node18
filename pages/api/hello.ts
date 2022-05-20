// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as yup from 'yup'

type CustomData = {
  [name: string]: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CustomData>
) {
  const { query } = req
  const schema = yup.object().shape({
    name: yup.string().required()
  });

  await schema.validate(query);

  const sanitized = schema.cast(req.query);
  const data: CustomData = { ...sanitized };

  res.status(200).json(data);
}
