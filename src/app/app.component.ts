import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotoComponent } from './components/atoms/photo/photo.component';
import { TitleComponent } from './components/atoms/title/title.component';
import { SubTitleComponent } from './components/atoms/sub-title/sub-title.component';
import { TextComponent } from './components/atoms/text/text.component';
import { LinkListComponent } from './components/organisns/link-list/link-list.component';
import { Profile } from './interface/profile';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PhotoComponent,
    TitleComponent,
    SubTitleComponent,
    TextComponent,
    LinkListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  img = {
    src: "/assets/images/avatar-jessica.jpeg",
    alt: "Profile photo",
  };

  profile: Profile = {
    name: "jessica randall",
    address: "London, United Kingdom",
    description: "Front-end developer and avid reader.",
    photo: "/assets/images/avatar-jessica.jpeg",
    socialMediaList: [{
      href: "",
      title: "GitHub"
    }, {
      href: "",
      title: "Frontend Mentor"
    }, {
      href: "",
      title: "LinkedIn"
    }, {
      href: "",
      title: "Twitter"
    }, {
      href: "",
      title: "Instagram"
    }],
  }
}
