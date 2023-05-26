function resultado() {
    var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20, nota;

    // 1a pregunta
    if (document.getElementById('p11').checked==true) {p1=1}
    else {p1=0}
    // 2a pregunta
    if (document.getElementById('p23').checked==true) {p2=1}
    else {p2=0}
    // 3a pregunta
    if (document.getElementById('p33').checked==true) {p3=1}
    else {p3=0}
    // 4a pregunta
    if (document.getElementById('p43').checked==true) {p4=1}
    else {p4=0}
    // 5a pregunta
    if (document.getElementById('p52').checked==true) {p5=1}
    else {p5=0}
    // 6a pregunta
    if (document.getElementById('p66').checked==true) {p6=1}
    else {p6=0}
    // 7a pregunta
    if (document.getElementById('p71').checked==true) {p7=1}
    else {p7=0}
    // 8a pregunta
    if (document.getElementById('p88').checked==true) {p8=1}
    else {p8=0}
    // 9a pregunta
    if (document.getElementById('p92').checked==true) {p9=1}
    else {p9=0}
    // 10a pregunta
    if (document.getElementById('p03').checked==true) {p10=1}
    else {p10=0}
    // 11a pregunta
    if (document.getElementById('p111').checked==true) {p11=1}
    else {p11=0}
     // 12a pregunta
     if (document.getElementById('p123').checked==true) {p12=1}
     else {p12=0}
      // 13a pregunta
    if (document.getElementById('p131').checked==true) {p13=1}
    else {p13=0}
     // 14a pregunta
     if (document.getElementById('p141').checked==true) {p14=1}
     else {p14=0}
      // 15a pregunta
    if (document.getElementById('p152').checked==true) {p15=1}
    else {p15=0}
    // 16a pregunta
    if (document.getElementById('p162').checked==true) {p16=1}
    else {p16=0}
    // 17a pregunta
    if (document.getElementById('p171').checked==true) {p17=1}
    else {p17=0}
    // 18a pregunta
    if (document.getElementById('p181').checked=true) {p18=1}
    else {p18=0}
    // 19a pregunta
    if (document.getElementById('p191').checked==true) {p19=1}
    else {p19=0}
    // 20a pregunta
    if (document.getElementById('p197').checked==true) {p20=1}
    else {p20=0}


    nota=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10+p11+p12+p13+p14+p15+p16+p17+p18+p19+p20;
    alert(" Aciertos: " + nota);
    window.location = 'cuestionario.html'
}