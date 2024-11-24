import { alumni } from "../models/alumni.models.js";
import {event} from "../models/eventmodel.js"

const cardinfo=async (req,res)=>{
    try {
        const cards = await alumni.find(); // Fetch all cards
        res.status(200).json(cards); // Send as JSON
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}

export {cardinfo};

const eventCarddata=async (req,res)=>{
    try{
        const cards=await event.find();
        res.status(200).json(cards);
    }catch(error){
        res.status(500).json({error:'Failed to fetch data'});
    }
}
export {eventCarddata}