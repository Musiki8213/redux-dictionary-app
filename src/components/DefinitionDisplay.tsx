
import React from 'react';
import { useAppSelector } from '../store/hooks';

export const DefinitionDisplay: React.FC = () => {
  const { entries, loading, error } = useAppSelector((state) => state.dictionary);

  if (loading === 'pending') {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  return (
    <div>
      {entries.map((entry, index) => (
        <article key={index}>
          <h2>{entry.word} <small>{entry.phonetic}</small></h2>
          {entry.meanings.map((meaning, mIndex) => (
            <div key={mIndex}>
              <h3>{meaning.partOfSpeech}</h3>
              {meaning.definitions.map((def, dIndex) => (
                <div key={dIndex}>
                  <p><strong>Definition:</strong> {def.definition}</p>
                  {def.example && <p><em>Example: {def.example}</em></p>}
                </div>
              ))}
            </div>
          ))}
        </article>
      ))}
    </div>
  );
};
