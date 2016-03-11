System.register(['angular2/core', "./internshipEntry.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, internshipEntry_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (internshipEntry_component_1_1) {
                internshipEntry_component_1 = internshipEntry_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    This is the app component\n    <internship-entry></internship-entry>\n    ",
                        directives: [internshipEntry_component_1.InternshipEntryComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFBQUE7Z0JBVUFDLENBQUNBO2dCQVZERDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTt3QkFDbEJBLFFBQVFBLEVBQUVBLGtGQUdUQTt3QkFDREEsVUFBVUEsRUFBRUEsQ0FBQ0Esb0RBQXdCQSxDQUFDQTtxQkFDekNBLENBQUNBOztpQ0FHREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQVZBLEFBVUNBLElBQUE7WUFWRCx1Q0FVQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1RvZG9MaXN0Q29tcG9uZW50fSBmcm9tIFwiLi90b2RvbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7SW50ZXJuc2hpcEVudHJ5Q29tcG9uZW50fSBmcm9tIFwiLi9pbnRlcm5zaGlwRW50cnkuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFRoaXMgaXMgdGhlIGFwcCBjb21wb25lbnRcbiAgICA8aW50ZXJuc2hpcC1lbnRyeT48L2ludGVybnNoaXAtZW50cnk+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbSW50ZXJuc2hpcEVudHJ5Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
