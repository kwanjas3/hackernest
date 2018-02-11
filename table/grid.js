var rowData;

// function runAjax() {
// return new Promise((resolve, reject)=>{
$.ajax({
  url:
    "https://api.mlab.com/api/1/databases/fishhack/collections/fishfeeds?apiKey=aTV755BUwb3h04SezC5ds5X3hbHpHZ4f",
  type: "GET",
  contentType: "application/json",
  success: function(data) {
    rowData = data;
    // $.each(data, function(index, value){
    //     rowData[index] = value;
    // });
  }
}).done(() => {

    
  var gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    enableSorting: true,
    enableFilter: true,
    enableColResize: true,
    rowSelection: "multiple",
    onSelectionChanged: onSelectionChanged,
    suppressRowClickSelection: true,
    animateRows: true,
    groupUseEntireRow: true,
    onGridReady: function() {
      gridOptions.api.sizeColumnsToFit();
    }
  };

  function onSelectionChanged() {
    selectedRows = gridOptions.api.getSelectedRows();
    return selectedRows;
  }
  // used in our jasmine test
  function selectAllRows() {
    gridOptions.api.selectAll();
  }

  // wait for the document to be loaded, otherwise ag-Grid will not find the div in the document.
  // lookup the container we want the Grid to use
  var eGridDiv = document.querySelector("#myGrid");

  // create the grid passing in the div to use together with the columns & data we want to use
  new agGrid.Grid(eGridDiv, gridOptions);

$("#compareBtn").on('click', function () {
    $(".potentialAlert").empty();
    selectRows = onSelectionChanged();
    console.log(selectRows);
    if (selectRows.length == 2) {
        compareRows(selectRows);
    }
    else {
        $(".potentialAlert").html("<div class='alert alert-danger'><strong>Error!</strong> Please select only two kinds of feed to compare.</div>")
    }
});


function showModal(title, message) {
    $('.modal-title').empty();
    $('.modal-body').empty();
    $('.modal-title').html(title);
    $('.modal-body').html(message);
    $('#genericModal').modal();
}

function compareRows(data) {

    let displayTemplate = _.template(
        `<div class="row">
            <div class="col-md-2">
                <Strong>Name: </Strong><br>
            </div>
            <div class="col-md-5">
                ${data[0].productName}
            </div>
            <div class="col-md-5">
                ${data[1].productName}
            </div>
        </div>

        <div class="row">
            <div class="col-md-2">
                <Strong>Company: </Strong>
            </div>
            <div class="col-md-5">
                ${data[0].company}
            </div>
            <div class="col-md-5">
                ${data[1].company}
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-2">
                <strong>Shape Size: </strong>
            </div>
            <div class="col-md-5">
                ${data[0].shapeSize}
            </div>
            <div class="col-md-5">
                ${data[1].shapeSize}
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-2">
                <strong>Feed Type: </strong>
            </div>
            <div class="col-md-5">
                ${data[0].feedType}
            </div>
            <div class="col-md-5">
                ${data[1].feedType}
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-2">
                <strong>Price <br> ($USD / Kg): </strong>
            </div>
            <div class="col-md-5 priceCell1">
                ${data[0].priceKgUSD}
            </div>
            <div class="col-md-5 priceCell2">
                ${data[1].priceKgUSD}
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-2">
                <strong>Packaging (Kg): </strong>
            </div>
            <div class="col-md-5">
                ${data[0].packagingKg}
            </div>
            <div class="col-md-5">
                ${data[1].packagingKg}
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-2">
                <strong>Ingredients: </strong>
            </div>
            <div class="col-md-5">
                ${data[0].ingredient}
            </div>
            <div class="col-md-5">
                ${data[1].ingredient}
            </div>
        </div>
        
        
        <div class="row">
            <div class="col-md-2">
                <strong>Protein Source: </strong>
            </div>
            <div class="col-md-5 proteinSourceCell1">
                ${data[0].proteinSources}
            </div>
            <div class="col-md-5 proteinSourceCell2">
                ${data[1].proteinSources}
            </div>
        </div>`
    )

    let displayContent = displayTemplate({ 'data': selectRows })
    showModal("Comparing Feeds", displayContent);
    highlightBenefits(selectRows);
}

//Logic for determining if something is better
function highlightBenefits(data) {

    if (data[0].priceKgUSD < data[1].priceKgUSD) {
        $(".priceCell1").css(
            {"background-color": "green",
            "color": "yellow"});
        // $(".priceCell1").css("color", "yellow");

        $(".priceCell2").css({"background-color": "red",
        "color": "yellow"});
        // $(".priceCell2").css("color", "yellow");
    }
    else if (data[0].priceKgUSD == data[1].priceKgUSD) {
        $(".priceCell2").css("background-color", "orange");
        $(".priceCell2").css("color", "yellow");

        $(".priceCell1").css("background-color", "orange");
        $(".priceCell1").css("color", "yellow");
    }
    else {
        $(".priceCell2").css("background-color", "green");
        $(".priceCell2").css("color", "yellow");

        $(".priceCell1").css("background-color", "red");
        $(".priceCell1").css("color", "yellow");
    }

    if (parseInt(data[0].proteinSources) > parseInt(data[1].proteinSources)) {
        $(".proteinSourceCell1").css("background-color", "green");
        $(".proteinSourceCell1").css("color", "yellow");

        $(".proteinSourceCell2").css("background-color", "red");
        $(".proteinSourceCell2").css("color", "yellow");

    } else if (parseInt(data[0].proteinSources) == parseInt(data[1].proteinSources)) {
        $(".proteinSourceCell1").css("background-color", "orange");
        $(".proteinSourceCell1").css("color", "yellow");

        $(".proteinSourceCell2").css("background-color", "orange");
        $(".proteinSourceCell2").css("color", "yellow");
    }
    else {
        $(".proteinSourceCell2").css("background-color", "green");
        $(".proteinSourceCell2").css("color", "yellow");

        $(".proteinSourceCell1").css("background-color", "red");
        $(".proteinSourceCell1").css("color", "yellow");
    }
    console.log(parseFloat(data[0].proteinSources));
}

}); //end of ajax done()

