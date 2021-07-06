const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.send(`<h1>Wrong Route!</h1>
    <h3>http://thisURL.com${req.url} Doesn't work for us</h3>
    <h5>Please Try Again</h5>
  <div><p>Endpoints are as follows:</p>
  <ol>
  <li>http://thisURL.com/api/products/ <br>(this interacts with all data by products)<br></li>
  <br>
  <li>http://thisURL.com/api/products/1 <br>(this interacts with data for product 1)<br></li>
  <br>
  <li>http://thisURL.com/api/tags/ <br>(this interacts with all data by tags)<br></li>
  <br>
  <li>http://thisURL.com/api/tags/1 <br>(this interacts with data for tag 1)<br></li>
  <br>
  <li>http://thisURL.com/api/categories/ <br>(this interacts with all data by categories)<br></li>
  <br>
  <li>http://thisURL.com/api/categories/1 <br>(this interacts with data for category 1)<br></li>
  <br>`)
});

module.exports = router;