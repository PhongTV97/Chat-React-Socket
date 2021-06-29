import express from 'express';
import {onSendNotification, onSubscribeToTopic} from '../controller/index.js'
import dotenv from 'dotenv'
dotenv.config()

let router = express.Router();
router.post('/send-notification', onSendNotification);
router.post('/subscribeToTopic', onSubscribeToTopic);

export default router;