agGrid.LicenseManager.setLicenseKey(
  "ag-Grid_Evaluation_License_Key_Not_for_Production_100Devs2_April_2018__MTUyMjYyMzYwMDAwMA==e8bb27c4f0c9ed34bce6c68b868694f2"
);

// specify the columns
var columnDefs = [
  {
    headerName: "Manufactuere",
    field: "company",
    rowGroup: true,
    minWidth: 200,
    rowGroupIndex: 0,
    hide: true
  },
  {
    headerName: "Product Name",
    field: "productName",
    minWidth: 100,
    width: 100,
    rowGroup: true,
    rowGroupIndex: 1,
    hide: true
  },
  {
    headerName: "Feed Type",
    field: "feedType",
    checkboxSelection: true,
    minWidth: 100,
    width: 100
  },
  {
    headerName: "Shape and Size",
    field: "shapeSize",
    minWidth: 100,
    width: 100
  },
  { headerName: "Fish Weight", field: "fishWeight", minWidth: 100, width: 100 },
  {
    headerName: "Compostion",
    children: [
      {
        headerName: "Drymat Min",
        field: "drymatmin",
        minWidth: 100,
        width: 100
      },
      {
        headerName: "Protein Min",
        field: "proteinmin",
        minWidth: 100,
        width: 100
      }
    ]
  },
  { headerName: "Ingredient", field: "ingredient", minWidth: 100, width: 100 },
  {
    headerName: "Packaging kg",
    field: "packagingKg",
    minWidth: 100,
    width: 100
  },
  {
    headerName: "Price / kg (USD)",
    field: "priceKgUSD",
    minWidth: 100,
    width: 100
  },
  {
    headerName: "Protein Source",
    field: "proteinSources",
    minWidth: 100,
    width: 100
  }
];