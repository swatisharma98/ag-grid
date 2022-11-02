import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';


@Component({
    selector: 'total-value-component',
    template: `
        <i class="fa fa-edit" style="font-size:20px;color:blue;" (click)="buttonClicked($event)"></i>
        
    `,
  })
export class EditValueRenderer implements ICellRendererAngularComp {
    public cellValue!: string;


    agInit(params: ICellRendererParams): void {
        console.log(params);
        this.cellValue = this.getValueToDisplay(params);
      }
    
      // gets called whenever the user gets the cell to refresh
      refresh(params: ICellRendererParams) {
        // set value into cell again
        this.cellValue = this.getValueToDisplay(params);
        return true;
      }
    

      getValueToDisplay(params: ICellRendererParams) {
        return params.valueFormatted ? params.valueFormatted : params.value;
      }
    buttonClicked(params:any) {
        alert(`medals won!`);
       
      }
    
  }