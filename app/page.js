export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5' }}>
      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', textAlign: 'center', maxWidth: '400px' }}>
        <h1 style={{ color: '#333', marginBottom: '1.5rem' }}>Economyzz</h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>Gerenciador de Finanças Pessoais</p>
        <a href="/login" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#333', color: 'white', textDecoration: 'none', borderRadius: '4px', marginRight: '10px' }}>Entrar</a>
        <a href="/signup" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#666', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>Criar Conta</a>
      </div>
    </div>
  )
}
