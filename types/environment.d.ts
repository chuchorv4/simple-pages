declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string
    API_URL: string
    SMTP_HOST: string
    SMTP_PORT: number
    SMTP_USER: string
    SMTP_PASSWORD: string
  }
}
