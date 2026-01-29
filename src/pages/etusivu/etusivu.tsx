//ETUSIVU 
// yksinkertaisesti etusivu, sisäänkirjautuminen, subcribtion options

import content from './content.json';
import type { page } from '../../customtypes/types';

interface EtusivuProps {
  setPage: React.Dispatch<React.SetStateAction<page>>;
}

export function Etusivu({ setPage }: EtusivuProps) {   
   return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: 'url(/images/etusivu.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Arial, sans-serif',
        padding: '2rem'
      }}>
        <header style={{
          fontSize: '3rem',
          color: '#333',
          marginBottom: '2rem'
        }}>{content.otsikko}</header>
        <button 
          onClick={() => setPage("project")}
          style={{
            fontSize: '1.5rem',
            padding: '1rem 2rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
        >
          {content.nappi}
        </button>
      </div>
    );
}
