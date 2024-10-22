import { Component, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() searchChanged = new EventEmitter<string>()

  onSearchChange(event: any): void {
    const searchQuery = (event.target as HTMLInputElement).value
    this.searchChanged.emit(searchQuery)
  }
}
