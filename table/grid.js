let ajaxData;
function initializeAJAX() {
    return new Promise((resolve, reject) => {

        console.log("initializing ajax");
        $.ajax({
            url: "https://api.mlab.com/api/1/databases/fishhack/collections/fishfeeds?apiKey=aTV755BUwb3h04SezC5ds5X3hbHpHZ4f",
            type: "GET",
            contentType: "application/json"
        })
            .done((data) => {
                ajaxData = data;
                console.log(ajaxData);
                resolve(ajaxData);
            })
            .fail((err) => {
                console.log(typeof (err));
                reject(err);
            })
    });
}

$(function () {
    initializeAJAX().then((data) => {
        initializeTable(data);
    });

    $("#compareBtn").on('click', function () {
        $(".potentialAlert").empty();
        selectRows = onSelectionChanged();

        if (selectRows.length == 2) {
            compareRows(selectRows);
        }

        else {
            $(".potentialAlert").html("<div class='alert alert-danger'><strong>Error!</strong> Please select only two kinds of feed to compare.</div>")
        }
    })

    $("#payload-search").on("keyup", function(){
        getFilteredPayload($("#payload-search").val());
    })

    $("#removeSelectionBtn").on("click", function() {
        gridOptions.api.deselectAll();
        //allSelected = false;
    })  
})
let rawData;
agGrid.LicenseManager.setLicenseKey("ag-Grid_Evaluation_License_Key_Not_for_Production_100Devs2_April_2018__MTUyMjYyMzYwMDAwMA==e8bb27c4f0c9ed34bce6c68b868694f2");
// let the grid      know which columns and what data to use
function initializeTable(ajaxData) {
    // wait for the document to be loaded, otherwise ag-Grid will not find the div in the document.
    //document.addEventListener("DOMContentLoaded", function () {
    // lookup the container we want the Grid to use
    var eGridDiv = document.querySelector('#myGrid');

    // create the grid passing in the div to use together with the columns & data we want to use
    new agGrid.Grid(eGridDiv, gridOptions);
    // });
    rawData = ajaxData;
    gridOptions.api.setRowData(ajaxData);
}
function onSelectionChanged() {
    selectedRows = gridOptions.api.getSelectedRows();
    return selectedRows;
}

function selectAllRows() {
    gridOptions.api.selectAll();
}
// specify the columns
var columnDefs = [
    { headerName: "Manufactuere", field: "company", rowGroup: true, minWidth: 200, rowGroupIndex: 0, hide: true },
    { headerName: "Product Name", field: "productName", minWidth: 100, width: 100, rowGroup: true, rowGroupIndex: 1, hide: true },
    { headerName: "Feed Type", field: "feedType", checkboxSelection: true, minWidth: 100, width: 100 },
    { headerName: "Shape and Size", field: "shapeSize", minWidth: 100, width: 100 },
    { headerName: "Fish Weight", field: "fishWeight", minWidth: 100, width: 100 },
    {
        headerName: "Composition", children: [
            { headerName: "Drymat Min", field: "drymatmin", minWidth: 100, width: 100 },
            { headerName: "Protein Min", field: "proteinmin", minWidth: 100, width: 100 },
        ]
    },
    { headerName: "Ingredient", field: "ingredient", minWidth: 100, width: 100 },
    { headerName: "Packaging kg", field: "packagingKg", minWidth: 100, width: 100 },
    { headerName: "Price / kg (USD)", field: "priceKgUSD", minWidth: 100, width: 100 },
    { headerName: "Protein Source", field: "proteinSources", minWidth: 100, width: 100 }
];

var gridOptions = {
    columnDefs: columnDefs,
    // rowData: ajaxData,
    enableSorting: true,
    enableFilter: true,
    enableColResize: true,
    rowSelection: 'multiple',
    onSelectionChanged: onSelectionChanged,
    suppressRowClickSelection: true,
    animateRows: true,
    groupUseEntireRow: true,
    onGridReady: function () {
        gridOptions.api.sizeColumnsToFit();
    },
};

function getFilteredPayload(filterString) {
    let regxString = new RegExp(filterString, 'i');
    let filteredPayload = _.filter(ajaxData, function(row){
        if (row.productName.match(regxString) || row.feedType.match(regxString) || row.shapeSize.match(regxString) || 
            row.fishWeight.match(regxString) || row.drymatmin.match(regxString) || row.proteinmin.match(regxString) ||
            row.fatmin.match(regxString) || row.fibermax.match(regxString) || row.ashmax.match(regxString) || row.ingredient.match(regxString) ||
            row.packagingKg.match(regxString) || row.priceKgUSD.match(regxString) || row.company.match(regxString) ||
            row.proteinSources.match(regxString)) {
                return row;
            }
    })
    if ($("#payload-search").val() == "") {
        gridOptions.api.setRowData(rawData);
    }
    else 
    gridOptions.api.setRowData(filteredPayload);

}
