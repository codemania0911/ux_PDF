<?php

if (isset($_POST['html'])) {
    require_once("vendor/autoload.php"); 

    $html = $_POST['html'];

    $mpdf = new \Mpdf\Mpdf([
        'mode' => 'c',
        'format' => 'A4',
        'margin_left' => 25,
        'margin_right' => 25,
        'margin_top' => 25,
        'margin_bottom' => 10,
        'margin_header' => 16,
        'margin_footer' => 13,
    ]);

    $mpdf->SetDisplayMode('fullpage');
    $mpdf->shrink_tables_to_fit = 0;
    
    $stylesheet1 = file_get_contents('common/css/jquery-ui.css');
    $stylesheet2 = file_get_contents('common/css/print.css');
    $stylesheet3 = file_get_contents('common/css/print_on.css');
    $stylesheet4 = file_get_contents('common/css/rsp-form-thin.css');

    $mpdf->WriteHTML($stylesheet1, 1);
    $mpdf->WriteHTML($stylesheet2, 1);
    $mpdf->WriteHTML($stylesheet3, 1);
    $mpdf->WriteHTML($stylesheet4, 1);

    $mpdf->WriteHTML($html);

    $fileName = (new \DateTime())->format('Y-m-d H-i-s') . '.pdf';
    $mpdf->Output($fileName);
    
    $result = ["success" => $fileName];
    echo json_encode($result);
} else {
    $result = ["success" => "parameter failed"];
    echo json_encode($result);
}