import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

declare let $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ag-grid';



  columnDefs = [
		{headerName: 'Make', field: 'make',editable: true,filter:true ,sortable:true,checkboxSelection:true},
		{headerName: 'Model', field: 'model',filter:true ,sortable:true},
		{headerName: 'Price', field: 'price',filter:true,sortable:true},
    {headerName: 'Created At', field: 'createdAt',filter:"agDateColumnFilter",sortable:true}
	];

	rowData = [
		{ make: 'Toyota', model: 'Celica', price: 35000 ,createdAt:'10/04/2022'},
		{ make: 'Ford', model: 'Mondeo', price: 32000 ,createdAt:'10/04/2022'},
		{ make: 'Porsche', model: 'Boxster', price: 72000 ,createdAt:'10/04/2022'}
	];

   //on cell clicked get data
  onCellClicked(event:any){
  console.log('event',event);
  }
  

  //  showCol(){
  //   this.gridOptions?.columnApi.setColumnVisible('make',true);
  //   this.gridOptions?.api.sizeColumnsToFit();
  //  }

  //  hideCol(){
  //   this.gridOptions?.columnApi.setColumnVisible('make',false);
  //   this.gridOptions?.api.sizeColumnsToFit();
  //  }

 
}
