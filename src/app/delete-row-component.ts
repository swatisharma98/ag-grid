import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';


@Component({
    selector: 'total-value-component',
    template: `
        <span class="glyphicon glyphicon-plus" (click)="buttonClicked()"></span>
    `,
  })
export class TotalValueRenderer implements ICellRendererAngularComp {
    public cellValue!: string;


    agInit(params: ICellRendererParams): void {
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
    buttonClicked() {
        alert(`medals won!`);
      }
    
  }