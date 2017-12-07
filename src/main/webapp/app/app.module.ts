import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { BpoDirectoryManagerSharedModule, UserRouteAccessService } from './shared';
import { BpoDirectoryManagerAppRoutingModule} from './app-routing.module';
import { BpoDirectoryManagerHomeModule } from './home/home.module';
import { BpoDirectoryManagerAdminModule } from './admin/admin.module';
import { BpoDirectoryManagerAccountModule } from './account/account.module';
import { BpoDirectoryManagerEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        BpoDirectoryManagerAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        BpoDirectoryManagerSharedModule,
        BpoDirectoryManagerHomeModule,
        BpoDirectoryManagerAdminModule,
        BpoDirectoryManagerAccountModule,
        BpoDirectoryManagerEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class BpoDirectoryManagerAppModule {}
