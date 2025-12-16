import { treaty } from '@elysiajs/eden'
import type { App } from '../app/api/[[...slugs]]/route'

const API_URL = process.env.PUBLIC_API_URL
// this require .api to enter /api prefix
export const client = treaty<App>('https://real-time-chat-three-sepia.vercel.app').api

