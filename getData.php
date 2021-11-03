<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$DB_HOST = "localhost";
$DB_NAME = "blog-afpa";
$DB_USER = "root";
$DB_PASSWORD = "";
// connection bdd
try {
    $database = new PDO("mysql:host=$DB_HOST;dbname=$DB_NAME", $DB_USER, $DB_PASSWORD, [
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
} catch (Exception $e) {
    die('Error : ' . $e->getMessage());
}

$request = $database->prepare('SELECT * FROM post');
$request->execute();

$postList = $request->fetchAll();

echo json_encode($postList);
