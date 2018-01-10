sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/wt/controller/CustCreate"
], function (UIComponent, JSONModel, CustCreate) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.wt.Component", {

		metadata : {
			manifest: "json"
		},

		init : function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// set data model
			var oData = {
				recipient : {
					name : "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);

			// set dialog
			this._CustCreate = new CustCreate(this.getRootControl());
		},

		// openHelloDialog : function () {
		// 	this._helloDialog.open();
		// },
		
		openCustCreate : function () {
			this._CustCreate.open();
		}
	});

});