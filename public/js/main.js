let selectRows;

$(function () {
    console.log("jQuery ready");
    $("#compareBtn").on('click', function () {
        $("#dangerNotice").empty();
        selectRows = onSelectionChanged();

        if (selectRows.length == 2) {
            compareRows(selectRows);
        }

        else {
            $("#dangerNotice").html("<div class='alert alert-danger alert-dismissable fade in'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>Error!</strong> Please select only two kinds of feed to compare.</div>")
        }
    })

    $("#expandBtn").addClass("disabled");

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
        `
        <div class="row">
            <div class="col-sm-2 col-md-2">
                <strong>Name: </strong>
            </div>
            <div class="col-sm-5 col-md-5">
                ${data[0].productName}
            </div>
            <div class="col-sm-5 col-md-5">
                ${data[1].productName}
            </div>
        </div>

        <div class="row">
            <div class="col-sm-2 col-md-2">
                <strong>Company: </strong>
            </div>
            <div class="col-md-5 col-sm-5">
                ${data[0].company}
            </div>
            <div class="col-md-5 col-sm-5">
                ${data[1].company}
            </div>
        </div>

        <div class="row">
            <div class="col-sm-2 col-md-2 ">
                <strong>Shape Size: </strong>
            </div>
            <div class="col-sm-5 col-md-5 ">
                ${data[0].shapeSize}
            </div>
            <div class="col-sm-5 col-md-5 ">
                ${data[1].shapeSize}
            </div>
        </div>

        <div class="row">
            <div class="col-sm-2 col-md-2 ">
                <strong>Feed Type: </strong>
            </div>
            <div class="col-sm-5 col-md-5 ">
                ${data[0].feedType}
            </div>
            <div class="col-sm-5 col-md-5 ">
                ${data[1].feedType}
            </div>
        </div>

        <div class="row">
            <div class="col-sm-2 col-md-2 ">
                <strong>Price <br> ($USD/Kg): </strong>
            </div>
            <div class="col-sm-5 col-md-5  priceCell1">
                ${data[0].priceKgUSD}
            </div>
            <div class="col-sm-5 col-md-5  priceCell2">
                ${data[1].priceKgUSD}
            </div>
        </div>

        <div class="row">
            <div class="col-sm-2 col-md-2 ">
                <strong>Packaging (Kg): </strong>
            </div>
            <div class="col-sm-5 col-md-5 ">
                ${data[0].packagingKg}
            </div>
            <div class="col-sm-5 col-md-5 ">
                ${data[1].packagingKg}
            </div>
        </div>

        <div class="row">
            <div class="col-sm-2 col-md-2 ">
                <strong>Ingredients: </strong>
            </div>
            <div class="col-sm-5 col-md-5 ">
                ${data[0].ingredient}
            </div>
            <div class="col-sm-5 col-md-5 ">
                ${data[1].ingredient}
            </div>
        </div>

        <div class="row">
            <div class="col-sm-2 col-md-2 ">
                <strong>Protein Sources: </strong>
            </div>
            <div class="col-sm-5 col-md-5  proteinSourceCell1">
                ${data[0].proteinSources}
            </div>
            <div class="col-sm-5 col-md-5  proteinSourceCell2">
                ${data[1].proteinSources}
            </div>
        </div>
        `
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
