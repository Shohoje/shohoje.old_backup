/** @jsx jsx */
import { jsx, Container, Box, Flex } from 'theme-ui';
import { keyframes } from '@emotion/core';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import PriceCard from 'components/price-card';
import ButtonGroup from 'components/button-group';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';

const packages = {
  developing: [
    {
      id: 1,
      name: 'API Integrate',
      description: 'Develop/intergate API with different platform',
      priceWithUnit: '$199',
      buttonText: 'Contact for details',
      anotherOption: '',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Connect with multiple API\'s',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Connect with public API",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Auth 2.0 authentication',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Cullect public data',
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: 'Web App',
      description: 'Simple web app with stunning UI design and many more features.',
      buttonText: 'Contact for Demo',
      priceWithUnit: '$399',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Single Page Webapp',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Custom UI design",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Mobile Friendly',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'User/contact Form',
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: 'Special',
      headerIcon: <IoIosCheckmarkCircle />,
      name: 'Work-flow Automation',
      description: 'Develop custom tool to automate your business workflow',
      priceWithUnit: '$499',
      buttonText: 'Contact for details',
      anotherOption: '',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Increase spreadsheet efficiency',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Easy Management and Control",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Automating Task Assignment',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Interactive Dashboard',
          isAvailable: true,
        },
      ],
    },
  ],
  bposervice: [
    {
      id: 1,
      name: 'Data Entry',
      description: 'Fast & accurate outsource data entry service at low cost',
      buttonText: 'Contact with details',
      priceWithUnit: 'n/a',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Fast & accurate",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Web research',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Generate terget lead',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCloseCircle />,
          text: 'Sales call',
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: 'Spreadsheet Expert',
      description: 'Get a qualified Spreadsheet expert in a minutes',
      priceWithUnit: '$20/h',
      buttonText: 'Schedule for Expert',
      anotherOption: 'ask for a trial',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'MS Excel',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Google Spread Sheet',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Excel VBA",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Google Apps Script',
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: 'Suggested',
      headerIcon: <IoIosCheckmarkCircle />,
      name: 'Accounting & Bookkeeping',
      description: 'Outsource your accounting and bookkeeping service',
      priceWithUnit: 'n/a',
      buttonText: 'Schedule for meeting',
      anotherOption: '',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Set-up book of accounts',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Bookkeeping',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Bank reconcilation",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Financial report',
          isAvailable: true,
        },
      ],
    },
  ],
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export default function Package() {
  const { developing, bposervice } = packages;
  const [state, setState] = useState({
    active: 'developing',
    pricingPlan: developing,
  })

  const handlePricingPlan = (plan) => {
    if(plan === 'bposervice') {
      setState({ active: 'bposervice', pricingPlan: bposervice })
    } else {
      setState({ active: 'developing', pricingPlan: developing })
    }
  }

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: '',
  };

  return (
    <section id="pricing" sx={{ variant: 'section.pricing' }}>
      <Container>
        <SectionHeader 
        slogan="Our Service"
        title="Choose the service you'r looking for"
        />

        <Flex sx={styles.buttonGroup}>
          <Box sx={styles.buttonGroupInner}>
            <button 
              className={state.active === 'developing' ? 'active' : ''}
              type="button"
              aria-label="Developing"
              onClick={() => handlePricingPlan('developing')}
            >
              Developing App/Tool
            </button>
            <button 
              className={state.active === 'bposervice' ? 'active' : ''}
              type="button"
              aria-label="Bposervice"
              onClick={() => handlePricingPlan('bposervice')}
            >
              Business Solution
            </button>
          </Box>
        </Flex>
        <Box sx={styles.pricingWrapper} className="pricing__wrapper">
          <Carousel {...sliderParams}>
            {state.pricingPlan.map((packageData) => (
              <Box sx={styles.pricingItem} key={packageData.id}>
                <PriceCard data={packageData} />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  pricingWrapper: {
    mb: '-40px',
    mt: '-40px',
    mx: -3,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '&.pricing__wrapper .package__card': {
      '.package__header': {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      '.package__price': {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    '.carousel-container': {
      width: '100%',
      '> ul > li ': {
        display: 'flex',
      },
    },
    '.button__group': {
      display: ['flex', null, null, null, 'none'],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 3,
    display: 'flex',
    flexShrink: 0,
    flex: '1 1 auto',
  },
  buttonGroup: {
    justifyContent: 'center',
    mb: '7',
    mt: ['-15px', '-35px'],
    position: 'relative',
    zIndex: 2,
  },
  buttonGroupInner: {
    display: 'flex',
    padding: '7px',
    margin: '0 auto',
    borderRadius: '5px',
    backgroundColor: '#F7F8FB',
    button: {
      border: 0,
      padding: ['15px 20px', '15px 27px'],
      borderRadius: '5px',
      color: 'text',
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      letterSpacing: '-0.24px',
      transition: 'all 0.3s',
      '&.active': {
        color: '#0f2137',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.1)',
      },
      '&:focus': {
        outline: 0,
      },
    },
  },
};
