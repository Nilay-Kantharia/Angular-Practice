import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirectiveComponent } from './components/directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { GetApiComponent } from './components/apiIntegration/get-api/get-api.component';
import { PostApiComponent } from './components/apiIntegration/post-api/post-api.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { PubSubComponent } from './components/pub-sub/pub-sub.component';

export const routes: Routes = [
    {
        path:'add-emp',
        component:AddEmployeeComponent
    },
    {
        path:'data-binding',
        component:DataBindingComponent
    },
    {
        path:'emp-list',
        component:EmployeeListComponent
    },
    {
        path:'structural-dir',
        component:StructuralDirectiveComponent
    },
    {
        path:'attribute-dir',
        component:AttributeDirectiveComponent
    },
    {
        path:'template-form',
        component:TemplateComponent
    },
    {
        path:'reactive-form',
        component:ReactiveComponent
    },
    {
        path:'get-api',
        component:GetApiComponent
    },
    {
        path:'post-api',
        component:PostApiComponent
    },
    {
        path:'pub-sub',
        component:PubSubComponent
    }
];
