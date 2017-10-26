module.exports = function(app) {
  var pages = [
    {'_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem'},
    {'_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem'},
    {'_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem'}

  ];
  app.get('/api/website/:wid/page', findAllPagesForWebsite);
  app.get('/api/website/:wid/page/:pid', findPageById);
  app.post('/api/website/:wid/page', createPage);
  app.put('/api/website/:wid/page/:pid',updatePage);
  app.delete('/api/website/:wid/page/:pid',deletePage);

  function deletePage(reg, res){
    var pid = reg.params['pid'];
    for (var i = 0; i < pages.length; i++) {
      if (pages[i]._id === pid) {
        pages.splice(i, 1);
        res.json(pages);
        return;
      }
    }
  }


  function updatePage(reg, res){
    var pid = reg.params['pid'];
    var wid = reg.params['wid']
    var newPage = reg.body;
    for (var i = 0; i < pages.length; i++) {
      if (pages[i]._id === pid) {
        pages[i] = newPage;
        res.json(getPageById(pid));
        return;
      }
    }
  }
  function findAllPagesForWebsite(reg, res) {
    var wid = reg.params['wid'];
    res.json(getPagesForWebsiteId(wid));
  }
  function findPageById(reg,res){
    var pid = reg.params['pid'];
    res.json(getPageById(pid));

  }
  function getPageById(pid) {
    for (var i = 0; i < pages.length; i++) {
      if (pages[i]._id === pid) {
        return pages[i];
      }
    }
  }

  function getPagesForWebsiteId(wid) {
    var PAGES = [];

    for (var i = 0; i < pages.length; i++) {
      if (pages[i].websiteId === wid) {
        PAGES.push(pages[i]);
      }
    }
    return PAGES;
  }
  function createPage(reg, res) {
    var wid = reg.params['wid'];
    var page = reg.body;
    page._id = (Math.floor(Math.random() * 999) + 100 ).toString();
    pages.push(page);
    var pages0 = getPagesForWebsiteId(wid);
    res.json(pages0);
  }
}
