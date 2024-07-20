import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LinkListItem } from '../../../interfaces/link-list-item';
import { LinkComponent } from '../../molecules/link/link.component';

@Component({
  selector: 'app-link-list',
  standalone: true,
  imports: [NgFor, LinkComponent],
  templateUrl: './link-list.component.html',
  styleUrl: './link-list.component.scss'
})
export class LinkListComponent {
  @Input() list: LinkListItem[] = [];
}
