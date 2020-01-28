<?php

// ADD ISSET TO VALIDATION




if($_REQUEST['act'] == 'validate')
{
    $validatedData = array();

    // For name validation
    if(isset($_REQUEST['name']))
    {
        if(!preg_match("/^[a-zA-Z ]*$/", $_REQUEST['name']))
        {
            $validatedData['name'] = 1;
        }
        else if(!preg_match("/^[a-zA-Z]{5,20}$/", $_REQUEST['name']))
        {
            $validatedData['name'] = 2;
        }
        else
        {
            $validatedData['name'] = 0;
        }
    }
    

    // For id validation
    if(isset($_REQUEST['id']))
    {
        if(!preg_match("/^[0-9]*$/", $_REQUEST['id']))
        {
            $validatedData['id'] = 1;
        }
        else if(!preg_match("/^[0-9]{9}$/", $_REQUEST['id']))
        {
            $validatedData['id'] = 2;
        }
        else
        {
            $validatedData['id'] = 0;
        }
    }
    

    // For department validation
    if(isset($_REQUEST['department']))
    {
        if(preg_match("/^(Advertising)$/", $_REQUEST['department']))
        {
            $validatedData['department'] = 1;
        }
        else
        {
            $validatedData['department'] = 0;
        }

        // For bonus unlock validation
        if(preg_match("/^(Sales)$/", $_REQUEST['department']))
        {
            $validatedData['bonusUnlock'] = 1;
        }
        else
        {
            $validatedData['bonusUnlock'] = 0;
        }
    }
    

    

    // For bonus validation
    if(isset($_REQUEST['bonus']))
    {
        if(!preg_match("/^[0-9]*$/", $_REQUEST['bonus']))
        {
            $validatedData['bonus'] = 1;
        }
        else
        {
            $validatedData['bonus'] = 0;
        }
    }
    

    echo json_encode($validatedData);

}


?>