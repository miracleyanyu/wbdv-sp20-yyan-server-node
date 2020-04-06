const UniversityDao = require('../data/daos/university.dao.server');

const truncateDatabase = () =>
    UniversityDao.truncateDatabase();

const populateDatabase = () =>
    UniversityDao.populateDatabase();

module.exports = {
  truncateDatabase,
  populateDatabase
};
