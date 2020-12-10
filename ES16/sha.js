const { sha512 } = require('js-sha512');

console.log(sha512(sha512('honeyDev')));
console.log(sha512(sha512('honeyStage')));
console.log(sha512(sha512('milojeffsurigloriaken')));


// jwt-sign-key-secret.yaml 의 jwtSignKey 를 아래 값으로 변경했어요.
//
// (반영완료)Development: sha512(sha512('honeyDev')) | base64
// kubectl apply -f jwt-sign-key-secret.yaml -n development
//
// (반영완료)Stage:sha512(sha512('honeyStage')) | base64
// kubectl apply -f jwt-sign-key-secret.yaml -n stage
//
// (마림바 할 때 적용예정)Production: sha512(sha512('milojeffsurigloriaken')) | base64
// kubectl apply -f jwt-sign-key-secret.yaml -n production
