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

  gridApi: any = null;
  gridColumnApi: any = null;


  

  // @ViewChild('agGrid') agGrid= AgGridAngular;


 
 

  
  columnDefs = [
		{headerName: 'Make', field: 'make'},
		{headerName: 'Model', field: 'model'},
		{headerName: 'Price', field: 'price'},
    {headerName: 'Created At', field: 'createdAt'},
    {headerName: 'Delete', field: 'delete', cellRenderer: this.BtnCellRenderer,
      cellRendererParams: { onClick: this.onDeleteButtonClick.bind(this),label: 'Delete'}}
	];

  onDeleteButtonClick(params:any)
 {
  console.log('on delete');
 }

 

  onGridReady(params:any)
  {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        // if (bottomPinnedRowData) {
        //     gridApi.setPinnedBottomRowData(bottomPinnedRowData);
        // }
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
  

  //  showCol(){
  //   this.gridOption.columnDefs=this.columnDefs
  //   this.gridOption.columnApi?.setColumnsVisible(['make'],true);
  //   // this.gridOption.api?.sizeColumnsToFit();
    
  //  }

  //  hideCol(){

  //   console.log('in hide');
  //   this.gridOption.columnDefs=this.columnDefs
  //   this.gridOption.columnApi?.setColumnsVisible(['make'],false);
  
  //   // this.gridOption.api?.sizeColumnsToFit();
  //   console.log(this.gridOption);
  //  }


    gridOpt: GridOptions = {
        domLayout: 'autoHeight',
        accentedSort: true,
        animateRows: true,
        multiSortKey: 'ctrl',
        pagination: true,
        paginationPageSize: 10,
        scrollbarWidth: 1,
        defaultColDef: {
          sortable: true,
          filter: false,
          editable: false
        },
        rowSelection: 'multiple'
    };

    defaultColDef = {
      sortable: true,
      filter: true,
      resizable:true
    };

 
}
