import Collector from '../models/Collector';
import Bcrypt from 'bcryptjs';

class SessionController{
    async store(req,res){
        const user = await Collector.findOne({email});
        if(!user){
            return res.status(400).json({error: 'User does not exist'});
        }

        if (!Bcrypt.compareSync(req.body.password, user.password)){
            return res.status(400).json({error: "This password is not valid"});
        }
        res.json({message:"Login Ok"})
    }
}
export default new SessionController();