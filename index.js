const express = require('express');
const jarifapi = require('jarif-api');
const app = express();
const port = 3000;

// Define a route that uses jarifapi
app.get('/prompt', async (req, res) => {
  try {
    const { query } = req;
    const searchTerm = query.term || 'cat'; // Default to 'cat' if no term is provided

    const pgen = await jarifapi.promptgen(searchTerm);
    res.json(pgen);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the prompt.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
