import { Component } from '@angular/core';

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

  onCellClicked(e:any){
console.log(e);
  }
}
