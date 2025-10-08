import Header from '@/components/other/marketingUi/Header'
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  Button,
  Paper,
  Avatar,
  IconButton
} from '@mui/material'
import { ArrowForward, LinkedIn, Twitter, Instagram, Facebook } from '@mui/icons-material'
import React from 'react'

function MarketingPage() {
  return (
    <Box>
      <Header/>
      
      {/* First Section */}
      <Container maxWidth="xl" sx={{ py: 8, pt: 12 }}>
        <Box sx={{ textAlign: 'center', mb: 8, mt: 4 }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '2.5rem', md: '3rem' }, 
              fontWeight: 'bold',
              color: 'black',
              lineHeight: 1.2,
              mb: 3
            }}
          >
            From your 1st to your
            <br />
            1 millionth customer
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1.1rem'
            }}
          >
            Our expert data science consultants team can market to find new to develop opportunities 
            in implementation
          </Typography>
        </Box>

        {/* Image Section */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          <Grid item xs={12} md={12}>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
              <Card sx={{ borderRadius: 3, overflow: 'hidden', flex: 1, maxWidth: '48%' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="/images/home-img/Rectangle 48.png"
                  alt="Business meeting"
                  sx={{ width: '100%', height: 400, objectFit: 'cover' }}
                />
              </Card>
              <Card sx={{ borderRadius: 3, overflow: 'hidden', flex: 1, maxWidth: '48%' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="/images/home-img/Rectangle 49.png"
                  alt="Team presentation"
                  sx={{ width: '100%', height: 400, objectFit: 'cover' }}
                />
              </Card>
            </Box>
          </Grid>
        </Grid>

        {/* Feature Cards Section */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {/* market strategies */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: -10 , lineHeight: 6}}>
                  Go-to-market strategies
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.4 }}>
                  Our go-to-market strategies combine industry expertise, tailored workflows, and proven methodologies, ensuring each product launch reaches its intended market with precision. From strategic positioning and channel selection to targeted audience engagement, we’ve refined every step to deliver impactful, measurable results that connect with your audience.

                </Typography>
              </Box>
              <Box sx={{ minWidth: 200 }}>
                <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    image="/images/home-img/Rectangle 42.png"
                    alt="Global network"
                sx={{ width: 500, height: 400, objectFit: 'cover' }}
                  />
                </Card>
              </Box>
            </Box>
          </Grid>

          {/* Data-driven performance marketing */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
              <Box sx={{ minWidth: 200 }}>
                <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    image="/images/home-img/Rectangle 41.png"
                    alt="Analytics dashboard"
                sx={{ width: 500, height: 400, objectFit: 'cover' }}
                  />
                </Card>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: -13 , lineHeight: 8  }}>
                  Data-based marketing
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.4 }}>
                  In performance marketing, we emphasize measurable outcomes through data-driven tracking, detailed reporting, and continuous optimization. Each campaign is monitored in real-time, allowing us to maximize return on investment and gain actionable insights, building a cycle of continuous improvement and growth for our clients.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Content that ranks and resonates */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: -10 , lineHeight: 6}}>
                  High-impact SEO content
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  Our organic growth approach integrates SEO, rich content, social media engagement, and powerful storytelling to create lasting connections with audiences. By crafting content that both ranks and resonates, we build brand visibility and loyalty, ensuring your brand remains relevant, memorable, and top-of-mind.
                </Typography>
              </Box>
              <Box sx={{ minWidth: 200 }}>
                <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    image="/images/home-img/design.jpg"
                    alt="Content checklist"
                sx={{ width: 500, height: 400, objectFit: 'cover' }}
                  />
                </Card>
              </Box>
            </Box>
          </Grid>

          {/* Marketing automation and lead nurturing */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
              <Box sx={{ minWidth: 200 }}>
                <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    image="/images/home-img/Rectangle 43.png"
                    alt="Marketing automation"
                sx={{ width: 500, height: 400, objectFit: 'cover' }}
                  />
                </Card>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: -10 , lineHeight: 6 }}>
                  Marketing Automation
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  With funnel development, automation, and CRM integrations, we create a seamless journey from lead to close. We optimize every stage for engagement, incorporating automated follow-ups and tailored CRM strategies that ensure timely, personalized touch points. This approach enhances efficiency and builds strong, lasting relationships that turn leads into loyal customers.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Our experts in design */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 4 }}>
            Our experts in design
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Paper 
                key={item}
                sx={{ 
                  width: 180, 
                  height: 250, 
                  borderRadius: 3,
                  backgroundColor: '#D9D9D9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
              </Paper>
            ))}
          </Box>
        </Box>

        {/* Overview Of Growth */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ display: 'flex', gap: 0, alignItems: 'stretch' }}>
            <Paper 
              sx={{ 
                p: 6, 
                borderRadius: 0, 
                textAlign: 'left', 
                flex: 1,
                backgroundColor: '#f5f5f5',
                border: '1px solid #e0e0e0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 'bold', 
                  color: 'black',
                  fontSize: { xs: '2rem', md: '3rem' },
                  lineHeight: 1.2
                }}
              >
                Overview Of<br />Growth
              </Typography>
            </Paper>
            <Paper 
              sx={{ 
                p: 6, 
                borderRadius: 0, 
                textAlign: 'center', 
                flex: 1,
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Typography 
                variant="h1" 
                sx={{ 
                  fontWeight: 'bold', 
                  color: 'black', 
                  mb: 2,
                  fontSize: { xs: '3rem', md: '4rem' }
                }}
              >
                32+
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#999', 
                  mb: 1,
                  fontSize: '1.1rem',
                  fontWeight: 400
                }}
              >
                Revenue Increase
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#999',
                  fontSize: '0.9rem'
                }}
              >
                Compared to the previous year.
              </Typography>
            </Paper>
            <Paper 
              sx={{ 
                p: 6, 
                borderRadius: 0, 
                textAlign: 'center', 
                flex: 1,
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Typography 
                variant="h1" 
                sx={{ 
                  fontWeight: 'bold', 
                  color: 'black', 
                  mb: 2,
                  fontSize: { xs: '3rem', md: '4rem' }
                }}
              >
                100+
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#999', 
                  mb: 1,
                  fontSize: '1.1rem',
                  fontWeight: 400
                }}
              >
                Clients Served
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#999',
                  fontSize: '0.9rem'
                }}
              >
                From 2023 - Current year.
              </Typography>
            </Paper>
          </Box>
        </Box>

        {/* Call to Action Cards */}
        <Box sx={{ display: 'flex', gap: 3, mb: 8 }}>
          <Card 
            sx={{ 
              background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)',
              color: 'white',
              borderRadius: 3,
              p: 4,
              height: '300px',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', mb: 2 }}>
              <Button
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.3)',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  px: 3,
                  py: 1,
                  borderRadius: '50px',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  '&:hover': {
                    borderColor: 'rgba(255,255,255,0.5)',
                    backgroundColor: 'rgba(255,255,255,0.2)'
                  }
                }}
              >
                Careers
              </Button>
            </Box>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                Interested in joining our team of experts?
              </Typography>
            </Box>
            <Box sx={{ position: 'absolute', bottom: 20, left: 20 }}>
              <Typography variant="body2" sx={{ opacity: 0.8,fontSize: '1.3rem' }}>
                Explore opportunities
              </Typography>
            </Box>
            <Box sx={{ position: 'absolute', bottom: 20, right: 20 }}>
              <IconButton 
                sx={{ 
                  backgroundColor: 'white',
                  color: 'black',
                  width: 50,
                  height: 50,
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.9)'
                  }
                }}
              >
                <ArrowForward />
              </IconButton>
            </Box>
          </Card>
          <Card 
            sx={{ 
              background: 'linear-gradient(135deg, #ffc720 0%, #ffb800 100%)',
              color: 'black',
              borderRadius: 3,
              p: 4,
              height: '300px',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', mb: 2 }}>
              <Button
                variant="outlined"
                sx={{
                  color: 'black',
                  borderColor: 'rgba(0,0,0,0.3)',
                  backgroundColor: 'rgba(0,0,0,0.1)',
                  px: 3,
                  py: 1,
                  borderRadius: '50px',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  '&:hover': {
                    borderColor: 'rgba(0,0,0,0.5)',
                    backgroundColor: 'rgba(0,0,0,0.2)'
                  }
                }}
              >
                Get in touch
              </Button>
            </Box>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, lineHeight: 1.3 }}>
                Ready to meet your marketing team?
              </Typography>
            </Box>
            <Box sx={{ position: 'absolute', bottom: 20, left: 20 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
                Contact Us
              </Typography>
            </Box>
            <Box sx={{ position: 'absolute', bottom: 20, right: 20 }}>
              <IconButton 
                sx={{ 
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  color: 'black',
                  width: 50,
                  height: 50,
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.3)'
                  }
                }}
              >
                <ArrowForward />
              </IconButton>
            </Box>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}

export default MarketingPage
