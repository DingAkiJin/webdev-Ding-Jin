var mongoose = require('mongoose');
var websiteSchema = require('./website.schema.server');
var websiteModel = mongoose.model('WebsiteModel',websiteSchema);

websiteModel.createWebsite = createWebsite;
websiteModel.findWebsitesForUser = findWebsitesForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;

module.exports = websiteModel;

function deleteWebsite(websiteId) {
  return websiteModel.remove({_id: websiteId});
}

function updateWebsite(websiteId, website) {
  return websiteModel.
    update({_id:websiteId},website);
}
function findWebsiteById(websiteId) {
  return websiteModel.findById(websiteId);
}
function findWebsitesForUser(uid) {
  return websiteModel.find({developerId: uid})
    .populate('developerId','username')
    .exec();

}

function createWebsite(website){
  return websiteModel.create(website);
}
