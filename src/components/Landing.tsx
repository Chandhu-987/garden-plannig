import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface LandingProps {
  onEnter: () => void;
}

const LandingContainer = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/garden-background.jpg') no-repeat center center fixed;
  background-size: cover;
  color: white;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const EnterButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: #2c5530;
  }
`;

const Landing: React.FC<LandingProps> = ({ onEnter }) => {
  const navigate = useNavigate();

  const handleEnter = () => {
    onEnter();
    navigate('/home');
  };

  return (
    <LandingContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Title
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Welcome to Our Gardening App
      </Title>
      <EnterButton
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleEnter}
      >
        Enter
      </EnterButton>
    </LandingContainer>
  );
};

export default Landing; 