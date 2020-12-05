import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-grand',
  template: `
    <h1> Grand {{log()}}</h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandComponent {
  log() {
    console.log('cd: GrandComponent');
  }
}
