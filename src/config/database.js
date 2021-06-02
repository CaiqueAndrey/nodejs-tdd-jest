require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
})

module.exports = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT || 'mysql',
    storage: './__tests__/database.sqlite', //os testes são criados em um banco sqlite
    operatorsAliases: false,
    logging: false,
    define: {
        timestamps: true, //todas tabelas criam os campos created_at e updated_at
        underscored: true, //Cria tabelas com underscore
        underscoredAll: true, //Cria os campos com underscore
    }
}