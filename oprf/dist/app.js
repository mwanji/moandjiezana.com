webpackJsonp([0],{

/***/ 0:
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _app = __webpack_require__(/*! ./app */ 1);
	
	var _app2 = _interopRequireDefault(_app);
	
	_app2["default"].render("login");

/***/ },

/***/ 1:
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _jquery = __webpack_require__(/*! jquery */ 2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _index = __webpack_require__(/*! ./index */ 160);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _storage = __webpack_require__(/*! ./storage */ 161);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	exports["default"] = {
		logged: false,
		render: function render(view, optionalViewData) {
			this.view = view;
			this.viewData = optionalViewData;
			_reactDom2["default"].render(_react2["default"].createElement(_index2["default"], {
				view: view,
				data: optionalViewData || {}
			}), document.getElementById("app"));
		},
		edit: function edit(view, recordId) {
			this.render(view, {
				view: "edit",
				record: _storage2["default"].get(view, recordId)
			});
		}
	};
	
	/*
	const storageLocal = {
		create(tableName, value) {
			const table = this.get(tableName);
			table.push(value);
			value.id = table.length;
			localStorage.setItem(tableName, JSON.stringify(table));
			
			this.addEvent(new StorageEvent(tableName + "-create", value.id));
		},
		get(tableName, optionalId) {
			let values = localStorage.getItem(tableName);
			
			if (values === null) {
				return optionalId !== undefined ? null : [];
			}
			
			const table = JSON.parse(values);
			
			if (optionalId === undefined) {
				return table;
			}
			
			const optionalValue = table.filter(value => value.id === optionalId);
				
			return optionalValue.length === 1 ? optionalValue[0] : null;
		},
		set(tableName, value) {
			if ($.isArray(value)) {
				localStorage.setItem(tableName, JSON.stringify(value));
			} else {
				const values = this.get(tableName);
				$.extend(values.filter(val => val.id === value.id)[0], value);
				this.set(tableName, values);
			}
		},
		addEvent(event) {
			const events = this.get("events");
			events.push(event);
			this.set("events", events);
		}
	};

	export const storage = storageLocal;
	*/
	module.exports = exports["default"];

/***/ },

/***/ 160:
/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _app = __webpack_require__(/*! ./app */ 1);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _storage = __webpack_require__(/*! ./storage */ 161);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _login = __webpack_require__(/*! ./login */ 162);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _dashboard = __webpack_require__(/*! ./dashboard */ 163);
	
	var _dashboard2 = _interopRequireDefault(_dashboard);
	
	var _individus = __webpack_require__(/*! ./individus */ 265);
	
	var _individus2 = _interopRequireDefault(_individus);
	
	var _stagiaires = __webpack_require__(/*! ./stagiaires */ 243);
	
	var _stagiaires2 = _interopRequireDefault(_stagiaires);
	
	var _evenements = __webpack_require__(/*! ./evenements */ 196);
	
	var _evenements2 = _interopRequireDefault(_evenements);
	
	var _salles = __webpack_require__(/*! ./salles */ 266);
	
	var _salles2 = _interopRequireDefault(_salles);
	
	var _formateurs = __webpack_require__(/*! ./formateurs */ 267);
	
	var _formateurs2 = _interopRequireDefault(_formateurs);
	
	var _layout = __webpack_require__(/*! ./layout */ 172);
	
	var _layout2 = _interopRequireDefault(_layout);
	
	var Index = _react2["default"].createClass({
		displayName: "Index",
	
		propTypes: {
			view: _react2["default"].PropTypes.string.isRequired,
			data: _react2["default"].PropTypes.object.isRequired
		},
		onEdit: function onEdit(tableName, record) {
			_app2["default"].render(tableName, {
				view: "edit",
				record: record
			});
		},
		onSave: function onSave(tableName, record, viewData) {
			if (record.id !== undefined) {
				_storage2["default"].set(tableName, record);
			} else {
				_storage2["default"].create(tableName, record);
			}
	
			_app2["default"].render(tableName, viewData);
		},
		render: function render() {
			if (!_app2["default"].logged || this.props.view === "login") {
				return _react2["default"].createElement(_login2["default"], null);
			}
	
			var body = undefined;
			var data = this.props.data;
	
			if (_app2["default"].role === "Individu") {
				body = _react2["default"].createElement(_individus2["default"].View, null);
			} else {
				var stagiaires = _storage2["default"].get("stagiaires");
				var salles = _storage2["default"].get("salles");
				var formateurs = _storage2["default"].get("formateurs");
				var evenements = _storage2["default"].get("evenements");
	
				if (_app2["default"].view === "dashboard") {
					body = _react2["default"].createElement(_dashboard2["default"], null);
				} else if (this.props.view === "stagiaires") {
					body = _react2["default"].createElement(_stagiaires2["default"].View, { onEdit: this.onEdit.bind(this, "stagiaires"), onSave: this.onSave.bind(this, "stagiaires"), view: data.view, stagiaires: stagiaires, stagiaire: data.record, evenements: evenements });
					delete _app2["default"].viewData;
				} else if (this.props.view === "evenements") {
					body = _react2["default"].createElement(_evenements2["default"].View, { onEdit: this.onEdit.bind(this, "evenements"), onSave: this.onSave.bind(this, "evenements"), view: data.view, evenement: data.record, evenements: evenements, stagiaires: stagiaires, formateurs: formateurs, salles: salles });
				} else if (this.props.view === "salles") {
					body = _react2["default"].createElement(_salles2["default"].View, { onEdit: this.onEdit.bind(this, "salles"), onSave: this.onSave.bind(this, "salles"), view: data.view, salle: data.record, salles: salles, evenements: evenements });
				} else if (this.props.view === "formateurs") {
					body = _react2["default"].createElement(_formateurs2["default"].View, { onEdit: this.onEdit.bind(this, "formateurs"), onSave: this.onSave.bind(this, "formateurs"), view: data.view, formateurs: formateurs, formateur: data.record, evenements: evenements });
				}
			}
	
			return _react2["default"].createElement(
				_layout2["default"].Global,
				null,
				body
			);
		}
	});
	
	exports["default"] = Index;
	module.exports = exports["default"];

/***/ },

/***/ 161:
/*!********************!*\
  !*** ./storage.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _jquery = __webpack_require__(/*! jquery */ 2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var StorageEvent = (function () {
		function StorageEvent(type, payload, date, id) {
			if (date === undefined) date = new Date();
	
			_classCallCheck(this, StorageEvent);
	
			this.type = type;
			this.payload = payload;
			this.date = date;
			this.id = id;
		}
	
		_createClass(StorageEvent, [{
			key: "getKey",
			value: function getKey() {
				return this.id || this.type + "-" + this.date;
			}
		}, {
			key: "getTableName",
			value: function getTableName() {
				return this.type.split("-")[0];
			}
		}], [{
			key: "load",
			value: function load(data) {
				var storageEvent = new StorageEvent(data.type, data.payload, data.date, data.id);
	
				return storageEvent;
			}
		}]);
	
		return StorageEvent;
	})();
	
	exports.StorageEvent = StorageEvent;
	
	var storageLocal = {
		create: function create(tableName, value) {
			var table = this.get(tableName);
			table.push(value);
			value.id = table.length;
			localStorage.setItem(tableName, JSON.stringify(table));
	
			this.addEvent(new StorageEvent(tableName + "-create", value.id));
		},
		get: function get(tableName, optionalId) {
			var values = localStorage.getItem(tableName);
	
			if (values === null) {
				return optionalId !== undefined ? null : [];
			}
	
			var table = JSON.parse(values);
	
			if (optionalId === undefined) {
				if (tableName === "events") {
					return table.map(function (record) {
						return StorageEvent.load(record);
					});
				}
	
				return table;
			}
	
			var optionalValue = table.filter(function (value) {
				return value.id === optionalId;
			});
	
			return optionalValue.length === 1 ? optionalValue[0] : null;
		},
		set: function set(tableName, value) {
			if (_jquery2["default"].isArray(value)) {
				localStorage.setItem(tableName, JSON.stringify(value));
			} else {
				var values = this.get(tableName);
				_jquery2["default"].extend(values.filter(function (val) {
					return val.id === value.id;
				})[0], value);
				this.set(tableName, values);
			}
		},
		addEvent: function addEvent(event) {
			var events = this.get("events");
			events.push(event);
			event.id = events.length;
			this.set("events", events);
		}
	};
	
	exports["default"] = storageLocal;

/***/ },

