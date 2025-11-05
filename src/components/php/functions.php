<?php
function jsonResponse($data, $code = 200) {
  header('Content-Type: application/json');
  http_response_code($code);
  echo json_encode($data);
  exit;
}

function getUserData($ticket, $redirect_url) {
  // On utilise directement l’URL d'origine
  $serviceUrl = $redirect_url;

  $casUrl = "https://cas.bordeaux-inp.fr/serviceValidate?service=" . urlencode($serviceUrl) . "&ticket=" . urlencode($ticket) . "&format=json";

  // Log dans debug.log
  file_put_contents(__DIR__ . "/debug.log", date('Y-m-d H:i:s') . " 🔗 URL CAS : $casUrl\n", FILE_APPEND);

  $result = json_decode(file_get_contents($casUrl), true);

  if (!isset($result['serviceResponse']['authenticationSuccess'])) {
    return false;
  } else {
    $user = $result['serviceResponse']['authenticationSuccess'];
    return [
      'user' => $user['user'],
      'attributes' => [
        'nom' => $user['attributes']['nom'][0],
        'prenom' => $user['attributes']['prenom'][0],
        'courriel' => $user['attributes']['courriel'][0],
        'profil' => $user['attributes']['profil'][0],
        'nom_complet' => $user['attributes']['nom_complet'][0],
        'ecole' => $user['attributes']['ecole'][0],
        'diplome' => $user['attributes']['diplome'][0],
      ]
    ];
  }
}
?>
