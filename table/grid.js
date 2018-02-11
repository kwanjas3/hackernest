agGrid.LicenseManager.setLicenseKey("ag-Grid_Evaluation_License_Key_Not_for_Production_100Devs2_April_2018__MTUyMjYyMzYwMDAwMA==e8bb27c4f0c9ed34bce6c68b868694f2");
// specify the columns

const title = 'Company: ';
const product = 'Product: ';

var columnDefs = [
    {headerName: "Manufactuere", valueGetter: 'title + data.company', rowGroup: true, rowGroupIndex: 0, hide: true, filter: 'agNumberColumnFilter'},
    {headerName: "Product Name", valueGetter: 'product + data.productName', rowGroup: true, rowGroupIndex: 1, hide: true, filter:'agTextColumnFilter'},
    {headerName: "Feed Type", field: "feedType", checkboxSelection: true, minWidth: 90, width: 90, maxWidth: 110, filter:'agTextColumnFilter'},
    {headerName: "Shape & Size", field: "shapeSize", minWidth: 125, width: 125, maxWidth: 125, filter:'agTextColumnFilter'},
    {headerName: "Fish Weight", field: "fishWeight", minWidth: 115, width: 115, maxWidth: 115, filter:'agTextColumnFilter'},
    {headerName: "Drymat Min", field: "drymatmin", minWidth: 100, width: 100, maxWidth: 110, filter:'agTextColumnFilter'},
    {headerName: "Protein Min", field: "proteinmin", minWidth: 100, width: 100, maxWidth: 110, filter:'agTextColumnFilter'},
    {headerName: "Ingredients", field: "ingredient", minWidth: 100, width: 100, filter:'agTextColumnFilter'},
    {headerName: "Price / kg", field: "priceKgUSD", minWidth: 100, width: 100, maxWidth: 100, filter:'agTextColumnFilter'},
    {headerName: "Protein Source", field: "proteinSources", minWidth: 100, width: 100, filter:'agTextColumnFilter'},
    {headerName: "Environment Impact", valueGetter: "" }
];

var gridOptions = {
    columnDefs: columnDefs,
    enableSorting: true,
    enableFilter: true,
    enableColResize: true,
    rowSelection: 'multiple',
    onSelectionChanged: onSelectionChanged,
    suppressRowClickSelection: true,
    animateRows: true,
    groupUseEntireRow: true,
    groupDefaultExpanded: -1,
    onGridReady: function () {
        gridOptions.api.sizeColumnsToFit();
    },
};


let ajaxData;
function initializeAJAX() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://api.mlab.com/api/1/databases/fishhack/collections/fishfeeds?apiKey=aTV755BUwb3h04SezC5ds5X3hbHpHZ4f",
            type: "GET",
            contentType: "application/json"
        })
            .done((data) => {
                ajaxData = data;
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

    $("#removeSelectionsBtn").on("click", function(){
        gridOptions.api.deselectAll();
    })

    $("#collapseBtn").on("click", function() {
        gridOptions.api.collapseAll();
        $("#expandBtn").removeClass("disabled");
        $(this).addClass("disabled");
    })

    $("#expandBtn").on("click", function() {
        gridOptions.api.expandAll();
        $("#collapseBtn").removeClass("disabled");
        $(this).addClass("disabled");
    })
})

let rawData;

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

function onSelectionChanged() {
    selectedRows = gridOptions.api.getSelectedRows();
    return selectedRows;    
}
// used in our jasmine test
function selectAllRows() {
    gridOptions.api.selectAll();
}

function onFilterTextBoxChanged() {
    gridOptions.api.setQuickFilter(document.getElementById('filter-text-box').value);
}
