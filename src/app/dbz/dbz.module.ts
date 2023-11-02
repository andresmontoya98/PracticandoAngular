import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AppAddCharacterComponent } from './components/app-add-character/app-add-character.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainPageComponent, ListComponent, AppAddCharacterComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
