import content from "./content.json";

export function MapView() {
  return (
    <div style={{ 
      display: 'flex',
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh' 
    }}>
      <h1>{content.otsikko}</h1>
    </div>
  );
}