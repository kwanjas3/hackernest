let selectRows;

$(function () {
    console.log("jQuery ready");
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

}) //jQuery rdy

function showModal(title, message) {
    $('.modal-title').empty();
    $('.modal-body').empty();
    $('.modal-title').html(title);
    $('.modal-body').html(message);
    $('#genericModal').modal();
}

function compareRows(data) {

    let displayTemplate = _.template(
        '<div class="col-md-12">' +
        '<div class ="row">' +
        '<div class="col-md-2 content" align="right">' +
        '<Strong>Name: </Strong><br>' +
        '</div>' +
        '<div class="col-md-5 content " align="center">' +
        '<%- data[0].productName %> <br>' +
        '</div>' +
        '<div class="col-md-5 content " align="center">' +
        '<%- data[1].productName %> <br>' +
        '</div>' +
        '</div>' +
 
        '<div class="col-md-12">' +
        '<div class ="row">' +
        '<div class="col-md-2 content" align="right">' +
        '<Strong>Company: </Strong><br>' +
        '</div>' +
        '<div class="col-md-5 content " align="center">' +
        '<%- data[0].company %> <br>' +
        '</div>' +
        '<div class="col-md-5 content " align="center">' +
        '<%- data[1].company %> <br>' +
        '</div>' +
        '</div>' +
        
        '<div class="col-md-12">' +
        '<div class ="row">' +
        '<div class="col-md-2 content" align="right">' +
        '<Strong>Shape size: </Strong><br>' +
        '</div>' +
        '<div class="col-md-5 content " align="center">' +
        '<%- data[0].shapeSize %> <br>' +
        '</div>' +
        '<div class="col-md-5 content " align="center">' +
        '<%- data[1].shapeSize %> <br>' +
        '</div>' +
        '</div>' +

        '<div class ="row">' +
        '<div class="col-md-2 content " align="right">' +
        '<Strong>Feed Type: </Strong><br>' +
        '</div>' +
        '<div class="col-md-5 content" align="center">' +
        '<%- data[0].feedType %> <br>' +
        '</div>' +
        '<div class="col-md-5 content " align="center">' +
        '<%- data[1].feedType %> <br>' +
        '</div>' +
        '</div>' +

        '<div class ="row">' +

        '<div class="col-md-2 content ">' +
        '<Strong>Price <br> ($USD / kg): </Strong><br>' +


        '</div>' +
        '<div class="col-md-5 content priceCell1" align="center">' +
        '$<%- data[0].priceKgUSD %> <br>' +
        '</div>' +
        '<div class="col-md-5 content priceCell2" align="center">' +
        '$<%- data[1].priceKgUSD %> <br>' +
        '</div>' +
        '</div>' +

        '<div class ="row">' +
        '<div class="col-md-2 content" align="right">' +
        '<Strong>Packaging (kg): </Strong><br>' +
        '</div>' +
        '<div class="col-md-5 content packagingKgCell1" align="center">' +
        '<%- data[0].packagingKg %> <br>' +
        '</div>' +
        '<div class="col-md-5 content packagingKgCell2" align="center">' +
        '<%- data[1].packagingKg %> <br>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class ="row" >' +
        '<div class="col-md-2 content" align="right">' +
        '<Strong>Ingredients: </Strong><br>' +
        '</div>' +
        '<div class="col-md-5 content ingredientCell1" align="center">' +
        '<%- data[0].ingredient %> <br>' +
        '</div>' +
        '<div class="col-md-5 content ingredientCell2" align="center">' +
        '<%- data[1].ingredient %> <br>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class ="row" >' +
        '<div class="col-md-2 content" align="right">' +
        '<Strong>Protein Sources: </Strong><br>' +
        '</div>' +
        '<div class="col-md-5 content proteinSourceCell1" align="center">' +
        '<%- data[0].proteinSources %> <br>' +
        '</div>' +
        '<div class="col-md-5 content proteinSourceCell2" align="center">' +
        '<%- data[1].proteinSources %> <br>' +
        '</div>' +
        '</div>' +
        '</div>' 
    )

    let displayContent = displayTemplate({ 'data': selectRows })
    showModal("Comparing Feeds", displayContent);
    highlightBenefits(selectRows);
}

//Logic for determining if something is better
function highlightBenefits(data) {

    if (data[0].priceKgUSD < data[1].priceKgUSD) {
        $(".priceCell1").css("background-color", "green");
        $(".priceCell1").css("color", "yellow");

        $(".priceCell2").css("background-color", "red");
        $(".priceCell2").css("color", "yellow");
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
