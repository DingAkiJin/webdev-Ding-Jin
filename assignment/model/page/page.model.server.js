var mongoose = require('mongoose');
var pageSchema = require('./page.schema.server');
var PageModel = mongoose.model('PageModel',pageSchema);

PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.findPageById = findPageById;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;

module.exports = PageModel;
function deletePage(pageId){
  return PageModel.remove({_id: pageId});

}

function updatePage(pageId, page){
  return PageModel
    .update({_id:pageId},page);

}
function findPageById(pageId){
  return PageModel.findById(pageId);
}
function findAllPagesForWebsite(websiteId){
  return PageModel.find({websiteId: websiteId});
}

function createPage(page){
  return PageModel.create(page);
}
