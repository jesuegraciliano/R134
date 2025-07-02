// DEBUG: assegure-se no Console que R404A está entre as chaves
// (verifique em DevTools > Console após o carregamento da página)
console.log('Fluidos disponíveis:', Object.keys(tables));

const tables = {
  R134A: {
    /* … seus dados originais de R134A … */
  },
  R410A: {
    /* … seus dados originais de R410A … */
  },
  R404A: {
    "-50": { P:  85.2, HL: 133.1, HV: 337.3 },
    "-45": { P: 108.6, HL: 139.3, HV: 340.6 },
    "-40": { P: 136.7, HL: 145.6, HV: 343.8 },
    "-35": { P: 170.1, HL: 152.4, HV: 347.0 },
    "-30": { P: 209.5, HL: 159.9, HV: 350.3 },
    "-25": { P: 255.4, HL: 166.3, HV: 353.4 },
    "-20": { P: 308.7, HL: 172.8, HV: 356.5 },
    "-15": { P: 370.1, HL: 179.4, HV: 359.6 },
    "-10": { P: 440.4, HL: 186.1, HV: 362.6 },
    "-5":  { P: 520.5, HL: 193.0, HV: 365.5 },
    "0":   { P: 611.1, HL: 200.0, HV: 368.3 },
    "5":   { P: 713.3, HL: 207.2, HV: 371.0 },
    "10":  { P: 827.8, HL: 214.5, HV: 373.6 },
    "15":  { P: 955.6, HL: 222.1, HV: 376.0 },
    "20":  { P:1097.7, HL: 229.9, HV: 378.3 },
    "25":  { P:1255.0, HL: 237.9, HV: 380.4 },
    "30":  { P:1422.7, HL: 246.2, HV: 382.2 },
    "35":  { P:1619.7, HL: 254.8, HV: 383.8 },
    "40":  { P:1829.2, HL: 263.8, HV: 385.1 },
    "45":  { P:2058.3, HL: 273.2, HV: 385.8 },
    "50":  { P:2308.2, HL: 283.2, HV: 386.1 }
  }
};

// Referências ao DOM
const fluidSelect = document.getElementById('fluid');
const tempSelect  = document.getElementById('temperature');
const btnCalc     = document.getElementById('calculate-btn');
const resultDiv   = document.getElementById('result');

// Popula temperaturas sempre que o fluido mudar (ou ao carregar)
function populateTemps() {
  const fluid = fluidSelect.value;
  tempSelect.innerHTML = Object.keys(tables[fluid])
    .map(t => `<option value="${t}">${t.replace('.', ',')}</option>`)
    .join('');
}
fluidSelect.addEventListener('change', populateTemps);
window.addEventListener('load', populateTemps);

// Lookup e exibição de resultados
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
