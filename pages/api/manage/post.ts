import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    if (req.body.title && req.body.description) {
      try {
        const preparedPostObject = {
          title: req.body.title,
          description: req.body.description,
          content: req.body.content,
          sources: req.body.sources,
          category: req.body.category
        };

        await axios.post(
          'https://api.m3o.com/v1/db/Create',
          { table: 'articles', record: preparedPostObject },
          { headers: { Authorization: `Bearer ${process.env.NEXT_APP_DB_API_KEY}` } }
        );

        res.status(200).json({
          message: 'Post created',
          newPost: preparedPostObject
        });
      } catch (err) {
        res.status(500).json({
          message: 'Error when creating post',
          error: err
        });
      }
    } else {
      res.status(400).json({
        message: 'Missing title or description'
      });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default withApiAuthRequired(handler);
