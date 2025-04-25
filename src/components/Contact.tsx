import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ContactForm {
  name: string;
  subject: string;
  message: string;
}

const ContactContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #2c5530;
  margin-bottom: 2rem;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactFormContainer = styled.form`
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
`;

const InfoSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InfoTitle = styled.h2`
  color: #2c5530;
  margin-bottom: 1.5rem;
`;

const InfoText = styled.p`
  color: #444;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ContactInfo = styled.div`
  margin-top: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #444;

  svg {
    margin-right: 1rem;
    color: #2c5530;
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: #4caf50;
  color: white;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    subject: '',
    message: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setFormData({
      name: '',
      subject: '',
      message: '',
    });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <ContactContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Contact Support</Title>
      <ContentWrapper>
        <ContactFormContainer onSubmit={handleSubmit}>
          {showSuccess && (
            <SuccessMessage
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              Thank you for your message! We'll get back to you soon.
            </SuccessMessage>
          )}
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Subject</Label>
            <Input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Message</Label>
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <Button type="submit">Send Message</Button>
        </ContactFormContainer>

        <InfoSection>
          <InfoTitle>Get in Touch</InfoTitle>
          <InfoText>
            Have questions about Garden Fields? Need help with a specific
            feature? Our support team is here to help you get the most out of your
            gardening experience.
          </InfoText>
          <ContactInfo>
            <ContactItem>
              <span>📞</span> Phone: +91 9876543210
            </ContactItem>
            <ContactItem>
              <span>⏰</span> Hours: Monday - Friday, 9am - 5pm 
            </ContactItem>
          </ContactInfo>
          <InfoText>
            For immediate assistance, please check our FAQ section or send us a
            message using the contact form. We typically respond within 24 business
            hours.
          </InfoText>
        </InfoSection>
      </ContentWrapper>
    </ContactContainer>
  );
};

export default Contact; 