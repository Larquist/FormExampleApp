$(document).ready(function(){
    var bonusUnlock = 0;
    var results;

    // validate for name
    /* $("#employeeName").keyup(function () 
    { 
        $.post("https://csunix.mohawkcollege.ca/~000371775/private/10133/2/parta.php",
        {
            name: $("#employeeName").val(),
            id: $("#employeeId").val(),
            department: $("#department").val(),
            bonus: $("#bonus").val(),
            bonusUnlock: bonusUnlock,
            act: "validate"
        },
            function (data) {
                console.log(data);
                results = JSON.parse(data);

                if(!$("#employeeName").val() == "")
                {
                    if(results.name == 1){
                        $("#nameAlert").html("Employee name cannot contain digits.").attr("role", "alert").removeClass().addClass("text-danger");
                        $("#employeeName").removeClass().addClass("form-control is-invalid");
                    }
                    else if(results.name == 2)
                    {
                        $("#nameAlert").html("Employee name must be between 5-20 characters in length.").attr("role", "alert").removeClass().addClass("text-danger");
                        $("#employeeName").removeClass().addClass("form-control is-invalid");
                    }
                    else
                    {
                        $("#nameAlert").html("").attr("role", "alert").removeClass().addClass("d-none");
                        $("#employeeName").removeClass().addClass("form-control is-valid");
                    }
                }
                else
                {
                    $("#idAlert").html("").attr("role", "alert").removeClass().addClass("d-none");
                    $("#employeeId").removeClass().addClass("form-control");
                }
                
            }
        );
    });

    //validate for id
    $("#employeeId").keyup(function () 
    { 
        $.post("https://csunix.mohawkcollege.ca/~000371775/private/10133/2/parta.php",
        {
            id: $("#employeeId").val(),
            act: "validate"
        },
            function (data) {
                console.log(data);
                results = JSON.parse(data);

                if(!$("#employeeId").val() == "")
                {
                    if(results.id == 1)
                    {
                        $("#idAlert").html("Employee ID must only contain digits.").attr("role", "alert").removeClass().addClass("text-danger");
                        $("#employeeId").removeClass().addClass("form-control is-invalid");
                    }
                    else if(results.id == 2)
                    {
                        $("#idAlert").html("Employee ID must be 9 digits in length.").attr("role", "alert").removeClass().addClass("text-danger");
                        $("#employeeId").removeClass().addClass("form-control is-invalid");
                    }
                    else
                    {
                        $("#idAlert").html("").attr("role", "alert").removeClass().addClass("d-none");
                        $("#employeeId").removeClass().addClass("form-control is-valid");
                    }
                }
                else
                {
                    $("#idAlert").html("").attr("role", "alert").removeClass().addClass("d-none");
                    $("#employeeId").removeClass().addClass("form-control");
                }
                
            }
        );
    });

    //validate for department
    $("#department").keyup(function () 
    { 
        $.post("https://csunix.mohawkcollege.ca/~000371775/private/10133/2/parta.php",
        {
            department: $("#department").val(),
            act: "validate"
        },
            function (data) {
                console.log(data);
                results = JSON.parse(data);

                if(!$("#department").val() == "")
                {
                    if(results.department == 1)
                    {
                        $("#departmentAlert").html("Advertising is not a valid department.").attr("role", "alert").removeClass().addClass("text-danger");
                        $("#department").removeClass().addClass("form-control is-invalid");
                    }
                    else
                    {
                        $("#departmentAlert").html("").attr("role", "alert").removeClass().addClass("d-none");
                        $("#department").removeClass().addClass("form-control is-valid");
                    }
                }
                else
                {
                    $("#departmentAlert").html("").attr("role", "alert").removeClass().addClass("d-none");
                    $("#department").removeClass().addClass("form-control");
                }
                
            }
        );
    });

    //validate for bonus
    $("#bonus").keyup(function () 
    { 
        if(bonusUnlock == 1)
        {
            $.post("https://csunix.mohawkcollege.ca/~000371775/private/10133/2/parta.php",
            {
                bonus: $("#bonus").val(),
                act: "validate",
                bonusUnlock: bonusUnlock
            },
                function (data) {
                    console.log(data);
                    results = JSON.parse(data);

                    if(!$("#bonus").val() == "")
                    {
                        if(results.bonus == 1)
                        {
                            $("#bonusAlert").html("Bonus must only contain digits.").attr("role", "alert").removeClass().addClass("text-danger");
                            $("#bonus").removeClass().addClass("form-control is-invalid");
                        }
                        else
                        {
                            $("#bonusAlert").html("").attr("role", "alert").removeClass().addClass("d-none");
                            $("#bonus").removeClass().addClass("form-control is-valid");
                        }
                    }
                    else
                    {
                        $("#bonusAlert").html("").attr("role", "alert").removeClass().addClass("d-none");
                        $("#bonus").removeClass().addClass("form-control");
                    }
                    
                }
            );
        }
    }); */

    $("input").keyup(function () 
    { 
        $.post("https://csunix.mohawkcollege.ca/~000371775/private/10133/2/parta.php",
        {
            name: $("#employeeName").val(),
            id: $("#employeeId").val(),
            department: $("#department").val(),
            bonus: $("#bonus").val(),
            bonusUnlock: bonusUnlock,
            act: "validate"
        },
            function (data) {
                console.log(data);
                results = JSON.parse(data);

                if(!$("#employeeName").val() == "")
                {
                    if(results.name == 1){
                        $("#nameAlert").html("Employee name cannot contain digits.").attr("role", "alert").removeClass().addClass("text-danger");
                        $("#employeeName").removeClass().addClass("form-control is-invalid");
                    }
                    else if(results.name == 2)
                    {
                        $("#nameAlert").html("Employee name must be between 5-20 characters in length.").attr("role", "alert").removeClass().addClass("text-danger");
                        $("#employeeName").removeClass().addClass("form-control is-invalid");
                    }
                    else
                    {
                        $("#nameAlert").html("").attr("role", "alert").removeClass().addClass("d-none");
                        $("#employeeName").removeClass().addClass("form-control is-valid");
                    }
                }
                else
                {
                    $("#idAlert").html("").attr("role", "alert").removeClass().addClass("d-none");
                    $("#employeeId").removeClass().addClass("form-control");
                }

                if(!$("#employeeId").val() == "")
                {
                    if(results.id == 1)
                    {
                        $("#idAlert").html("Employee ID must only contain digits.").attr("role", "alert").removeClass().addClass("text-danger");
                        $("#employeeId").removeClass().addClass("form-control is-invalid");
                    }
                    else if(results.id == 2)
                    {
                        $("#idAlert").html("Employee ID must be 9 digits in length.").attr("role", "alert").removeClass().addClass("text-danger");
                        $("#employeeId").removeClass().addClass("form-control is-invalid");
                    }
                    else
                    {
                        $("#idAlert").html("").attr("role", "alert").removeClass().addClass("d-none");
                        $("#employeeId").removeClass().addClass("form-control is-valid");
                    }
                }
                else
                {
                    $("#idAlert").html("").attr("role", "alert").removeClass().addClass("d-none");
                    $("#employeeId").removeClass().addClass("form-control");
                }

                if(!$("#department").val() == "")
                {
                    if(results.department == 1)
                    {
                        $("#departmentAlert").html("Advertising is not a valid department.").attr("role", "alert").removeClass().addClass("text-danger");
                        $("#department").removeClass().addClass("form-control is-invalid");
                    }
                    else
                    {
                        $("#departmentAlert").html("").attr("role", "alert").removeClass().addClass("d-none");
                        $("#department").removeClass().addClass("form-control is-valid");
                    }
                }
                else
                {
                    $("#departmentAlert").html("").attr("role", "alert").removeClass().addClass("d-none");
                    $("#department").removeClass().addClass("form-control");
                }

                if(!$("#bonus").val() == "")
                    {
                        if(results.bonus == 1)
                        {
                            $("#bonusAlert").html("Bonus must only contain digits.").attr("role", "alert").removeClass().addClass("text-danger");
                            $("#bonus").removeClass().addClass("form-control is-invalid");
                        }
                        else
                        {
                            $("#bonusAlert").html("").attr("role", "alert").removeClass().addClass("d-none");
                            $("#bonus").removeClass().addClass("form-control is-valid");
                        }
                    }
                    else
                    {
                        $("#bonusAlert").html("").attr("role", "alert").removeClass().addClass("d-none");
                        $("#bonus").removeClass().addClass("form-control");
                    }
                
                    if(results.bonusUnlock == 1)
                    {
                        $("#bonus").removeAttr("readonly");
                    }
                    else
                    {
                        $("#bonus").attr("readonly", true);
                    }
            }
        );

        return false;
    });

    // code for validating and inserting the data to the field
    $("form").submit(function()
    {
        $.post("https://csunix.mohawkcollege.ca/~000371775/private/10133/2/parta.php",
        {
            name: $("#employeeName").val(),
            id: $("#employeeId").val(),
            department: $("#department").val(),
            bonus: $("#bonus").val(),
            bonusUnlock: bonusUnlock,
            act: "validate"
        },
            function(data){
                results = JSON.parse(data);
                var html = "";

                if(results.name == 0 && results.id == 0 && results.department == 0 && results.bonus == 0)
                {
                    if($("#department").val() == "Sales")
                    {
                        html += "<tr class='table-info'><td>" + $("#employeeName").val() + "</td><td>" + $("#employeeId").val() + "</td><td>" + $("#department").val() + "</td><td>" + $("#bonus").val() + "</td></tr>";
                        $("#form-content").append(html);
                    }
                    else if($("#department").val() == "HR")
                    {
                        html += "<tr class='table-warning'><td>" + $("#employeeName").val() + "</td><td>" + $("#employeeId").val() + "</td><td>" + $("#department").val() + "</td><td>N/A</td></tr>";
                        $("#form-content").append(html);
                    }
                    else
                    {
                        html += "<tr><td>" + $("#employeeName").val() + "</td><td>" + $("#employeeId").val() + "</td><td>" + $("#department").val() + "</td><td>N/A</td></tr>";
                        $("#form-content").append(html);
                    }
                    
                }
            }
            
        );
        return false;
    });

});