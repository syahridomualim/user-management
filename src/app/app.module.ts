import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './service/user.service';
import { HomeComponent } from './ui/home/home.component';
import { SplitArrayPipe } from './pipe/split-array.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './ui/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SplitArrayPipe,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }