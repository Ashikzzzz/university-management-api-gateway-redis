import { createClient } from 'redis';

let redisClient = createClient({
  url: 'redis://localhost:6379'
});

redisClient.on('error', (err) => console.log('redisError', err));
redisClient.on('connect', (err) => console.log('redis connected'));
