import axios, { AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response: AxiosResponse<any> = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: 'funny',
        maxResults: 25,
        type: 'video',
        order: 'viewCount',
        key: YOUTUBE_API_KEY,
      },
    });

    const videos = response.data.items;
    if (videos.length > 0) {
      const randomIndex = Math.floor(Math.random() * videos.length);
      const randomVideoId = videos[randomIndex]?.id?.videoId;
      if (randomVideoId) {
        res.status(200).json({ videoId: randomVideoId });
      } else {
        res.status(404).json({ error: 'No funny video found.' });
      }
    } else {
      res.status(404).json({ error: 'No funny video found.' });
    }
  } catch (error) {
    console.error('Error fetching random video:', error);
    res.status(500).json({ error: 'Error fetching random video.' });
  }
}
