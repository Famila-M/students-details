import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'student-details-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
    @Input() isExpanded: boolean = false;
    @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private authService: AuthService) {}

    handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

    logout() {
      this.authService.logout();
  }
}
