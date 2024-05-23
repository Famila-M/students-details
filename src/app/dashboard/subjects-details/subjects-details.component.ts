import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-subjects-details',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './subjects-details.component.html',
  styleUrl: './subjects-details.component.css'
})
export class SubjectsDetailsComponent {
  @Input() records:any;
  @Input() size: number = 26;
  @Output() sizeChange = new EventEmitter();

  OnIncrease(): void {
    this.resize(+1);
  }

  OnReduce(): void {
    this.resize(-1);
  }

  resize(delta: number): void {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size)
  }

}
