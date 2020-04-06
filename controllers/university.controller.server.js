const UniversityService = require('../services/university.service.server');

module.exports = (app) => {
  app.delete('/api/all', (req, res) => {
    UniversityService.truncateDatabase();
    res.send("Delete Success.");
  });
  app.post('/api/populate', (req, res) => {
    UniversityService.populateDatabase();
    res.send("Populate Success.");
  })
};
