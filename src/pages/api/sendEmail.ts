import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

const smtpOptions = {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
}

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  // const host = (req.headers.host || '').replace(/([w]{3}[.]{1})*/g, '')

  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  })

  const response = await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: `New message from ${req.body.name} <${req.body.email}>`,
    text: `New message from ${req.body.name} <${req.body.email}> 
    ${req.body.message}`,
  })

  console.log(response)

  return res.status(200).json({ status: true })
}

export default sendEmail
