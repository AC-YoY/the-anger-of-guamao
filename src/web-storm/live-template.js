/*
*   override default template
*/
// iter
for ( let $VAR$ of $ARRAY$ ) {
    $END$
}
// itar
for ( let $INDEX$ = 0; $INDEX$ < $ARRAY$.length; $INDEX$++ ) {
    const $VAR$ = $ARRAY$[ $INDEX$ ];
    $END$
}
// itin
for ( let $VAR$ in $ARRAY$ ) {
    $END$
}
/*
*   my templates
*/
//  log
console.log( '$position$' )
