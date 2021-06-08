/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Developing Webapp',
    title: 'Developing Webapp',
    text:
      'We\'ll develop customized webapp only for your business. You don\'t need to change your workflow to adjust with the app. Rather the app will updated to adjust with your workflow.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Spreadsheet Expert',
    title: 'Spreadsheet Expert',
    text:
      'We have dedicated experts for Excel and Google Sheet. They will create and integrate spreadsheet based tools, reports, and formats. And also educate your team understand the formats.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Cross-platform Integration',
    title: 'Cross-platform Integration',
    text:
      'We\'ll setup and integrate with different servicess to automate the process. Our expert will integrate all of your tools into oneplace like Zapier, QuickBook, Zooho, Xero, API\'s, etc.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Finance & Accounting',
    title: 'Finance & Accounting',
    text:
      'We\'ve a separate team to deal with BPO Finance & Accounting service. This team will deal with your bookkeeping, reconcilation, financial statements, reporting, filing etc.',
  },
];

export default function Feature() {
  return (
   <section sx={{ variant: 'section.feature' }}>
     <Container>
       <SectionHeader 
        slogan="What We Do"
        title="Our Specialized Services"
       />

       <Grid sx={styles.grid}>
         {data.map((item) => (
           <FeatureCard 
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
           />
         ))}
       </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
