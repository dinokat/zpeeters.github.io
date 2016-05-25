//startpositie, tussen 0 en 695
var I = 0.0;

//totale duur
var T = 64000;

//afblijven
var fpms = 0.06;
var N = R.length - 1;
var k = N / (T * fpms);

//bepaal hoe "vloeiend" de overgang loopt
var myVar = setInterval(function () {
    newBgColor()
}, 16);

//bereken nieuwe "tussenwaarde" in een rij
function decIndex(A, i) {
    var j = Math.floor(i);
    var R = A[j] + (A[(j + 1) > A.length ? 0 : j + 1] - A[j]) * (i - j);
    return (Math.round(R));
}

//bereken en zet de nieuwe achtergrondkleur
function newBgColor() {
    var kleur = "rgb(" + decIndex(R, I) + "," + decIndex(G, I) + "," + decIndex(B, I) + ")";
    document.body.style.backgroundColor = kleur;
    I += k;
    if (I > N) I -= N;
}