/***/ 162:
/*!*******************!*\
  !*** ./login.jsx ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _app = __webpack_require__(/*! ./app */ 1);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var _react2 = _interopRequireDefault(_react);
	
	exports["default"] = _react2["default"].createClass({
		displayName: "login",
	
		onLogin: function onLogin(event) {
			event.preventDefault();
			_app2["default"].logged = true;
			_app2["default"].role = this.refs.userType.value;
			_app2["default"].render("dashboard");
		},
		render: function render() {
			return _react2["default"].createElement(
				"div",
				{ className: "container" },
				_react2["default"].createElement(
					"div",
					{ className: "verticalCenter" },
					_react2["default"].createElement(
						"form",
						{ onSubmit: this.onLogin },
						_react2["default"].createElement(
							"div",
							{ className: "form-group" },
							_react2["default"].createElement(
								"label",
								{ htmlFor: "userType" },
								"Se connecter en tant que"
							),
							_react2["default"].createElement(
								"select",
								{ id: "userType", className: "form-control", ref: "userType" },
								_react2["default"].createElement(
									"option",
									null,
									"Agent"
								),
								_react2["default"].createElement(
									"option",
									null,
									"Individu"
								)
							)
						),
						_react2["default"].createElement(
							"button",
							{ type: "submit", className: "btn btn-primary" },
							"Se Connecter"
						)
					)
				)
			);
		}
	});
	module.exports = exports["default"];

/***/ },

/***/ 163:
/*!***********************!*\
  !*** ./dashboard.jsx ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _moment = __webpack_require__(/*! moment */ 164);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _layout = __webpack_require__(/*! ./layout */ 172);
	
	var _app = __webpack_require__(/*! ./app */ 1);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _storage = __webpack_require__(/*! ./storage */ 161);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _evenements = __webpack_require__(/*! ./evenements */ 196);
	
	var _evenements2 = _interopRequireDefault(_evenements);
	
	var _stagiaires = __webpack_require__(/*! ./stagiaires */ 243);
	
	var _stagiaires2 = _interopRequireDefault(_stagiaires);
	
	var _reactBootstrapLibPanel = __webpack_require__(/*! react-bootstrap/lib/Panel */ 197);
	
	var _reactBootstrapLibPanel2 = _interopRequireDefault(_reactBootstrapLibPanel);
	
	var Dashboard = _react2["default"].createClass({
		displayName: "Dashboard",
	
		onClick: function onClick(view, record) {
			_app2["default"].render(view, {
				view: "edit",
				record: record
			});
		},
		render: function render() {
			var events = _storage2["default"].get("events");
			events.sort(function (event1, event2) {
				if ((0, _moment2["default"])(event1.date).isBefore(event2.date)) {
					return 1;
				} else if ((0, _moment2["default"])(event1.date).isAfter(event2.date)) {
					return -1;
				} else {
					return 0;
				}
			});
			var eventRows = events.map(function (event) {
				var tableName = event.getTableName();
				var record = _storage2["default"].get(tableName, event.payload);
				var onClick = _app2["default"].edit.bind(_app2["default"], tableName, record.id);
	
				return _react2["default"].createElement(Event, { key: event.getKey(), type: event.type, record: record, onClick: onClick });
			});
	
			return _react2["default"].createElement(
				"div",
				null,
				_react2["default"].createElement(
					_layout.Layout.Row,
					null,
					_react2["default"].createElement(
						"h1",
						null,
						"Dashboard"
					)
				),
				_react2["default"].createElement(
					_layout.Layout.Row,
					{ spacing: "Top" },
					_react2["default"].createElement(
						"button",
						{ onClick: this.onClick.bind(this, "stagiaires", _stagiaires2["default"].create()), type: "button", className: "btn btn-default btn-lg" },
						_react2["default"].createElement(_layout.Glyph, { icon: "user" }),
						" Créer stagiaire"
					),
					" ",
					_react2["default"].createElement(
						"button",
						{ onClick: this.onClick.bind(this, "evenements", _evenements2["default"].create()), type: "button", className: "btn btn-default btn-lg" },
						_react2["default"].createElement(_layout.Glyph, { icon: "calendar" }),
						" Créer évènement"
					)
				),
				_react2["default"].createElement(
					_layout.Layout.Row,
					{ spacing: "Top" },
					eventRows
				)
			);
		}
	});
	
	var Event = function Event(_ref) {
		var type = _ref.type;
		var record = _ref.record;
		var onClick = _ref.onClick;
	
		var text = undefined;
	
		switch (type) {
			case "stagiaires-create":
				text = "Le stagiaire " + record.prenom + " " + record.nom + " a été créé";
				break;
			case "evenements-create":
				text = "L'évènement " + record.nom + " a été programmé pour le " + (0, _moment2["default"])(record.date).format("DD/MM/YYYY");
				break;
			case "salles-create":
				text = "La salle " + record.nom + " a été créée";
				break;
			case "formateurs-create":
				text = "Le formateur " + record.nom + " a été créé";
				break;
			default:
				return _react2["default"].createElement(
					"div",
					null,
					"UNKNOWN EVENT: ",
					type
				);
		}
	
		return _react2["default"].createElement(
			_reactBootstrapLibPanel2["default"],
			{ onClick: onClick, className: "spacingTop clickable" },
			text
		);
	};
	
	exports["default"] = Dashboard;
	module.exports = exports["default"];

/***/ },

