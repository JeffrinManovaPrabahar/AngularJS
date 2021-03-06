import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { MessageTagComponent } from './message-tag/message-tag.component';
import { JournalServiceService } from './journal-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    MessageInputComponent,
    MessageTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [JournalServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
