import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { format } from 'date-fns';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const response = {
      records: [],
      message: 'Something went wrong with articles.',
      codeStatus: 500
    };
    if (req.query.id) {
      const { id } = req.query;
      const {
        data: { records: resRecords }
      } = await axios.get(`https://api.m3o.com/v1/db/Read?table=articles?id=${id}`, {
        headers: { Authorization: `Bearer ${process.env.NEXT_APP_DB_API_KEY}` }
      });
      response.records = resRecords;
      response.message = resRecords.length <= 0 ? "There's no article with this ID!" : 'Successfully retrieved article';
      response.codeStatus = resRecords.length <= 0 ? 404 : 200;
    } else {
      const {
        data: { records: resRecords }
      } = await axios.get('https://api.m3o.com/v1/db/Read?table=articles', {
        headers: { Authorization: `Bearer ${process.env.NEXT_APP_DB_API_KEY}` }
      });
      response.records = resRecords;
      response.message = resRecords.length <= 0 ? "There's no articles in DB!" : 'Successfully retrieved articles';
      response.codeStatus = 200;
    }

    res.status(response.codeStatus).json(response);
  } else if (req.method === 'POST') {
    if (req.body.title && req.body.description) {
      try {
        const cleanTitle = req.body.title.trim().replaceAll('!', '').replaceAll('?', '');
        const generatedUrl = cleanTitle.replace(/\s/g, '-').toLowerCase();

        const preparedPostObject = {
          title: req.body.title,
          description: req.body.description,
          content: req.body.content,
          sources: req.body.sources,
          category: req.body.category,
          date: format(new Date(), 'dd-MM-yyyy'),
          friendly: generatedUrl
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
  } else if (req.method === 'DELETE') {
    const id = req.body.id;
    if (id) {
      const response = await axios.post(
        'https://api.m3o.com/v1/db/Delete',
        {
          table: 'articles',
          id
        },
        { headers: { Authorization: `Bearer ${process.env.NEXT_APP_DB_API_KEY}` } }
      );
      res.status(200).json({
        message: 'Post deleted',
        deletedPost: response.data
      });
    } else {
      res.status(400).json({
        message: 'Missing id'
      });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default withApiAuthRequired(handler);
