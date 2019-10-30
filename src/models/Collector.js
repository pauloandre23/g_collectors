
import mongoose from 'mongoose';

const CollectorSchema=new mongoose.Schema({
    email: String,
    password: String,
    password_hash: String,
    name: String,
    cpf: Number,
    id: Number,


});

export default mongoose.model('Collector', CollectorSchema);