module.exports = {
    checkIfNameAndAgeExists: (req, res, next) => {
        const { name, age } = req.body;
        if(!name || !age){
            return res.status(400).json({ message: 'Name and age are required' });
        }
    
        return next();
    },
    checkIfUserExistsInArray: (req, res, next) => {
        const { id } = req.params;
        const user = users[id];
    
        if(!user){
            return res.status(404).json({ message: 'User not found'});
        }
    
        req.user = user;
    
        return next();
    }
}