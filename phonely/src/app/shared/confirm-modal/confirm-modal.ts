import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  templateUrl: './confirm-modal.html',
  imports: [
    NgClass,
  ],
  styleUrl: './confirm-modal.scss'
})
export class ConfirmModalComponent {
  @Input() show = false;
  @Input() title = 'Confirm';
  @Input() message = 'Are you sure?'; // <-- Custom message
  @Input() confirmText = 'Confirm';
  @Input() cancelText = 'Cancel';
  @Input() confirmIcon = 'fa-solid fa-trash';
  @Input() confirmBtnClass = 'btn-danger';
  @Input() cancelBtnClass = 'btn-outline-secondary';
  @Input() loading = false;

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
}
