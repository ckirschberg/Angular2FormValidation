import {Component} from 'angular2/core';
import {TodoListComponent} from "./todolist.component";
import {InternshipEntryComponent} from "./internshipEntry.component";

@Component({
    selector: 'my-app',
    template: `
    This is the app component
    <internship-entry></internship-entry>
    `,
    directives: [InternshipEntryComponent]
})
export class AppComponent {

}