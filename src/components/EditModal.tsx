import { useState, useEffect } from 'react';
import type { Tax, Country } from '../types';
import { api } from '../services/api';
import './EditModal.css';

interface EditModalProps {
  tax: Tax | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedTax: Tax) => void;
}

export const EditModal = ({ tax, isOpen, onClose, onSave }: EditModalProps) => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && tax) {
      setName(tax.name || '');
      setCountry(tax.country || '');
      setError(null);
    }
  }, [isOpen, tax]);

  useEffect(() => {
    if (isOpen) {
      const fetchCountries = async () => {
        try {
          const data = await api.getCountries();
          setCountries(data);
        } catch (err) {
          setError('Failed to load countries');
        }
      };
      fetchCountries();
    }
  }, [isOpen]);

  const handleSave = async () => {
    if (!tax) return;

    if (!name.trim()) {
      setError('Name is required');
      return;
    }

    if (!country.trim()) {
      setError('Country is required');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Get existing tax data and merge with updated fields
      const existingTax = await api.getTaxById(tax.id);
      const updatedTax = await api.updateTax(tax.id, {
        ...existingTax,
        name: name.trim(),
        country: country.trim(),
      });
      onSave(updatedTax);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update tax');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      onClose();
    }
  };

  if (!isOpen || !tax) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Edit Tax</h2>
          <button className="modal-close" onClick={handleClose} disabled={loading}>
            ×
          </button>
        </div>

        <div className="modal-body">
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              placeholder="Enter tax name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              disabled={loading}
            >
              <option value="">Select a country</option>
              {countries.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="modal-footer">
          <button
            className="btn btn-secondary"
            onClick={handleClose}
            disabled={loading}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

