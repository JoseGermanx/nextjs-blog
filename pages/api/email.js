// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { SMTPClient } from "emailjs";

export default function handler(req, res) {
  const { email } = req.body;
  //console.log(process.env)

  const client = new SMTPClient({
    user: 'josegmartinez.rsa@gmail.com',
    password: 'm15126376*',
    host: "smtp.gmail.com",
    ssl: true,
  });

  try {
    client.send({
      text: `Hola, necesito ponerme en contacto contigo, JG ${email}`,
      from: 'josegmartinez.rsa@gmail.com',
      to: 'jgermanmm@gmail.com',
      subject: "Contacto desde web site (nextJS)",
    });
  } catch (e) {
    res.status(400).end(JSON.stringify({ message: "Error" }));
    return;
  }

  res.status(200).end(JSON.stringify({ message: "Send Mail" }));
}
