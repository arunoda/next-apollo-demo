'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nextApollo = require('next-apollo');

var _apolloLinkHttp = require('apollo-link-http');

var apolloConfig = {
  link: new _apolloLinkHttp.HttpLink({
    uri: 'https://faker-graphql.now.sh/graphql'
  })
};

exports.default = (0, _nextApollo.withData)(apolloConfig);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi93aXRoLWFwb2xsby5qcyJdLCJuYW1lcyI6WyJ3aXRoRGF0YSIsIkh0dHBMaW5rIiwiYXBvbGxvQ29uZmlnIiwibGluayIsInVyaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFTOztBQUVULElBQU07O1NBQU4sQUFBcUIsQUFDYixBQUFhLEFBQ1osQUFJVDtBQUxxQixBQUNqQixHQURJLEFBQUk7QUFEUyxBQUNuQjs7a0JBS2EsMEJBQWYsQUFBZSxBQUFTIiwiZmlsZSI6IndpdGgtYXBvbGxvLmpzIiwic291cmNlUm9vdCI6Ii9kYXRhL3Byb2plY3RzL25leHQtYXBvbGxvL2NsaWVudCJ9