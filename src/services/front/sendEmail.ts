import { ContactForm } from '@/interfaces/contact'
import axiosInstance from '@/utils/axiosInstance'

const sendEmail = (form: ContactForm): Promise<{ status: boolean }> =>
  axiosInstance
    .post<{ status: boolean }>('/api/sendEmail/', form)
    .then((res) => res.data)

export default sendEmail
