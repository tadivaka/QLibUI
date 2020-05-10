import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QLibhomeComponent } from './qlibhome/qlibhome.component';
import { NewQueryComponent } from './newquery/newquery.component';
import { NewSectionComponent } from './newsection/newsection.component';
import { SectionComponent } from './section/section.component';
import { NgModule } from '@angular/core';


const appRoutes: Routes = [
    { path: '', redirectTo: 'emp', pathMatch: 'full' },
    { path: 'qlibhome', component: QLibhomeComponent },
    { path: 'newquery', component: NewQueryComponent },
    { path: 'sections', component: SectionComponent },
    { path: 'newquery/:id', component: NewQueryComponent },
    { path: 'newsection/:id', component: NewSectionComponent },
    { path: 'newsection', component: NewSectionComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { enableTracing: true })
        //enable Tracing is for debugging purposes only
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }