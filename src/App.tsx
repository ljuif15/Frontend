import { useState, useEffect } from 'react';
import { TaxesTable } from './components/TaxesTable';
import { EditModal } from './components/EditModal';
import { api } from './services/api';
import type { Tax } from './types';
import './App.css';

function App() {
  const [taxes, setTaxes] = useState<Tax[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTax, setSelectedTax] = useState<Tax | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchTaxes();
  }, []);

  const fetchTaxes = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.getTaxes();
      setTaxes(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load taxes');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (tax: Tax) => {
    setSelectedTax(tax);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTax(null);
  };

  const handleSave = (updatedTax: Tax) => {
    setTaxes((prevTaxes) =>
      prevTaxes.map((tax) => (tax.id === updatedTax.id ? updatedTax : tax))
    );
  };

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <h1>Taxes Management</h1>
        </header>

        <main className="app-main">
          {loading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Loading taxes...</p>
            </div>
          ) : error ? (
            <div className="error-state">
              <p>{error}</p>
              <button className="btn btn-primary" onClick={fetchTaxes}>
                Retry
              </button>
            </div>
          ) : (
            <TaxesTable data={taxes} onEdit={handleEdit} />
          )}
        </main>

        <EditModal
          tax={selectedTax}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSave}
        />
      </div>
    </div>
  );
}

export default App;

