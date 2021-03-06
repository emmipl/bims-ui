import { Component, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { SessionStorageService } from 'ngx-webstorage';
import { User } from 'app/main/user';
import { AddWorkDialogComponent } from './add-work/add-work.component';
import { MatDialog } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { AppProjectModuleBWOService } from '../project-module-bwo-app/project-module-bwo-app.service';
@Component({
    selector     : 'project-module',
    templateUrl  : './project-module.component.html',
    styleUrls    : ['./project-module.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ProjectModuleComponent
{
    User:Array<User>;
    User_ID: number=0;
    Category : number=0;
    dialogRef;

    /**
     * Constructor
     */
    constructor(private sessionSt: SessionStorageService, private dialog : MatDialog, 
        private _fuseConfigService : FuseConfigService, private projAppServie:AppProjectModuleBWOService)
    {
        if(this.sessionSt.retrieve('user')!=null){
            this.User=this.sessionSt.retrieve('user')
            this.User_ID=this.User['User_ID'];
            this.Category=this.User['User_Category'];
    }
    this._fuseConfigService.config = {
        layout: {
            navbar   : {
                hidden: false
            },
            toolbar  : {
                hidden: false
            },
            footer   : {
                hidden: true
            },
            sidepanel: {
                hidden: false
            }
        }
    };
}
addWork()
{
    this.dialogRef = this.dialog.open(AddWorkDialogComponent, {
        panelClass:'add-work-dialog',
        data      : {
         
          
        }
    });
  
    this.dialogRef.afterClosed()
    .subscribe((response: FormGroup) => {
        if ( !response )
        {
            return;
        }
    });
}
}
