const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.json());

// Route: /bfhl | Method: POST
app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  const userId = 'john_doe_17091999';
  const email = 'john@xyz.com';
  const rollNumber = 'ABCD123';
  const numbers = [];
  const alphabets = [];
  const highestLowercaseAlphabet = [];

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (item.match(/[a-z]/i)) {
      alphabets.push(item);
      if (item === item.toLowerCase() && highestLowercaseAlphabet.length === 0) {
        highestLowercaseAlphabet.push(item);
      } else if (item === item.toLowerCase() && item > highestLowercaseAlphabet[0]) {
        highestLowercaseAlphabet[0] = item;
      }
    }
  });

  res.json({
    is_success: true,
    user_id: userId,
    email,
    roll_number: rollNumber,
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet,
  });
});

// Route: /bfhl | Method: GET
app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});