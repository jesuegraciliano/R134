const tabela = {
  "-20": { HL: 174, HV: 386 },
  "-18": { HL: 176, HV: 387 },
  "-16": { HL: 179, HV: 388 },
  "-14": { HL: 181, HV: 390 },
  "-12": { HL: 184, HV: 391 },
  "-10": { HL: 186, HV: 392 },
  "-8":  { HL: 189, HV: 393 },
  "-6":  { HL: 191, HV: 394 },
  "-4":  { HL: 194, HV: 395 },
  "-2":  { HL: 197, HV: 397 },
  "0":   { HL: 199, HV: 398 },
  "2":   { HL: 202, HV: 399 },
  "4":   { HL: 205, HV: 400 },
  "6":   { HL: 207, HV: 401 },
  "8":   { HL: 210, HV: 402 },
  "10":  { HL: 213, HV: 403 },
  "12":  { HL: 215, HV: 404 },
  "14":  { HL: 218, HV: 406 },
  "16":  { HL: 221, HV: 407 },
  "18":  { HL: 224, HV: 408 },
  "20":  { HL: 226, HV: 409 },
  "22":  { HL: 229, HV: 410 },
  "24":  { HL: 232, HV: 411 },
  "26":  { HL: 235, HV: 412 },
  "28":  { HL: 238, HV: 413 },
  "30":  { HL: 240, HV: 414 },
  "32":  { HL: 243, HV: 415 },
  "34":  { HL: 246, HV: 416 },
  "36":  { HL: 249, HV: 417 },
  "38":  { HL: 252, HV: 418 },
  "40":  { HL: 255, HV: 418 },
  "42":  { HL: 258, HV: 419 },
  "44":  { HL: 261, HV: 420 },
  "46":  { HL: 264, HV: 421 },
  "48":  { HL: 267, HV: 422 },
  "50":  { HL: 270, HV: 423 }
};

document.getElementById('calculate-btn').addEventListener('click', () => {
  const temp = document.getElementById('temperature').value;
  const resultado = document.getElementById('result');
  if (tabela.hasOwnProperty(temp)) {
    const { HL, HV } = tabela[temp];
    resultado.innerHTML = `
      <p>Para T = ${temp} °C:</p>
      <p><strong>HL</strong>: ${HL} kJ/kg</p>
      <p><strong>HV</strong>: ${HV} kJ/kg</p>
    `;
  } else {
    resultado.innerHTML = `<p>Temperatura não disponível. Utilize valores de -20 a 50 °C em incrementos de 2 °C.</p>`;
  }
});
