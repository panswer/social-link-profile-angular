import { Component, Input } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [TextComponent],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input() href?: string = "";
}
