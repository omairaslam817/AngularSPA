import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';
import { ChildParentTalkUsingServiceComponent } from './child-parent/child-parent-talk-using-service/child-parent-talk-using-service.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ListEmployeesComponent,
    NgTemplateOutletComponent,
    NgContainerComponent,
    ParentComponent,
    ChildComponent,
    ChildParentTalkUsingServiceComponent,
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
