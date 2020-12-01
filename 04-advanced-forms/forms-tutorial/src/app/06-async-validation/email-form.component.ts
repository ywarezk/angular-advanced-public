import { Component, OnInit } from '@angular/core';
// import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  template: `
    <form>
      <input #emailNgModel="ngModel" type="email" checkEmail ngModel name="myEmail" />
      {{ emailNgModel.errors | json }}
      {{ emailNgModel.status }}
    </form>
  `,
})
export class EmailFormComponent {
}
