import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface JournalEntry {
  id: number;
  date: string;
  title: string;
  content: string;
  category: string;
}

const JournalContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #2c5530;
  margin-bottom: 2rem;
  text-align: center;
`;

const JournalLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EntryForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #2c5530;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #2c5530;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;

  &:focus {
    outline: none;
    border-color: #2c5530;
  }
`;

const Button = styled.button`
  background-color: #2c5530;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e3c21;
  }
  
  & + & {
    margin-left: 0.5rem;
  }
`;

const EntriesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const EntryCard = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const EntryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const EntryTitle = styled.h3`
  margin: 0;
  color: #2c5530;
`;

const EntryDate = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

const EntryCategory = styled.span`
  background-color: #f0f0f0;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  color: #444;
`;

const EntryContent = styled.p`
  color: #444;
  line-height: 1.6;
  margin: 0;
`;

const GardenJournal: React.FC = () => {
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    try {
      const savedEntries = localStorage.getItem('journalEntries');
      return savedEntries ? JSON.parse(savedEntries) : [];
    } catch (error) {
      console.error('Failed to load journal entries:', error);
      return [];
    }
  });
  
  const [newEntry, setNewEntry] = useState<Omit<JournalEntry, 'id'>>({
    date: new Date().toISOString().split('T')[0],
    title: '',
    content: '',
    category: 'Planting',
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem('journalEntries', JSON.stringify(entries));
  }, [entries]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId !== null) {
      setEntries(entries.map(entry => entry.id === editingId ? { ...entry, ...newEntry } : entry));
      setEditingId(null);
    } else {
      const entry: JournalEntry = {
        id: Date.now(),
        ...newEntry,
      };
      setEntries([entry, ...entries]);
    }
    setNewEntry({ date: new Date().toISOString().split('T')[0], title: '', content: '', category: 'Planting' });
  };

  const handleDelete = (id: number) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const handleEdit = (entry: JournalEntry) => {
    setNewEntry({ date: entry.date, title: entry.title, content: entry.content, category: entry.category });
    setEditingId(entry.id);
  };

  return (
    <JournalContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Title>Garden Journal</Title>
      <JournalLayout>
        <EntryForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Date</Label>
            <Input type="date" value={newEntry.date} onChange={e => setNewEntry({ ...newEntry, date: e.target.value })} />
          </FormGroup>
          <FormGroup>
            <Label>Title</Label>
            <Input type="text" value={newEntry.title} onChange={e => setNewEntry({ ...newEntry, title: e.target.value })} required />
          </FormGroup>
          <FormGroup>
            <Label>Content</Label>
            <TextArea value={newEntry.content} onChange={e => setNewEntry({ ...newEntry, content: e.target.value })} required />
          </FormGroup>
          <Button type="submit">{editingId ? 'Update' : 'Add'} Entry</Button>
        </EntryForm>
        <EntriesList>
          {entries.map(entry => (
            <EntryCard key={entry.id}>
              <EntryHeader>
                <EntryTitle>{entry.title}</EntryTitle>
                <EntryDate>{entry.date}</EntryDate>
              </EntryHeader>
              <EntryContent>{entry.content}</EntryContent>
              <Button onClick={() => handleEdit(entry)}>Edit</Button>
              <Button onClick={() => handleDelete(entry.id)}>Delete</Button>
            </EntryCard>
          ))}
        </EntriesList>
      </JournalLayout>
    </JournalContainer>
  );
};

export default GardenJournal;
