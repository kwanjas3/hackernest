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
        '<div class="col-md-2 content" align="center">' +
        '<Strong>Name: </Strong><br>' +
        '</div>' +
        '<div class="col-md-5 content " align="center">' +
        '<%- data[0].productName %> <br>' +
        '</div>' +
        '<div class="col-md-5 content " align="center">' +
        '<%- data[1].productName %> <br>' +
        '</div>' +
        '</div>' +

        '<div class ="row">' +
        '<div class="col-md-2 content " align="center">' +
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
        '<div class="col-md-2 content " align="center">' +
        '<Strong>Price ($USD / kg): </Strong><br>' +
        '</div>' +
        '<div class="col-md-5 content priceCell1" align="center">' +
        '$<%- data[0].priceKgUSD %> <br>' +
        '</div>' +
        '<div class="col-md-5 content priceCell2" align="center">' +
        '$<%- data[1].priceKgUSD %> <br>' +
        '</div>' +
        '</div>' +

        '<div class ="row">' +
        '<div class="col-md-2 content" align="center">' +
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
        '<div class="col-md-2 content" align="center">' +
        '<Strong>Ingredients: </Strong><br>' +
        '</div>' +
        '<div class="col-md-5 content ingredientCell1" align="center">' +
        '<%- data[0].ingredient %> <br>' +
        '</div>' +
        '<div class="col-md-5 content ingredientCell2" align="center">' +
        '<%- data[1].ingredient %> <br>' +
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

    if (data[0].packagingKg > data[1].packagingKg) {
        $(".packagingKgCell1").css("background-color", "green");
        $(".packagingKgCell1").css("color", "yellow");

        $(".packagingKgCell2").css("background-color", "red");
        $(".packagingKgCell2").css("color", "yellow");

    } else if (data[0].packagingKg == data[1].packagingKg) {
        $(".packagingKgCell1").css("background-color", "orange");
        $(".packagingKgCell1").css("color", "yellow");

        $(".packagingKgCell2").css("background-color", "orange");
        $(".packagingKgCell2").css("color", "yellow");
    }
    else {
        $(".packagingKgCell2").css("background-color", "green");
        $(".packagingKgCell2").css("color", "yellow");

        $(".packagingKgCell1").css("background-color", "red");
        $(".packagingKgCell1").css("color", "yellow");
    }
}