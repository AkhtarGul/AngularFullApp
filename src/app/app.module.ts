import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ClassStyleComponent } from './class-style/class-style.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindngComponent } from './two-way-bindng/two-way-bindng.component';
import { NgswtichComponent } from './ngswtich/ngswtich.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WatchComponent } from './product/watch/watch.component';
import { ShowComponent } from './product/show/show.component';
import { CameraComponent } from './product/camera/camera.component';
import { CycleComponent } from './product/cycle/cycle.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { Comp1Component } from './home/comp1/comp1.component';
import { Comp2Component } from './home/comp2/comp2.component';
import { Comp3Component } from './home/comp3/comp3.component';
import { Comp4Component } from './home/comp4/comp4.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'product',
    component: ProductComponent,
    children: [
      { path: 'watch', component: WatchComponent },
      { path: 'show', component: ShowComponent },
      { path: 'camera', component: CameraComponent },
      { path: 'cycle', component: CycleComponent },
    ],
  },
  { path: 'contact', component: ContactComponent },
  { path: 'buy-product', component: ParentComponent },
  { path: '**', component: PagenotfoundComponent },
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    PropertybindingComponent,
    ClassStyleComponent,
    EventBindingComponent,
    TwoWayBindngComponent,
    NgswtichComponent,
    ProductComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent,
    WatchComponent,
    ShowComponent,
    CameraComponent,
    CycleComponent,
    NgforComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
