const User = require('./User');
const Blogpost = require('./Blogpost');
const Comments = require('./Comments');


Blogpost.belongsTo(User, {
    foreignKey: 'user_id',
  });

//attaches comments to blogpost
  Blogpost.hasMany(Comments, {
    foreignKey: 'blogpost_id',
  });

//attaches 
  User.hasMany(Comments, {
    foreignKey: 'user_id',
  });

  module.exports = { User , Blogpost , Comments };