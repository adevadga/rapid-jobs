!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=11)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.JOB_ACTIONS=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({ADD_JOB:"ADD_JOB",VIEW_JOB:"VIEW_JOB",FETCH_JOBS:"FETCH_JOBS",FETCH_JOB:"FETCH_JOB",CLEAR_JOB_DETAIL:"CLEAR_JOB_DETAIL",JOBS_DATA_FETCH_SUCCEEDED:"JOBS_DATA_FETCH_SUCCEEDED",JOBS_DATA_FETCH_FAILED:"JOBS_DATA_FETCH_FAILED",JOB_FETCH_SUCCEEDED:"JOB_FETCH_SUCCEEDED",JOB_FETCH_FAILED:"JOB_FETCH_FAILED"},"CLEAR_JOB_DETAIL","CLEAR_JOB_DETAIL")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("styled-components")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("redux")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),f=n(23),s=(r(f),n(3)),d=function(e){function t(e){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),l(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"nav-container"},c.default.createElement("div",{className:"nav-inner"},c.default.createElement("div",{className:"advancedmenu"},c.default.createElement("div",{className:"menu ",id:"home"},c.default.createElement("div",{className:"parentMenu menu0 home_link active"},c.default.createElement(s.Link,{to:"/"},c.default.createElement("span",null,"Home")))),c.default.createElement("div",{id:"menu3",className:"menu"},c.default.createElement("div",{className:"parentMenu"},c.default.createElement(s.Link,{to:"/jobs"},c.default.createElement("span",null,"Jobs")))),c.default.createElement("div",{id:"menu3",className:"menu"},c.default.createElement("div",{className:"parentMenu"},c.default.createElement(s.Link,{to:"/recruiters"},c.default.createElement("span",null,"Recruiters")))))))}}]),t}(c.default.Component);t.default=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(9),a=n(25),i=function(e){return e&&e.__esModule?e:{default:e}}(a),l=function(e){return{jobs:e.jobs}},u=function(e){return{viewJob:function(t){e((0,o.viewJob)(t))},fetchJobs:function(){e((0,o.fetchJobs)())}}};t.default=(0,r.connect)(l,u)(i.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearJobDetail=t.fetchJob=t.fetchJobs=t.viewJob=t.addJob=void 0;var r=n(1);t.addJob=function(e){return{type:r.JOB_ACTIONS.ADD_JOB,jobData:e}},t.viewJob=function(e){return{type:r.JOB_ACTIONS.VIEW_JOB,jobId:e}},t.fetchJobs=function(){return{type:r.JOB_ACTIONS.FETCH_JOBS,name:name}},t.fetchJob=function(e){return{type:r.JOB_ACTIONS.FETCH_JOB,jobId:e}},t.clearJobDetail=function(e){return{type:r.JOB_ACTIONS.CLEAR_JOB_DETAIL,jobId:e}}},function(e,t){e.exports=require("prop-types")},function(e,t,n){e.exports=n(12)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(5),a=r(o),i=n(13),l=r(i),u=(0,a.default)();u.set("view engine","ejs"),u.use(a.default.static("public")),u.use("/",l.default),u.listen(3e3,function(){console.log("Rapid Jobs listening on port 3000")})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),a=r(o),i=n(0),l=r(i),u=n(14),c=r(u),f=n(6),s=n(2),d=n(15),p=n(16),b=r(p),m=n(1),h=n(19),y=r(h),_=n(20),E=r(_),v=a.default.Router();v.get("/jobs",function(e,t){t.send(y.default)}),v.get("/job/:jobId",function(e,t){var n=parseInt(e.params.jobId),r=y.default.jobs,o=!0,a=!1,i=void 0;try{for(var l,u=r[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){var c=l.value;if(n===c.jobId)return t.send(c)}}catch(e){a=!0,i=e}finally{try{!o&&u.return&&u.return()}finally{if(a)throw i}}t.send("Invalid job id")}),v.get("/",function(e,t){var n=(0,f.createStore)(b.default);n.dispatch({type:m.JOB_ACTIONS.ADD_JOB,job:{jobId:1,jobTitle:"Software Engineer",companyName:"Windmill Inc.",jobDescription:"Some random description",avatar:"http://materializecss.com/images/yuna.jpg"}});var r={},o=c.default.renderToString(l.default.createElement(s.Provider,{store:n},l.default.createElement(d.StaticRouter,{location:e.originalUrl,context:r},l.default.createElement(E.default,null)))),a=n.getState();r.url?(t.writeHead(301,{Location:r.url}),t.end()):t.status(200).render("../views/index.ejs",{html:o,script:JSON.stringify(a)})}),t.default=v},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-router")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(6),a=n(17),i=r(a),l=n(18),u=r(l),c=(0,o.combineReducers)({jobs:i.default,jobDetail:u.default});t.default=c},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case o.JOB_ACTIONS.ADD_JOB:return[].concat(r(e),[{jobId:t.job.jobId,jobTitle:t.job.jobTitle,companyName:t.job.companyName,jobDescription:t.job.jobDescription,avatar:t.job.avatar}]);case o.JOB_ACTIONS.JOBS_DATA_FETCH_SUCCEEDED:return[].concat(r(t.data));case o.JOB_ACTIONS.JOBS_DATA_FETCH_FAILED:return[].concat(r(e));default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(1),a=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1];switch(n.type){case o.JOB_ACTIONS.JOB_FETCH_SUCCEEDED:return Object.assign({},t,{jobDetail:n.data});case o.JOB_ACTIONS.JOB_FETCH_FAILED:return Object.assign({},t,e);case o.JOB_ACTIONS.CLEAR_JOB_DETAIL:return r({},t,{jobDetail:null});default:return t}};t.default=a},function(e,t){e.exports={jobs:[{jobId:1,jobTitle:"Software Engineer",companyName:"Windmill Inc.",jobDescription:"SMTS/Principal ASIC Design Engineer - PCI Design and Integration",education:"Graduate Degree in Electrical/Electronics Engg. (post Graduate is a plus)",keySkills:"verilog, rtl coding, asic design, static timing analysis, digital design...",skills:"- 8-20 years of ASIC RTL Design experience and Verilog/System Verilog proficiency- Experience with multiple clock and power domains- Extensive experience in integration and validation of high speed PCIe IP core- Experience with PCIe protocol analyzers and debug- Familiarity with PCIe driver and application software for Linux/Windows",location:"Bangalore India",salary:"Not Disclosed by Recruiter",industry:"Semiconductors / Electronics",functionalArea:"IT Software - Embedded , EDA , VLSI , ASIC , Chip Design",role:"Team Lead/Technical Lead",employementType:"Permanent Job, Full Time",companyProfile:"Its a leading developer, and global supplier of high-speed connectivity solutions for data centers, enterprise and WLAN applications. The transition to 10 Gb Ethernet and Multi - Gig Ethernet is currently underway,driven by the consolidation of data in the cloud and the mobile revolution.Its 10 GBASE - T and AQrate PHY product lines lead the market with low - power,high - performance,and high - density silicon solutions ",avatar:"http://materializecss.com/images/yuna.jpg"},{jobId:2,jobTitle:"Manager Indirect Taxation, Manager Direct Taxation",companyName:"AntomechTurbo Technologies India Private Limited",jobDescription:"Manage reporting, tax audit and compliance. Corporate & international tax advice",education:"Graduate Degree in Commerce",keySkills:"direct tax, international taxation, auditing, finance, indirect taxation...",skills:"Ability to develop and maintain positive working relationship with Company Staff.Good communication skills.Good team player.A good Communicator With Self-Motivated.",location:"Mumbai India",salary:"Not Disclosed by Recruiter",industry:"Automobile / Auto Anciliary / Auto Components",functionalArea:"Accounts , Finance , Tax , Company Secretary , Audit",role:"Accounts Manager",employementType:"Permanent Job, Full Time",companyProfile:"AntomechTurbo Technologies India Private Limited Manufacturing of Vibratory Feeders and Conveyors, Material Handling Conveyors, vibrator table, Vibratory Bowl Feeding, Drilling SPM, Automatic Drilling Machine, Pick n Place Units etc.",avatar:"http://materializecss.com/images/yuna.jpg"},{jobId:3,jobTitle:"Executive/officer - AV Sales",companyName:"IPundit Management Solutions",jobDescription:"Manage reporting, tax audit and compliance. Corporate & international tax advice",education:"Graduate Degree in Commerce",keySkills:"av sales, audio visual sales, audio visual marketing, Market Intelligence...",skills:"Achieving business targets of Sales Volume, Throughput,Outstanding & Stock as per norms of AV products and solutionsMaintaining relationship with Architects, A V Consultant and Project Management Consultant Appoint, Account development,",location:"Mumbai India",salary:"Not Disclosed by Recruiter",industry:"Architecture / Interior Design",functionalArea:"Sales , Retail , Business Development",role:"Sales Executive/Officer",employementType:"Permanent Job, Full Time",companyProfile:"IPundit Management Solutions is integrated Human Resource Management service organization, believes in providing effective Staffing Solutions to our clients to the best of their satisfaction.",avatar:"http://materializecss.com/images/yuna.jpg"}]}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),f=n(3),s=n(21),d=r(s),p=n(24),b=r(p),m=n(27),h=r(m),y=n(7),_=r(y),E=n(31),v=r(E),O=function(e){function t(e){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),l(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(d.default,null),c.default.createElement(_.default,null),c.default.createElement(f.Route,{exact:!0,path:"/",component:b.default}),c.default.createElement(f.Route,{exact:!0,path:"/jobs",component:b.default}),c.default.createElement(f.Route,{exact:!0,path:"/recruiters",component:v.default}),c.default.createElement(f.Route,{exact:!0,path:"/job/:jobId",component:h.default}))}}]),t}(c.default.Component);t.default=O},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n      box-shadow: 5px 10px;\n    "],["\n      box-shadow: 5px 10px;\n    "]),c=n(0),f=r(c),s=n(4),d=r(s),p=n(22),b=r(p),m=n(7),h=(r(m),function(e){function t(e){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),l(t,[{key:"render",value:function(){var e=d.default.div(u);return f.default.createElement(e,null,f.default.createElement("img",{src:b.default,alt:"Rapid Jobs"}))}}]),t}(f.default.Component));t.default=h},function(e,t,n){e.exports=n.p+"images/56672683c415147b7892243837ba3a2d.png"},function(e,t,n){e.exports=n.p+"images/821f3487f8fb783670d4ec065173e11a.png"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),f=n(8),s=r(f),d=function(e){function t(e){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),l(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(s.default,null))}}]),t}(c.default.Component);t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),f=n(10),s=r(f),d=n(26),p=r(d),b=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){n.props.fetchJobs()},n.hanldeViewItem=function(e){n.props.viewJob(e)},n}return i(t,e),l(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(p.default,{collection:this.props.jobs,onViewItem:this.hanldeViewItem}))}}]),t}(c.default.Component);b.propTypes={jobs:s.default.array.isRequired,viewJob:s.default.func.isRequired,fetchJobs:s.default.func.isRequired},t.default=b},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=o(["\n      display: flex;\n      -webkit-flex-direction: column;\n      flex-direction: column;\n    "],["\n      display: flex;\n      -webkit-flex-direction: column;\n      flex-direction: column;\n    "]),f=o(["\n      padding-bottom: 20px;\n      color: #21618C;\n      font-weight: 600;\n      font-size: 32px;\n    "],["\n      padding-bottom: 20px;\n      color: #21618C;\n      font-weight: 600;\n      font-size: 32px;\n    "]),s=o(["\n      padding-bottom: 20px;\n      font-weight: 600;\n    "],["\n      padding-bottom: 20px;\n      font-weight: 600;\n    "]),d=n(0),p=r(d),b=n(10),m=r(b),h=n(4),y=r(h),_=n(3),E=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleItemClick=function(e){n.props.onViewItem()},n.renderItem=function(e){var t=y.default.div(c),n=y.default.div(f),r=y.default.div(s);return p.default.createElement(_.Link,{key:e.jobId,to:"/job/"+e.jobId},p.default.createElement("li",{className:"list-item",key:e.jobId},p.default.createElement(n,null,e.jobTitle),p.default.createElement(r,null,e.companyName),p.default.createElement(t,null,p.default.createElement("div",null,p.default.createElement("span",null,"Keyskills:  "),p.default.createElement("span",null,e.keySkills)),p.default.createElement("div",null,p.default.createElement("span",null,"Job Description: "),p.default.createElement("span",null,e.jobDescription)))))},n}return l(t,e),u(t,[{key:"render",value:function(){var e=this;return p.default.createElement("div",null,p.default.createElement("ul",{className:"list-group"},this.props.collection.map(function(t){return e.renderItem(t)})))}}]),t}(p.default.Component);E.propTypes={collection:m.default.array.isRequired,onViewItem:m.default.func.isRequired},t.default=E},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),f=n(28),s=r(f),d=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleBackClick=function(){n.props.history.push("/")},n}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props.match.params.jobId;return c.default.createElement(s.default,{jobId:e,handleBackClick:this.handleBackClick})}}]),t}(c.default.Component);t.default=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(9),a=n(29),i=function(e){return e&&e.__esModule?e:{default:e}}(a),l=function(e){return{jobDetail:e.jobDetail}},u=function(e){return{fetchJob:function(t){e((0,o.fetchJob)(t))},clearJobDetail:function(t){e((0,o.clearJobDetail)(t))}}};t.default=(0,r.connect)(l,u)(i.default)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),f=n(30),s=n(8),d=(r(s),function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentWillMount=function(){var e=n.props.jobId;n.props.fetchJob(e)},n.handleBackClick=function(){n.props.clearJobDetail(),n.props.handleBackClick()},n}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props.jobDetail.jobDetail;return e?c.default.createElement("div",{className:"job-detail"},c.default.createElement("h2",{className:"jobType"},e.jobTitle),c.default.createElement(f.Grid,{columns:10,gap:"2px"},c.default.createElement(f.Cell,{height:2,width:1}," ",c.default.createElement("label",null,"Company:  ")," "),c.default.createElement(f.Cell,{height:2,width:9},e.companyName),c.default.createElement(f.Cell,{height:2,width:1}," ",c.default.createElement("label",null,"Job Description: ")," "),c.default.createElement(f.Cell,{height:2,width:9},e.jobDescription),c.default.createElement(f.Cell,{height:2,width:1}," ",c.default.createElement("label",null,"Education Type: ")," "),c.default.createElement(f.Cell,{height:2,width:9},e.education),c.default.createElement(f.Cell,{height:2,width:1}," ",c.default.createElement("label",null,"Experience/Skills: ")," "),c.default.createElement(f.Cell,{height:2,width:9},e.skills),c.default.createElement(f.Cell,{height:2,width:1}," ",c.default.createElement("label",null,"Location: ")," "),c.default.createElement(f.Cell,{height:2,width:9},e.location),c.default.createElement(f.Cell,{height:2,width:1}," ",c.default.createElement("label",null,"Salary: ")," "),c.default.createElement(f.Cell,{height:2,width:9},e.salary),c.default.createElement(f.Cell,{height:2,width:1}," ",c.default.createElement("label",null,"Role: ")),c.default.createElement(f.Cell,{height:2,width:9},e.role),c.default.createElement(f.Cell,{height:2,width:1},c.default.createElement("label",null,"Industry: ")),c.default.createElement(f.Cell,{height:2,width:9},e.industry),c.default.createElement(f.Cell,{height:2,width:1},c.default.createElement("label",null,"Functional Area: ")),c.default.createElement(f.Cell,{height:2,width:9},e.functionalArea),c.default.createElement(f.Cell,{height:2,width:1},c.default.createElement("label",null,"Employment Type: ")),c.default.createElement(f.Cell,{height:2,width:9},e.employementType)),c.default.createElement("div",{className:"companyProfile"},c.default.createElement("div",null,c.default.createElement("label",null,"Company Profile: ")),c.default.createElement("div",null,e.companyProfile)),c.default.createElement("div",{className:"btn-container"},c.default.createElement("button",{className:"backBtn",onClick:this.handleBackClick},"Back"))):c.default.createElement("div",null," Loading... ")}}]),t}(c.default.Component));t.default=d},function(e,t){e.exports=require("styled-css-grid")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n        text-decoration: none;\n    "],["\n        text-decoration: none;\n    "]),c=n(0),f=r(c),s=n(4),d=r(s),p=function(e){function t(e){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),l(t,[{key:"render",value:function(){var e=d.default.ul(u);return f.default.createElement("div",null,f.default.createElement("h2",null," Recruiters "),f.default.createElement(e,null,f.default.createElement("li",null,"Recruiter - 1"),f.default.createElement("li",null,"Recruiter - 2"),f.default.createElement("li",null,"Recruiter - 3")))}}]),t}(f.default.Component);t.default=p}]);
//# sourceMappingURL=server.js.map