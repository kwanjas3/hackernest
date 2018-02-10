// specify the columns
var columnDefs = [
    {headerName: "Manufactuere", field: "company", checkBoxSelection: true},
    {headerName: "Fish Species", field: "fishSpecies"},
    {headerName: "Product Name", field: "productName"},
    {headerName: "Feed Type", field: "feedType"},
    {headerName: "Shape and Size", field: "shapeSize"},
    {headerName: "Fish Weight", field: "fishWeight"},
    {headerName: "Compostion", children: [
        {headerName: "Drymat Min", field: "drymatmin" },
        {headerName: "Protein Min", field: "proteinmin"},
        {headerName: "Fat Min", field: "fatmin"},
        {headerName: "Fiber Max", field: "fibermax"},
        {headerName: "Ash Max", field: "ashmax"}
    ]},
    {headerName: "Ingredient", field: "ingredient"},
    {headerName: "Packaging kg", field: "packagingKg"},
    {headerName: "priceKgUSD", field: "priceKgUSD"}
];

// specify the data
var rowData = [
    { fishSpecies: "S1", productName: "Specialty Fish Feeds (ESQ)", 
        feedType: "Fry mash",
        shapeSize: "Mash",
        fishWeight: "0.1 - 2",
        drymatmin: "87", 
        proteinmin: "30",
        fatmin: "5", 
        fibermax: "8", 
        ashmax: "",
        ingredient: "soya bean meal, wheat flour, fish oil",
        packagingKg: "20",
        priceKgUSD: "0.53", 
        company: "Aquaprime (Aquaprime Philippines International, Inc.)"},
    { fishSpecies: "S2", productName: "Specialty Fish Feeds (ESQ)", feedType: "Starter",
        shapeSize: "Crumble", fishWeight: "2 - 20",
        drymatmin: "87", proteinmin: "29", fatmin: "5", fibermax: "8", ashmax: "",
        ingredient: "soya bean meal, wheat flour, fish oil",
        packagingKg: "20", priceKgUSD: "0.52", company: "Aquaprime (Aquaprime Philippines International, Inc.)"},
    { fishSpecies: "S3", productName: "Specialty Fish Feeds (ESQ)", feedType: "Starter",
        shapeSize: "Pellet", fishWeight: "2 - 40",
        drymatmin: "87", proteinmin: "29", fatmin: "5", fibermax: "8", ashmax: "",
        ingredient: "soya bean meal, wheat flour, fish oil",
        packagingKg: "20", priceKgUSD: "0.51", company: "Aquaprime (Aquaprime Philippines International, Inc.)"},
    { fishSpecies: "S4", productName: "Specialty Fish Feeds (ESQ)", feedType: "Starter",
        shapeSize: "Pellet", fishWeight: "40 - 100",
        drymatmin: "87", proteinmin: "27", fatmin: "5", fibermax: "8", ashmax: "",
        ingredient: "soya bean meal, wheat flour, fish oil",
        packagingKg: "30", priceKgUSD: "0.47", company: "Aquaprime (Aquaprime Philippines International, Inc.)"},
];

// let the grid know which columns and what data to use
var gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    enableSorting: true,
    enableFilter: true,
    enableColResize: true,
    rowSelection: 'multiple',
    onSelectionChanged: onSelectionChanged,
    onGridReady: function () {
        gridOptions.api.sizeColumnsToFit();
    }
};

// used in our jasmine test
function selectAllRows() {
    gridOptions.api.selectAll();
}

function onSelectionChanged() {
    var selectedRows = gridOptions.api.getSelectedRows();
    console.log(selectedRows);
    var selectedRowsString = '';
    selectedRows.forEach( function(selectedRow, index) {
        if (index!==0) {
            selectedRowsString += ', ';
        }
        selectedRowsString += selectedRow.company;
    });
    document.querySelector('#selectedRows').innerHTML = selectedRowsString;
}

/*
function showGenericModal(title, message) {
    console.log("Showing: " + title);
    $('.modal-title').empty();
    $('.modal-body').empty();
    $('.modal-title').html(title);
    $('.modal-body').html(message);
    $('#genericModal').modal();
}

function refreshRows(rowData) {
    console.log("refreshing employee rows...")
    $("#myGrid").empty();

    var employeeTemplate = _.template(
        '<% _.forEach(employees, function(employee) { %>' +
        '<div class="row body-row" data-id="<%- employee._id %>">' +
        '<div class="col-xs-4 body-column">' + '<%- employee.FirstName %>' + '</div>' +
        '<div class="col-xs-4 body-column"><%- employee.LastName %></div>' +
        '<div class="col-xs-4 body-column"><%- employee.Position.PositionName %></div>' +
        '</div>' +
        '<% }); %>'
    );
    let employeeRow = employeeTemplate({ employees });
    $("#employees-table").append(employeeRow);

} // refreshEmployeesRow()
*/

// wait for the document to be loaded, otherwise ag-Grid will not find the div in the document.
document.addEventListener("DOMContentLoaded", function () {
    // lookup the container we want the Grid to use
    var eGridDiv = document.querySelector('#myGrid');

    // create the grid passing in the div to use together with the columns & data we want to use
    new agGrid.Grid(eGridDiv, gridOptions);
});