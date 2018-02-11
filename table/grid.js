agGrid.LicenseManager.setLicenseKey("ag-Grid_Evaluation_License_Key_Not_for_Production_100Devs2_April_2018__MTUyMjYyMzYwMDAwMA==e8bb27c4f0c9ed34bce6c68b868694f2");

// specify the columns
var columnDefs = [
    {headerName: "Manufactuere", field: "company", rowGroup: true, minWidth: 200, rowGroupIndex: 0},
    {headerName: "Product Name", field: "productName", minWidth: 100, width: 100, rowGroup: true, rowGroupIndex: 1},
    {headerName: "Feed Type", field: "feedType", checkboxSelection: true, minWidth: 100, width: 100},
    {headerName: "Shape and Size", field: "shapeSize", minWidth: 100, width: 100},
    {headerName: "Fish Weight", field: "fishWeight", minWidth: 100, width: 100},
    {headerName: "Compostion", children: [
        {headerName: "Drymat Min", field: "drymatmin", minWidth: 100, width: 100},
        {headerName: "Protein Min", field: "proteinmin", minWidth: 100, width: 100},
    ]},
    {headerName: "Ingredient", field: "ingredient", minWidth: 100, width: 100},
    {headerName: "Packaging kg", field: "packagingKg", minWidth: 100, width: 100},
    {headerName: "Price / kg (USD)", field: "priceKgUSD", minWidth: 100, width: 100},
    {headerName: "Protein Source", field: "proteinSources", minWidth: 100, width: 100}
];



