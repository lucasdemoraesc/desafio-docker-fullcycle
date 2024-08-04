const faker = require('@faker-js/faker').fakerPT_BR;
const express = require('express');
const app = express();

const peopleRepository = require('./peopleRepository');

app.get('/', async (req, res) => {
    const newPersonName = faker.person.fullName();
    await peopleRepository.insertPeopleAsync(newPersonName);
    const people = await peopleRepository.selectPeopleAsync();

    let htmlList = '<ul>';
    for (let i = 0; i < people.length; i++) {
        htmlList += `<li>${people[i].id} - ${people[i].name}</li>`;
    }
    htmlList += '</ul>';
    const header = '<h1>Full Cycle Rocks!</h1>';
    res.send(header + htmlList);
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});