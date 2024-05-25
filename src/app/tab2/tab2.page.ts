import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  ouvidasShown: boolean = false;
  curtidasShown: boolean = false;
  playlistsShown: boolean = false;

  constructor() {}

  toggleGroup(group: string) {
    if (group === 'ouvidas') {
      this.ouvidasShown = !this.ouvidasShown;
    } else if (group === 'curtidas') {
      this.curtidasShown = !this.curtidasShown;
    } else if (group === 'playlists') {
      this.playlistsShown = !this.playlistsShown;
    }
  }

  isGroupShown(group: string): boolean {
    if (group === 'ouvidas') {
      return this.ouvidasShown;
    } else if (group === 'curtidas') {
      return this.curtidasShown;
    } else if (group === 'playlists') {
      return this.playlistsShown;
    }
    return false;
  }
}
