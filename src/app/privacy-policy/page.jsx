'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Link as MUILink,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import theme from '@/theme/theme';

/**
 * Privacy Policy Page
 * - Place in: src/app/privacy/page.jsx (App Router)
 * - Replace placeholders: LAST_UPDATED, CONTACT_EMAIL, ADDRESS, PHONE
 */

const LAST_UPDATED = 'October 12, 2025'; // <-- update as needed
const CONTACT_EMAIL = 'info@vihiitsolutions.com'; // <-- update
const CONTACT_PHONE = '+94 77 123 4567'; // optional
const COMPANY_ADDRESS = 'Vihi IT Solutions, 239/9, Uduwana Temple road, Uduwana, Homagama, Sri Lanka';


export default function PrivacyPolicy() {
  // simple print helper
  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print();
  };

  const sections = [
    { id: 'definitions', title: '1. Definitions' },
    { id: 'what-we-collect', title: '2. What Information We Collect' },
    { id: 'how-we-use', title: '3. How We Use Your Information' },
    { id: 'share', title: '4. With Whom We Share Your Information' },
    { id: 'retention', title: '5. Retention of Data' },
    { id: 'security', title: '6. Security & Protection' },
    { id: 'minors', title: '7. Minors' },
    { id: 'rights', title: '8. Your Rights' },
    { id: 'transfers', title: '9. International Transfers' },
    { id: 'changes', title: '10. Changes to This Policy' },
    { id: 'contact', title: '11. Contact Us' },
  ];

  return (
    <Box sx={{ bgcolor: '#fff', pt: { xs: 20, md: 20 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={8}>
            <Typography
              component="h1"
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 1.5,
                fontSize: { xs: '1.75rem', md: '2.6rem' },
                color: '#111',
              }}
            >
              Privacy Policy
            </Typography>
            <Typography variant="subtitle2" sx={{ color: '#666', mb: 2 }}>
              Last updated: {LAST_UPDATED}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#444',
                mb: 3,
                fontSize: { xs: '0.95rem', md: '1rem' },
                lineHeight: 1.7,
                textAlign: 'justify',
              }}
            >
              Welcome to Vihi IT Solutions (hereinafter “we”, “us”, “our”). We
              respect your privacy and are committed to protecting it through
              this Privacy Policy. This Policy explains how we collect, use,
              disclose, and safeguard your personal information when you visit
              our website or use our services (collectively, the “Services”).
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: '#444',
                mb: 3,
                fontSize: { xs: '0.95rem', md: '0.98rem' },
                lineHeight: 1.6,
              }}
            >
              By using our Services, you consent to the collection, use,
              disclosure, and retention of your personal data as described in
              this policy. If you do not agree with the terms of this Privacy
              Policy, please do not access or use the Services.
            </Typography>

            <Divider sx={{ my: 3 }} />

            {/* Table of contents for smaller screens (inline) */}
            <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                Contents
              </Typography>
              <List dense>
                {sections.map((s) => (
                  <ListItem key={s.id} sx={{ py: 0.5, px: 0 }}>
                    <ArrowRightIcon
                      sx={{ fontSize: 18, mr: 1, color: 'primary.main' }}
                    />
                    <MUILink
                      href={`#${s.id}`}
                      underline="hover"
                      sx={{ color: 'text.primary' }}
                    >
                      <ListItemText primary={s.title} />
                    </MUILink>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>

          {/* Sticky TOC on larger screens */}
          <Grid
            item
            md={4}
            sx={{ display: { xs: 'none', md: 'block' }, width: '100%' }}
          >
            <Box
              sx={{
                width: '100%',
                position: 'sticky',
                top: 96,
                borderRadius: 2,
                border: '1px solid #f0f0f0',
                p: 3,
                bgcolor: '#fafafa',
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                On this page
              </Typography>

              <List dense>
                {sections.map((s) => (
                  <ListItem key={s.id} sx={{ py: 0.6, px: 0 }}>
                    <ArrowRightIcon
                      sx={{ fontSize: '28px', mr: 1, color: 'primary.main' }}
                    />
                    <MUILink
                      href={`#${s.id}`}
                      underline="hover"
                      sx={{ color: 'text.primary' }}
                    >
                      <ListItemText
                        primary={s.title}
                      />
                    </MUILink>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>

        {/* Main Content Sections */}
        <Box sx={{ mt: 4 }}>
          {/* 1. Definitions */}
          <article id="definitions" style={{ scrollMarginTop: 120 }}>
            <Typography component="h2" variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              1. Definitions
            </Typography>

            <Typography component="h3" variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
              Personal Data / Personal Information
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 1.5, color: '#444', textAlign: 'justify' }}
            >
              Information that relates to an identified or identifiable
              individual. Examples include name, email address, phone number, IP
              address, etc.
            </Typography>

            <Typography component="h3" variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
              Usage Data / Technical Data
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 1.5, color: '#444', textAlign: 'justify' }}
            >
              Data collected automatically when using the Services, such as IP
              address, browser type, device information, timestamps, pages
              visited, etc.
            </Typography>

            <Typography component="h3" variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
              Data Controller
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 1.5, color: '#444', textAlign: 'justify' }}
            >
              Vihi IT Solutions acts as the controller for the personal data you
              provide through our Services.
            </Typography>
          </article>

          <Divider sx={{ my: 3 }} />

          {/* 2. What We Collect */}
          <article id="what-we-collect" style={{ scrollMarginTop: 120 }}>
            <Typography component="h2" variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              2. What Information We Collect
            </Typography>

            <Typography component="h3" variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              2.1 Information You Provide
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}
            >
              Contact details (e.g. name, email address, phone number, postal
              address); Account information (e.g. username, password);
              Professional or job-related info (e.g. company, role);
              Communications you send us (queries, feedback); Marketing
              preferences and consents; Payment or billing data (if applicable,
              via third-party processor).
            </Typography>

            <Typography component="h3" variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              2.2 Automatically Collected / Technical Information
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}
            >
              We and third-party service providers may automatically collect
              usage and technical data when you access and use our Services,
              such as: IP address; Device type, operating system, browser
              version; Pages visited, time spent, navigation paths; Referrer URL
              and exit pages; Date/time stamps; Unique device or cookie
              identifiers; Other diagnostic and usage metrics.
            </Typography>

            <Typography component="h3" variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              2.3 Cookies & Tracking Technologies
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}
            >
              We use cookies, web beacons, pixels, and similar technologies to
              recognize your device and preferences; remember login status,
              settings, and preferences; analyze and monitor usage patterns and
              site performance; and serve personalized content and marketing.
              You can manage or disable cookies via your browser settings, but
              note that disabling some cookies may impair your experience or
              cause certain features to malfunction.
            </Typography>
          </article>

          <Divider sx={{ my: 3 }} />

          {/* 3. How We Use */}
          <article id="how-we-use" style={{ scrollMarginTop: 120 }}>
            <Typography component="h2" variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              3. How We Use Your Information
            </Typography>

            <Typography
              variant="body2"
              sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}
            >
              We use your personal data for various legitimate purposes,
              including but not limited to: Operating, maintaining, and
              improving our Services; Providing you with the products, services
              or features you request; Communicating with you (e.g. service
              updates, support, announcements); Marketing, promotions, and
              newsletters (with your consent); Fraud prevention, security, and
              abuse detection; Analytics, usage trends, and business insights;
              Customizing content and experience; Complying with legal
              obligations or enforcing our rights.
            </Typography>

            <Typography
              variant="body2"
              sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}
            >
              We will not sell your personal data to third parties.
            </Typography>
          </article>

          <Divider sx={{ my: 3 }} />

          {/* 4. With Whom We Share */}
          <article id="share" style={{ scrollMarginTop: 120 }}>
            <Typography component="h2" variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              4. With Whom We Share Your Information
            </Typography>

            <Typography
              variant="body2"
              sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}
            >
              We may share your information under the following circumstances:
              Service providers & partners: Entities that perform services on
              our behalf (e.g. hosting, analytics, email services). These
              parties only have access to data necessary to perform their
              functions and are bound by confidentiality. Affiliates &
              subsidiaries: For internal business purposes, where applicable.
              Legal obligations & enforcement: When required by law, court
              order, or to protect rights, safety or property (ours, yours or
              those of others). Business transactions: In connection with
              mergers, acquisitions, financing, or sale of assets, your data may
              be transferred to a successor entity under similar data protection
              obligations. Your direction or consent: Where you request or
              consent to disclosure (e.g. when enabling third-party
              integrations).
            </Typography>

            <Typography
              variant="body2"
              sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}
            >
              When transferring data across borders, we will take steps to
              ensure appropriate safeguards are in place (e.g. standard
              contractual clauses, certifications) as required by law.
            </Typography>
          </article>

          <Divider sx={{ my: 3 }} />

          {/* 5. Retention */}
          <article id="retention" style={{ scrollMarginTop: 120 }}>
            <Typography component="h2" variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              5. Retention of Data
            </Typography>

            <Typography
              variant="body2"
              sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}
            >
              We retain personal data only as long as necessary to fulfill the
              purposes for which it was collected, to satisfy legal, tax,
              accounting, or reporting obligations, or to resolve disputes. When
              no longer needed, we will securely delete, anonymize or aggregate
              data, unless retention is legally required or permitted.
            </Typography>
          </article>

          <Divider sx={{ my: 3 }} />

          {/* 6. Security */}
          <article id="security" style={{ scrollMarginTop: 120 }}>
            <Typography component="h2" variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              6. Security & Protection
            </Typography>

            <Typography
              variant="body2"
              sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}
            >
              We implement reasonable technical, administrative, and
              organizational measures to protect your personal data against
              unauthorized access, disclosure, alteration, or destruction.
              However, no system is 100% secure. We cannot guarantee absolute
              security of data transmitted to us or stored on our servers.
            </Typography>
          </article>

          <Divider sx={{ my: 3 }} />

          {/* 7. Minors */}
          <article id="minors" style={{ scrollMarginTop: 120 }}>
            <Typography component="h2" variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              7. Minors
            </Typography>

            <Typography
              variant="body2"
              sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}
            >
              Our Services are not intended for children (e.g. under 16). We do
              not knowingly collect personal data from minors. If you become
              aware that a minor has provided us with their personal
              information, please contact us and we will take steps to remove
              that information.
            </Typography>
          </article>

          <Divider sx={{ my: 3 }} />

          {/* 8. Your Rights */}
          <article id="rights" style={{ scrollMarginTop: 120 }}>
            <Typography component="h2" variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              8. Your Rights
            </Typography>

            <Typography
              variant="body2"
              sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}
            >
              Depending on your jurisdiction, you may have rights over your
              personal data, including: Right to access or request a copy of
              your data; Right to correct or update inaccurate data; Right to
              delete or request erasure of data; Right to restrict or object to
              processing; Right to data portability (receive data in a
              machine-readable format); Right to withdraw consent (where
              processing is based on consent); Right to lodge a complaint with a
              relevant data protection authority. To exercise any rights,
              contact us using the information below. We may require proof of
              identity and will respond within applicable legal time frames.
            </Typography>
          </article>

          <Divider sx={{ my: 3 }} />

          {/* 9. International Transfers */}
          <article id="transfers" style={{ scrollMarginTop: 120 }}>
            <Typography component="h2" variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              9. International Transfers
            </Typography>

            <Typography
              variant="body2"
              sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}
            >
              If your data is transferred to jurisdictions with different data
              protection laws, we will ensure such transfers comply with
              applicable legal safeguards and protections.
            </Typography>
          </article>

          <Divider sx={{ my: 3 }} />

          {/* 10. Changes */}
          <article id="changes" style={{ scrollMarginTop: 120 }}>
            <Typography component="h2" variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              10. Changes to This Policy
            </Typography>

            <Typography
              variant="body2"
              sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}
            >
              We may update this Privacy Policy from time to time. When we make
              material changes, we will notify you via email or via a prominent
              notice on our Services before changes become effective. Your
              continued use of the Services after such changes constitutes
              acceptance of the updated policy. We will update the “Last
              updated” date accordingly.
            </Typography>
          </article>

          <Divider sx={{ my: 3 }} />

          {/* 11. Contact */}
          <article id="contact" style={{ scrollMarginTop: 120 }}>
            <Typography component="h2" variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              11. Contact Us
            </Typography>

            <Typography
              variant="body2"
              sx={{ mb: 1, color: '#444', textAlign: 'justify' }}
            >
              If you have questions, complaints, or wish to exercise your data
              protection rights, please contact:
            </Typography>

            <Box sx={{ mt: 5 }}>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                Vihi IT Solutions
              </Typography>
              <Typography variant="body2" sx={{ color: '#444', mb: 0.5 }}>
                {COMPANY_ADDRESS}
              </Typography>
              <Typography variant="body2" sx={{ color: '#444' }}>
                Email:{' '}
                <MUILink href={`mailto:${CONTACT_EMAIL}`} color='#444' underline="hover">
                  {CONTACT_EMAIL}
                </MUILink>
                {CONTACT_PHONE ? ` • Tel: ${CONTACT_PHONE}` : ''}
              </Typography>
            </Box>
          </article>

          <Divider sx={{ mt: 4 }} />

          <Typography variant="body2" sx={{ color: '#888'}}>
            This Privacy Policy was last updated on {LAST_UPDATED}. Please check
            back periodically for updates.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
