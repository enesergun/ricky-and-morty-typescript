// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";
type Data = {
    name: string;
    status?: number;
    error?: any;
  }
  

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {body} = req;        
    let config = {
        method: "GET",
        url: `https://rickandmortyapi.com/api/character/${body.characterId}`,              
      };
    axios(config)
    .then(function (response) {
      const result = body.characterId.split(",").length <= 1 ? [response.data] : response.data
      res.status(200).json(result);
    })
    .catch(function (error) {
      res.status(500).json({ name: "Error", status: 500, error: error });
    });
}
