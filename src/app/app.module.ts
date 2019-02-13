import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
// import { FormsModule } from '@angular/forms';
import { MembersModule } from './members/members.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    // FormsModule,
    MembersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
