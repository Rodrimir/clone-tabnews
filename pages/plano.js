import Head from 'next/head';

function PlanoPage() {
  return (
    <>
      <Head>
        <title>Plano Semanal Visual</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          body { font-family: 'Inter', sans-serif; }
          .task-card p, .task-card ul { margin-bottom: 0.5rem; }
          .task-card ul { list-style-position: inside; padding-left: 0.5rem; }
          .task-card li { margin-bottom: 0.25rem; }
          .schedule-grid { display: grid; grid-template-columns: auto 1fr; gap: 0.5rem 1rem; }
          .schedule-time { font-weight: 600; color: #555; text-align: right; }
          .schedule-activity { padding-left: 1rem; border-left: 2px solid; }
        `}} />
      </Head>
      <div className="bg-gray-50 text-gray-800">
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">Meu Plano Semanal</h1>

            <section className="mb-10">
                <div className="bg-green-100 border-l-8 border-green-500 rounded-2xl p-6 shadow-lg">
                    <h2 className="text-3xl font-bold text-green-800 mb-6">🍎 Alimentação</h2>
                    <div className="space-y-4">
                        <div className="task-card bg-white/70 p-4 rounded-lg">
                            <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                                <h3 className="text-xl font-semibold">Café da Manhã</h3>
                                <span className="text-sm font-medium bg-green-200 text-green-800 px-3 py-1 rounded-full">07:00</span>
                            </div>
                            <p><strong>Opção 1:</strong> Ovos mexidos (3-4 unidades) + 2 fatias de tapioca + 1 banana.</p>
                            <p><strong>Opção 2:</strong> Mingau de aveia (4 col. sopa) com água, 1 scoop de proteína vegetal (opcional), banana picada e canela.</p>
                        </div>
                        <div className="task-card bg-white/70 p-4 rounded-lg">
                            <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                                <h3 className="text-xl font-semibold">Lanche da Manhã</h3>
                                <span className="text-sm font-medium bg-green-200 text-green-800 px-3 py-1 rounded-full">10:00</span>
                            </div>
                            <p><strong>Opção 1:</strong> 2 ovos cozidos.</p>
                            <p><strong>Opção 2:</strong> 1 banana com pasta de amendoim (1 col. sopa).</p>
                        </div>
                        <div className="task-card bg-white/70 p-4 rounded-lg">
                            <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                                <h3 className="text-xl font-semibold">Almoço</h3>
                                <span className="text-sm font-medium bg-green-200 text-green-800 px-3 py-1 rounded-full">12:30</span>
                            </div>
                            <p><strong>Base:</strong> 150-200g de Arroz + Feijão.</p>
                            <p><strong>Proteína:</strong> Ovos mexidos/cozidos (3-4), atum em lata, sardinha em lata, ou frango.</p>
                            <p><strong>Salada:</strong> Folhas verdes, tomate, cenoura ralada. Tempere com azeite, limão e sal.</p>
                        </div>
                        <div className="task-card bg-white/70 p-4 rounded-lg">
                            <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                                <h3 className="text-xl font-semibold">Lanche da Tarde</h3>
                                <span className="text-sm font-medium bg-green-200 text-green-800 px-3 py-1 rounded-full">16:00 (Seg/Ter/Sex) / 18:00 (Qua/Qui)</span>
                            </div>
                            <p><strong>Opção 1:</strong> Tapioca com 2 ovos mexidos.</p>
                            <p><strong>Opção 2:</strong> Shake com 2 bananas, água e 1 scoop de proteína vegetal.</p>
                        </div>
                        <div className="task-card bg-white/70 p-4 rounded-lg">
                            <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                                <h3 className="text-xl font-semibold">Pós-Treino</h3>
                                <span className="text-sm font-medium bg-green-200 text-green-800 px-3 py-1 rounded-full">Imediatamente após treinar</span>
                            </div>
                            <p>1 banana ou 2 ovos cozidos.</p>
                        </div>
                        <div className="task-card bg-white/70 p-4 rounded-lg">
                            <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                                <h3 className="text-xl font-semibold">Jantar</h3>
                                <span className="text-sm font-medium bg-green-200 text-green-800 px-3 py-1 rounded-full">20:00 (Seg) / 23:15 (Ter-Sex)</span>
                            </div>
                            <p>Semelhante ao almoço, com porção menor de carboidratos. Ex: Omelete (3 ovos) com vegetais e uma porção de arroz.</p>
                        </div>
                        <div className="task-card bg-white/70 p-4 rounded-lg">
                            <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                                <h3 className="text-xl font-semibold">Ceia (Opcional)</h3>
                                <span className="text-sm font-medium bg-green-200 text-green-800 px-3 py-1 rounded-full">30 min antes de dormir</span>
                            </div>
                            <p>Chá de camomila ou erva-doce (sem açúcar).</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-10">
                <div className="bg-sky-100 border-l-8 border-sky-500 rounded-2xl p-6 shadow-lg">
                    <h2 className="text-3xl font-bold text-sky-800 mb-6">💪 Atividades Físicas</h2>
                    <div className="space-y-4">
                        <div className="task-card bg-white/70 p-4 rounded-lg">
                            <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                               <h3 className="text-xl font-semibold">Segunda: Treino de Força A</h3>
                               <span className="text-sm font-medium bg-sky-200 text-sky-800 px-3 py-1 rounded-full">17:00 - 18:00</span>
                            </div>
                            <p className="font-medium text-gray-600">4 Séries de:</p>
                            <ul className="list-disc">
                                <li>Barra Fixa (pegada aberta) até a falha</li>
                                <li>Flexão de Braço até a falha</li>
                                <li>Agachamento Livre - 20 reps</li>
                                <li>Remada Australiana até a falha</li>
                                <li>Elevação de panturrilhas - 25 reps</li>
                            </ul>
                        </div>
                        <div className="task-card bg-white/70 p-4 rounded-lg"><h3><strong>Terça-feira:</strong> Descanso ou Recuperação Ativa (Caminhada leve 15-20 min)</h3></div>
                        <div className="task-card bg-white/70 p-4 rounded-lg">
                             <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                               <h3 className="text-xl font-semibold">Quarta: Resistência Cardiovascular</h3>
                               <span className="text-sm font-medium bg-sky-200 text-sky-800 px-3 py-1 rounded-full">17:30 - 18:30</span>
                            </div>
                            <p>Corrida de intensidade moderada e constante (50 min).</p>
                        </div>
                        <div className="task-card bg-white/70 p-4 rounded-lg"><h3><strong>Quinta-feira:</strong> Descanso ou Recuperação Ativa (Caminhada leve 15-20 min)</h3></div>
                        <div className="task-card bg-white/70 p-4 rounded-lg">
                            <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                               <h3 className="text-xl font-semibold">Sexta: Treino de Força B</h3>
                               <span className="text-sm font-medium bg-sky-200 text-sky-800 px-3 py-1 rounded-full">15:30 - 16:30</span>
                            </div>
                            <p className="font-medium text-gray-600">4 Séries de:</p>
                            <ul className="list-disc">
                               <li>Barra Fixa (pegada fechada/chin-up) - até a falha</li>
                               <li>Flexão Diamante até a falha</li>
                               <li>Afundo (avanço) - 15 reps por perna</li>
                               <li>Abdominais na barra (elevação de joelhos) - até a falha</li>
                               <li>Prancha - 1 minuto</li>
                            </ul>
                        </div>
                        <div className="task-card bg-white/70 p-4 rounded-lg">
                            <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                               <h3 className="text-xl font-semibold">Sábado: Treino com Foco em Volume</h3>
                               <span className="text-sm font-medium bg-sky-200 text-sky-800 px-3 py-1 rounded-full">Manhã</span>
                            </div>
                            <p>Repita o Treino A ou B, mas adicione uma série a mais em cada exercício ou reduza o tempo de descanso.</p>
                        </div>
                        <div className="task-card bg-white/70 p-4 rounded-lg"><h3><strong>Domingo:</strong> Descanso Total ou Lazer Ativo</h3></div>
                    </div>
                </div>
            </section>
            
            <section className="mb-10">
                <div className="bg-indigo-100 border-l-8 border-indigo-500 rounded-2xl p-6 shadow-lg">
                     <h2 className="text-3xl font-bold text-indigo-800 mb-6">🧠 Cuidados, Saúde Mental e Estudo</h2>
                    <div className="space-y-4">
                        <div className="task-card bg-white/70 p-4 rounded-lg flex flex-wrap justify-between items-center gap-2"><h3><strong>Diariamente:</strong> Skincare (Limpeza, Hidratante, Protetor Solar)</h3><span className="text-sm font-medium bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full">06:45</span></div>
                        <div className="task-card bg-white/70 p-4 rounded-lg flex flex-wrap justify-between items-center gap-2"><h3><strong>Diariamente:</strong> Tomar medicação conforme prescrição</h3><span className="text-sm font-medium bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full">07:00</span></div>
                        <div className="task-card bg-white/70 p-4 rounded-lg flex flex-wrap justify-between items-center gap-2"><h3><strong>Diariamente:</strong> Atividade relaxante (10-15 min)</h3><span className="text-sm font-medium bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full">22:00</span></div>
                        <div className="task-card bg-white/70 p-4 rounded-lg flex flex-wrap justify-between items-center gap-2"><h3><strong>Diariamente:</strong> Skincare (Limpeza, Hidratante)</h3><span className="text-sm font-medium bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full">23:30</span></div>
                        <div className="task-card bg-white/70 p-4 rounded-lg flex flex-wrap justify-between items-center gap-2"><h3><strong>Diariamente:</strong> Dormir de 7 a 9 horas por noite</h3><span className="text-sm font-medium bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full">~23:45</span></div>

                        <hr className="border-indigo-200 my-4" />

                        <div className="task-card bg-white/70 p-4 rounded-lg"><h3><strong>Segunda (19:00 - 22:00):</strong> Revisar e adiantar leituras</h3></div>
                        <div className="task-card bg-white/70 p-4 rounded-lg"><h3><strong>Terça (Intervalos):</strong> Revisar anotações</h3></div>
                        <div className="task-card bg-white/70 p-4 rounded-lg"><h3><strong>Quarta (08:00 - 10:30):</strong> Estudo focado</h3></div>
                        <div className="task-card bg-white/70 p-4 rounded-lg"><h3><strong>Quinta (08:00 - 09:45):</strong> Estudo focado</h3></div>
                        <div className="task-card bg-white/70 p-4 rounded-lg"><h3><strong>Sexta (16:30 - 18:30):</strong> Organizar a matéria da semana</h3></div>
                        <div className="task-card bg-white/70 p-4 rounded-lg"><h3><strong>Sábado (Manhã/Tarde):</strong> Bloco de estudo longo (3-4 horas)</h3></div>
                        <div className="task-card bg-white/70 p-4 rounded-lg"><h3><strong>Domingo (Fim da Tarde):</strong> Revisão leve e planeamento</h3></div>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-amber-100 border-l-8 border-amber-500 rounded-2xl p-6 shadow-lg">
                    <h2 className="text-3xl font-bold text-amber-800 mb-6">🗓️ Cronograma Diário Detalhado</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="task-card bg-white/70 p-4 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3 text-center">Segunda-feira</h3>
                            <div className="schedule-grid">
                                <div className="schedule-time">06:45</div> <div className="schedule-activity border-indigo-400">Skincare e Cuidados</div>
                                <div className="schedule-time">07:00</div> <div className="schedule-activity border-green-400">Café da Manhã e Medicação</div>
                                <div className="schedule-time">08:00</div> <div className="schedule-activity border-gray-400">Trabalho / Aula</div>
                                <div className="schedule-time">10:00</div> <div className="schedule-activity border-green-400">Lanche da Manhã</div>
                                <div className="schedule-time">12:30</div> <div className="schedule-activity border-green-400">Almoço</div>
                                <div className="schedule-time">13:30</div> <div className="schedule-activity border-gray-400">Trabalho / Aula</div>
                                <div className="schedule-time">16:00</div> <div className="schedule-activity border-green-400">Lanche da Tarde</div>
                                <div className="schedule-time">17:00</div> <div className="schedule-activity border-sky-400">Treino de Força A</div>
                                <div className="schedule-time">18:00</div> <div className="schedule-activity border-green-400">Pós-Treino</div>
                                <div className="schedule-time">19:00</div> <div className="schedule-activity border-indigo-400">Estudo</div>
                                <div className="schedule-time">20:00</div> <div className="schedule-activity border-green-400">Jantar</div>
                                <div className="schedule-time">22:00</div> <div className="schedule-activity border-indigo-400">Atividade Relaxante</div>
                                <div className="schedule-time">23:30</div> <div className="schedule-activity border-indigo-400">Rotina Noturna</div>
                            </div>
                        </div>

                        <div className="task-card bg-white/70 p-4 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3 text-center">Terça-feira</h3>
                            <div className="schedule-grid">
                                <div className="schedule-time">06:45</div> <div className="schedule-activity border-indigo-400">Skincare e Cuidados</div>
                                <div className="schedule-time">07:00</div> <div className="schedule-activity border-green-400">Café da Manhã e Medicação</div>
                                <div className="schedule-time">08:00</div> <div className="schedule-activity border-gray-400">Trabalho / Aula</div>
                                <div className="schedule-time">10:00</div> <div className="schedule-activity border-green-400">Lanche da Manhã</div>
                                <div className="schedule-time">12:30</div> <div className="schedule-activity border-green-400">Almoço</div>
                                <div className="schedule-time">13:30</div> <div className="schedule-activity border-gray-400">Trabalho / Aula</div>
                                <div className="schedule-time">16:00</div> <div className="schedule-activity border-green-400">Lanche da Tarde</div>
                                <div className="schedule-time">Tarde</div> <div className="schedule-activity border-sky-400">Recuperação Ativa</div>
                                <div className="schedule-time">22:00</div> <div className="schedule-activity border-indigo-400">Atividade Relaxante</div>
                                <div className="schedule-time">23:15</div> <div className="schedule-activity border-green-400">Jantar</div>
                                <div className="schedule-time">23:30</div> <div className="schedule-activity border-indigo-400">Rotina Noturna</div>
                            </div>
                        </div>

                        <div className="task-card bg-white/70 p-4 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3 text-center">Quarta-feira</h3>
                            <div className="schedule-grid">
                                <div className="schedule-time">06:45</div> <div className="schedule-activity border-indigo-400">Skincare e Cuidados</div>
                                <div className="schedule-time">07:00</div> <div className="schedule-activity border-green-400">Café da Manhã e Medicação</div>
                                <div className="schedule-time">08:00</div> <div className="schedule-activity border-indigo-400">Estudo Focado</div>
                                <div className="schedule-time">10:00</div> <div className="schedule-activity border-green-400">Lanche da Manhã</div>
                                <div className="schedule-time">12:30</div> <div className="schedule-activity border-green-400">Almoço</div>
                                <div className="schedule-time">13:30</div> <div className="schedule-activity border-gray-400">Trabalho / Aula</div>
                                <div className="schedule-time">17:30</div> <div className="schedule-activity border-sky-400">Corrida</div>
                                <div className="schedule-time">18:30</div> <div className="schedule-activity border-green-400">Pós-Treino e Lanche</div>
                                <div className="schedule-time">22:00</div> <div className="schedule-activity border-indigo-400">Atividade Relaxante</div>
                                <div className="schedule-time">23:15</div> <div className="schedule-activity border-green-400">Jantar</div>
                                <div className="schedule-time">23:30</div> <div className="schedule-activity border-indigo-400">Rotina Noturna</div>
                            </div>
                        </div>

                        <div className="task-card bg-white/70 p-4 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3 text-center">Quinta-feira</h3>
                            <div className="schedule-grid">
                                <div className="schedule-time">06:45</div> <div className="schedule-activity border-indigo-400">Skincare e Cuidados</div>
                                <div className="schedule-time">07:00</div> <div className="schedule-activity border-green-400">Café da Manhã e Medicação</div>
                                <div className="schedule-time">08:00</div> <div className="schedule-activity border-indigo-400">Estudo Focado</div>
                                <div className="schedule-time">10:00</div> <div className="schedule-activity border-green-400">Lanche da Manhã</div>
                                <div className="schedule-time">12:30</div> <div className="schedule-activity border-green-400">Almoço</div>
                                <div className="schedule-time">13:30</div> <div className="schedule-activity border-gray-400">Trabalho / Aula</div>
                                <div className="schedule-time">18:00</div> <div className="schedule-activity border-green-400">Lanche da Tarde</div>
                                <div className="schedule-time">Tarde</div> <div className="schedule-activity border-sky-400">Recuperação Ativa</div>
                                <div className="schedule-time">22:00</div> <div className="schedule-activity border-indigo-400">Atividade Relaxante</div>
                                <div className="schedule-time">23:15</div> <div className="schedule-activity border-green-400">Jantar</div>
                                <div className="schedule-time">23:30</div> <div className="schedule-activity border-indigo-400">Rotina Noturna</div>
                            </div>
                        </div>

                        <div className="task-card bg-white/70 p-4 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3 text-center">Sexta-feira</h3>
                            <div className="schedule-grid">
                               <div className="schedule-time">06:45</div> <div className="schedule-activity border-indigo-400">Skincare e Cuidados</div>
                               <div className="schedule-time">07:00</div> <div className="schedule-activity border-green-400">Café da Manhã e Medicação</div>
                               <div className="schedule-time">08:00</div> <div className="schedule-activity border-gray-400">Trabalho / Aula</div>
                               <div className="schedule-time">10:00</div> <div className="schedule-activity border-green-400">Lanche da Manhã</div>
                               <div className="schedule-time">12:30</div> <div className="schedule-activity border-green-400">Almoço</div>
                               <div className="schedule-time">15:30</div> <div className="schedule-activity border-sky-400">Treino de Força B</div>
                               <div className="schedule-time">16:30</div> <div className="schedule-activity border-green-400">Pós-Treino e Lanche</div>
                               <div className="schedule-time">16:30</div> <div className="schedule-activity border-indigo-400">Organizar Estudos</div>
                               <div className="schedule-time">18:30</div> <div className="schedule-activity border-gray-400">Tempo Livre</div>
                               <div className="schedule-time">22:00</div> <div className="schedule-activity border-indigo-400">Atividade Relaxante</div>
                               <div className="schedule-time">23:15</div> <div className="schedule-activity border-green-400">Jantar</div>
                               <div className="schedule-time">23:30</div> <div className="schedule-activity border-indigo-400">Rotina Noturna</div>
                            </div>
                        </div>

                        <div className="task-card bg-white/70 p-4 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3 text-center">Fim de Semana</h3>
                            <div className="schedule-grid">
                                <div className="schedule-time">Sábado Manhã</div> <div className="schedule-activity border-sky-400">Treino com Volume</div>
                                <div className="schedule-time">Sábado Manhã/Tarde</div> <div className="schedule-activity border-indigo-400">Bloco de Estudo Longo</div>
                                <div className="schedule-time">Domingo</div> <div className="schedule-activity border-sky-400">Descanso / Lazer Ativo</div>
                                <div className="schedule-time">Domingo Fim de Tarde</div> <div className="schedule-activity border-indigo-400">Revisão Leve e Planejamento</div>
                                <div className="schedule-time text-sm col-span-2 pt-2 text-center text-gray-500">Mantenha a rotina de cuidados e alimentação de forma flexível.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </div>
    </>
  );
}

export default PlanoPage;
