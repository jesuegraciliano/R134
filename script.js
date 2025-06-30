// Tabelas de propriedades sem interpolação, apenas valores de -20 a +50
const tables = {
   R134A: {
    "-70": { P: 8.3,   HL: 119.47, HV: 354.62 },
    "-65": { P: 11.7,  HL: 123.18, HV: 357.73 },
    "-60": { P: 16.3,  HL: 127.53, HV: 360.86 },
    "-55": { P: 22.2,  HL: 132.37, HV: 364.00 },
    "-50": { P: 29.9,  HL: 137.62, HV: 367.16 },
    "-45": { P: 39.6,  HL: 143.18, HV: 370.32 },
    "-40": { P: 51.8,  HL: 148.98, HV: 373.48 },
    "-35": { P: 66.8,  HL: 154.98, HV: 376.64 },
    "-30": { P: 85.1,  HL: 161.12, HV: 379.80 },
    "-26.3":{ P:101.3, HL: 165.80, HV: 382.16 },
    "-25": { P:107.2, HL: 167.38, HV: 382.95 },
    "-20": { P:133.7, HL: 173.74, HV: 386.08 },
    "-15": { P:165.0, HL: 180.19, HV: 389.20 },
    "-10": { P:201.7, HL: 186.72, HV: 392.28 },
    "-5":  { P:244.5, HL: 193.32, HV: 395.34 },
    "0":   { P:294.0, HL: 200.00, HV: 398.36 },
    "5":   { P:350.9, HL: 206.75, HV: 401.32 },
    "10":  { P:415.8, HL: 213.58, HV: 404.23 },
    "15":  { P:489.5, HL: 220.49, HV: 407.07 },
    "20":  { P:572.8, HL: 227.49, HV: 409.84 },
    "25":  { P:666.3, HL: 234.59, HV: 412.51 },
    "30":  { P:771.0, HL: 241.79, HV: 415.08 },
    "35":  { P:887.6, HL: 249.10, HV: 417.52 },
    "40":  { P:1017.0,HL: 256.54, HV: 419.82 },
    "45":  { P:1160.2,HL: 264.11, HV: 421.96 },
    "50":  { P:1318.1,HL: 271.83, HV: 423.91 }
  },
    
  R410A: {
    "-20": { P: 399.6, Hf: 28.24, Hv: 271.89 },
    "-15": { P: 480.4, Hf: 35.47, Hv: 273.90 },
    "-10": { P: 573.1, Hf: 42.80, Hv: 275.78 },
    "-5":  { P: 678.9, Hf: 50.22, Hv: 277.53 },
    "0":   { P: 798.7, Hf: 57.76, Hv: 279.12 },
    "5":   { P: 933.9, Hf: 65.41, Hv: 280.55 },
    "10":  { P: 1085.7, Hf: 73.21, Hv: 281.78 },
    "15":  { P: 1255.4, Hf: 81.18, Hv: 282.79 },
    "20":  { P: 1444.2, Hf: 89.27, Hv: 283.55 },
    "25":  { P: 1653.6, Hf: 97.59, Hv: 284.02 },
    "30":  { P: 1885.1, Hf:106.14, Hv: 284.16 },
    "35":  { P: 2140.2, Hf:114.95, Hv: 283.89 },
    "40":  { P: 2420.7, Hf:124.09, Hv: 283.13 },
    "45":  { P: 2728.3, Hf:133.61, Hv: 281.76 },
    "50":  { P: 3065.2, Hf:143.65, Hv: 279.58 }
  }
};

// DOM elements
const fluidSelect = document.getElementById('fluid');
const tempSelect  = document.getElementById('temperature');
const btnCalc     = document.getElementById('calculate-btn');
const resultDiv   = document.getElementById('result');

// Preenche dropdown de temperaturas
function populateTemps() {
  const fluid = fluidSelect.value;
  tempSelect.innerHTML = Object.keys(tables[fluid])
    .map(t => `<option value="${t}">${t.replace('.', ',')}</option>`)
    .join('');
}

fluidSelect.addEventListener('change', populateTemps);
window.addEventListener('load', populateTemps);

// Cálculo via lookup simples
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
