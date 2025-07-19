const axios = require('axios');

exports.handler = async (event) => {
  const { question } = JSON.parse(event.body);

  const GEMINI_API_KEY = process.env.AIzaSyDfVMz2KcdD_mZKc13hvsR1k9thV95cKII;

  const response = await axios.post(
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
    {
      contents: [
        {
          parts: [
            {
              text: question
            }
          ]
        }
      ]
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': AIzaSyDfVMz2KcdD_mZKc13hvsR1k9thV95cKII
      }
    }
  );

  const answer = response.data.candidates[0].content.parts[0].text;

  return {
    statusCode: 200,
    body: JSON.stringify({ answer })
  };
};
