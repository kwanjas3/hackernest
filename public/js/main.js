let selectRows;

$(function () {
    console.log("jQuery ready");
    $("#compareBtn").on('click', function () {
        // $(".potentialAlert").empty();
        selectRows = onSelectionChanged();

        if (selectRows.length == 2) {
            compareRows(selectRows);
        }

        else {
            $(".potentialAlert div").removeClass("hidden");

            setTimeout(function() {
                $(".potentialAlert div").addClass("hidden");
            }, 3000);
        }
    });

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

    console.log(data[0].proteinSources);

    let displayTemplate = _.template(
        `
        <div class="row">
            <div class="col-sm-2 col-md-2">
                <strong>Name: </strong>
            </div>
            <div class="col-sm-5 col-md-5">
                <a href="https://www.google.ca" target="_blank">
                    ${data[0].productName}
                </a>
            </div>
            <div class="col-sm-5 col-md-5">
                <a href="https://www.google.ca" target="_blank">
                    ${data[1].productName}
                </a>
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

        <div class="row">
            <div class="col-sm-2 col-md-2">
                <strong>Env Impct: </strong>
            </div>
            <div class="col-sm-5 col-md-5 score1">
                
            </div>
            <div class="col-sm-5 col-md-5 score2">
                
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
        $(".score2").css({"background": "green", "color": "yellow"});
        $(".score2").html(`Score: ${data[1].proteinSources/2}`);

        $(".proteinSourceCell2").css("background-color", "red");
        $(".proteinSourceCell2").css("color", "yellow");
        $(".score1").css({"background": "red", "color": "yellow"});
        $(".score1").html(`Score: ${data[0].proteinSources/2}`);

    } else if (parseInt(data[0].proteinSources) == parseInt(data[1].proteinSources)) {
        $(".proteinSourceCell1").css("background-color", "orange");
        $(".proteinSourceCell1").css("color", "yellow");
        $(".score1").css({"background": "orange", "color": "yellow"});
        $(".score1").html(`Score: ${data[0].proteinSources/2}`);

        $(".proteinSourceCell2").css("background-color", "orange");
        $(".proteinSourceCell2").css("color", "yellow");
        $(".score2").css({"background": "orange", "color": "yellow"});
        $(".score2").html(`Score: ${data[1].proteinSources/2}`);
    }
    else {
        $(".proteinSourceCell2").css("background-color", "green");
        $(".proteinSourceCell2").css("color", "yellow");
        $(".score1").css({"background": "green", "color": "yellow"});
        $(".score1").html(`Score: ${data[0].proteinSources/2}`);

        $(".proteinSourceCell1").css("background-color", "red");
        $(".proteinSourceCell1").css("color", "yellow");
        $(".score2").css({"background": "red", "color": "yellow"});
        $(".score2").html(`Score: ${data[1].proteinSources/2}`);

    }
    // console.log(parseFloat(data[0].proteinSources));
}
