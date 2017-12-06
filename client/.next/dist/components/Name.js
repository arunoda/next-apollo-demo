'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/data/projects/next-apollo/client/components/Name.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query name {\n    name\n  }\n'], ['\n  query name {\n    name\n  }\n']);

var Component = function Component(_ref) {
  var data = _ref.data;
  return _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, data.loading ? '..' : data.name);
};

var query = (0, _graphqlTag2.default)(_templateObject);

exports.default = (0, _reactApollo.graphql)(query)(Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmFtZS5qcyJdLCJuYW1lcyI6WyJncmFwaHFsIiwiZ3FsIiwiQ29tcG9uZW50IiwiZGF0YSIsImxvYWRpbmciLCJuYW1lIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFPOzs7Ozs7Ozs7O0FBRVAsSUFBTSxZQUFZLFNBQVosQUFBWSxnQkFBQTtNQUFBLEFBQUcsWUFBSCxBQUFHO3lCQUNuQixjQUFBOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7QUFBQSxHQUFBLE9BQ0csQUFBSyxVQUFMLEFBQWMsT0FBTyxLQUZSLEFBQ2hCLEFBQzZCO0FBRi9COztBQU1BLElBQU0sUUFBQSxBQUFRLDBCQUFkLEFBTUE7O2tCQUFlLDBCQUFBLEFBQVEsT0FBdkIsQUFBZSxBQUFlIiwiZmlsZSI6Ik5hbWUuanMiLCJzb3VyY2VSb290IjoiL2RhdGEvcHJvamVjdHMvbmV4dC1hcG9sbG8vY2xpZW50In0=