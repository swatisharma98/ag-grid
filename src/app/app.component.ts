import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridOptions } from 'ag-grid-community';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ag-grid';
  api: any;


  // @ViewChild('agGrid') agGrid= AgGridAngular;


  gridOption = <AgGridAngular>{

  }

 
 

  
  columnDefs = [
		{headerName: 'Make', field: 'make',hide: false, resizable: true},
		{headerName: 'Model', field: 'model',filter:true ,sortable:true, resizable: true},
		{headerName: 'Price', field: 'price',filter:true,sortable:true, resizable: true},
    {headerName: 'Created At', field: 'createdAt',filter:"agDateColumnFilter",sortable:true, resizable: true},
    {headerName: 'Notes', field: 'notes', cellRenderer: this.BtnCellRenderer,
         cellRendererParams: this.nowClicked, resizable: true}

	];

  onGridReady(params:any)
{
  this.api = params.api;
}


  nowClicked(){
console.log(' on clicked');
  }

  BtnCellRenderer(){
    return '<span class="glyphicon glyphicon-plus"></span>';
  }
  


	rowData = [
		{ make: 'Toyota', model: 'Celica', price: 35000 ,createdAt:'10/04/2022'},
		{ make: 'Ford', model: 'Mondeo', price: 32000 ,createdAt:'10/04/2022'},
		{ make: 'Porsche', model: 'Boxster', price: 72000 ,createdAt:'10/04/2022'}
	];
  data = [
		{ make: 'Toyota', model: 'Celica', price: 35000 ,createdAt:'10/04/2022'}
	];

   //on cell clicked get data
  onCellClicked(event:any){
    console.log(event);
    let id:any;
    id = event.data.make;
    
    const newData = this.rowData.filter(d => d.make != id);
    console.log(newData);
    this.rowData = newData;
  }
  

   showCol(){
    this.gridOption.columnDefs=this.columnDefs
    this.gridOption.columnApi?.setColumnsVisible(['make'],true);
    // this.gridOption.api?.sizeColumnsToFit();
    
   }

   hideCol(){

    console.log('in hide');
    this.gridOption.columnDefs=this.columnDefs
    this.gridOption.columnApi?.setColumnsVisible(['make'],false);
  
    // this.gridOption.api?.sizeColumnsToFit();
    console.log(this.gridOption);
   }

 
}