/***/ 172:
/*!********************!*\
  !*** ./layout.jsx ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _app = __webpack_require__(/*! ./app */ 1);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(/*! classnames */ 173);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactAddonsLinkedStateMixin = __webpack_require__(/*! react-addons-linked-state-mixin */ 174);
	
	var _reactAddonsLinkedStateMixin2 = _interopRequireDefault(_reactAddonsLinkedStateMixin);
	
	var _reactBootstrapLib = __webpack_require__(/*! react-bootstrap/lib */ 268);
	
	var Layout = {};
	
	exports.Layout = Layout;
	Layout.Global = _react2["default"].createClass({
		displayName: "Global",
	
		render: function render() {
			return _react2["default"].createElement(
				"div",
				null,
				_react2["default"].createElement(AppNavbar, null),
				_react2["default"].createElement(
					"div",
					{ className: "container" },
					this.props.children
				)
			);
		}
	});
	
	var AppNavbar = (function (_React$Component) {
		_inherits(AppNavbar, _React$Component);
	
		function AppNavbar() {
			_classCallCheck(this, AppNavbar);
	
			_get(Object.getPrototypeOf(AppNavbar.prototype), "constructor", this).call(this);
		}
	
		_createClass(AppNavbar, [{
			key: "onLogoff",
			value: function onLogoff(event) {
				event.preventDefault();
				_app2["default"].logged = false;
				_app2["default"].render();
			}
		}, {
			key: "navigateTo",
			value: function navigateTo(view, event) {
				event.preventDefault();
				_app2["default"].render(view);
			}
		}, {
			key: "active",
			value: function active(view) {
				return _app2["default"].view === view;
			}
		}, {
			key: "render",
			value: function render() {
				var showNavigation = _app2["default"].role !== "Individu";
	
				return _react2["default"].createElement(
					_reactBootstrapLib.Navbar,
					{ toggleNavKey: showNavigation ? 0 : undefined },
					_react2["default"].createElement(
						_reactBootstrapLib.NavBrand,
						null,
						_react2["default"].createElement(
							"a",
							{ className: "navbar-brand", href: "#", onClick: this.navigateTo.bind(this, _app2["default"].role === "Agent" ? "dashboard" : "login") },
							"Application Métiers"
						)
					),
					showNavigation ? _react2["default"].createElement(
						_reactBootstrapLib.CollapsibleNav,
						{ eventKey: 0 },
						_react2["default"].createElement(
							_reactBootstrapLib.Nav,
							{ navbar: true },
							_react2["default"].createElement(
								_reactBootstrapLib.NavItem,
								{ eventKey: 1, active: this.active("stagiaires"), href: "#", onClick: this.navigateTo.bind(this, "stagiaires") },
								"Stagiaires"
							),
							_react2["default"].createElement(
								_reactBootstrapLib.NavItem,
								{ eventKey: 2, active: this.active("evenements"), href: "#", onClick: this.navigateTo.bind(this, "evenements") },
								"Evènements"
							),
							_react2["default"].createElement(
								_reactBootstrapLib.NavItem,
								{ eventKey: 3, active: this.active("salles"), href: "#", onClick: this.navigateTo.bind(this, "salles") },
								"Salles"
							),
							_react2["default"].createElement(
								_reactBootstrapLib.NavItem,
								{ eventKey: 4, active: this.active("formateurs"), href: "#", onClick: this.navigateTo.bind(this, "formateurs") },
								"Formateurs"
							)
						),
						_react2["default"].createElement(
							_reactBootstrapLib.Nav,
							{ navbar: true, right: true },
							_react2["default"].createElement(
								_reactBootstrapLib.NavItem,
								{ eventKey: 5, href: "#", onClick: this.onLogoff },
								_react2["default"].createElement(_reactBootstrapLib.Glyphicon, { glyph: "off" }),
								" Déconnexion"
							)
						)
					) : null
				);
			}
		}]);
	
		return AppNavbar;
	})(_react2["default"].Component);
	
	Layout.Row = _react2["default"].createClass({
		displayName: "Row",
	
		getDefaultProps: function getDefaultProps() {
			return {
				size: "col-xs-12",
				spacing: ""
			};
		},
		render: function render() {
			var classes = {};
			classes[this.props.size] = true;
			classes["spacing" + this.props.spacing] = true;
	
			return _react2["default"].createElement(
				"div",
				{ className: (0, _classnames2["default"])(classes) },
				this.props.children
			);
		}
	});
	
	Layout.Table = _react2["default"].createClass({
		displayName: "Table",
	
		propTypes: {
			cols: _react2["default"].PropTypes.array.isRequired
		},
		render: function render() {
			var headers = this.props.cols.map(function (col) {
				return _react2["default"].createElement(
					"th",
					{ key: col },
					col
				);
			});
			headers.push(_react2["default"].createElement(
				"th",
				{ key: "nbsp" },
				" "
			));
	
			return _react2["default"].createElement(
				"table",
				{ className: "table table-hover" },
				_react2["default"].createElement(
					"thead",
					null,
					_react2["default"].createElement(
						"tr",
						null,
						headers
					)
				),
				_react2["default"].createElement(
					"tbody",
					null,
					this.props.children
				)
			);
		}
	});
	
	var Form = {};
	
	exports.Form = Form;
	Form.Text = _react2["default"].createClass({
		displayName: "Text",
	
		mixins: [_reactAddonsLinkedStateMixin2["default"]],
		propTypes: {
			name: _react2["default"].PropTypes.string.isRequired,
			label: _react2["default"].PropTypes.string.isRequired,
			type: _react2["default"].PropTypes.string,
			min: _react2["default"].PropTypes.number
		},
		getdefaultProps: function getdefaultProps() {
			return {
				type: "text"
			};
		},
		render: function render() {
			var classes = (0, _classnames2["default"])({
				"form-group": true,
				"col-xs-12": true,
				"col-md-4": this.props.type === "number"
			});
	
			var attrs = {};
	
			if (this.props.min) {
				attrs.min = this.props.min;
			}
	
			return _react2["default"].createElement(
				"div",
				{ className: "row" },
				_react2["default"].createElement(
					"div",
					{ className: classes },
					_react2["default"].createElement(
						"label",
						{ htmlFor: this.props.name },
						this.props.label
					),
					_react2["default"].createElement("input", _extends({ type: this.props.type, id: this.props.name, name: this.props.name, valueLink: this.props.value, required: true, className: "form-control" }, attrs))
				)
			);
		}
	});
	
	Form.Select = _react2["default"].createClass({
		displayName: "Select",
	
		propTypes: {
			name: _react2["default"].PropTypes.string.isRequired,
			value: _react2["default"].PropTypes.object.isRequired,
			label: _react2["default"].PropTypes.string.isRequired,
			options: _react2["default"].PropTypes.array.isRequired,
			optionMapper: _react2["default"].PropTypes.func.isRequired
		},
		render: function render() {
			var options = this.props.options.map(this.props.optionMapper).map(function (option) {
				return _react2["default"].createElement(
					"option",
					{ key: option.value, value: option.value },
					option.label
				);
			});
	
			options.unshift(_react2["default"].createElement("option", { key: "--" }));
	
			return _react2["default"].createElement(
				"div",
				{ className: "form-group" },
				_react2["default"].createElement(
					"label",
					{ htmlFor: this.props.name },
					this.props.label
				),
				_react2["default"].createElement(
					"select",
					{ id: this.props.name, className: "form-control", valueLink: this.props.value },
					options
				)
			);
		}
	});
	
	Form.Checkbox = _react2["default"].createClass({
		displayName: "Checkbox",
	
		propTypes: {
			label: _react2["default"].PropTypes.string.isRequired,
			value: _react2["default"].PropTypes.object.isRequired
		},
		render: function render() {
			return _react2["default"].createElement(
				"div",
				{ className: "checkbox" },
				_react2["default"].createElement(
					"label",
					null,
					_react2["default"].createElement("input", { type: "checkbox", checkedLink: this.props.value }),
					" ",
					this.props.label
				)
			);
		}
	});
	
	Form.Submit = _react2["default"].createClass({
		displayName: "Submit",
	
		propTypes: {
			create: _react2["default"].PropTypes.bool.isRequired
		},
		render: function render() {
			var icon = this.props.create ? "plus" : "ok";
			var label = this.props.create ? "Créer" : "Sauvegarder";
	
			return _react2["default"].createElement(
				"div",
				{ className: "row" },
				_react2["default"].createElement(
					"div",
					{ className: "col-xs-12" },
					_react2["default"].createElement(
						"button",
						{ type: "submit", className: "btn btn-primary" },
						_react2["default"].createElement(Glyph, { icon: icon }),
						" ",
						label
					)
				)
			);
		}
	});
	
	var Glyph = function Glyph(_ref) {
		var icon = _ref.icon;
		return _react2["default"].createElement(_reactBootstrapLib.Glyphicon, { glyph: icon });
	};
	
	exports.Glyph = Glyph;
	var Label = function Label(props) {
		var primary = props.primary;
		var success = props.success;
		var info = props.info;
		var warning = props.warning;
		var danger = props.danger;
		var link = props.link;
		var children = props.children;
	
		var classes = (0, _classnames2["default"])({
			label: true,
			"label-primary": primary,
			"label-success": success,
			"label-info": info,
			"label-warning": warning,
			"label-danger": danger,
			"label-link": link,
			"label-default": !(primary || success || info || warning || danger || link)
		});
	
		return _react2["default"].createElement(
			"span",
			{ className: classes },
			children
		);
	};
	
	exports.Label = Label;
	/*
	export const Label = React.createClass({
		propTypes: {
			type: React.PropTypes.string,
			text: React.PropTypes.string.isRequired
		},
		getDefaultProps: function () {
			return {
				type: "default"
			};
		},
		render: function () {
			const classes = {
				label: true
			};
			classes["label-" + this.props.type] = true;
			return <span className={classNames(classes)}>{this.props.text}</span>
		}
	});
	*/
	exports["default"] = Layout;

/***/ },

