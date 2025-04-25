import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #2c5530;
  margin-bottom: 2rem;
  text-align: center;
`;

const Section = styled.section`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: #2c5530;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: #444;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const FeatureCard = styled(motion.div)`
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
`;

const FeatureTitle = styled.h3`
  color: #2c5530;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const About: React.FC = () => {
  const features = [
    {
      title: 'Garden Planning',
      description: 'Design and plan your garden layout with our intuitive tools.',
    },
    {
      title: 'Plant Database',
      description: 'Access comprehensive information about various plants and their care requirements.',
    },
    {
      title: 'Weather Integration',
      description: 'Get real-time weather updates and forecasts for your garden location.',
    },
    {
      title: 'Garden Journal',
      description: 'Keep track of your gardening activities and plant progress.',
    },
    {
      title: 'Community Support',
      description: 'Connect with other gardeners and share experiences.',
    },
    {
      title: 'Expert Guidance',
      description: 'Access gardening tips and advice from experienced professionals.',
    },
  ];

  return (
    <AboutContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>About Garden Fields</Title>

      <Section>
        <SectionTitle>Our Mission</SectionTitle>
        <Text>
          We are dedicated to making gardening accessible and enjoyable for everyone,
          from beginners to experienced gardeners. Our app provides comprehensive
          tools and resources to help you create and maintain your perfect garden.
        </Text>
      </Section>

      <Section>
        <SectionTitle>What We Offer</SectionTitle>
        <Text>
          Our gardening app combines modern technology with traditional gardening
          wisdom to provide you with a complete digital gardening companion. Whether
          you're planning a small herb garden or managing a large vegetable plot,
          we have the tools you need to succeed.
        </Text>

        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </Section>

      <Section>
        <SectionTitle>Our Commitment</SectionTitle>
        <Text>
          We are committed to promoting sustainable gardening practices and helping
          our users create thriving, environmentally-friendly gardens. Our app is
          continuously updated with new features and improvements based on user
          feedback and the latest gardening research.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Get Started</SectionTitle>
        <Text>
          Join our growing community of gardeners and start your gardening journey
          today. Whether you're looking to grow your own food, create a beautiful
          flower garden, or simply connect with nature, we're here to help you
          every step of the way.
        </Text>
      </Section>
    </AboutContainer>
  );
};

export default About; 