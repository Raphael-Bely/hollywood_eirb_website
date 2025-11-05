<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

include 'config.php';
include 'functions.php';

if (!isset($_GET['ticket']) || !isset($_GET['redirect_url'])) {
  file_put_contents(__DIR__ . "/debug.log", date('Y-m-d H:i:s') . " ❌ Paramètres manquants\n", FILE_APPEND);
  return jsonResponse(["status" => "error", "code" => "CAS_MISSING_PARAMS"], 400);
}

$ticket = $_GET['ticket'];
$redirect_url_encoded = $_GET['redirect_url'];
$redirect_url = base64_decode($redirect_url_encoded);

$parsed_url = parse_url($redirect_url);
$path_only = $parsed_url['path'] ?? '';

// 🪵 Ajout dans le fichier debug.log
file_put_contents(__DIR__ . "/debug.log", date('Y-m-d H:i:s') . " 🎫 Ticket: $ticket | PATH: $path_only | WHITELIST: [" . implode(', ', $WHITE_LIST_URLS) . "]\n", FILE_APPEND);

if (!in_array($path_only, $WHITE_LIST_URLS)) {
  file_put_contents(__DIR__ . "/debug.log", date('Y-m-d H:i:s') . " ❌ Chemin '$path_only' NON autorisé\n", FILE_APPEND);
  return jsonResponse(["status" => "error", "code" => "CAS_INVALID_REDIRECT_URL"], 400);
}

$user = getUserData($ticket, $redirect_url);

if ($user === false) {
  file_put_contents(__DIR__ . "/debug.log", date('Y-m-d H:i:s') . " ❌ Ticket CAS invalide\n", FILE_APPEND);
  return jsonResponse(["status" => "error", "code" => "CAS_INVALID_TICKET"], 400);
}

$isAuthorized = false;

if ($user['attributes']['ecole'] === "enseirb-matmeca" && $user['attributes']['profil'] === "student") {
  $isAuthorized = true;
}

$authorizedUsers = ["echapelle", "kerherve"];

foreach ($authorizedUsers as $authorizedUser) {
  if ($user['user'] === $authorizedUser) {
    $isAuthorized = true;
    break;
  }
}

if (!$isAuthorized) {
  file_put_contents(__DIR__ . "/debug.log", date('Y-m-d H:i:s') . " ⛔ Accès refusé pour : " . $user['user'] . "\n", FILE_APPEND);
  return jsonResponse(["status" => "error", "code" => "CAS_UNAUTHORIZED"], 403);
}

file_put_contents(__DIR__ . "/debug.log", date('Y-m-d H:i:s') . " ✅ Accès autorisé pour : " . $user['user'] . "\n", FILE_APPEND);
return jsonResponse(["status" => "success", "videos" => $VIDEOS_URLS]);
?>