/***/ 196:
/*!************************!*\
  !*** ./evenements.jsx ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _jquery = __webpack_require__(/*! jquery */ 2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _moment = __webpack_require__(/*! moment */ 164);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrapLibPanel = __webpack_require__(/*! react-bootstrap/lib/Panel */ 197);
	
	var _reactBootstrapLibPanel2 = _interopRequireDefault(_reactBootstrapLibPanel);
	
	var _momentLocaleFr = __webpack_require__(/*! moment/locale/fr */ 170);
	
	var _momentLocaleFr2 = _interopRequireDefault(_momentLocaleFr);
	
	var _reactDatePicker = __webpack_require__(/*! react-date-picker */ 231);
	
	var _reactDatePicker2 = _interopRequireDefault(_reactDatePicker);
	
	var _app = __webpack_require__(/*! ./app */ 1);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _stagiaires = __webpack_require__(/*! ./stagiaires */ 243);
	
	var _stagiaires2 = _interopRequireDefault(_stagiaires);
	
	var _classnames = __webpack_require__(/*! classnames */ 173);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _layout = __webpack_require__(/*! ./layout */ 172);
	
	var _mixins = __webpack_require__(/*! ./mixins */ 258);
	
	__webpack_require__(/*! react-date-picker/base.css */ 259);
	__webpack_require__(/*! react-date-picker/theme/hackerone.css */ 263);
	
	function create() {
		return {
			date: new Date(),
			nbStagiairesActuel: 0,
			nbStagiairesMin: 1,
			materiel: false
		};
	}
	
	var Evenements = {
		create: create
	};
	
	Evenements.View = _react2["default"].createClass({
		displayName: "View",
	
		propTypes: {
			view: _react.PropTypes.string,
			evenements: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
			evenement: _react.PropTypes.object,
			stagiaires: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
			formateurs: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
			salles: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
			onEdit: _react.PropTypes.func.isRequired,
			onSave: _react.PropTypes.func.isRequired
		},
		getDefaultProps: function getDefaultProps() {
			return {
				view: "list"
			};
		},
		render: function render() {
			switch (this.props.view) {
				case "list":
					return _react2["default"].createElement(List, { evenements: this.props.evenements, onEdit: this.props.onEdit, stagiaires: this.props.stagiaires });
				case "edit":
					return _react2["default"].createElement(_Form, { evenement: this.props.evenement, stagiaires: this.props.stagiaires, formateurs: this.props.formateurs, salles: this.props.salles, onSave: this.props.onSave });
			}
		}
	});
	
	Evenements.CalendrierItem = _react2["default"].createClass({
		displayName: "CalendrierItem",
	
		propTypes: {
			evenement: _react.PropTypes.object.isRequired
		},
		onClick: function onClick(event) {
			event.preventDefault();
			_app2["default"].edit("evenements", this.props.evenement.id);
		},
		render: function render() {
			return _react2["default"].createElement(
				_reactBootstrapLibPanel2["default"],
				{ onClick: this.onClick, className: "clickable" },
				(0, _moment2["default"])(this.props.evenement.date).format("DD/MM/YYYY"),
				" ",
				_react2["default"].createElement(
					"a",
					{ href: "#" },
					this.props.evenement.nom
				)
			);
		}
	});
	
	var _Form = _react2["default"].createClass({
		displayName: "_Form",
	
		mixins: [_mixins.LinkedFormMixin],
		getInitialState: function getInitialState() {
			return { showCalendar: false, linkedForm: _jquery2["default"].extend({}, this.props.evenement) };
		},
		onCalendarToggle: function onCalendarToggle() {
			this.setState({
				showCalendar: !this.state.showCalendar
			});
		},
		onDateChange: function onDateChange(dateText, momentDate) {
			this.setState({
				linkedForm: _jquery2["default"].extend(this.state.linkedForm, { date: momentDate.toDate() })
			});
		},
		onSubmit: function onSubmit(event) {
			event.preventDefault();
			this.props.onSave(this.state.linkedForm);
		},
		render: function render() {
			var newEvenement = this.props.evenement.id === undefined;
			var stagiairesMin = newEvenement ? false : _stagiaires2["default"].countParticipants(this.props.stagiaires, this.props.evenement) >= this.props.evenement.nbStagiairesMin;
			var statut = stagiairesMin && this.props.evenement.materiel && this.props.evenement.formateurId && this.props.evenement.salleId ? "Ouvert" : "Proposé";
			var minDate = _moment2["default"].min((0, _moment2["default"])(this.state.linkedForm.date), (0, _moment2["default"])());
			var cal = this.state.showCalendar ? _react2["default"].createElement(_reactDatePicker2["default"], { date: (0, _moment2["default"])(this.state.linkedForm.date), onChange: this.onDateChange, minDate: minDate, dateFormat: "DD/MM/YYYY" }) : null;
			var salles = this.props.salles;
	
			var optionMapper = function optionMapper(salle) {
				return {
					value: salle.id,
					label: salle.nom + " (" + salle.places + ")"
				};
			};
			var formateurOptionMapper = function formateurOptionMapper(formateur) {
				return {
					value: formateur.id,
					label: formateur.prenom + " " + formateur.nom
				};
			};
	
			return _react2["default"].createElement(
				"form",
				{ onSubmit: this.onSubmit },
				_react2["default"].createElement(
					"div",
					{ className: "form-group" },
					_react2["default"].createElement(
						"label",
						null,
						"Statut: ",
						statut
					),
					_react2["default"].createElement(
						"div",
						{ className: "form-control-static" },
						_react2["default"].createElement(
							_layout.Label,
							{ success: stagiairesMin },
							_react2["default"].createElement(_layout.Glyph, { icon: stagiairesMin ? "ok" : "remove" }),
							" Salle"
						),
						" ",
						_react2["default"].createElement(
							_layout.Label,
							{ success: this.props.evenement.salleId },
							_react2["default"].createElement(_layout.Glyph, { icon: this.props.evenement.salleId ? "ok" : "remove" }),
							" Salle"
						),
						" ",
						_react2["default"].createElement(
							_layout.Label,
							{ success: this.props.evenement.formateurId },
							_react2["default"].createElement(_layout.Glyph, { icon: this.props.evenement.formateurId ? "ok" : "remove" }),
							" Formateur"
						),
						" ",
						_react2["default"].createElement(
							_layout.Label,
							{ success: this.props.evenement.materiel },
							_react2["default"].createElement(_layout.Glyph, { icon: this.props.evenement.materiel ? "ok" : "remove" }),
							" Matériel"
						)
					)
				),
				_react2["default"].createElement(_layout.Form.Text, { name: "nom", label: "Nom", value: this.linkText("nom") }),
				_react2["default"].createElement(
					"div",
					{ className: "form-group" },
					_react2["default"].createElement(
						"button",
						{ onClick: this.onCalendarToggle, className: "btn btn-default", type: "button" },
						_react2["default"].createElement(_layout.Glyph, { icon: "calendar" }),
						" ",
						(0, _moment2["default"])(this.state.linkedForm.date).format("DD/MM/YYYY")
					),
					_react2["default"].createElement(
						"div",
						{ className: "row" },
						_react2["default"].createElement(
							"div",
							{ className: "col-md-4" },
							cal
						)
					)
				),
				_react2["default"].createElement(
					"div",
					{ className: "form-group" },
					_react2["default"].createElement(
						"label",
						{ htmlFor: "type" },
						"Type"
					),
					_react2["default"].createElement(
						"select",
						{ id: "type", className: "form-control", valueLink: this.linkText("type") },
						_react2["default"].createElement(
							"option",
							{ value: "rdv" },
							"Rendez-vous individuel"
						),
						_react2["default"].createElement(
							"option",
							{ value: "reunion" },
							"Reunion d'information collective"
						)
					)
				),
				_react2["default"].createElement(_layout.Form.Text, { name: "nbStagiairesMin", label: "Nombre minimum de stagiaires", value: this.linkNumber("nbStagiairesMin"), type: "number", min: 1 }),
				_react2["default"].createElement(_layout.Form.Select, { name: "salleId", value: this.linkNumber("salleId"), options: salles, optionMapper: optionMapper, label: "Salle" }),
				_react2["default"].createElement(_layout.Form.Select, { name: "formateurId", value: this.linkNumber("formateurId"), options: this.props.formateurs, optionMapper: formateurOptionMapper, label: "Formateur" }),
				_react2["default"].createElement(_layout.Form.Checkbox, { label: "Matériel disponible", checked: this.state.linkedForm.materiel, value: this.linkText("materiel") }),
				_react2["default"].createElement(_layout.Form.Submit, { create: newEvenement })
			);
		}
	});
	
	var List = _react2["default"].createClass({
		displayName: "List",
	
		onClick: function onClick(evenement) {
			this.props.onEdit(evenement);
		},
		render: function render() {
			var _this = this;
	
			var rows = this.props.evenements.map(function (evenement) {
				return _react2["default"].createElement(
					"tr",
					{ onClick: _this.onClick.bind(_this, evenement), key: evenement.id, className: "clickable" },
					_react2["default"].createElement(
						"td",
						null,
						evenement.nom
					),
					_react2["default"].createElement(
						"td",
						null,
						(0, _moment2["default"])(evenement.date).format("DD/MM/YYYY")
					),
					_react2["default"].createElement(
						"td",
						null,
						_stagiaires2["default"].countParticipants(_this.props.stagiaires, evenement),
						" / ",
						evenement.nbStagiairesMin
					),
					_react2["default"].createElement(
						"td",
						null,
						_react2["default"].createElement(
							"button",
							{ type: "button", className: "btn btn-default" },
							_react2["default"].createElement(_layout.Glyph, { icon: "eye-open" }),
							" Détails"
						)
					)
				);
			});
	
			return _react2["default"].createElement(
				"div",
				null,
				_react2["default"].createElement(
					_layout.Layout.Row,
					null,
					_react2["default"].createElement(
						"button",
						{ type: "button", onClick: this.onClick.bind(this, create()), className: "btn btn-primary" },
						_react2["default"].createElement(_layout.Glyph, { icon: "plus" }),
						" Créer évènement"
					)
				),
				_react2["default"].createElement(
					_layout.Layout.Row,
					{ spacing: "Top" },
					_react2["default"].createElement(
						_layout.Layout.Table,
						{ cols: ["Nom", "Date", "Nb Participants"] },
						rows
					)
				)
			);
		}
	});
	
	exports["default"] = Evenements;
	module.exports = exports["default"];

/***/ },

