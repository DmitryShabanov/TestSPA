webpackJsonp([0],{100:function(e,t,n){"use strict";function s(e){return{type:r,payload:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.changeFilter=s;var r=t.CHANGE_FILTER="CHANGE_FILTER";!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"CHANGE_FILTER","/Users/dmitrij/Documents/WEB/TestSPA/src/actions/changeFilter.js"),__REACT_HOT_LOADER__.register(s,"changeFilter","/Users/dmitrij/Documents/WEB/TestSPA/src/actions/changeFilter.js"))}()},102:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}n(103);var r=n(5),a=s(r),i=n(32),u=n(84),o=n(31),c=n(24),_=n(227),l=s(_);n(231);var d=(0,o.createStore)(l.default),f=function(){var e=n(232).default,t=a.default.createElement(c.Provider,{store:d},a.default.createElement(u.AppContainer,null,a.default.createElement(e,null)));(0,i.render)(t,document.getElementById("root"))};f();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"store","/Users/dmitrij/Documents/WEB/TestSPA/src/index.jsx"),__REACT_HOT_LOADER__.register(f,"renderApp","/Users/dmitrij/Documents/WEB/TestSPA/src/index.jsx"))}()},103:function(e,t,n){e.exports=n(104)},104:function(e,t,n){"use strict";e.exports=n(105)},105:function(e,t,n){"use strict"},227:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(31),a=n(228),i=s(a),u=n(229),o=s(u),c=n(230),_=s(c),l=(0,r.combineReducers)({tasks:i.default,taskInput:o.default,filter:_.default});t.default=l;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(l,"default","/Users/dmitrij/Documents/WEB/TestSPA/src/reducers/index.js")}()},228:function(e,t,n){"use strict";function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1];switch(t.type){case a.ADD_TASK:return""===t.payload||-1!==e.findIndex(function(e){return e.task===t.payload})?e:e.push({task:t.payload,complete:!1});case i.DELETE_TASK:return e.delete(e.findIndex(function(e){return e.task===t.payload}));case u.CHANGE_TASK_STATUS:return e.map(function(e){return e.task===t.payload?{task:e.task,complete:!e.complete}:e});case o.CHANGE_TASK:return e.map(function(e){return e.task===t.payload.task?{task:t.payload.editedTask,complete:e.complete}:e});default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var r=n(94),a=n(95),i=n(96),u=n(97),o=n(98),c=(0,r.List)([{task:"I will do this tomorrow",complete:!0},{task:"write application with react and redux",complete:!0},{task:"do something ...",complete:!1},{task:"task to do in soon time",complete:!0},{task:"do this task after completed tasks abowe",complete:!1},{task:"do some PSD templates",complete:!1}]);!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"initialState","/Users/dmitrij/Documents/WEB/TestSPA/src/reducers/tasks.js"),__REACT_HOT_LOADER__.register(s,"tracks","/Users/dmitrij/Documents/WEB/TestSPA/src/reducers/tasks.js"))}()},229:function(e,t,n){"use strict";function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1];switch(t.type){case r.CHANGE_TASK_INPUT:return t.payload;default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var r=n(99),a="";!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"initialState","/Users/dmitrij/Documents/WEB/TestSPA/src/reducers/taskInput.js"),__REACT_HOT_LOADER__.register(s,"taskInput","/Users/dmitrij/Documents/WEB/TestSPA/src/reducers/taskInput.js"))}()},230:function(e,t,n){"use strict";function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1];switch(t.type){case r.CHANGE_FILTER:return t.payload;default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var r=n(100),a="";!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"initialState","/Users/dmitrij/Documents/WEB/TestSPA/src/reducers/filter.js"),__REACT_HOT_LOADER__.register(s,"filter","/Users/dmitrij/Documents/WEB/TestSPA/src/reducers/filter.js"))}()},231:function(e,t){},232:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),a=s(r),i=n(233),u=s(i),o=n(236),c=s(o),_=n(243),l=s(_),d=n(246),f=s(d),T=function(){return a.default.createElement("div",null,a.default.createElement(u.default,null),a.default.createElement(f.default,null),a.default.createElement(l.default,null),a.default.createElement(c.default,null))},p=T;t.default=p;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(T,"App","/Users/dmitrij/Documents/WEB/TestSPA/src/containers/app.jsx"),__REACT_HOT_LOADER__.register(p,"default","/Users/dmitrij/Documents/WEB/TestSPA/src/containers/app.jsx"))}()},233:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function r(e){return{taskInput:e.taskInput}}function a(e){return{onAdd:function(t){return e((0,l.addTask)(t))},onChangeTaskInput:function(t){return e((0,d.changeTaskInput)(t))}}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),u=s(i),o=n(8),c=s(o),_=n(24),l=n(95),d=n(99),f=n(234),T=s(f),p=function(e){var t=e.taskInput,n=e.onAdd,s=e.onChangeTaskInput;return u.default.createElement(T.default,{taskInput:t,onAdd:n,onChangeTaskInput:s})};p.propTypes={taskInput:c.default.string.isRequired,onAdd:c.default.func.isRequired,onChangeTaskInput:c.default.func.isRequired};var E=(0,_.connect)(r,a)(p);t.default=E;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(p,"AddTaskContainer","/Users/dmitrij/Documents/WEB/TestSPA/src/containers/addTask.jsx"),__REACT_HOT_LOADER__.register(r,"mapStateToProps","/Users/dmitrij/Documents/WEB/TestSPA/src/containers/addTask.jsx"),__REACT_HOT_LOADER__.register(a,"mapDispatchToProps","/Users/dmitrij/Documents/WEB/TestSPA/src/containers/addTask.jsx"),__REACT_HOT_LOADER__.register(E,"default","/Users/dmitrij/Documents/WEB/TestSPA/src/containers/addTask.jsx"))}()},234:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),a=s(r),i=n(8),u=s(i);n(235);var o=function(e){var t=e.taskInput,n=e.onAdd,s=e.onChangeTaskInput;return a.default.createElement("section",{className:"container add-task"},a.default.createElement("div",{className:"col-12"},a.default.createElement("div",{className:"add-task--form"},a.default.createElement("input",{className:"add-task--input",type:"text",placeholder:"Task here",value:t,onChange:function(e){return s(e.target.value)}}),a.default.createElement("input",{className:"add-task--button",type:"button",value:"ADD TASK",onClick:function(){n(t),s("")}}))))};o.propTypes={taskInput:u.default.string.isRequired,onAdd:u.default.func.isRequired,onChangeTaskInput:u.default.func.isRequired};var c=o;t.default=c;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"AddTask","/Users/dmitrij/Documents/WEB/TestSPA/src/components/addTask/index.jsx"),__REACT_HOT_LOADER__.register(c,"default","/Users/dmitrij/Documents/WEB/TestSPA/src/components/addTask/index.jsx"))}()},235:function(e,t){},236:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function r(e){return{tasks:e.tasks.filterNot(function(t){return t.complete.toString()===e.filter})}}function a(e){return{onDelete:function(t){return e((0,l.deleteTask)(t))},onComplete:function(t){return e((0,d.changeTaskStatus)(t))},onChangeTask:function(t,n){return e((0,f.changeTask)(t,n))}}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),u=s(i),o=n(8),c=s(o),_=n(24),l=n(96),d=n(97),f=n(98),T=n(237),p=s(T),E=function(e){var t=e.tasks,n=e.onDelete,s=e.onComplete,r=e.onChangeTask;return u.default.createElement(p.default,{taskList:t,onDelete:n,onComplete:s,onChangeTask:r})};E.propTypes={tasks:c.default.objectOf(c.default.any).isRequired,onDelete:c.default.func.isRequired,onComplete:c.default.func.isRequired,onChangeTask:c.default.func.isRequired};var A=(0,_.connect)(r,a)(E);t.default=A;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(E,"TaskListContainer","/Users/dmitrij/Documents/WEB/TestSPA/src/containers/taskList.jsx"),__REACT_HOT_LOADER__.register(r,"mapStateToProps","/Users/dmitrij/Documents/WEB/TestSPA/src/containers/taskList.jsx"),__REACT_HOT_LOADER__.register(a,"mapDispatchToProps","/Users/dmitrij/Documents/WEB/TestSPA/src/containers/taskList.jsx"),__REACT_HOT_LOADER__.register(A,"default","/Users/dmitrij/Documents/WEB/TestSPA/src/containers/taskList.jsx"))}()},237:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),a=s(r),i=n(8),u=s(i),o=n(238),c=s(o);n(242);var _=function(e){var t=e.taskList,n=e.onDelete,s=e.onComplete,r=e.onChangeTask;return a.default.createElement("section",{className:"container task-list"},a.default.createElement("div",{className:"col-12"},t.map(function(e,t){return a.default.createElement(c.default,{key:t,task:e,onDelete:n,onComplete:s,onChangeTask:r})})))};_.propTypes={taskList:u.default.objectOf(u.default.any).isRequired,onDelete:u.default.func.isRequired,onComplete:u.default.func.isRequired,onChangeTask:u.default.func.isRequired};var l=_;t.default=l;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"TaskList","/Users/dmitrij/Documents/WEB/TestSPA/src/components/taskList/index.jsx"),__REACT_HOT_LOADER__.register(l,"default","/Users/dmitrij/Documents/WEB/TestSPA/src/components/taskList/index.jsx"))}()},238:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),o=n(5),c=s(o),_=n(8),l=s(_),d=n(101),f=s(d),T=n(239),p=s(T);n(241);var E=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isOpened:!1},n.onIsOpened=n.onIsOpened.bind(n),n}return i(t,e),u(t,[{key:"onIsOpened",value:function(){this.setState({isOpened:!this.state.isOpened})}},{key:"render",value:function(){var e=this,t=c.default.createElement("span",{className:"task--text",onClick:function(){return e.onIsOpened()}},this.props.task.task);return c.default.createElement("p",{className:"task"},c.default.createElement("span",{className:"task--mark "+(this.props.task.complete?"task--mark-done":"task--mark-expected"),onClick:function(t){return e.props.onComplete(t.target.nextElementSibling.innerHTML)}}),t,c.default.createElement(f.default,{isOpened:this.state.isOpened,closeOnEsc:!0},c.default.createElement(p.default,{onChangeTask:this.props.onChangeTask,onClose:this.onIsOpened},t.props.children)),c.default.createElement("span",{className:"task--delete-button",onClick:function(t){return e.props.onDelete(t.target.previousElementSibling.innerHTML)}}))}}]),t}(o.Component);E.propTypes={task:l.default.objectOf(l.default.any).isRequired,onDelete:l.default.func.isRequired,onComplete:l.default.func.isRequired,onChangeTask:l.default.func.isRequired};var A=E;t.default=A;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(E,"Task","/Users/dmitrij/Documents/WEB/TestSPA/src/components/task/index.jsx"),__REACT_HOT_LOADER__.register(A,"default","/Users/dmitrij/Documents/WEB/TestSPA/src/components/task/index.jsx"))}()},239:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),o=n(5),c=s(o),_=n(8),l=s(_);n(240);var d=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={editedValue:e.children},n.onEdit=n.onEdit.bind(n),n}return i(t,e),u(t,[{key:"onEdit",value:function(e){this.setState({editedValue:e})}},{key:"render",value:function(){var e=this;return c.default.createElement("div",null,c.default.createElement("div",{className:"change-task--background",onClick:function(){return e.props.onClose()}}),c.default.createElement("div",{className:"change-task--form"},c.default.createElement("div",{className:"change-task--cancel"},c.default.createElement("span",{className:"change-task-title"},"Change task"),c.default.createElement("div",{className:"change-task--cancel-button",onClick:function(){return e.props.onClose()}})),c.default.createElement("textarea",{className:"change-task--area",defaultValue:this.state.editedValue,onChange:function(t){return e.onEdit(t.target.value)}}),c.default.createElement("input",{type:"button",value:"DONE",className:"change-task--confirm-button",onClick:function(){e.props.onChangeTask(e.props.children,e.state.editedValue),e.props.onClose()}})))}}]),t}(o.Component);d.propTypes={onChangeTask:l.default.func.isRequired,children:l.default.string.isRequired,onClose:l.default.func.isRequired};var f=d;t.default=f;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"ChangeTask","/Users/dmitrij/Documents/WEB/TestSPA/src/components/task/changeTask/index.jsx"),__REACT_HOT_LOADER__.register(f,"default","/Users/dmitrij/Documents/WEB/TestSPA/src/components/task/changeTask/index.jsx"))}()},240:function(e,t){},241:function(e,t){},242:function(e,t){},243:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function r(e){return{filter:e.filter}}function a(e){return{onChangeFilter:function(t){return e((0,l.changeFilter)(t))}}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),u=s(i),o=n(8),c=s(o),_=n(24),l=n(100),d=n(244),f=s(d),T=function(e){var t=e.filter,n=e.onChangeFilter;return u.default.createElement(f.default,{filter:t,onChangeFilter:n})};T.propTypes={filter:c.default.string.isRequired,onChangeFilter:c.default.func.isRequired};var p=(0,_.connect)(r,a)(T);t.default=p;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(T,"FilterContainer","/Users/dmitrij/Documents/WEB/TestSPA/src/containers/filter.jsx"),__REACT_HOT_LOADER__.register(r,"mapStateToProps","/Users/dmitrij/Documents/WEB/TestSPA/src/containers/filter.jsx"),__REACT_HOT_LOADER__.register(a,"mapDispatchToProps","/Users/dmitrij/Documents/WEB/TestSPA/src/containers/filter.jsx"),__REACT_HOT_LOADER__.register(p,"default","/Users/dmitrij/Documents/WEB/TestSPA/src/containers/filter.jsx"))}()},244:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),a=s(r),i=n(8),u=s(i);n(245);var o=function(e){var t=e.filter,n=e.onChangeFilter;return a.default.createElement("section",{className:"container filter"},a.default.createElement("div",{className:"col-12"},a.default.createElement("div",{className:"filter--buttons-panel"},a.default.createElement("input",{className:"filter--button "+(""===t?"filter--button-selected":""),type:"button",value:"All",onClick:function(){return n("")}}),a.default.createElement("input",{className:"filter--button "+("false"===t?"filter--button-selected":""),type:"button",value:"Complete",onClick:function(){return n("false")}}),a.default.createElement("input",{className:"filter--button "+("true"===t?"filter--button-selected":""),type:"button",value:"In process",onClick:function(){return n("true")}}))))};o.propTypes={onChangeFilter:u.default.func.isRequired,filter:u.default.string.isRequired};var c=o;t.default=c;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"Filter","/Users/dmitrij/Documents/WEB/TestSPA/src/components/filter/index.jsx"),__REACT_HOT_LOADER__.register(c,"default","/Users/dmitrij/Documents/WEB/TestSPA/src/components/filter/index.jsx"))}()},245:function(e,t){},246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(5),r=function(e){return e&&e.__esModule?e:{default:e}}(s);n(247);var a=function(){return r.default.createElement("section",{className:"container main-header"},r.default.createElement("h2",{className:"col-12 main-header--header-text"},"List of tasks"))},i=a;t.default=i;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"MainHeader","/Users/dmitrij/Documents/WEB/TestSPA/src/components/mainHeader/index.jsx"),__REACT_HOT_LOADER__.register(i,"default","/Users/dmitrij/Documents/WEB/TestSPA/src/components/mainHeader/index.jsx"))}()},247:function(e,t){},95:function(e,t,n){"use strict";function s(e){return{type:r,payload:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.addTask=s;var r=t.ADD_TASK="ADD_TASK";!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"ADD_TASK","/Users/dmitrij/Documents/WEB/TestSPA/src/actions/addTask.js"),__REACT_HOT_LOADER__.register(s,"addTask","/Users/dmitrij/Documents/WEB/TestSPA/src/actions/addTask.js"))}()},96:function(e,t,n){"use strict";function s(e){return{type:r,payload:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.deleteTask=s;var r=t.DELETE_TASK="DELETE_TASK";!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"DELETE_TASK","/Users/dmitrij/Documents/WEB/TestSPA/src/actions/deleteTask.js"),__REACT_HOT_LOADER__.register(s,"deleteTask","/Users/dmitrij/Documents/WEB/TestSPA/src/actions/deleteTask.js"))}()},97:function(e,t,n){"use strict";function s(e){return{type:r,payload:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.changeTaskStatus=s;var r=t.CHANGE_TASK_STATUS="CHANGE_TASK_STATUS";!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"CHANGE_TASK_STATUS","/Users/dmitrij/Documents/WEB/TestSPA/src/actions/changeTaskStatus.js"),__REACT_HOT_LOADER__.register(s,"changeTaskStatus","/Users/dmitrij/Documents/WEB/TestSPA/src/actions/changeTaskStatus.js"))}()},98:function(e,t,n){"use strict";function s(e,t){return{type:r,payload:{task:e,editedTask:t}}}Object.defineProperty(t,"__esModule",{value:!0}),t.changeTask=s;var r=t.CHANGE_TASK="CHANGE_TASK";!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"CHANGE_TASK","/Users/dmitrij/Documents/WEB/TestSPA/src/actions/changeTask.js"),__REACT_HOT_LOADER__.register(s,"changeTask","/Users/dmitrij/Documents/WEB/TestSPA/src/actions/changeTask.js"))}()},99:function(e,t,n){"use strict";function s(e){return{type:r,payload:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.changeTaskInput=s;var r=t.CHANGE_TASK_INPUT="CHANGE_TASK_INPUT";!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"CHANGE_TASK_INPUT","/Users/dmitrij/Documents/WEB/TestSPA/src/actions/changeTaskInput.js"),__REACT_HOT_LOADER__.register(s,"changeTaskInput","/Users/dmitrij/Documents/WEB/TestSPA/src/actions/changeTaskInput.js"))}()}},[102]);