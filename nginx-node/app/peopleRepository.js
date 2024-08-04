const db = require('./db');

const insertPeopleAsync = async (name) => {
    const query = `INSERT INTO people (name) VALUES ('${name}')`;

    return new Promise((resolve, reject) => {
        db.query(query, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
};

const selectPeopleAsync = async () => {
    const query = `SELECT * FROM people`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

module.exports = {
    insertPeopleAsync,
    selectPeopleAsync,
};