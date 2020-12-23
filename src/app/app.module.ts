import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarListComponent } from './car-list/car-list.component';
import { EmptyComponent } from './empty/empty.component';
import { FormsModule } from '@angular/forms';
import { TokenInterceptorService } from './token-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarListComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi: true},
    // {provide: COMPILER_OPTIONS, useValue: {}, multi: true},
    // {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
