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
        url: `https://rickandmortyapi.com/api/location/${body.locationId}`,              
      };
    axios(config)
    .then(function (response) {
      
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      res.status(500).json({ name: "Error", status: 500, error: error });
    });
}
