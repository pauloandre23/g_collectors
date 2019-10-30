import Collector from '../models/Collector';
import Bcrypt from 'bcryptjs';

class CreateController{

async store(req,res){
   
    const {email} = req.body;
    const collectorExiste = await Collector.findOne({email});
    if(collectorExiste){
        return res.json({error: 'Usuário já existe'});
    }
    req.body.password=Bcrypt.hashSync(req.body.password, 10);

    const user=await Collector.create(req.body);

    return res.json(user);

}
}
export default new CreateController();