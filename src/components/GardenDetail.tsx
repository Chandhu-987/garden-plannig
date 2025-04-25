import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Plant {
  id: number;
  name: string;
  species: string;
  plantedDate: string;
  lastWatered: string;
  nextWatering: string;
  health: 'Good' | 'Fair' | 'Poor';
  notes: string;
}

interface Garden {
  id: number;
  name: string;
  description: string;
  plants: Plant[];
  lastModified: string;
  imageUrl: string;
}

const DetailContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const HeaderInfo = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  color: #2c5530;
  margin: 0 0 0.5rem 0;
`;

const Description = styled.p`
  color: #666;
  margin: 0;
  font-size: 1.1rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button<{ $variant?: 'secondary' | 'danger' }>`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${props => {
    switch (props.$variant) {
      case 'secondary':
        return '#f0f0f0';
      case 'danger':
        return '#dc3545';
      default:
        return '#2c5530';
    }
  }};
  color: ${props => props.$variant === 'secondary' ? '#333' : 'white'};

  &:hover {
    background-color: ${props => {
      switch (props.$variant) {
        case 'secondary':
          return '#e0e0e0';
        case 'danger':
          return '#c82333';
        default:
          return '#1e3c21';
      }
    }};
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PlantsSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PlantsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PlantCard = styled(motion.div)`
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f9f9f9;
    transform: translateX(5px);
  }
`;

const PlantHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const PlantName = styled.h3`
  margin: 0;
  color: #2c5530;
`;

const PlantHealth = styled.span<{ $health: string }>`
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  background-color: ${props => {
    switch (props.$health) {
      case 'Good':
        return '#28a745';
      case 'Fair':
        return '#ffc107';
      case 'Poor':
        return '#dc3545';
      default:
        return '#6c757d';
    }
  }};
  color: white;
`;

const PlantInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #666;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoLabel = styled.span`
  font-weight: 500;
  color: #444;
`;

const GardenStats = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StatTitle = styled.h2`
  color: #2c5530;
  margin: 0 0 1.5rem 0;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const StatCard = styled.div`
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 2rem;
  color: #2c5530;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #666;
  font-size: 0.9rem;
`;

const GardenDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [garden] = useState<Garden>({
    id: 1,
    name: "My First Garden",
    description: "A beautiful garden with various plants",
    plants: [
      {
        id: 1,
        name: 'Tomato',
        species: 'Solanum lycopersicum',
        plantedDate: '2024-03-01',
        lastWatered: '2024-03-16',
        nextWatering: '2024-03-18',
        health: 'Good',
        notes: 'Growing well, starting to see flowers.',
      },
      {
        id: 2,
        name: 'Basil',
        species: 'Ocimum basilicum',
        plantedDate: '2024-03-05',
        lastWatered: '2024-03-16',
        nextWatering: '2024-03-18',
        health: 'Fair',
        notes: 'Some leaves showing yellow spots.',
      },
    ],
    lastModified: new Date().toISOString(),
    imageUrl: "/garden-image.jpg"
  });

  useEffect(() => {
    // Here you would typically fetch the garden data using the ID
    console.log('Fetching garden with ID:', id);
  }, [id]);

  const getStats = () => {
    const healthCounts = garden.plants.reduce(
      (acc: { [key: string]: number }, plant) => {
        const healthKey = plant.health.toLowerCase();
        acc[healthKey] = (acc[healthKey] || 0) + 1;
        return acc;
      },
      { good: 0, fair: 0, poor: 0 }
    );

    return {
      totalPlants: garden.plants.length,
      healthyPlants: healthCounts.good,
      needsAttention: healthCounts.fair + healthCounts.poor,
      needsWatering: garden.plants.filter(
        plant => new Date(plant.nextWatering) <= new Date()
      ).length,
    };
  };

  const stats = getStats();

  return (
    <DetailContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header>
        <HeaderInfo>
          <Title>{garden.name}</Title>
          <Description>{garden.description}</Description>
        </HeaderInfo>
        <ActionButtons>
          <Button onClick={() => console.log('Edit garden')}>
            Edit Garden
          </Button>
          <Button $variant="danger" onClick={() => console.log('Delete garden')}>
            Delete Garden
          </Button>
        </ActionButtons>
      </Header>

      <Content>
        <PlantsSection>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 style={{ margin: 0 }}>Plants</h2>
            <Button onClick={() => console.log('Add plant')}>
              Add Plant
            </Button>
          </div>
          <PlantsList>
            {garden.plants.map((plant, index) => (
              <PlantCard
                key={plant.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <PlantHeader>
                  <PlantName>{plant.name}</PlantName>
                  <PlantHealth $health={plant.health}>{plant.health}</PlantHealth>
                </PlantHeader>
                <PlantInfo>
                  <InfoItem>
                    <InfoLabel>Species</InfoLabel>
                    {plant.species}
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>Planted</InfoLabel>
                    {plant.plantedDate}
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>Last Watered</InfoLabel>
                    {plant.lastWatered}
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>Next Watering</InfoLabel>
                    {plant.nextWatering}
                  </InfoItem>
                </PlantInfo>
              </PlantCard>
            ))}
          </PlantsList>
        </PlantsSection>

        <GardenStats>
          <StatTitle>Garden Overview</StatTitle>
          <StatGrid>
            <StatCard>
              <StatValue>{stats.totalPlants}</StatValue>
              <StatLabel>Total Plants</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>{stats.healthyPlants}</StatValue>
              <StatLabel>Healthy Plants</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>{stats.needsAttention}</StatValue>
              <StatLabel>Needs Attention</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>{stats.needsWatering}</StatValue>
              <StatLabel>Needs Watering</StatLabel>
            </StatCard>
          </StatGrid>
        </GardenStats>
      </Content>
    </DetailContainer>
  );
};

export default GardenDetail; 