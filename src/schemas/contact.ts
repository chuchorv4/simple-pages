// Note: Contact Form Validation Schema
import * as yup from 'yup'

export const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
})

export default schema
