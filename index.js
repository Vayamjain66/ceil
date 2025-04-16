const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

function ceil(number) {
  return Math.ceil(number);
}

app.post('/functions/ceil', (req, res) => {
  const {input}=req.body;
  const number=Number(input)
  if (typeof number !== 'number') {
    return res.status(400).json({ error: 'Input must be a number.' });
  }

  const result = ceil(number);
  res.json({ output: result });
});

app.get('/functions/ceil', (req, res) => {
  res.json({
    name: 'ceil',
    description: 'Rounds a number UP to the nearest integer.',
    input: {
      type: 'number',
      description: 'A number to round up.',
      example: 3.14
    },
    output: {
      type: 'number',
      description: 'The smallest integer greater than or equal to the input number.',
      example: 4
    }
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
