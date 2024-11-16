import express from 'express';
import cors from 'cors';
import 'dotenv/config';


const app = express();
app.use(cors());

const PORTA = process.env.PORT;

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

app.listen(PORTA,()=>{
    console.log(`testando express, porta: ${PORTA}`)
});
