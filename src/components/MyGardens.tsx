import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Garden {
  id: number;
  name: string;
  description: string;
  plants: number;
  lastModified: string;
  imageUrl: string;
}

const GardensContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #2c5530;
  margin: 0;
`;

const CreateButton = styled.button`
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
`;

const GardenGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const GardenCard = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const GardenImage = styled.div<{ $imageUrl: string }>`
  height: 200px;
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
`;

const GardenInfo = styled.div`
  padding: 1.5rem;
`;

const GardenName = styled.h3`
  color: #2c5530;
  margin: 0 0 0.5rem 0;
`;

const GardenDescription = styled.p`
  color: #666;
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
`;

const GardenStats = styled.div`
  display: flex;
  justify-content: space-between;
  color: #888;
  font-size: 0.8rem;
`;

const CreateGardenModal = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  z-index: 1000;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #333;
  font-weight: 500;
`;

const Input = styled.input`
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
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #2c5530;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button<{ $variant?: 'secondary' }>`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: ${props => props.$variant === 'secondary' ? '#f0f0f0' : '#2c5530'};
  color: ${props => props.$variant === 'secondary' ? '#333' : 'white'};

  &:hover {
    background-color: ${props => props.$variant === 'secondary' ? '#e0e0e0' : '#1e3c21'};
  }
`;

const MyGardens: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [gardens, setGardens] = useState<Garden[]>([
    {
      id: 1,
      name: 'Vegetable Garden',
      description: 'A mix of seasonal vegetables and herbs.',
      plants: 12,
      lastModified: '2024-03-16',
      imageUrl: '/images/garden1.jpg',
    },
    {
      id: 2,
      name: 'Flower Bed',
      description: 'Beautiful flowering plants and ornamentals.',
      plants: 8,
      lastModified: '2024-03-15',
      imageUrl: '/images/garden2.jpg',
    },
  ]);

  const [newGarden, setNewGarden] = useState({
    name: '',
    description: '',
  });

  const handleCreateGarden = (e: React.FormEvent) => {
    e.preventDefault();
    const garden: Garden = {
      id: Date.now(),
      name: newGarden.name,
      description: newGarden.description,
      plants: 0,
      lastModified: new Date().toISOString().split('T')[0],
      imageUrl: '/images/default-garden.jpg',
    };
    setGardens([...gardens, garden]);
    setShowModal(false);
    setNewGarden({ name: '', description: '' });
  };

  return (
    <GardensContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header>
        <Title>My Gardens</Title>
        <CreateButton onClick={() => setShowModal(true)}>
          Create New Garden
        </CreateButton>
      </Header>

      <GardenGrid>
        {gardens.map((garden, index) => (
          <GardenCard
            key={garden.id}
            onClick={() => navigate(`/garden/${garden.id}`)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GardenImage $imageUrl={garden.imageUrl} />
            <GardenInfo>
              <GardenName>{garden.name}</GardenName>
              <GardenDescription>{garden.description}</GardenDescription>
              <GardenStats>
                <span>{garden.plants} Plants</span>
                <span>Last Modified: {garden.lastModified}</span>
              </GardenStats>
            </GardenInfo>
          </GardenCard>
        ))}
      </GardenGrid>

      {showModal && (
        <>
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          />
          <CreateGardenModal
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <Form onSubmit={handleCreateGarden}>
              <h2>Create New Garden</h2>
              <FormGroup>
                <Label>Garden Name</Label>
                <Input
                  type="text"
                  value={newGarden.name}
                  onChange={(e) => setNewGarden({ ...newGarden, name: e.target.value })}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <TextArea
                  value={newGarden.description}
                  onChange={(e) => setNewGarden({ ...newGarden, description: e.target.value })}
                  required
                />
              </FormGroup>
              <ButtonGroup>
                <Button type="submit">Create Garden</Button>
                <Button
                  type="button"
                  $variant="secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </Button>
              </ButtonGroup>
            </Form>
          </CreateGardenModal>
        </>
      )}
    </GardensContainer>
  );
};

export default MyGardens; 