// specify the data
var rowData = [
    {
        productName: "Specialty Fish Feeds (ESQ)", 
        feedType: "Fry mash",
        shapeSize: "Mash", 
        fishWeight: "0.1 - 2",
        drymatmin: "87", 
        proteinmin: "30", 
        fatmin: "5", 
        fibermax: "8", 
        ashmax: "",
        ingredient: "soya bean meal, wheat flour, fish oil, fish meal, fish soluble, shrimp meal, squid liver meal, copra meal, rice bran, pollard yeast, UGF, limestone, corn gluten, salt, calcium phosphate, choline chloride, vitamin pre-mix, mineral pre-mix, mold inhibitor, anti- oxidant",
        packagingKg: "20", 
        priceKgUSD: "0.53", 
        company: "Aquaprime (Aquaprime Philippines International, Inc.)",
        proteinSources: "4"
    },
    {
        productName: "Specialty Fish Feeds (ESQ)", feedType: "Starter",
        shapeSize: "Crumble", fishWeight: "2 - 20",
        drymatmin: "87", proteinmin: "29", fatmin: "5", fibermax: "8", ashmax: "",
        ingredient: "soya bean meal, wheat flour, fish oil, fish meal, fish soluble, shrimp meal, squid liver meal, copra meal, rice bran, pollard yeast, UGF, limestone, corn gluten, salt, calcium phosphate, choline chloride, vitamin pre-mix, mineral pre-mix, mold inhibitor, anti- oxidant",
        packagingKg: "20", priceKgUSD: "0.52", company: "Aquaprime (Aquaprime Philippines International, Inc.)",
        proteinSources: "4"
    },
    {
        productName: "Specialty Fish Feeds (ESQ)", feedType: "Starter",
        shapeSize: "Pellet", fishWeight: "2 - 40",
        drymatmin: "87", proteinmin: "29", fatmin: "5", fibermax: "8", ashmax: "",
        ingredient: "soya bean meal, wheat flour, fish oil, fish meal, fish soluble, shrimp meal, squid liver meal, copra meal, rice bran, pollard yeast, UGF, limestone, corn gluten, salt, calcium phosphate, choline chloride, vitamin pre-mix, mineral pre-mix, mold inhibitor, anti- oxidant",
        packagingKg: "20", priceKgUSD: "0.51", company: "Aquaprime (Aquaprime Philippines International, Inc.)",
        proteinSources: "4"
    },
    {
        productName: "Specialty Fish Feeds (ESQ)", feedType: "Starter",
        shapeSize: "Pellet", fishWeight: "40 - 100",
        drymatmin: "87", proteinmin: "27", fatmin: "5", fibermax: "8", ashmax: "",
        ingredient: "soya bean meal, wheat flour, fish oil, fish meal, fish soluble, shrimp meal, squid liver meal, copra meal, rice bran, pollard yeast, UGF, limestone, corn gluten, salt, calcium phosphate, choline chloride, vitamin pre-mix, mineral pre-mix, mold inhibitor, anti- oxidant",
        packagingKg: "30", priceKgUSD: "0.47", company: "Aquaprime (Aquaprime Philippines International, Inc.)",
        proteinSources: "4"
    },
    {
        productName: "Specialty Fish Feeds (ESQ)", 
        feedType: "Finisher",
        shapeSize: "pellet", 
        fishWeight: ">100g",
        drymatmin: "87", 
        proteinmin: "26", 
        fatmin: "5", 
        fibermax: "8", 
        ashmax: "",
        ingredient: "soya bean meal, wheat flour, fish oil, fish meal, fish soluble, shrimp meal, squid liver meal, copra meal, rice bran, pollard yeast, UGF, limestone, corn gluten, salt, calcium phosphate, choline chloride, vitamin pre-mix, mineral pre-mix, mold inhibitor, anti- oxidant",
        packagingKg: "30", 
        priceKgUSD: "0.47", 
        company: "Aquaprime (Aquaprime Philippines International, Inc.)",
        proteinSources: "4"
    },
    {
        productName: "Bangus Feed", 
        feedType: "Fry mash",
        shapeSize: "Mash", 
        fishWeight: "0.1 - 2",
        drymatmin: "87", 
        proteinmin: "31", 
        fatmin: "8", 
        fibermax: "7", 
        ashmax: "16",
        ingredient: "corn, soybean meal, fishmeal, poultry by- product meal,brewer’s yeast, corn gluten, cassava, rice bran, copra meal, brewer’s grain, wheat pollard,molasses, vegetable oil, salt, limestone, banana meal, dicalcium phosphate, ethoxyquin, L-lysine, DL -methionine, binder, mold inhibitor",
        packagingKg: "", 
        priceKgUSD: "", 
        company: "B- Meg (San Miguel Foods, Incorporated)",
        proteinSources: "8"
    },
    {
        productName: "Bangus Feed", 
        feedType: "Starter",
        shapeSize: "Crumble", 
        fishWeight: "2.1 - 25",
        drymatmin: "87", 
        proteinmin: "31", 
        fatmin: "8", 
        fibermax: "7", 
        ashmax: "16",
        ingredient: "corn, soybean meal, fishmeal, poultry by- product meal,brewer’s yeast, corn gluten, cassava, rice bran, copra meal, brewer’s grain, wheat pollard,molasses, vegetable oil, salt, limestone, banana meal, dicalcium phosphate, ethoxyquin, L-lysine, DL -methionine, binder, mold inhibitor",
        packagingKg: "", 
        priceKgUSD: "", 
        company: "B- Meg (San Miguel Foods, Incorporated)",
        proteinSources: "8"
    },
    {
        productName: "Bangus Feed", 
        feedType: "Starter",
        shapeSize: "Pellet", 
        fishWeight: "26-70",
        drymatmin: "87", 
        proteinmin: "31", 
        fatmin: "8", 
        fibermax: "7", 
        ashmax: "16",
        ingredient: "corn, soybean meal, fishmeal, poultry by- product meal,brewer’s yeast, corn gluten, cassava, rice bran, copra meal, brewer’s grain, wheat pollard,molasses, vegetable oil, salt, limestone, banana meal, dicalcium phosphate, ethoxyquin, L-lysine, DL -methionine, binder, mold inhibitor",
        packagingKg: "25", 
        priceKgUSD: "0.56", 
        company: "B- Meg (San Miguel Foods, Incorporated)",
        proteinSources: "8"
    },
    {
        productName: "Bangus Feed", 
        feedType: "Grower",
        shapeSize: "Pellet", 
        fishWeight: "71-170",
        drymatmin: "87", 
        proteinmin: "31", 
        fatmin: "7", 
        fibermax: "7", 
        ashmax: "16",
        ingredient: "corn, soybean meal, fishmeal, poultry by- product meal,brewer’s yeast, corn gluten, cassava, rice bran, copra meal, brewer’s grain, wheat pollard,molasses, vegetable oil, salt, limestone, banana meal, dicalcium phosphate, ethoxyquin, L-lysine, DL -methionine, binder, mold inhibitor",
        packagingKg: "25", 
        priceKgUSD: "0.54", 
        company: "B- Meg (San Miguel Foods, Incorporated)",
        proteinSources: "8"
    },
    {
        productName: "Bangus Feed", 
        feedType: "Finisher",
        shapeSize: "Pellet", 
        fishWeight: ">170",
        drymatmin: "87", 
        proteinmin: "29", 
        fatmin: "7", 
        fibermax: "7", 
        ashmax: "16",
        ingredient: "corn, soybean meal, fishmeal, poultry by- product meal,brewer’s yeast, corn gluten, cassava, rice bran, copra meal, brewer’s grain, wheat pollard,molasses, vegetable oil, salt, limestone, banana meal, dicalcium phosphate, ethoxyquin, L-lysine, DL -methionine, binder, mold inhibitor",
        packagingKg: "25", 
        priceKgUSD: "0.56", 
        company: "B- Meg (San Miguel Foods, Incorporated)",
        proteinSources: "8"
    },
    {
        productName: "Tilapia Feeds", 
        feedType: "Fry",
        shapeSize: "Mash", 
        fishWeight: "< 5.0",
        drymatmin: "87", 
        proteinmin: "30", 
        fatmin: "8", 
        fibermax: "7", 
        ashmax: "16",
        ingredient: "corn, soybean meal, fishmeal, poultry by- product meal,brewer’s yeast, corn gluten, cassava, rice bran, copra meal, brewer’s grain, wheat pollard,molasses, vegetable oil, salt, limestone, banana meal, dicalcium phosphate, ethoxyquin, L-lysine, DL -methionine, binder, mold inhibitor",
        packagingKg: "25", 
        priceKgUSD: "0.57", 
        company: "B- Meg (San Miguel Foods, Incorporated)",
        proteinSources: "8"
    },
    {
        productName: "Tilapia Feeds", 
        feedType: "Starter",
        shapeSize: "Crumble", 
        fishWeight: "<5",
        drymatmin: "87", 
        proteinmin: "30", 
        fatmin: "8", 
        fibermax: "7", 
        ashmax: "16",
        ingredient: "corn, soybean meal, fishmeal, poultry by- product meal,brewer’s yeast, corn gluten, cassava, rice bran, copra meal, brewer’s grain, wheat pollard,molasses, vegetable oil, salt, limestone, banana meal, dicalcium phosphate, ethoxyquin, L-lysine, DL -methionine, binder, mold inhibitor",
        packagingKg: "25", 
        priceKgUSD: "0.56", 
        company: "B- Meg (San Miguel Foods, Incorporated)",
        proteinSources: "8"
    },
    {
        productName: "Tilapia Feeds", 
        feedType: "Starter",
        shapeSize: "Pellet", 
        fishWeight: "< 30",
        drymatmin: "87", 
        proteinmin: "30", 
        fatmin: "8", 
        fibermax: "7", 
        ashmax: "16",
        ingredient: "corn, soybean meal, fishmeal, poultry by- product meal,brewer’s yeast, corn gluten, cassava, rice bran, copra meal, brewer’s grain, wheat pollard,molasses, vegetable oil, salt, limestone, banana meal, dicalcium phosphate, ethoxyquin, L-lysine, DL -methionine, binder, mold inhibitor",
        packagingKg: "25", 
        priceKgUSD: "0.55", 
        company: "B- Meg (San Miguel Foods, Incorporated)",
        proteinSources: "8"
    },
    {
        productName: "Tilapia Feeds", 
        feedType: "Grower",
        shapeSize: "Pellet", 
        fishWeight: "< 65",
        drymatmin: "87", 
        proteinmin: "30", 
        fatmin: "8", 
        fibermax: "7", 
        ashmax: "16",
        ingredient: "corn, soybean meal, fishmeal, poultry by- product meal,brewer’s yeast, corn gluten, cassava, rice bran, copra meal, brewer’s grain, wheat pollard,molasses, vegetable oil, salt, limestone, banana meal, dicalcium phosphate, ethoxyquin, L-lysine, DL -methionine, binder, mold inhibitor",
        packagingKg: "25", 
        priceKgUSD: "0.53", 
        company: "B- Meg (San Miguel Foods, Incorporated)",
        proteinSources: "8"
    },    {
        productName: "Tilapia Feeds", 
        feedType: "Finisher",
        shapeSize: "Pellet", 
        fishWeight: ">65",
        drymatmin: "87", 
        proteinmin: "28", 
        fatmin: "8", 
        fibermax: "7", 
        ashmax: "16",
        ingredient: "corn, soybean meal, fishmeal, poultry by- product meal,brewer’s yeast, corn gluten, cassava, rice bran, copra meal, brewer’s grain, wheat pollard,molasses, vegetable oil, salt, limestone, banana meal, dicalcium phosphate, ethoxyquin, L-lysine, DL -methionine, binder, mold inhibitor",
        packagingKg: "25", 
        priceKgUSD: "0.50", 
        company: "B- Meg (San Miguel Foods, Incorporated)",
        proteinSources: "8"
    },
    {
        productName: "Tilapia Feeds", 
        feedType: "Finisher",
        shapeSize: "Pellet", 
        fishWeight: ">65",
        drymatmin: "87", 
        proteinmin: "26", 
        fatmin: "8", 
        fibermax: "7", 
        ashmax: "16",
        ingredient: "corn, soybean meal, fishmeal, poultry by- product meal,brewer’s yeast, corn gluten, cassava, rice bran, copra meal, brewer’s grain, wheat pollard,molasses, vegetable oil, salt, limestone, banana meal, dicalcium phosphate, ethoxyquin, L-lysine, DL -methionine, binder, mold inhibitor",
        packagingKg: "25", 
        priceKgUSD: "0.46", 
        company: "B- Meg (San Miguel Foods, Incorporated)",
        proteinSources: "8"
    },
    {
        productName: "Fish Feeds", 
        feedType: "Fry",
        shapeSize: "Crumble", 
        fishWeight: "<10",
        drymatmin: "87", 
        proteinmin: "31", 
        fatmin: "6", 
        fibermax: "5", 
        ashmax: "",
        ingredient: "n/a",
        packagingKg: "n/a", 
        priceKgUSD: "0.52", 
        company: "Blue Ribbon (Swift Foods, Incorporated)2"
        ,
        proteinSources: "0"
    },
    {
        productName: "Fish Feeds", 
        feedType: "Starter",
        shapeSize: "Crumble", 
        fishWeight: "11-100",
        drymatmin: "87", 
        proteinmin: "26", 
        fatmin: "7", 
        fibermax: "8", 
        ashmax: "",
        ingredient: "n/a",
        packagingKg: "n/a", 
        priceKgUSD: "0.49", 
        company: "Blue Ribbon (Swift Foods, Incorporated)2"        ,
        proteinSources: "0"
    },
    {
        productName: "Fish Feeds", 
        feedType: "Grower",
        shapeSize: "Pellet", 
        fishWeight: ">100",
        drymatmin: "87", 
        proteinmin: "27", 
        fatmin: "7", 
        fibermax: "8", 
        ashmax: "",
        ingredient: "n/a",
        packagingKg: "n/a", 
        priceKgUSD: "0.54", 
        company: "Blue Ribbon (Swift Foods, Incorporated)2"        ,
        proteinSources: "0"
    },
    {
        productName: "Fish Feeds", 
        feedType: "Adult w/molasses",
        shapeSize: "Pellet", 
        fishWeight: ">100",
        drymatmin: "87", 
        proteinmin: "27", 
        fatmin: "7", 
        fibermax: "8", 
        ashmax: "",
        ingredient: "n/a",
        packagingKg: "n/a", 
        priceKgUSD: "0.53", 
        company: "Blue Ribbon (Swift Foods, Incorporated)2"        ,
        proteinSources: "0"
    },    {
        productName: "", 
        feedType: "Starter",
        shapeSize: "Pellet 2x5", 
        fishWeight: "5-30",
        drymatmin: "88", 
        proteinmin: "28", 
        fatmin: "8", 
        fibermax: "7", 
        ashmax: "16",
        ingredient: "fish meal, soybean meal, flour, rice bran, copra, vitamin premix, mineral pre-mix, dicalcium phosphate, oil",
        packagingKg: "20", 
        priceKgUSD: "0.50", 
        company: "Rich (First El Presidente Manufacturing, Incorporated)"        ,
        proteinSources: "3"
    },
    {
        productName: "", 
        feedType: "Grower",
        shapeSize: "Pellet 2x7.5", 
        fishWeight: "30-200",
        drymatmin: "88", 
        proteinmin: "28", 
        fatmin: "8", 
        fibermax: "7", 
        ashmax: "16",
        ingredient: "fish meal, soybean meal, flour, rice bran, copra, vitamin premix, mineral pre-mix, dicalcium phosphate, oil",
        packagingKg: "25", 
        priceKgUSD: "0.48", 
        company: "Rich (First El Presidente Manufacturing, Incorporated)"  ,
        proteinSources: "3"
    },
    {
        productName: "", 
        feedType: "Finisher",
        shapeSize: "Pellet 2x10", 
        fishWeight: ">200",
        drymatmin: "88", 
        proteinmin: "28", 
        fatmin: "8", 
        fibermax: "7", 
        ashmax: "16",
        ingredient: "fish meal, soybean meal, flour, rice bran, copra, vitamin premix, mineral pre-mix, dicalcium phosphate, oil",
        packagingKg: "20", 
        priceKgUSD: "0.53", 
        company: "Rich (First El Presidente Manufacturing, Incorporated)"  ,
        proteinSources: "3"
    },    
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
    suppressRowClickSelection: true,
    animateRows: true,
    groupUseEntireRow:true,
    onGridReady: function () {
        gridOptions.api.sizeColumnsToFit();
    },
};

function onSelectionChanged() {
    selectedRows = gridOptions.api.getSelectedRows();
    return selectedRows;    
}
// used in our jasmine test
function selectAllRows() {
    gridOptions.api.selectAll();
}

/*
function onSelectionChanged() {
    var selectedRows = gridOptions.api.getSelectedRows();
    var selectedNodes = gridOptions.api.getSelectedNodes();
    if (selectedRows.length > 2) {
        $('#exampleModal').modal('show');
        for (let i = 2; i < selectedNodes.length; i ++) {
            selectedNodes[i].setSelected(false);
        }
    }

    var selectedRowsString = '';
    selectedRows.forEach( function(selectedRow, index) {
        if (index!==0) {
            selectedRowsString += ', ';
        }
        selectedRowsString += selectedRow.company;
    });
} */

// wait for the document to be loaded, otherwise ag-Grid will not find the div in the document.
document.addEventListener("DOMContentLoaded", function () {
    // lookup the container we want the Grid to use
    var eGridDiv = document.querySelector('#myGrid');

    // create the grid passing in the div to use together with the columns & data we want to use
    new agGrid.Grid(eGridDiv, gridOptions);
});

