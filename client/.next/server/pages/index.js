(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 445:
/***/ ((module) => {

// Exports
module.exports = {
	"load_more": "EmployeesDetails_load_more__rfcGK",
	"load_more_button": "EmployeesDetails_load_more_button__6B49d",
	"load_more_text": "EmployeesDetails_load_more_text__Q5O1u"
};


/***/ }),

/***/ 912:
/***/ ((module) => {

// Exports
module.exports = {
	"employee_container": "Employees_employee_container__m1mpp",
	"employee_text": "Employees_employee_text__5RIWW",
	"row": "Employees_row__cEH_q",
	"employee_card": "Employees_employee_card__Zlq8z",
	"employee-content": "Employees_employee-content__rkq7Z",
	"desc": "Employees_desc__Ua34D"
};


/***/ }),

/***/ 617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@apollo/client"
const client_namespaceObject = require("@apollo/client");
;// CONCATENATED MODULE: ./lib/apollo-client.js

const client = new client_namespaceObject.ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new client_namespaceObject.InMemoryCache()
});
/* harmony default export */ const apollo_client = (client);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./components/EmployeesDetails/Employees/Employees.module.css
var Employees_module = __webpack_require__(912);
var Employees_module_default = /*#__PURE__*/__webpack_require__.n(Employees_module);
;// CONCATENATED MODULE: ./components/EmployeesDetails/Employees/Employees.js



const Employees = ({ employees  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Employees_module_default()).employee_container,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Employees_module_default()).employee_text,
                        children: "Employees Details"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Employees_module_default()).row,
                children: employees && employees.map((employee)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Employees_module_default()).employee_card,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Employees_module_default()).employee_content,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Employees_module_default()).desc,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: employee.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Address:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: employee.address
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Phone No:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: employee.phone
                                    })
                                ]
                            })
                        })
                    }, employee.email))
            })
        ]
    });
};
/* harmony default export */ const Employees_Employees = (Employees);

// EXTERNAL MODULE: ./components/EmployeesDetails/EmployeesDetails.module.css
var EmployeesDetails_module = __webpack_require__(445);
var EmployeesDetails_module_default = /*#__PURE__*/__webpack_require__.n(EmployeesDetails_module);
;// CONCATENATED MODULE: ./components/EmployeesDetails/EmployeesDetails.js





const EmployeesDetails = ({ employees  })=>{
    const [employeesData, setEmployeesData] = (0,external_react_.useState)(employees);
    const [loadMore, setLoadMore] = (0,external_react_.useState)(false);
    const [offset, setOffset] = (0,external_react_.useState)(0);
    const limit = 20;
    const query = client_namespaceObject.gql`
    query Employees($limit: Int!, $offset: Int!) {
      employees(limit: $limit, offset: $offset) {
        name
        email
        phone
        address
      }
    }
  `;
    const { loading , error , data , fetchMore  } = (0,client_namespaceObject.useQuery)(query, {
        variables: {
            limit: limit,
            offset: offset
        }
    });
    if (error) return `Error! ${error.message}`;
    if (loading) return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Loading ..."
    });
    if (data && loadMore) {
        setLoadMore(false);
        setEmployeesData(employeesData.concat(data.employees));
    }
    const handleLoadMore = ()=>{
        setLoadMore(true);
        setOffset(offset + limit);
        try {
            fetchMore({
                variables: {
                    limit: limit,
                    offset: offset
                }
            });
        } catch (err) {
            console.log(`Error! ${err.message}`);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Employees_Employees, {
                employees: employeesData
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (EmployeesDetails_module_default()).load_more,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: (EmployeesDetails_module_default()).load_more_button,
                        onClick: handleLoadMore,
                        children: "Load more"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (EmployeesDetails_module_default()).load_more_text,
                        children: [
                            "(Showing ",
                            employeesData.length,
                            " of 2000)"
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const EmployeesDetails_EmployeesDetails = (EmployeesDetails);

;// CONCATENATED MODULE: ./pages/index.js





function App({ employees  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(client_namespaceObject.ApolloProvider, {
        client: apollo_client,
        children: /*#__PURE__*/ jsx_runtime_.jsx(EmployeesDetails_EmployeesDetails, {
            employees: employees
        })
    });
}
async function getServerSideProps() {
    const { data  } = await apollo_client.query({
        query: client_namespaceObject.gql`
      query Employees {
        employees(limit: 20, offset: 0) {
          name
          email
          phone
          address    
        }
      }
    `
    });
    return {
        props: {
            employees: data.employees
        }
    };
}


/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(617));
module.exports = __webpack_exports__;

})();