System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var InternshipEntryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InternshipEntryComponent = (function () {
                function InternshipEntryComponent() {
                    this.visit = {};
                }
                InternshipEntryComponent.prototype.saveVisit = function (form) {
                    var visit = form.value;
                    if (form.valid) {
                        console.log("yeah, it is");
                    }
                    console.log(form);
                    console.log(visit);
                };
                InternshipEntryComponent = __decorate([
                    core_1.Component({
                        selector: 'internship-entry',
                        template: "\n        <form novalidate #myForm=\"ngForm\" (ngSubmit)=\"saveVisit(myForm)\">\n\n        <div>\n            <div *ngIf=\"initials.dirty && !initials.valid && initials.errors.required\">\n                Initials are required\n            </div>\n\n            <div *ngIf=\"initials.dirty && !initials.valid && initials.errors.minlength\">\n                Your initials needs to be at least 4 characters.\n            </div>\n\n            <label>Initials</label>\n\n            <input type=\"text\" required ngControl=\"initials\" #initials=\"ngForm\" minlength=\"4\"/>\n        </div>\n\n        <div>\n            <label>Date</label>\n            <input type=\"text\" required ngControl=\"date\" #date=\"ngForm\"/>\n        </div>\n\n        <input type=\"submit\" value=\"Save\" class=\"btn btn-primary\" />\n    </form>\n\n    ",
                        styles: ["\n        .ng-dirty.ng-invalid {\n            border-color: red;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], InternshipEntryComponent);
                return InternshipEntryComponent;
            })();
            exports_1("InternshipEntryComponent", InternshipEntryComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVybnNoaXBFbnRyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiSW50ZXJuc2hpcEVudHJ5Q29tcG9uZW50IiwiSW50ZXJuc2hpcEVudHJ5Q29tcG9uZW50LmNvbnN0cnVjdG9yIiwiSW50ZXJuc2hpcEVudHJ5Q29tcG9uZW50LnNhdmVWaXNpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBQUFBO29CQW9DV0MsVUFBS0EsR0FBR0EsRUFBRUEsQ0FBQ0E7Z0JBWXRCQSxDQUFDQTtnQkFWR0QsNENBQVNBLEdBQVRBLFVBQVVBLElBQUlBO29CQUVWRSxJQUFJQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTtvQkFDdkJBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUFBLENBQUNBO3dCQUNaQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTtvQkFDL0JBLENBQUNBO29CQUVEQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDbEJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUN2QkEsQ0FBQ0E7Z0JBL0NMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxrQkFBa0JBO3dCQUM1QkEsUUFBUUEsRUFBRUEsbzBCQXlCVEE7d0JBQ0RBLE1BQU1BLEVBQUVBLENBQUNBLG1GQUlSQSxDQUFDQTtxQkFDTEEsQ0FBQ0E7OzZDQWVEQTtnQkFBREEsK0JBQUNBO1lBQURBLENBaERBLEFBZ0RDQSxJQUFBO1lBaERELCtEQWdEQyxDQUFBIiwiZmlsZSI6ImludGVybnNoaXBFbnRyeS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaW50ZXJuc2hpcC1lbnRyeScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGZvcm0gbm92YWxpZGF0ZSAjbXlGb3JtPVwibmdGb3JtXCIgKG5nU3VibWl0KT1cInNhdmVWaXNpdChteUZvcm0pXCI+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpbml0aWFscy5kaXJ0eSAmJiAhaW5pdGlhbHMudmFsaWQgJiYgaW5pdGlhbHMuZXJyb3JzLnJlcXVpcmVkXCI+XG4gICAgICAgICAgICAgICAgSW5pdGlhbHMgYXJlIHJlcXVpcmVkXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImluaXRpYWxzLmRpcnR5ICYmICFpbml0aWFscy52YWxpZCAmJiBpbml0aWFscy5lcnJvcnMubWlubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgWW91ciBpbml0aWFscyBuZWVkcyB0byBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsPkluaXRpYWxzPC9sYWJlbD5cblxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgbmdDb250cm9sPVwiaW5pdGlhbHNcIiAjaW5pdGlhbHM9XCJuZ0Zvcm1cIiBtaW5sZW5ndGg9XCI0XCIvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsPkRhdGU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgbmdDb250cm9sPVwiZGF0ZVwiICNkYXRlPVwibmdGb3JtXCIvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2F2ZVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgLz5cbiAgICA8L2Zvcm0+XG5cbiAgICBgLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgLm5nLWRpcnR5Lm5nLWludmFsaWQge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICBgXVxufSlcblxuZXhwb3J0IGNsYXNzIEludGVybnNoaXBFbnRyeUNvbXBvbmVudCB7XG4gICAgcHVibGljIHZpc2l0ID0ge307XG5cbiAgICBzYXZlVmlzaXQoZm9ybSk6dm9pZCB7XG5cbiAgICAgICAgdmFyIHZpc2l0ID0gZm9ybS52YWx1ZTtcbiAgICAgICAgaWYgKGZvcm0udmFsaWQpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ5ZWFoLCBpdCBpc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm0pO1xuICAgICAgICBjb25zb2xlLmxvZyh2aXNpdCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
