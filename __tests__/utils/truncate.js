const { sequelize } = require('../../src/app/models');

module.exports = () => {
    //Promise pois pode demorar na exclusão de todas DBS
    return Promise.all(
        Object.keys(sequelize.models).map(key=>{ //Percorre por todos os models
            return sequelize.models[key].destroy({truncate: true, force: true }) //deleta os models
        })
    )
}