/***/ 243:
/*!************************!*\
  !*** ./stagiaires.jsx ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _jquery = __webpack_require__(/*! jquery */ 2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _moment = __webpack_require__(/*! moment */ 164);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _classnames = __webpack_require__(/*! classnames */ 173);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrapLibTabs = __webpack_require__(/*! react-bootstrap/lib/Tabs */ 244);
	
	var _reactBootstrapLibTabs2 = _interopRequireDefault(_reactBootstrapLibTabs);
	
	var _reactBootstrapLibTab = __webpack_require__(/*! react-bootstrap/lib/Tab */ 256);
	
	var _reactBootstrapLibTab2 = _interopRequireDefault(_reactBootstrapLibTab);
	
	var _app = __webpack_require__(/*! ./app */ 1);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _layout = __webpack_require__(/*! ./layout */ 172);
	
	var _mixins = __webpack_require__(/*! ./mixins */ 258);
	
	function create() {
		return {
			eligible: false,
			evenements: []
		};
	}
	
	function createStagiaireEvenement(id) {
		return {
			evenementId: parseInt(id),
			statut: "INVITE",
			notes: ""
		};
	}
	
	var Stagiaires = {
		create: create
	};
	
	Stagiaires.countParticipants = function (stagiaires, evenement) {
		return stagiaires.map(function (s) {
			return s.evenements;
		}).reduce(function (arr, evenements) {
			return arr.concat(evenements);
		}, []).map(function (e) {
			return e.evenementId;
		}).filter(function (id) {
			return id === evenement.id;
		}).length;
	};
	
	Stagiaires.View = _react2["default"].createClass({
		displayName: "View",
	
		propTypes: {
			view: _react.PropTypes.string,
			stagiaires: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
			evenements: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
			stagiaire: _react.PropTypes.object,
			onEdit: _react.PropTypes.func.isRequired,
			onSave: _react.PropTypes.func.isRequired
		},
		getDefaultProps: function getDefaultProps() {
			return {
				view: "list"
			};
		},
		render: function render() {
			switch (this.props.view) {
				case "list":
					return _react2["default"].createElement(List, { stagiaires: this.props.stagiaires, onEdit: this.props.onEdit });
				case "edit":
					return _react2["default"].createElement(_Form, { stagiaire: this.props.stagiaire, evenements: this.props.evenements, onSave: this.props.onSave });
			}
		}
	});
	
	var List = _react2["default"].createClass({
		displayName: "List",
	
		getInitialState: function getInitialState() {
			return {
				query: ""
			};
		},
		onEdit: function onEdit(stagiaire) {
			this.props.onEdit(stagiaire);
		},
		onQueryChange: function onQueryChange(event) {
			this.setState({
				query: event.target.value.toLowerCase()
			});
		},
		render: function render() {
			var _this2 = this;
	
			var rows = this.props.stagiaires.filter(function (stagiaire) {
				return (stagiaire.prenom + " " + stagiaire.nom + " " + stagiaire.numeroId).toLowerCase().indexOf(_this2.state.query) > -1;
			}).map(function (stagiaire) {
				return _react2["default"].createElement(
					"tr",
					{ key: stagiaire.id, onClick: _this2.onEdit.bind(_this2, stagiaire), className: "clickable" },
					_react2["default"].createElement(
						"td",
						null,
						stagiaire.nom
					),
					_react2["default"].createElement(
						"td",
						null,
						stagiaire.prenom
					),
					_react2["default"].createElement(
						"td",
						null,
						stagiaire.numeroId
					),
					_react2["default"].createElement(
						"td",
						null,
						_react2["default"].createElement(
							"button",
							{ type: "button", onClick: _this2.onEdit.bind(_this2, stagiaire), className: "btn btn-default" },
							_react2["default"].createElement(_layout.Glyph, { icon: "eye-open" }),
							" Détails"
						)
					)
				);
			});
	
			return _react2["default"].createElement(
				"div",
				null,
				_react2["default"].createElement(
					_layout.Layout.Row,
					null,
					_react2["default"].createElement(
						"div",
						{ className: "form-inline" },
						_react2["default"].createElement(
							"div",
							{ className: "form-group spacingRight" },
							_react2["default"].createElement(
								"button",
								{ type: "button", onClick: this.onEdit.bind(this, create()), className: "btn btn-primary" },
								_react2["default"].createElement(_layout.Glyph, { icon: "plus" }),
								" Créer stagiaire"
							)
						),
						_react2["default"].createElement(
							"div",
							{ className: "form-group" },
							_react2["default"].createElement("input", { onChange: this.onQueryChange, value: this.state.query, type: "text", className: "form-control", placeholder: "Rechercher" })
						)
					)
				),
				_react2["default"].createElement(
					_layout.Layout.Row,
					null,
					_react2["default"].createElement(
						_layout.Layout.Table,
						{ cols: ["Nom", "Prénom", "ID"] },
						rows
					)
				)
			);
		}
	});
	
	var _Form = _react2["default"].createClass({
		displayName: "_Form",
	
		mixins: [_mixins.LinkedFormMixin],
		getInitialState: function getInitialState() {
			return {
				linkedForm: _jquery2["default"].extend({}, this.props.stagiaire)
			};
		},
		onSubmit: function onSubmit(event) {
			event.preventDefault();
			this.props.onSave(this.state.linkedForm, {
				view: "list"
			});
		},
		onAddEvenement: function onAddEvenement() {
			var evenements = this.state.linkedForm.evenements.concat(createStagiaireEvenement(this.refs.evenementSelect.value));
			this.setState({
				linkedForm: _jquery2["default"].extend({}, this.state.linkedForm, { evenements: evenements })
			});
		},
		onDeleteEvenementClick: function onDeleteEvenementClick(evenement) {
			var evenements = this.state.linkedForm.evenements.filter(function (e) {
				return e !== evenement;
			});
			this.setState({
				linkedForm: _jquery2["default"].extend({}, this.state.linkedForm, { evenements: evenements })
			});
		},
		onEvenementStatusChange: function onEvenementStatusChange(evenement, statut) {
			evenement.statut = statut;
			this.setState({
				linkedForm: this.state.linkedForm
			});
		},
		goToEvenement: function goToEvenement(evenement, event) {
			event.preventDefault();
			_app2["default"].edit("evenements", evenement.id);
		},
		render: function render() {
			var _this3 = this;
	
			var _this = this;
			var stagiaireEvenementIds = this.state.linkedForm.evenements.map(function (evenement) {
				return evenement.evenementId;
			});
			var evenements = this.props.evenements.filter(function (evenement) {
				return _jquery2["default"].inArray(evenement.id, stagiaireEvenementIds) === -1;
			}).map(function (evenement) {
				return _react2["default"].createElement(
					"option",
					{ key: evenement.id, value: evenement.id },
					(0, _moment2["default"])(evenement.date).format("DD/MM/YYYY"),
					" ",
					evenement.nom
				);
			});
	
			var stagiaireEvenements = this.state.linkedForm.evenements.map(function (stagiaireEvenement) {
				var evenement = _this3.props.evenements.filter(function (evenement) {
					return evenement.id === stagiaireEvenement.evenementId;
				})[0];
				var statut = stagiaireEvenement.statut;
	
				return _react2["default"].createElement(
					"tr",
					{ key: "stagiaire-" + evenement.id },
					_react2["default"].createElement(
						"td",
						null,
						_react2["default"].createElement(
							"a",
							{ href: "#", onClick: _this.goToEvenement.bind(_this, evenement) },
							evenement.nom
						)
					),
					_react2["default"].createElement(
						"td",
						null,
						_react2["default"].createElement(
							_layout.Label,
							{ success: statut === "PRESENT", warning: statut === "ABSENT" },
							stagiaireEvenement.statut
						)
					),
					_react2["default"].createElement(
						"td",
						null,
						_react2["default"].createElement(
							"button",
							{ onClick: _this3.onEvenementStatusChange.bind(_this3, stagiaireEvenement, "PRESENT"), type: "button", className: "btn btn-success", title: "Présent" },
							_react2["default"].createElement(_layout.Glyph, { icon: "ok" }),
							" Présent"
						),
						" ",
						_react2["default"].createElement(
							"button",
							{ onClick: _this3.onEvenementStatusChange.bind(_this3, stagiaireEvenement, "ABSENT"), type: "button", className: "btn btn-warning", title: "Absent" },
							_react2["default"].createElement(_layout.Glyph, { icon: "remove" }),
							" Absent"
						),
						" ",
						_react2["default"].createElement(
							"button",
							{ onClick: _this3.onDeleteEvenementClick.bind(_this3, stagiaireEvenement), type: "button", disabled: stagiaireEvenement.statut !== "INVITE", className: "btn btn-danger", title: "Supprimer" },
							_react2["default"].createElement(_layout.Glyph, { icon: "trash" }),
							" Supprimer"
						)
					)
				);
			});
	
			return _react2["default"].createElement(
				"form",
				{ onSubmit: this.onSubmit },
				_react2["default"].createElement(
					_reactBootstrapLibTabs2["default"],
					{ defaultActiveKey: 1 },
					_react2["default"].createElement(
						_reactBootstrapLibTab2["default"],
						{ eventKey: 1, title: "Identité" },
						_react2["default"].createElement(_layout.Layout.Row, { spacing: "Top" }),
						_react2["default"].createElement(_layout.Form.Text, { name: "nom", label: "Nom", value: this.linkText("nom") }),
						_react2["default"].createElement(_layout.Form.Text, { name: "prenom", label: "Prénom", value: this.linkText("prenom") }),
						_react2["default"].createElement(_layout.Form.Text, { name: "numeroId", label: "Numéro d'Identité", value: this.linkText("numeroId") }),
						_react2["default"].createElement(_layout.Form.Checkbox, { name: "eligible", value: this.linkText("eligible"), label: "Eligible" })
					),
					_react2["default"].createElement(
						_reactBootstrapLibTab2["default"],
						{ eventKey: 2, title: "Calendrier", disabled: !this.props.stagiaire.eligible },
						_react2["default"].createElement(
							"div",
							{ className: "row spacingTop" },
							_react2["default"].createElement(
								_layout.Layout.Row,
								{ size: "col-md-8" },
								_react2["default"].createElement(
									"select",
									{ className: "form-control", ref: "evenementSelect", disabled: evenements.length === 0 },
									evenements
								)
							),
							_react2["default"].createElement(
								_layout.Layout.Row,
								{ size: "col-md-4" },
								_react2["default"].createElement(
									"button",
									{ onClick: this.onAddEvenement, type: "button", className: "btn btn-primary", disabled: evenements.length === 0 },
									_react2["default"].createElement(_layout.Glyph, { icon: "plus" }),
									" Ajouter évènement"
								)
							)
						),
						_react2["default"].createElement(
							"div",
							{ className: "row" },
							_react2["default"].createElement(
								_layout.Layout.Row,
								null,
								_react2["default"].createElement(
									_layout.Layout.Table,
									{ cols: ["Evènement", "Statut"] },
									stagiaireEvenements
								)
							)
						)
					)
				),
				_react2["default"].createElement(_layout.Form.Submit, { create: this.props.stagiaire.id === undefined })
			);
		}
	});
	
	exports["default"] = Stagiaires;
	module.exports = exports["default"];

