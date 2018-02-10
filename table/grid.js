// specify the columns
var columnDefs = [
    {headerName: "Product Name", field: "productName"},
    {headerName: "Feed Type", field: "feedType"},
    {headerName: "Shape and Size", field: "shapeSize"},
    {headerName: "Fish Weight", field: "fishWeight"},
    {headerName: "Compostion", children: [
        {headerName: "Drymat Min", valueGetter: "data.composition.drymatmin" },
        {headerName: "Protein Min", valueGetter: "data.composition.proteinmin"},
        {headerName: "Fat Min", valueGetter: "data.composition.fatmin"},
        {headerName: "Fiber Max", valueGetter: "data.composition.fibermax"},
        {headerName: "Ash Max", valueGetter: "data.composition.ashmax"}
    ]},
    {headerName: "Ingredient", field: "ingrredient"},
    {headerName: "Packaging kg", field: "packagingKg"},
    {headerName: "priceKgUSD", field: "priceKgUSD"}
];

// specify the data
var rowData = [
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxter", price: 72000}
];

// let the grid know which columns and what data to use
var gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    enableSorting: true,
    enableFilter: true,
    onGridReady: function () {
        gridOptions.api.sizeColumnsToFit();
    }
};

// used in our jasmine test
function selectAllRows() {
    gridOptions.api.selectAll();
}

// wait for the document to be loaded, otherwise ag-Grid will not find the div in the document.
document.addEventListener("DOMContentLoaded", function () {
    // lookup the container we want the Grid to use
    var eGridDiv = document.querySelector('#myGrid');

    // create the grid passing in the div to use together with the columns & data we want to use
    new agGrid.Grid(eGridDiv, gridOptions);
});