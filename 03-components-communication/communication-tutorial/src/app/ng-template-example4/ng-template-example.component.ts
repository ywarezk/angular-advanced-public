import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-template-example',
  template: `
    <h1>
      Ng Template example
    </h1>

    <ng-template #stam let-greeting let-myUser="user">
      <h1> some template stuff {{greeting}} {{myUser}}</h1>
    </ng-template>

    <div *ngTemplateOutlet="stam; context: {$implicit: 'hello', user: 'Pigletshvily'}">
    </div>
  `,
})
export class NgTemplateExampleComponent {
}