/***/ },

/***/ 258:
/*!*******************!*\
  !*** ./mixins.js ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _jquery = __webpack_require__(/*! jquery */ 2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	exports["default"] = {
		/**
	  * Components using this mixin must set a linkedForm property in getInitialState()
	  */
		LinkedFormMixin: {
			linkText: function linkText(property) {
				var _this = this;
	
				return {
					value: this.state.linkedForm[property],
					requestChange: function requestChange(newValue) {
						var linkedForm = _this.state.linkedForm;
						linkedForm[property] = newValue;
						_this.setState({
							linkedForm: linkedForm
						});
					}
				};
			},
			linkNumber: function linkNumber(property) {
				var _this2 = this;
	
				return {
					value: this.state.linkedForm[property],
					requestChange: function requestChange(newValue) {
						var linkedForm = _this2.state.linkedForm;
						linkedForm[property] = parseInt(newValue);
						_this2.setState({
							linkedForm: linkedForm
						});
					}
				};
			}
		},
		LinkedNumberStateMixin: {
			linkNumberState: function linkNumberState(property) {
				var _this3 = this;
	
				return {
					value: this.state[property],
					requestChange: function requestChange(newValue) {
						var update = {};
						update[property] = parseInt(newValue);
						_this3.setState(update);
					}
				};
			}
		}
	};
	module.exports = exports["default"];

/***/ },

/***/ 259:
/*!***************************************!*\
  !*** ../~/react-date-picker/base.css ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../css-loader!./base.css */ 260);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../style-loader/addStyles.js */ 262)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./base.css", function() {
				var newContent = require("!!./../css-loader/index.js!./base.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 260:
/*!*******************************************************!*\
  !*** ../~/css-loader!../~/react-date-picker/base.css ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../css-loader/lib/css-base.js */ 261)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\n\n This file is part of the ZippyUI Framework\n\n Copyright (c) 2011 ZippyUI.com\n\n All rights reserved to zippyui.com\n This software cannot be used/copied/distributed without the express permission from staff at zippyui.com\n\n */\n.date-picker {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  flex-direction: column;\n  -webkit-flex-flow: column;\n  -moz-flex-flow: column;\n  -ms-flex-flow: column;\n  -o-flex-flow: column;\n  flex-flow: column;\n  flex-flow: column;\n  -webkit-box-flex: 1 0 auto;\n  -moz-box-flex: 1 0 auto;\n  -ms-box-flex: 1 0 auto;\n  -ms-flex: 1 0 auto;\n  -webkit-flex: 1 0 auto;\n  flex: 1 0 auto;\n}\n.date-picker,\n.date-picker * {\n  box-sizing: border-box;\n}\n.date-picker .dp-footer {\n  flex-direction: row;\n  -webkit-flex-flow: row;\n  -moz-flex-flow: row;\n  -ms-flex-flow: row;\n  -o-flex-flow: row;\n  flex-flow: row;\n  flex-flow: row;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n}\n.date-picker .dp-body {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  flex-direction: column;\n  -webkit-flex-flow: column;\n  -moz-flex-flow: column;\n  -ms-flex-flow: column;\n  -o-flex-flow: column;\n  flex-flow: column;\n  flex-flow: column;\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -ms-box-flex: 1;\n  -ms-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n}\n.date-picker .dp-table {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  flex-direction: column;\n  -webkit-flex-flow: column;\n  -moz-flex-flow: column;\n  -ms-flex-flow: column;\n  -o-flex-flow: column;\n  flex-flow: column;\n  flex-flow: column;\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -ms-box-flex: 1;\n  -ms-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n}\n.date-picker .dp-row {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  flex-direction: row;\n  -webkit-flex-flow: row;\n  -moz-flex-flow: row;\n  -ms-flex-flow: row;\n  -o-flex-flow: row;\n  flex-flow: row;\n  flex-flow: row;\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -ms-box-flex: 1;\n  -ms-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n}\n.date-picker .dp-cell {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n  flex-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -ms-box-flex: 1;\n  -ms-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n}\n.date-picker .dp-nav-table {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  flex-direction: row;\n  -webkit-flex-flow: row;\n  -moz-flex-flow: row;\n  -ms-flex-flow: row;\n  -o-flex-flow: row;\n  flex-flow: row;\n  flex-flow: row;\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -ms-box-flex: 1;\n  -ms-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n  width: 100%;\n}\n.date-picker .dp-nav-table .dp-cell {\n  -webkit-box-flex: 7;\n  -moz-box-flex: 7;\n  -ms-box-flex: 7;\n  -ms-flex: 7;\n  -webkit-flex: 7;\n  flex: 7;\n}\n.date-picker .dp-nav-table .dp-nav-cell {\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -ms-box-flex: 1;\n  -ms-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 261:
/*!***************************************!*\
  !*** ../~/css-loader/lib/css-base.js ***!
  \***************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 262:
/*!**************************************!*\
  !*** ../~/style-loader/addStyles.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 263:
/*!**************************************************!*\
  !*** ../~/react-date-picker/theme/hackerone.css ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../css-loader!./hackerone.css */ 264);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../style-loader/addStyles.js */ 262)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./hackerone.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./hackerone.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 264:
