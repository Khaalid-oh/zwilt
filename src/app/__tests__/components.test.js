import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Hero from '../components/Hero';
import HeroBSection from '../components/HeroBSection';
import SlantedSession from '../components/SlantedSession';
import FourthSection from '../components/FourthSection';
import Journey from '../components/Journey';
import Footer from '../components/Footer';

describe('Components Render Correctly', () => {
  
  it('renders the Hero component correctly', () => {
    const { getByText, getByAltText } = render(<Hero />);
    expect(getByText('Finding the right fit has never been easier.')).toBeInTheDocument();
    expect(getByText(/With our rigorous pre-vetting process/)).toBeInTheDocument();
    expect(getByAltText('Person gif')).toBeInTheDocument();
  });

  it('renders the HeroBSection component correctly', () => {
    const { getByText } = render(<HeroBSection />);
    expect(getByText('IT & Development')).toBeInTheDocument();
    expect(getByText('Design and Creative')).toBeInTheDocument();
  });

  it('changes tabs when clicked in HeroBSection', () => {
    const { getByText } = render(<HeroBSection />);
    fireEvent.click(getByText('Design and Creative'));
    expect(getByText('Data Scientist')).toBeInTheDocument();
  });

  it('renders the SlantedSession component correctly', () => {
    const { getByText, getByAltText } = render(<SlantedSession />);
    expect(getByText('How it worked')).toBeInTheDocument();
    expect(getByText('for Jason at')).toBeInTheDocument();
    expect(getByAltText('Person Icon')).toBeInTheDocument();
  });

  it('renders the FourthSection component correctly', () => {
    const { getByText } = render(<FourthSection />);
    expect(getByText("How we ensure you’re in good hands.")).toBeInTheDocument();
    expect(getByText("Step 1:")).toBeInTheDocument();
    expect(getByText("Resume Screening")).toBeInTheDocument();
  });

  it('renders the Journey component correctly', () => {
    const { getByText } = render(<Journey />);
    expect(getByText("Start your journey today.")).toBeInTheDocument();
    expect(getByText("Find your next star performer.")).toBeInTheDocument();
  });

  it('renders the Footer component correctly', () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Need a job done, and done well? Get started")).toBeInTheDocument();
    expect(getByText("Find Work")).toBeInTheDocument();
    expect(getByText("Connecting the right people to the right businesses.")).toBeInTheDocument();
  });
});
