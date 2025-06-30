const tabela = {
  "-20": { P: 132.99, HL: 174, HV: 386 },
  "-18": { P: 144.83, HL: 176, HV: 387 },
  "-16": { P: 157.48, HL: 179, HV: 388 },
  "-14": { P: 170.99, HL: 181, HV: 390 },
  "-12": { P: 185.40, HL: 184, HV: 391 },
  "-10": { P: 200.73, HL: 186, HV: 392 },
  "-8":  { P: 217.04, HL: 189, HV: 393 },
  "-6":  { P: 234.36, HL: 191, HV: 394 },
  "-4":  { P: 252.74, HL: 194, HV: 395 },
  "-2":  { P: 272.21, HL: 197, HV: 397 },
  "0":   { P: 292.82, HL: 199, HV: 398 },
  "2":   { P: 314.62, HL: 202, HV: 399 },
  "4":   { P: 337.65, HL: 205, HV: 400 },
  "6":   { P: 361.95, HL: 207, HV: 401 },
  "8":   { P: 387.56, HL: 210, HV: 402 },
  "10":  { P: 414.55, HL: 213, HV: 403 },
  "12":  { P: 442.94, HL: 215, HV: 404 },
  "14":  { P: 472.80, HL: 218, HV: 406 },
  "16":  { P: 504.16, HL: 221, HV: 407 },
  "18":  { P: 537.08, HL: 224, HV: 408 },
  "20":  { P: 571.60, HL: 226, HV: 409 },
  "22":  { P: 607.78, HL: 229, HV: 410 },
  "24":  { P: 645.66, HL: 232, HV: 411 },
  "26":  { P: 685.30, HL: 235, HV: 412 },
  "28":  { P: 726.75, HL: 238, HV: 413 },
  "30":  { P: 770.06, HL: 240, HV: 414 },
  "32":  { P: 815.28, HL: 243, HV: 415 },
  "34":  { P: 862.47, HL: 246, HV: 416 },
  "36":  { P: 911.68, HL: 249, HV: 417 },
  "38":  { P: 962.98, HL: 252, HV: 418 },
  "40":  { P: 1016.40, HL: 255, HV: 418 },
  "42":  { P: 1072.02, HL: 258, HV: 419 },
  "44":  { P: 1129.90, HL: 261, HV: 420 },
  "46":  { P: 1190.08, HL: 264, HV: 421 },
  "48":  { P: 1252.63, HL: 267, HV: 422 },
  "50":  { P: 1317.62, HL: 270, HV: 423 }
};

document.getElementById('calculate-btn').addEventListener('click', () => {
  const temp = document.getElementById('temperature').value;
  const resultado = document.getElementById('result');
  if (tabela.hasOwnProperty(temp)) {
    const { P, HL, HV } = tabela[temp];
    resultado.innerHTML = `
      <p>Para T = ${temp} °C:</p>
      <p><strong>P</strong>: ${P} kPa</p>
      <p><strong>HL</strong>: ${HL} kJ/kg</p>
      <p><strong>HV</strong>: ${HV} kJ/kg</p>
    `;
  } else {
    resultado.innerHTML = `<p>Temperatura não disponível. Utilize valores de -20 a 50 °C em incrementos de 2 °C.</p>`;
  }
});
