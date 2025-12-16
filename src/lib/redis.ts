import { Redis } from "@upstash/redis";

// Fast connection to upstah DB (@upstash/redis )
// url and password taken from .env  
export const redis = Redis.fromEnv()