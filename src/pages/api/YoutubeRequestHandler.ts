import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const KEY = process.env.YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ error: 'Missing query parameter.' });
    }

    const response = await axios.get(BASE_URL, {
      params: {
        part: 'snippet',
        maxResults: 5,
        q: query,
        key: KEY,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching videos:', error);
    res.status(500).json({ error: 'Error fetching videos from YouTube.' });
  }
}
