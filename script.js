// 1. DECLARE a constante com os dados ANTES de usá-la.
const tables = {
  // OBS: Adicione os dados para R134A e R410A para que funcionem no seletor.
  R134A: {
    /* … dados para R134A … */
  },
  R410A: {
    /* … dados para R410A … */
  },
  R404A: {
    "-50": { P:   85.2, HL: 133.1, HV: 337.3 },
    "-45": { P:  108.6, HL: 139.3, HV: 340.6 },
    "-40": { P:  136.7, HL: 145.6, HV: 343.8 },
    "-35": { P:  170.1, HL: 152.4, HV: 347.0 },
    "-30": { P:  209.5, HL: 159.9, HV: 350.3 },
    "-25": { P:  255.4, HL: 166.3, HV: 353.4 },
    "-20": { P:  308.7, HL: 172.8, HV: 356.5 },
    "-15": { P:  370.1, HL: 179.4, HV: 359.6 },
    "-10": { P:  440.4, HL: 186.1, HV: 362.6 },
    "-5":  { P:  520.5, HL: 193.0, HV: 365.5 },
    "0":   { P:  611.1, HL: 200.0, HV: 368.3 },
    "5":   { P:  713.3, HL: 207.2, HV: 371.0 },
    "10":  { P:  827.8, HL: 214.5, HV: 373.6 },
    "15":  { P:  955.6, HL: 222.1, HV: 376.0 },
    "20":  { P: 1097.7, HL: 229.9, HV: 378.3 },
    "25":  { P: 1255.0, HL: 237.9, HV: 380.4 },
    "30":  { P: 1422.7, HL: 246.2, HV: 382.2 },
    "35":  { P: 1619.7, HL: 254.8, HV: 383.8 },
    "40":  { P: 1829.2, HL: 263.8, HV: 385.1 },
    "45":  { P: 2058.3, HL: 273.2, HV: 385.8 },
    "50":  { P: 2308.2, HL: 283.2, HV: 386.1 }
  }
};

// DEBUG: Agora esta linha funciona, pois `tables` já existe.
console.log('Fluidos disponíveis:', Object.keys(tables));

// 2. Referências aos elementos do DOM
const fluidSelect = document.getElementById('fluid');
const tempSelect  = document.getElementById('temperature');
const btnCalc     = document.getElementById('calculate-btn');
const resultDiv   = document.getElementById('result');

// 3. Funções e Eventos

// Popula o seletor de temperaturas com base no fluido escolhido
function populateTemps() {
  const selectedFluid = fluidSelect.value;
  
  // Limpa opções antigas
  tempSelect.innerHTML = ''; 

  // Verifica se há dados para o fluido selecionado
  if (tables[selectedFluid] && Object.keys(tables[selectedFluid]).length > 0) {
    const temperatures = Object.keys(tables[selectedFluid]);
    tempSelect.innerHTML = temperatures
      .map(t => `<option value="${t}">${t.replace('.', ',')}</option>`)
      .join('');
    btnCalc.disabled = false; // Habilita o botão
  } else {
    tempSelect.innerHTML = '<option>Dados não disponíveis</option>';
    btnCalc.disabled = true; // Desabilita o botão se não houver dados
  }
}

// Calcula e exibe os resultados
function calculateAndShowResults() {
  const fluid = fluidSelect.value;
  const temp  = tempSelect.value;

  // Garante que há dados antes de tentar acessá-los
  if (!tables[fluid] || !tables[fluid][temp]) {
      resultDiv.innerHTML = `<p>Erro: Dados não encontrados para ${fluid} a ${temp}°C.</
