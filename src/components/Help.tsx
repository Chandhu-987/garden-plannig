import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const HelpContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #2c5530;
  margin-bottom: 2rem;
  text-align: center;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  margin-bottom: 2rem;

  &:focus {
    outline: none;
    border-color: #2c5530;
  }
`;

const CategoryTabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 2px;
  }
`;

const CategoryTab = styled.button<{ $isActive: boolean }>`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 20px;
  background-color: ${({ $isActive }) => ($isActive ? '#2c5530' : '#f0f0f0')};
  color: ${({ $isActive }) => ($isActive ? 'white' : '#333')};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? '#1e3c21' : '#e0e0e0')};
  }
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Question = styled.button`
  width: 100%;
  padding: 1.5rem;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #2c5530;
  font-weight: 500;
  font-size: 1.1rem;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const Answer = styled(motion.div)`
  padding: 0 1.5rem 1.5rem;
  color: #444;
  line-height: 1.6;
`;

const Help: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: 'How do I create a new garden?',
      answer: 'To create a new garden, navigate to the "My Gardens" section and click the "Create New Garden" button. Follow the step-by-step guide to set up your garden layout and add plants.',
      category: 'Getting Started',
    },
    {
      question: 'Can I track multiple gardens?',
      answer: 'Yes! You can create and manage multiple gardens in your account. Each garden can have its own layout, plants, and maintenance schedule.',
      category: 'Getting Started',
    },
    {
      question: 'How do I use the weather feature?',
      answer: 'The weather feature shows real-time weather data for your garden location. Simply click on your garden location on the map to see current conditions and forecasts.',
      category: 'Features',
    },
    {
      question: 'How do I add plants to my garden?',
      answer: 'You can add plants to your garden by browsing our plant library and clicking the "Add to Garden" button on any plant. You can also use the search feature to find specific plants.',
      category: 'Plants',
    },
    {
      question: 'What should I do if I forget my password?',
      answer: 'If you forget your password, click the "Forgot Password" link on the login page. We will send you an email with instructions to reset your password.',
      category: 'Account',
    },
    {
      question: 'How can I customize my garden layout?',
      answer: 'Use our design tool to customize your garden layout. You can drag and drop plants, resize garden beds, and add structures like paths or fences. The tool also provides grid lines and measurement guides for precise planning.',
      category: 'Features',
    },
    {
      question: 'Can I set reminders for plant care?',
      answer: 'Yes! You can set up custom reminders for watering, fertilizing, pruning, and other care tasks. Go to your garden\'s maintenance schedule and click "Add Reminder" to set up notifications.',
      category: 'Features',
    },
    {
      question: 'How do I track plant growth?',
      answer: 'Use the garden journal feature to track plant growth. You can add photos, notes, and measurements for each plant. The journal automatically records weather conditions and care activities.',
      category: 'Plants',
    },
    {
      question: 'What plant spacing should I use?',
      answer: 'Our plant library provides recommended spacing for each plant. When using the design tool, visual guides will appear to help you maintain proper spacing between plants.',
      category: 'Plants',
    },
    {
      question: 'How do I share my garden design?',
      answer: 'Click the "Share" button in your garden design to generate a shareable link. You can also export your design as a PDF or image file for printing or sharing offline.',
      category: 'Features',
    }
  ];

  const categories = ['all', 'Getting Started', 'Features', 'Plants', 'Account'];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <HelpContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Help & FAQ</Title>
      
      <SearchBar
        type="text"
        placeholder="Search for help..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <CategoryTabs>
        {categories.map((category) => (
          <CategoryTab
            key={category}
            $isActive={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </CategoryTab>
        ))}
      </CategoryTabs>

      <FAQList>
        {filteredFAQs.map((faq, index) => (
          <FAQItem
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Question onClick={() => setExpandedId(expandedId === index ? null : index)}>
              {faq.question}
              <span>{expandedId === index ? '−' : '+'}</span>
            </Question>
            <AnimatePresence>
              {expandedId === index && (
                <Answer
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </Answer>
              )}
            </AnimatePresence>
          </FAQItem>
        ))}
      </FAQList>
    </HelpContainer>
  );
};

export default Help; 