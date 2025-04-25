import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem;
  background: linear-gradient(rgba(44, 85, 48, 0.9), rgba(44, 85, 48, 0.9)),
    url('/garden-background.jpg') center/cover;
  border-radius: 12px;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.9;
`;

const FeaturedSection = styled.section`
  margin-top: 3rem;
`;

const SectionTitle = styled.h2`
  color: #2c5530;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  color: #2c5530;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const FeatureDescription = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #2c5530;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e3c21;
  }
`;

const QuickStart = styled.div`
  background: #f5f5f5;
  padding: 3rem;
  border-radius: 12px;
  text-align: center;
  margin-top: 2rem;
`;

const QuickStartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const QuickStartCard = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const StepNumber = styled.div`
  background: #2c5530;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-weight: bold;
`;

const Home: React.FC = () => {
  const features = [
    {
      icon: '🌱',
      title: 'Garden Planning',
      description: 'Design your perfect garden with our intuitive planning tools.',
      link: '/design',
      linkText: 'Start Planning',
    },
    {
      icon: '📚',
      title: 'Plant Library',
      description: 'Access our comprehensive database of plants and care guides.',
      link: '/plant-library',
      linkText: 'Explore Plants',
    },
    {
      icon: '📝',
      title: 'Garden Journal',
      description: 'Track your garden\'s progress and maintain detailed records.',
      link: '/journal',
      linkText: 'Start Journaling',
    },
  ];

  const quickStartSteps = [
    {
      step: 1,
      title: 'Create a Garden',
      description: 'Set up your first virtual garden space.',
    },
    {
      step: 2,
      title: 'Add Plants',
      description: 'Choose from our extensive plant library.',
    },
    {
      step: 3,
      title: 'Track Progress',
      description: 'Monitor growth and maintain your garden.',
    },
  ];

  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero>
        <Title>Welcome to Your Digital Garden</Title>
        <Subtitle>
          Transform your gardening experience with our comprehensive suite of tools.
          Plan, grow, and maintain your perfect garden with expert guidance every
          step of the way.
        </Subtitle>
      </Hero>

      <FeaturedSection>
        <SectionTitle>What We Offer</SectionTitle>
        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <StyledLink to={feature.link}>{feature.linkText}</StyledLink>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </FeaturedSection>

      <QuickStart>
        <SectionTitle>Quick Start Guide</SectionTitle>
        <QuickStartGrid>
          {quickStartSteps.map((step, index) => (
            <QuickStartCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <StepNumber>{step.step}</StepNumber>
              <FeatureTitle>{step.title}</FeatureTitle>
              <FeatureDescription>{step.description}</FeatureDescription>
            </QuickStartCard>
          ))}
        </QuickStartGrid>
      </QuickStart>
    </HomeContainer>
  );
};

export default Home; 