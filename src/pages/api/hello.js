// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    name: 'Test API',
    method: req.method,
    id: req.query.id,
    nameUser: req.query.name,
    email: req.query.email,
    adm: req.query.adm
  });
}
