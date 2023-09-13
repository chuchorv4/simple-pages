import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  // const host = (req.headers.host || '').replace(/([w]{3}[.]{1})*/g, '')
  const response = await axios.post(
    'https://formsubmit.co/ajax/jesr.v.4@gmail.com',
    {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      _subject: 'New message from your website',
      _autoresponse:
        'Thank you for contacting me. I will get back to you as soon as possible.',
      _template: 'table',
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        referrer: 'Origin',
      },
    }
  )

  console.log(response.data)

  return res.status(200).json({ status: true })
}

export default sendEmail
