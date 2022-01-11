export default function handler(req, res){

  if(req.method === 'GET'){
    handleGet(req, res);
  } else {
    res.status(405).send();
  }

}

function handleGet(req, res){
  res.status(204).json({
    id: 1,
    nameUser: 'Isaac',
    email: 'isaacadm@adm.com', 
    admin: true
  });
}