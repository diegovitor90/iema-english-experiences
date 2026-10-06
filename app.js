const activities = [
  {id:'hallway', icon:'👻', title:'Haunted Hallway', tags:['speaking','vocabulary'], focus:'Speaking • Vocabulary • Drama', duration:'15–20 min', space:'Corredor', summary:'Placas bilíngues, microdramatizações e frases curtas em inglês.', materials:['placas bilíngues','iluminação segura','roteiros curtos'], evidence:'Registro de 3 expressões usadas ou compreendidas.', steps:['Delimite um trecho curto do corredor.','Crie placas bilíngues de orientação.','Ensaiem frases curtas com estudantes-mediadores.','Garanta passagem livre e iluminação segura.']},
  {id:'treat', icon:'🍬', title:'Trick or Treat Station', tags:['speaking','vocabulary'], focus:'Vocabulary • Pronunciation', duration:'10–15 min', space:'Estação', summary:'Quiz, riddles, spelling e tongue twisters em pequenas rodadas.', materials:['cards de perguntas','placas','recompensas simbólicas opcionais'], evidence:'Cartão com desafios concluídos.', steps:['Monte perguntas de diferentes níveis.','Organize fila ou rodízio.','Peça sempre uma produção oral curta.','Use doces apenas se compatíveis com as regras da escola.']},
  {id:'story', icon:'📖', title:'Scary Story Corner', tags:['writing','speaking'], focus:'Writing • Speaking', duration:'20–30 min', space:'Sala ou corredor', summary:'Mini-contos em inglês com até cinco frases, narrados ou expostos.', materials:['papel ou formulário digital','canetas','mural'], evidence:'Texto final + leitura ou apresentação.', steps:['Dê um prompt curto.','Defina limite de até cinco frases.','Revise rapidamente com os estudantes.','Exponha ou apresente as produções.']},
  {id:'hunt', icon:'🔎', title:'Vocabulary Hunt', tags:['vocabulary'], focus:'Reading • Vocabulary', duration:'15–20 min', space:'Sala ou corredor', summary:'Cartões espalhados com palavras, imagens e pequenos desafios.', materials:['cards','folha de respostas','cronômetro'], evidence:'Lista de palavras + uso em frases.', steps:['Selecione 10–20 palavras.','Espalhe os cards em uma área delimitada.','Organize grupos.','Finalize com 3 palavras usadas em frases.']},
  {id:'photo', icon:'📸', title:'Photo Booth', tags:['speaking','writing'], focus:'Speaking • Multimodality', duration:'livre', space:'Ponto fotográfico', summary:'Fotos com prompts em inglês, legendas e pequenas descrições.', materials:['fundo simples','placas com prompts','celular autorizado'], evidence:'Legenda ou descrição em inglês.', steps:['Crie um fundo simples.','Inclua prompts visíveis.','Peça uma frase antes da foto.','Respeite autorização de imagem.']},
  {id:'scaryoke', icon:'🎤', title:'Scaryoke', tags:['listening','speaking'], focus:'Listening • Fluency', duration:'15–25 min', space:'Sala ou palco', summary:'Trechos de músicas adequadas ao contexto escolar com tarefas de escuta.', materials:['caixa de som','letra parcial','playlist apropriada'], evidence:'Mini listening task + participação.', steps:['Selecione trechos adequados.','Prepare uma tarefa simples de escuta.','Evite depender apenas do canto.','Finalize com vocabulário-chave.']}
];

const grid=document.querySelector('#activityGrid');
function renderActivities(filter='all'){
  grid.innerHTML='';
  activities.filter(a=>filter==='all'||a.tags.includes(filter)).forEach(a=>{
    const card=document.createElement('article');
    card.className='activity-card';
    card.innerHTML=`<div class="activity-icon">${a.icon}</div><h3>${a.title}</h3><p>${a.summary}</p><div class="activity-tags">${a.tags.map(t=>`<span>${t}</span>`).join('')}</div><small>${a.duration} • ${a.space}</small>`;
    card.addEventListener('click',()=>openActivity(a));
    grid.appendChild(card);
  })
}
renderActivities();

document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');renderActivities(btn.dataset.filter);
}));

const modal=document.querySelector('#activityModal');
function openActivity(a){
  document.querySelector('#modalContent').innerHTML=`
    <span class="eyebrow">Atividade</span>
    <h2>${a.icon} ${a.title}</h2>
    <div class="modal-meta"><span>${a.focus}</span><span>${a.duration}</span><span>${a.space}</span></div>
    <p>${a.summary}</p>
    <h3>Materiais</h3><ul>${a.materials.map(x=>`<li>${x}</li>`).join('')}</ul>
    <h3>Passo a passo</h3><ol>${a.steps.map(x=>`<li>${x}</li>`).join('')}</ol>
    <h3>Evidência de aprendizagem</h3><p>${a.evidence}</p>`;
  modal.showModal();
}
document.querySelector('.modal-close').addEventListener('click',()=>modal.close());
modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});

const recommendations={
  classroom:'Ideal para começar pequeno, com uma turma e baixo custo.',
  stations:'Ideal quando há corredores ou salas próximas e possibilidade de rodízio.',
  showcase:'Ideal para escolas com mobilização coletiva, equipe e espaço para socialização.'
};
document.querySelectorAll('.format-card').forEach(card=>card.addEventListener('click',()=>{
  document.querySelectorAll('.format-card').forEach(c=>c.classList.remove('active'));
  card.classList.add('active');
  document.querySelector('#formatRecommendation span').textContent=recommendations[card.dataset.format];
}));

const spaceData={
  welcome:['Welcome Point','Recepção, orientações bilíngues e distribuição de grupos.',['Welcome! Start here.','Mapa do circuito com setas.','Fluxo livre e acolhimento.']],
  hallway:['Haunted Hallway','Corredor curto com placas bilíngues e microdramatizações.',['Beware! Enter if you dare!','Mediadores com frases ensaiadas.','Iluminação segura e passagem livre.']],
  treat:['Trick or Treat Station','Estação rápida de quiz, spelling e tongue twisters.',['Cards com desafios.','Filas curtas ou rodízio.','Recompensas apenas se adequadas.']],
  photo:['Photo Booth','Ponto de produção multimodal com frases e legendas em inglês.',['Prompts visíveis.','Fundo simples e reutilizável.','Respeito à autorização de imagem.']],
  stage:['Showcase','Espaço opcional para apresentações, contos, desfile ou fechamento.',['Tempo de fala curto.','Critérios transparentes.','Participação voluntária.']]
};
document.querySelectorAll('.space-node').forEach(btn=>btn.addEventListener('click',()=>{
  const [title,desc,items]=spaceData[btn.dataset.space];
  document.querySelector('#spaceDetail').innerHTML=`<div><span class="mini-label">Como montar</span><h3>${title}</h3><p>${desc}</p></div><ul>${items.map(i=>`<li>${i}</li>`).join('')}</ul>`;
}));

document.querySelectorAll('.copy-card').forEach(btn=>btn.addEventListener('click',async()=>{
  await navigator.clipboard.writeText(btn.dataset.copy);
  const toast=document.querySelector('#toast');toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1400);
}));

const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
