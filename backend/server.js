require('dotenv').config();
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Rota para buscar todas as atletas
app.get('/characters', async (req, res) => {
  const { data, error } = await supabase
    .from('characters')
    .select('*');
  
  if (error) return res.status(400).json(error);
  res.json(data);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor UMA-Builds rodando em http://localhost:${PORT}`);
});