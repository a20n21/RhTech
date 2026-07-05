export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div style={{ background: 'white', padding: '40px', borderRadius: '12px', textAlign: 'center' }}>
      <h1>{title}</h1>
      <p style={{ color: '#64748b' }}>Módulo de {title} em desenvolvimento. Em breve, novos recursos aqui.</p>
      <img src="https://undraw.co/api/illustrations/work_in_progress" alt="Em breve" style={{ width: '300px', marginTop: '20px' }} />
    </div>
  );
}
