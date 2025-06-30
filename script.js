const tables = {
  R134A: {
    "-20": { P: 132.99, HL: 23.97, HV: 235.02 },
    /* ... restante da tabela ... */
    "50":  { P: 1317.62, HL: 120.51, HV: 271.54 }
  },
  R410A: {
    "-60": { P: 64.1, Hf: -27.45, Hv: 252.51 },
    /* ... restante da tabela ... */
    "50":  { P: 3065.2, Hf: 143.65, Hv: 279.58 }
  }
};

document.getElementById('calculate-btn').addEventListener('click', () => {
  const fluid = document.getElementById('fluid').value;
  const temp   = document.getElementById('temperature').value;
  const tab    = tables[fluid];
  const out    = document.getElementById('result');

  if (tab[temp]) {
    const props = tab[temp];
    out.innerHTML = `
      <p><strong>Fluido:</strong> ${fluid}</p>
      <p><strong>Temperatura:</strong> ${temp.replace('.', ',')} °C</p>
      <p><strong>P:</strong> ${props.P.toFixed(2).replace('.', ',')} kPa</p>
      <p><strong>${fluid==='R410A'?'Hf':'HL'}:</strong> ${(props.HL||props.Hf).toFixed(2).replace('.', ',')} kJ/kg</p>
      <p><strong>Hv:</strong> ${(props.HV||props.Hv).toFixed(2).replace('.', ',')} kJ/kg</p>
    `;
  } else {
    out.innerHTML = `<p>Temperatura não disponível para o fluido <strong>${fluid}</strong>.</p>`;
  }
});
