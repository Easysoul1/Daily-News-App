export default async function handler(req, res) {
       const apiKey = '907042098dee4f1f80af7bfba447cc4d';
       const { country = 'US', category = 'general' } = req.query;
     
       const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
       
       try {
         const response = await fetch(url);
         const data = await response.json();
         res.status(200).json(data);
       } catch (error) {
         res.status(500).json({ error: 'Error fetching news' });
       }
     }
     