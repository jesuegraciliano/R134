// Tabelas de propriedades, apenas valores inteiros de -20 a +50°C
const tables = {
  R134A: {
    "-20": { P: 132.99, HL: 23.97, HV: 235.02 },
    "-18": { P: 144.83, HL: 26.45, HV: 236.21 },
    "-16": { P: 157.48, HL: 28.95, HV: 237.40 },
    "-14": { P: 170.99, HL: 31.46, HV: 238.58 },
    "-12": { P: 185.40, HL: 33.99, HV: 239.76 },
    "-10": { P: 200.73, HL: 36.54, HV: 240.93 },
    "-8":  { P: 217.04, HL: 39.10, HV: 242.10 },
    "-6":  { P: 234.36, HL: 41.67, HV: 243.26 },
    "-4":  { P: 252.74, HL: 44.26, HV: 244.41 },
    "-2":  { P: 272.21, HL: 46.87, HV: 245.56 },
    "0":   { P: 292.82, HL: 49.49, HV: 246.70 },
    "2":   { P: 314.62, HL: 52.12, HV: 247.84 },
    "4":   { P: 337.65, HL: 54.77, HV: 248.96 },
    "6":   { P: 361.95, HL: 57.44, HV: 250.08 },
    "8":   { P: 387.56, HL: 60.12, HV: 251.19 },
    "10":  { P: 414.55, HL: 62.82, HV: 252.29 },
    "12":  { P: 442.94, HL: 65.53, HV: 253.38 },
    "14":  { P: 472.80, HL: 68.26, HV: 254.46 },
    "16":  { P: 504.16, HL: 71.00, HV: 255.53 },
    "18":  { P: 537.08, HL: 73.77, HV: 256.59 },
    "20":  { P: 571.60, HL: 76.54, HV: 257.64 },
    "22":  { P: 607.78, HL: 79.34, HV: 258.68 },
    "24":  { P: 645.66, HL: 82.15, HV: 259.70 },
    "26":  { P: 685.30, HL: 84.98, HV: 260.71 },
    "28":  { P: 726.75, HL: 87.83, HV: 261.71 },
    "30":  { P: 770.06, HL: 90.69, HV: 262.69 },
    "32":  { P: 815.28, HL: 93.58, HV: 263.66 },
    "34":  { P: 862.47, HL: 96.48, HV: 264.62 },
    "36":  { P: 911.68, HL: 99.40, HV: 265.55 },
    "38":  { P: 962.98, HL: 102.35, HV: 266.47 },
    "40":  { P: 1016.40, HL: 105.32, HV: 267.37 },
    "42":  { P: 1072.02, HL: 108.31, HV: 268.25 },
    "44":  { P: 1129.90, HL: 111.32, HV: 269.11 },
    "46":  { P: 1190.08, HL: 114.36, HV: 269.94 },
    "48":  { P: 1252.63, HL: 117.42, HV: 270.75 },
    "50":  { P: 1317.62, HL: 120.51, HV: 271.54 }
  },
  R410A: {
    "-20": { P: 399.6,  Hf: 28.24,  Hv: 271.89 },
    "-15": { P: 480.4,  Hf: 35.47,  Hv: 273.90 },
    "-10": { P: 573.1,  Hf: 42.80,  Hv: 275.78 },
    "-5":  { P: 678.9,  Hf: 50.22,  Hv: 277.53 },
    "0":   { P: 798.7,  Hf: 57.76,  Hv: 279.12 },
    "5":   { P: 933.9,  Hf: 65.41,  Hv: 280.55 },
    "10":  { P: 1085.7, Hf: 73.21,  Hv: 281.78 },
    "15":  { P: 1255.4, Hf: 81.18,  Hv: 282.79 },
    "20":  { P: 1444.2, Hf: 89.27,  Hv: 283.55 },
    "25":  { P: 1653.6, Hf: 97.59,  Hv: 284.02 },
    "30":  { P: 1885.1, Hf:106.14,  Hv: 284.16 },
    "35":  { P: 2140.2, Hf:114.95,  Hv: 283.89 },
    "40":  { P: 2420.7, Hf:124.09,  Hv: 283.13 },
    "45":  { P: 2728.3, Hf:133.61,  Hv: 281.76 },
    "50":  { P: 3065.2, Hf:143.65,  Hv: 279.58 }
  }
};

// Elementos do DOM
const fluidSelect = document.getElementById('fluid');
const tempSelect  = document.getElementById('temperature');
const btnCalc     = document.getElementById('calculate-btn');
const resultDiv   = document.getElementById('result');

// Popula as temperaturas válidas
function populateTemps() {
  const fluid = fluidSelect.value;
  tempSelect.innerHTML = Object.keys(tables[fluid])
    .map(t => `<option value="${t}">${t.replace('.', ',')}</option>`)
    .join('');
}

fluidSelect.addEventListener('change', populateTemps);
window.addEventListener('load', populateTemps);

// Ao clicar em “Calcular”, exibe P, HL/Hf e HV/Hv
btnCalc.addEventListener('click', () => {
  const fluid = fluidSelect.value;
  const temp  = tempSelect.value;
  const props = tables[fluid][temp];

  resultDiv.innerHTML = `
    <p><strong>Fluido:</strong> ${fluid}</p>
    <p><strong>Temperatura:</strong> ${temp.replace('.', ',')} °C</p>
    <p><strong>P:</strong> ${props.P.toFixed(2).replace('.', ',')} kPa</p>
    <p><strong>${fluid === 'R410A' ? 'Hf' : 'HL'}:</strong> ${(props.HL ?? props.Hf).toFixed(2).replace('.', ',')} kJ/kg</p>
    <p><strong>Hv:</strong> ${(props.HV ?? props.Hv).toFixed(2).replace('.', ',')} kJ/kg</p>
  `;
});
