import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { User, UserRole } from './user';
import { UserService } from './user.service';

@Directive({
  selector: '[withUserRole]',
})
export class WithUserRoleDirective implements OnInit {
  @Input('withUserRole')
  whichRoleToShow: UserRole = 'admin'

  @Input('withUserRoleElse')
  else: TemplateRef<void> | null = null;

  constructor(
    private _template: TemplateRef<{ $implicit: User }>,
    private _container: ViewContainerRef,
    private _userService: UserService
  ) {

  }

  ngOnInit() {
    this._userService.user$.subscribe((user: User) => {
      if (user.role === this.whichRoleToShow) {
        this._container.createEmbeddedView(this._template, {$implicit: user});
      } else {
        if (this.else) {
          this._container.createEmbeddedView(this.else);
        }
      }
    })
  }
}
