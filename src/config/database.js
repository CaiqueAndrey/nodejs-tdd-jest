module.exports = {
    host: '127.0.0.1',
    username: 'root',
    password: '',
    database: 'nodeauth',
    dialect: 'mysql',
    operatorsAliases: false,
    logging: false,
    define: {
        timestamps: true, //todas tabelas criam os campos created_at e updated_at
        underscored: true, //Cria tabelas com underscore
        underscoredAll: true, //Cria os campos com underscore
    }
}