const brcypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User",{
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL, //Type virtual só aparece no model não vai para o DB
        password_hash: DataTypes.STRING,
    },{
        hooks: {
            beforeSave: async user => {
                user.password_hash = await brcypt.hash(user.password, 8)
            }
        }
    });

    User.prototype.checkPassword = function(password){
        return brcypt.compare(password, this.password_hash)
    }

    User.prototype.generateToken = function(){
        return jwt.sign({ id: this.id }, process.env.APP_SECRET) //passando o id do user para o JWT
    }

    return User;
};