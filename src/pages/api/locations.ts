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
    let URL =  body.page ? `https://rickandmortyapi.com/api/location?page=${body.page}` : "https://rickandmortyapi.com/api/location"
    let config = {
        method: "GET",
        url: URL,              
      };
    axios(config)
    .then(function (response) {
      
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      res.status(500).json({ name: "Error", status: 500, error: error });
    });
}