/*!******************************************************************!*\
  !*** ../~/css-loader!../~/react-date-picker/theme/hackerone.css ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../css-loader/lib/css-base.js */ 261)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\n\n This file is part of the ZippyUI Framework\n\n Copyright (c) 2011 ZippyUI.com\n\n All rights reserved to zippyui.com\n This software cannot be used/copied/distributed without the express permission from staff at zippyui.com\n\n */\n.date-picker {\n  overflow: hidden;\n  background: #fff;\n  font-size: 14px;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #aeaeae;\n  border-radius: 4px;\n}\n.date-picker .dp-header {\n  background: #f0f0f0;\n}\n.date-picker .dp-header .dp-cell {\n  color: #000;\n}\n.date-picker .dp-header .dp-cell:hover {\n  background: inherit;\n}\n.date-picker .dp-table {\n  border-color: #aeaeae;\n}\n.date-picker .dp-table .dp-row {\n  border-top: 0 solid transparent;\n}\n.date-picker .dp-table .dp-row.dp-week-day-names {\n  background: #f0f0f0;\n  border-bottom: 1px solid #aeaeae;\n  border-top: none;\n  color: #000;\n}\n.date-picker .dp-table .dp-cell {\n  cursor: pointer;\n  padding: 0;\n  background: inherit;\n  border-radius: 4px;\n  margin: 2px;\n}\n.date-picker .dp-table .dp-cell:not(:first-child) {\n  border-left: 0 solid transparent;\n}\n.date-picker .dp-table .dp-cell.dp-prev,\n.date-picker .dp-table .dp-cell.dp-next {\n  color: #5c5c5c;\n  background: inherit;\n}\n.date-picker .dp-table .dp-cell.dp-in-range {\n  background: #e2f0ff;\n}\n.date-picker .dp-table .dp-cell:hover {\n  color: inherit;\n  font-weight: inherit;\n  background: #f0f0f0;\n}\n.date-picker .dp-table .dp-cell.dp-disabled {\n  cursor: default;\n  color: #aeaeae;\n  background: inherit;\n}\n.date-picker .dp-table .dp-cell.dp-value {\n  color: #fff;\n  font-weight: normal;\n  background: #2e99eb;\n}\n.date-picker .dp-table .dp-cell.dp-current {\n  font-weight: bold;\n}\n.date-picker .dp-table .dp-cell.dp-in-range.dp-current,\n.date-picker .dp-table .dp-cell.dp-in-range.dp-value {\n  background: #e2f0ff;\n}\n.date-picker .dp-table .dp-cell.dp-month {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.date-picker .dp-table .dp-cell.dp-week-day-name {\n  cursor: default;\n  background: inherit;\n  border: none;\n}\n.date-picker .dp-footer {\n  padding: 3px;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n  flex-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  border-top: 1px solid #aeaeae;\n}\n.date-picker .dp-footer .dp-footer-selected,\n.date-picker .dp-footer .dp-footer-today {\n  padding: 5px 15px;\n  border-width: 1px;\n  cursor: pointer;\n}\n.date-picker .dp-body {\n  overflow: hidden;\n}\n.date-picker .dp-cell {\n  outline: none;\n}\n.date-picker .dp-nav-view,\n.date-picker .dp-nav-cell,\n.date-picker .dp-week-day-name {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n.date-picker .dp-nav-view,\n.date-picker .dp-nav-cell {\n  cursor: pointer;\n}\n.date-picker .dp-nav-table .dp-nav-cell.dp-cell {\n  border: 10px solid transparent;\n  padding: 0;\n  margin-top: 5px;\n  width: 0;\n  height: 0;\n}\n.date-picker .dp-nav-table .dp-nav-cell.dp-cell.dp-prev-nav {\n  border-right-color: #aeaeae;\n}\n.date-picker .dp-nav-table .dp-nav-cell.dp-cell.dp-prev-nav:hover {\n  border-right-color: #9d9d9d;\n}\n.date-picker .dp-nav-table .dp-nav-cell.dp-cell.dp-next-nav {\n  border-left-color: #aeaeae;\n}\n.date-picker .dp-nav-table .dp-nav-cell.dp-cell.dp-next-nav:hover {\n  border-left-color: #9d9d9d;\n}\n.date-picker .dp-nav-view {\n  background: inherit;\n}\n.date-picker .dp-nav-view:hover {\n  background: #f0f0f0;\n}\n.date-picker .dp-nav-table .dp-cell {\n  padding: 8px;\n  font-weight: bold;\n}\n.date-picker .dp-nav-table .dp-nav-cell {\n  -webkit-box-flex: 0;\n  -moz-box-flex: 0;\n  -ms-box-flex: 0;\n  -ms-flex: 0;\n  -webkit-flex: 0;\n  flex: 0;\n  touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n.date-picker .dp-decade-view,\n.date-picker .dp-year-view,\n.date-picker .dp-month-view {\n  touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 265:
/*!***********************!*\
  !*** ./individus.jsx ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsLinkedStateMixin = __webpack_require__(/*! react-addons-linked-state-mixin */ 174);
	
	var _reactAddonsLinkedStateMixin2 = _interopRequireDefault(_reactAddonsLinkedStateMixin);
	
	var _app = __webpack_require__(/*! ./app */ 1);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _storage = __webpack_require__(/*! ./storage */ 161);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _stagiaires = __webpack_require__(/*! ./stagiaires */ 243);
	
	var _stagiaires2 = _interopRequireDefault(_stagiaires);
	
	var _layout = __webpack_require__(/*! ./layout */ 172);
	
	var Individus = {};
	
	(function () {
		Individus.View = _react2["default"].createClass({
			displayName: "View",
	
			getInitialState: function getInitialState() {
				return {
					view: "form"
				};
			},
			onSubmit: function onSubmit(stagiaire) {
				_storage2["default"].create("stagiaires", stagiaire);
				this.setState({
					view: "thankYou"
				});
			},
			render: function render() {
				switch (this.state.view) {
					case "form":
						return _react2["default"].createElement(_Form, { onSubmit: this.onSubmit });
					case "thankYou":
						return _react2["default"].createElement(_ThankYou, null);
				}
			}
		});
	
		var _Form = _react2["default"].createClass({
			displayName: "_Form",
	
			mixins: [_reactAddonsLinkedStateMixin2["default"]],
			propTypes: {
				onSubmit: _react2["default"].PropTypes.func.isRequired
			},
			getInitialState: _stagiaires2["default"].create,
			onSubmit: function onSubmit(event) {
				event.preventDefault();
				this.props.onSubmit(this.state);
			},
			render: function render() {
				return _react2["default"].createElement(
					"form",
					{ onSubmit: this.onSubmit },
					_react2["default"].createElement(
						"h2",
						null,
						"Formulaire d'inscription"
					),
					_react2["default"].createElement(_layout.Form.Text, { name: "nom", label: "Nom", value: this.linkState("nom") }),
					_react2["default"].createElement(_layout.Form.Text, { name: "prenom", label: "Prénom", value: this.linkState("prenom") }),
					_react2["default"].createElement(_layout.Form.Text, { name: "numeroId", label: "Numéro ID", value: this.linkState("numeroId") }),
					_react2["default"].createElement(
						"button",
						{ type: "submit", className: "btn btn-primary" },
						_react2["default"].createElement(_layout.Glyph, { icon: "ok" }),
						" Soumettre"
					)
				);
			}
		});
	
		var _ThankYou = _react2["default"].createClass({
			displayName: "_ThankYou",
	
			render: function render() {
				return _react2["default"].createElement(
					"div",
					{ className: "alert alert-success", role: "alert" },
					"Votre demande a bien été prise en compte."
				);
			}
		});
	})();
	
	exports["default"] = Individus;
	module.exports = exports["default"];

/***/ },

