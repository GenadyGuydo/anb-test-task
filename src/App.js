
import './App.css';


const clients = [
  { id: 1, name: 'Client 1', email: 'client1@example.com' },
  { id: 2, name: 'Client 2', email: 'client2@example.com' },
  { id: 3, name: 'Client 3', email: 'client3@example.com' },
  // Добавьте больше клиентов при необходимости
];

const App = () => {
  return (
    <div className="app">
      <div className="sidebar">
        {clients.map((client) => (
          <div key={client.id} className="sidebar-item">
            {client.name}
          </div>
        ))}
      </div>
      <div className="main">
        <table className="client-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
