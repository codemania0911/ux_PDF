<?php

if (isset($_POST['html'])) {
    require_once("vendor/autoload.php"); 

    $html = $_POST['html'];    
    $mpdf = new \Mpdf\Mpdf([
        'mode' => 'c',
        'format' => 'A4',
        'margin_left' => 15,
        'margin_right' => 15,
        'margin_top' => 25,
        'margin_bottom' => 10,
        'margin_header' => 16,
        'margin_footer' => 13,
    ]);

    $mpdf->SetDisplayMode('fullpage');
    $mpdf->shrink_tables_to_fit = 1;
    // $mpdf->list_indent_first_level = 0; // 1 or 0 - whether to indent the first level of a list

    // // Load a stylesheet
    $stylesheet1 = file_get_contents('common/css/jquery-ui.css');
    $stylesheet2 = file_get_contents('common/css/print.css');
    $stylesheet3 = file_get_contents('common/css/print_on.css');
    $stylesheet4 = file_get_contents('common/css/rsp-form-thin.css');

    $mpdf->WriteHTML($stylesheet1, 1);
    $mpdf->WriteHTML($stylesheet2, 1);
    $mpdf->WriteHTML($stylesheet3, 1);
    $mpdf->WriteHTML($stylesheet4, 1);

    $mpdf->WriteHTML($html);

    $mpdf->Output("test.pdf");

    $result = ["success" => "true"];
    echo json_encode($result);
} else {
    $result = ["success" => "false"];
    echo json_encode($result);
}