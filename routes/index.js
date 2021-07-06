const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.send(`<h1>Wrong Route!</h1>
    <h3>www.thisapp.com${req.url} Doesn't work for us</h3>
  <div><p>Endpoints are as follows:</p>
  <ol>
  <li>http://thisURL.com/api/products/ <br>(this interacts with all data by products)<br></li>
  <br>
  <li>http://thisURL.com/api/tags/ <br>(this interacts with all data by tags)<br></li>
  <br>
  <li>http://thisURL.com/api/categories/ <br>(this interacts with all data by categories)<br></li>`)
});

module.exports = router;