import { PageSection } from './Section.styled';

const Section = ({ title, subtitle, children }) => { 
  return (
    <PageSection>
      <h1>{title}</h1>
      <h2>{subtitle}</h2> 
      {children}
    </PageSection>
  );
};

export default Section;