/***/ 266:
/*!********************!*\
  !*** ./salles.jsx ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _jquery = __webpack_require__(/*! jquery */ 2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsLinkedStateMixin = __webpack_require__(/*! react-addons-linked-state-mixin */ 174);
	
	var _reactAddonsLinkedStateMixin2 = _interopRequireDefault(_reactAddonsLinkedStateMixin);
	
	var _reactBootstrapLibTab = __webpack_require__(/*! react-bootstrap/lib/Tab */ 256);
	
	var _reactBootstrapLibTab2 = _interopRequireDefault(_reactBootstrapLibTab);
	
	var _reactBootstrapLibTabs = __webpack_require__(/*! react-bootstrap/lib/Tabs */ 244);
	
	var _reactBootstrapLibTabs2 = _interopRequireDefault(_reactBootstrapLibTabs);
	
	var _layout = __webpack_require__(/*! ./layout */ 172);
	
	var _layout2 = _interopRequireDefault(_layout);
	
	var _evenements = __webpack_require__(/*! ./evenements */ 196);
	
	var _mixins = __webpack_require__(/*! ./mixins */ 258);
	
	var Salles = {};
	
	function create() {
		return {
			nom: "",
			places: 1
		};
	}
	
	function getCalendrier(salle, evenements) {
		return evenements.filter(function (ev) {
			return ev.salleId === salle.id;
		});
	}
	
	Salles.View = _react2["default"].createClass({
		displayName: "View",
	
		propTypes: {
			salles: _react.PropTypes.arrayOf(_react2["default"].PropTypes.object).isRequired,
			evenements: _react.PropTypes.arrayOf(_react2["default"].PropTypes.object).isRequired,
			salle: _react.PropTypes.object,
			view: _react.PropTypes.string
		},
		getDefaultProps: function getDefaultProps() {
			return {
				view: "list"
			};
		},
		render: function render() {
			switch (this.props.view) {
				case "list":
					return _react2["default"].createElement(List, { salles: this.props.salles, onEdit: this.props.onEdit });
				case "edit":
					return _react2["default"].createElement(Item, { salle: this.props.salle, evenements: this.props.evenements, onSave: this.props.onSave });
			}
		}
	});
	
	var List = _react2["default"].createClass({
		displayName: "List",
	
		propTypes: {
			salles: _react.PropTypes.array.isRequired
		},
		onSalleClick: function onSalleClick(salle) {
			this.props.onEdit(salle);
		},
		render: function render() {
			var _this = this;
	
			var rows = this.props.salles.map(function (salle) {
				return _react2["default"].createElement(
					"tr",
					{ key: salle.id, onClick: _this.onSalleClick.bind(_this, salle), className: "clickable" },
					_react2["default"].createElement(
						"td",
						null,
						salle.nom
					),
					_react2["default"].createElement(
						"td",
						null,
						salle.places
					),
					_react2["default"].createElement(
						"td",
						null,
						" "
					)
				);
			});
	
			return _react2["default"].createElement(
				"div",
				null,
				_react2["default"].createElement(
					_layout2["default"].Row,
					null,
					_react2["default"].createElement(
						"button",
						{ onClick: this.onSalleClick.bind(this, create()), type: "button", className: "btn btn-primary" },
						_react2["default"].createElement(_layout.Glyph, { icon: "plus" }),
						" Créer salle"
					)
				),
				_react2["default"].createElement(
					_layout2["default"].Row,
					{ spacing: "Top" },
					_react2["default"].createElement(
						_layout2["default"].Table,
						{ cols: ["Nom", "Places"] },
						rows
					)
				)
			);
		}
	});
	
	var Item = _react2["default"].createClass({
		displayName: "Item",
	
		mixins: [_reactAddonsLinkedStateMixin2["default"], _mixins.LinkedNumberStateMixin],
		propTypes: {
			salle: _react.PropTypes.object.isRequired,
			evenements: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired
		},
		getInitialState: function getInitialState() {
			return _jquery2["default"].extend({}, this.props.salle);
		},
		onSubmit: function onSubmit(event) {
			event.preventDefault();
			this.props.onSave(this.state);
		},
		render: function render() {
			var salleEvenements = getCalendrier(this.props.salle, this.props.evenements).map(function (evenement) {
				return _react2["default"].createElement(_evenements.CalendrierItem, { key: evenement.id, evenement: evenement });
			});
	
			return _react2["default"].createElement(
				"form",
				{ onSubmit: this.onSubmit },
				_react2["default"].createElement(
					_reactBootstrapLibTabs2["default"],
					{ defaultActiveKey: 1 },
					_react2["default"].createElement(
						_reactBootstrapLibTab2["default"],
						{ eventKey: 1, title: "Info" },
						_react2["default"].createElement(
							"div",
							{ className: "spacingTop" },
							_react2["default"].createElement(_layout.Form.Text, { name: "nom", label: "Nom", value: this.linkState("nom") }),
							_react2["default"].createElement(_layout.Form.Text, { name: "places", value: this.linkNumberState("places"), type: "number", min: 1, label: "Places" })
						)
					),
					_react2["default"].createElement(
						_reactBootstrapLibTab2["default"],
						{ eventKey: 2, title: "Calendrier", disabled: this.props.salle.id === undefined },
						_react2["default"].createElement(
							"div",
							{ className: "spacingTop" },
							salleEvenements
						)
					)
				),
				_react2["default"].createElement(_layout.Form.Submit, { create: this.props.salle.id === undefined })
			);
		}
	});
	
	exports["default"] = Salles;
	module.exports = exports["default"];

/***/ },

/***/ 267:
/*!************************!*\
  !*** ./formateurs.jsx ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _jquery = __webpack_require__(/*! jquery */ 2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsLinkedStateMixin = __webpack_require__(/*! react-addons-linked-state-mixin */ 174);
	
	var _reactAddonsLinkedStateMixin2 = _interopRequireDefault(_reactAddonsLinkedStateMixin);
	
	var _reactBootstrapLibTabs = __webpack_require__(/*! react-bootstrap/lib/Tabs */ 244);
	
	var _reactBootstrapLibTabs2 = _interopRequireDefault(_reactBootstrapLibTabs);
	
	var _reactBootstrapLibTab = __webpack_require__(/*! react-bootstrap/lib/Tab */ 256);
	
	var _reactBootstrapLibTab2 = _interopRequireDefault(_reactBootstrapLibTab);
	
	var _reactBootstrapLibPanel = __webpack_require__(/*! react-bootstrap/lib/Panel */ 197);
	
	var _reactBootstrapLibPanel2 = _interopRequireDefault(_reactBootstrapLibPanel);
	
	var _layout = __webpack_require__(/*! ./layout */ 172);
	
	var _layout2 = _interopRequireDefault(_layout);
	
	var _evenements = __webpack_require__(/*! ./evenements */ 196);
	
	var _evenements2 = _interopRequireDefault(_evenements);
	
	var _mixins = __webpack_require__(/*! ./mixins */ 258);
	
	var _storage = __webpack_require__(/*! ./storage */ 161);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _app = __webpack_require__(/*! ./app */ 1);
	
	var _app2 = _interopRequireDefault(_app);
	
	var Formateurs = {};
	
	function create() {
		return {
			nom: "",
			prenom: ""
		};
	}
	
	function getCalendrier(formateur, evenements) {
		return evenements.filter(function (ev) {
			return ev.formateurId === formateur.id;
		});
	}
	
	Formateurs.View = _react2["default"].createClass({
		displayName: "View",
	
		getDefaultProps: function getDefaultProps() {
			return {
				view: "list"
			};
		},
		render: function render() {
			switch (this.props.view) {
				case "list":
					return _react2["default"].createElement(List, { formateurs: this.props.formateurs, onEdit: this.props.onEdit });
				case "edit":
					return _react2["default"].createElement(Item, { formateur: this.props.formateur, onSave: this.props.onSave, evenements: this.props.evenements });
			}
		}
	});
	
	var List = _react2["default"].createClass({
		displayName: "List",
	
		propTypes: {
			formateurs: _react2["default"].PropTypes.array.isRequired
		},
		onClick: function onClick(formateur) {
			this.props.onEdit(formateur);
		},
		render: function render() {
			var _this = this;
	
			var rows = this.props.formateurs.map(function (formateur) {
				return _react2["default"].createElement(
					"tr",
					{ key: formateur.id, onClick: _this.onClick.bind(_this, formateur), className: "clickable" },
					_react2["default"].createElement(
						"td",
						null,
						formateur.prenom,
						" ",
						formateur.nom
					),
					_react2["default"].createElement(
						"td",
						null,
						" "
					)
				);
			});
	
			return _react2["default"].createElement(
				"div",
				null,
				_react2["default"].createElement(
					_layout2["default"].Row,
					null,
					_react2["default"].createElement(
						"button",
						{ onClick: this.onClick.bind(this, create()), type: "button", className: "btn btn-primary" },
						_react2["default"].createElement(_layout.Glyph, { icon: "plus" }),
						" Créer Formateur"
					)
				),
				_react2["default"].createElement(
					_layout2["default"].Row,
					{ spacing: "Top" },
					_react2["default"].createElement(
						_layout2["default"].Table,
						{ cols: ["Nom"] },
						rows
					)
				)
			);
		}
	});
	
	var Item = _react2["default"].createClass({
		displayName: "Item",
	
		mixins: [_reactAddonsLinkedStateMixin2["default"], _mixins.LinkedNumberStateMixin],
		propTypes: {
			formateur: _react.PropTypes.object.isRequired,
			evenements: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired
		},
		getInitialState: function getInitialState() {
			return _jquery2["default"].extend({}, this.props.formateur);
		},
		onSubmit: function onSubmit(event) {
			event.preventDefault();
			this.props.onSave(this.state);
		},
		render: function render() {
			var evenementPanels = this.props.evenements.map(function (evenement) {
				return _react2["default"].createElement(_evenements2["default"].CalendrierItem, { key: evenement.id, evenement: evenement });
			});
	
			return _react2["default"].createElement(
				_reactBootstrapLibTabs2["default"],
				{ defaultActiveKey: 1 },
				_react2["default"].createElement(
					_reactBootstrapLibTab2["default"],
					{ eventKey: 1, title: "Info" },
					_react2["default"].createElement(
						"form",
						{ onSubmit: this.onSubmit, className: "spacingTop" },
						_react2["default"].createElement(_layout.Form.Text, { name: "nom", label: "Nom", value: this.linkState("nom") }),
						_react2["default"].createElement(_layout.Form.Text, { name: "prenom", label: "Prénom", value: this.linkState("prenom") }),
						_react2["default"].createElement(_layout.Form.Submit, { create: this.props.formateur.id === undefined })
					)
				),
				_react2["default"].createElement(
					_reactBootstrapLibTab2["default"],
					{ eventKey: 2, title: "Calendrier", disabled: this.props.formateur.id === undefined },
					_react2["default"].createElement(
						"div",
						{ className: "spacingTop" },
						evenementPanels
					)
				)
			);
		}
	});
	
	exports["default"] = Formateurs;
	module.exports = exports["default"];

/***/ }

});
//# sourceMappingURL=app.js.map