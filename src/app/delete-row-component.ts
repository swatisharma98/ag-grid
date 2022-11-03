import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';


@Component({
    selector: 'total-value-component',
    template: `
        
        <i class="fa fa-trash-o" style="font-size:20px;color:red;" (click)="onClick($event)"></i>
        
    `,
  })
export class TotalValueRenderer implements ICellRendererAngularComp {

  params:any;
  label: any;

  agInit(params:any): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event:any) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      this.params.onClick(this.params);

    }
  }
    
  }