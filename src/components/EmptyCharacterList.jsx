import React from 'react';

export function EmptyCharacterList({ refresh }) {
  return (
    <div className="bp3-non-ideal-state">
      <div className="bp3-non-ideal-state-visual">
        <span className="bp3-icon bp3-icon-clean"></span>
      </div>
      <h4 className="bp3-heading">Nenhuma lista de personagens foi encontrada</h4>
      <div>Talvez a página ou a sua internet não esteja funcionando corretamente.</div>
      <button className="bp3-button bp3-intent-primary" onClick={()=>refresh()}>Tentar novamente</button>
    </div>
  )
}