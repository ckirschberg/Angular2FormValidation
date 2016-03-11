import {Component} from 'angular2/core';

@Component({
    selector: 'internship-entry',
    template: `
        <form novalidate #myForm="ngForm" (ngSubmit)="saveVisit(myForm)">

        <div>
            <div *ngIf="initials.dirty && !initials.valid && initials.errors.required">
                Initials are required
            </div>

            <div *ngIf="initials.dirty && !initials.valid && initials.errors.minlength">
                Your initials needs to be at least 4 characters.
            </div>

            <label>Initials</label>

            <input type="text" required ngControl="initials" #initials="ngForm" minlength="4"/>
        </div>

        <div>
            <label>Date</label>
            <input type="text" required ngControl="date" #date="ngForm"/>
        </div>

        <input type="submit" value="Save" class="btn btn-primary" />
    </form>

    `,
    styles: [`
        .ng-dirty.ng-invalid {
            border-color: red;
        }
    `]
})

export class InternshipEntryComponent {
    public visit = {};

    saveVisit(form):void {

        var visit = form.value;
        if (form.valid){
            console.log("yeah, it is");
        }

        console.log(form);
        console.log(visit);
    }
}