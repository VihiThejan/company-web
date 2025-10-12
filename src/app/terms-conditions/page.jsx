'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Link as MUILink,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
} from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import theme from '@/theme/theme';

/**
 * Terms & Conditions Page
 * Place as: src/app/terms/page.jsx
 * Update EFFECTIVE_DATE, GOVERNING_JURISDICTION, GOVERNING_LOCATION, CONTACT values as needed.
 */

const LAST_UPDATED = 'October 12, 2025';
const EFFECTIVE_DATE = 'October 12, 2025';
const CONTACT_EMAIL = 'info@vihiitsolutions.com';
const CONTACT_PHONE = '+94 77 123 4567';
const COMPANY_ADDRESS = 'Vihi IT Solutions, 239/9, Uduwana Temple road, Uduwana, Homagama, Sri Lanka';
const GOVERNING_JURISDICTION = '[Insert governing jurisdiction]';
const GOVERNING_LOCATION = '[Insert location for dispute resolution]';

const sections = [
  { id: 'intro', title: 'Introduction' },
  { id: 'access', title: '1. Access' },
  { id: 'disclaimer', title: '2. Disclaimer & Modifications' },
  { id: 'availability', title: '3. Availability & Service Commitment' },
  { id: 'restrictions', title: '4. Restrictions (User Obligations)' },
  { id: 'indemnity', title: '5. Indemnity' },
  { id: 'limitation', title: '6. Limitation of Liability' },
  { id: 'other', title: '7. Other Provisions' },
  { id: 'contact', title: 'Contact' },
];

export default function TermsPage() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print();
  };

  return (
    <Box sx={{ bgcolor: '#fff', pt: { xs: 20, md: 20 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={8}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 1.5,
                fontSize: { xs: '1.75rem', md: '2.6rem' },
                color: '#111',
              }}
            >
              Terms & Conditions
            </Typography>

            <Typography variant="subtitle2" sx={{ color: '#666', mb: 2 }}>
              Last updated: {LAST_UPDATED} • Effective date: {EFFECTIVE_DATE}
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
              These Terms & Conditions (also referred to as “Terms of Use” or
              “Terms”) are a legally binding agreement between you (the “User”)
              and Vihi IT Solutions (“Provider”, “We”, “Us”, or “Our”). If you
              do not wish to be bound by any of these Terms, or lack authority
              to accept them on behalf of an entity you represent, you must not
              accept or agree to these Terms, and you shall have no right to
              use the Services.
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: '#444',
                mb: 2,
                fontSize: { xs: '0.95rem', md: '0.98rem' },
                lineHeight: 1.6,
              }}
            >
              The Privacy Policy of the Provider (attached as an annex or
              accessible on our website) forms part of these Terms of Use, and
              by accepting these Terms you also accept the Privacy Policy.
            </Typography>

            <Divider sx={{ my: 3 }} />

            {/* Mobile contents */}
            <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                Contents
              </Typography>
              <List dense>
                {sections.map((s) => (
                  <ListItem key={s.id} sx={{ py: 0.5, px: 0 }}>
                    <ArrowRightIcon sx={{ fontSize: 18, mr: 1, color: 'primary.main' }} />
                    <MUILink href={`#${s.id}`} underline="hover" sx={{ color: 'text.primary' }}>
                      <ListItemText primary={s.title} />
                    </MUILink>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>

          {/* Sticky TOC on desktop */}
          <Grid item md={4} sx={{ display: { xs: 'none', md: 'block', width: '100%' } }}>
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
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  On this page
                </Typography>
              </Box>

              <List dense>
                {sections.map((s) => (
                  <ListItem key={s.id} sx={{ py: 0.6, px: 0 }}>
                    <ArrowRightIcon sx={{ fontSize: '20px', mr: 1, color: 'primary.main' }} />
                    <MUILink href={`#${s.id}`} underline="hover" sx={{ color: 'text.primary' }}>
                      <ListItemText primary={s.title} />
                    </MUILink>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>

        {/* Terms content */}
        <Box sx={{ mt: 4 }}>
          {/* Intro article anchor */}
          <article id="intro" style={{ scrollMarginTop: 120 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              Introductory Notes
            </Typography>
            <Typography variant="body2" sx={{ mb: 1.5, color: '#444', textAlign: 'justify' }}>
              These Terms are effective as of {EFFECTIVE_DATE}. By accessing or using our Services you agree to these Terms.
            </Typography>
          </article>

          <Divider sx={{ my: 3 }} />

          {/* 1. Access */}
          <article id="access" style={{ scrollMarginTop: 120 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              1. Access
            </Typography>
            <Typography variant="body2" sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}>
              Subject to your acceptance and compliance with these Terms, the Provider grants to you a limited, non-licensable, non-transferable, non-exclusive right to access and use the Services offered by the Provider.
            </Typography>
          </article>

          <Divider sx={{ my: 3 }} />

          {/* 2. Disclaimer & Modifications */}
          <article id="disclaimer" style={{ scrollMarginTop: 120 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              2. Disclaimer & Modifications
            </Typography>

            <Typography variant="body2" sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}>
              The Provider may modify these Terms of Use at any time without prior notice. Revised versions will be posted on our website; continued use of the Services after posting constitutes your acceptance of the changes.
            </Typography>

            <Typography variant="body2" sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}>
              You are responsible for obtaining access to the Services; use of certain features or services may incur additional charges, which will be explicitly communicated.
            </Typography>

            <Typography variant="body2" sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}>
              The Provider does not assume responsibility for the accuracy, integrity, or reliability of links to external websites or content uploaded by third parties not under the Provider’s control. Any reliance on such external content or links is at your own risk.
            </Typography>

            <Typography variant="body2" sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}>
              The Provider is not responsible for the content or practices of any external websites, blogs, or resources accessible through links from our Services.
            </Typography>
          </article>

          <Divider sx={{ my: 3 }} />

          {/* 3. Availability & Service Commitment */}
          <article id="availability" style={{ scrollMarginTop: 120 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              3. Availability & Service Commitment
            </Typography>

            <Typography variant="body2" sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}>
              The Provider guarantees at least 99.5% uptime in any monthly period, excluding excusable downtime (which includes scheduled maintenance or internet/service interruptions outside the Provider’s control).
            </Typography>
          </article>

          <Divider sx={{ my: 3 }} />

          {/* 4. Restrictions (User Obligations / Prohibited Conduct) */}
          <article id="restrictions" style={{ scrollMarginTop: 120 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              4. Restrictions (User Obligations / Prohibited Conduct)
            </Typography>

            <Typography variant="body2" sx={{ mb: 1, color: '#444', textAlign: 'justify' }}>
              You agree that you will not:
            </Typography>

            <List>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Use the Services in violation of applicable laws, or infringe on any intellectual property, privacy, or publicity rights." />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Upload, transmit, or store unlawful, harmful, threatening, abusive, defamatory, obscene, or otherwise objectionable content, or false or misleading information." />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Use the Services for fraudulent or malicious purposes." />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Hack, insert malicious code (e.g. viruses), or interfere with any other user's use of the Services." />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Impersonate any person or entity or misrepresent your affiliation." />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Use the Services in a manner harmful to minors." />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Use automated means (robot, spider, scraper, etc.) to access or extract data, unless expressly allowed." />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Use the information from the Services in a manner inconsistent with its intended use." />
              </ListItem>
            </List>
          </article>

          <Divider sx={{ my: 3 }} />

          {/* 5. Indemnity */}
          <article id="indemnity" style={{ scrollMarginTop: 120 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              5. Indemnity
            </Typography>

            <Typography variant="body2" sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}>
              You agree to indemnify, defend, and hold harmless the Provider and its affiliates, officers, agents, employees and partners from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys’ fees) arising out of or relating to:
            </Typography>

            <List>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Your breach or violation of these Terms or any policies referenced herein;" />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Your use of the Services or content you upload;" />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Any actions by you under your account;" />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Violation of laws or rights of third parties;" />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Fraud, willful misconduct or negligence by you;" />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Claims arising from your User Contributions." />
              </ListItem>
            </List>
          </article>

          <Divider sx={{ my: 3 }} />

          {/* 6. Limitation of Liability */}
          <article id="limitation" style={{ scrollMarginTop: 120 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              6. Limitation of Liability
            </Typography>

            <Typography variant="body2" sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}>
              Except as otherwise provided by law and to the maximum extent permitted:
            </Typography>

            <Typography variant="body2" sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}>
              All Services are provided “as is” and “as available.” The Provider disclaims all warranties, express or implied.
            </Typography>

            <Typography variant="body2" sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}>
              The Provider and its affiliates, agents, employees, and partners shall not be liable for any direct, indirect, incidental, consequential, or special damages, including but not limited to loss of profits, data, or business interruption resulting from your use or inability to use the Services, unauthorized access to your data, or actions by third parties.
            </Typography>
          </article>

          <Divider sx={{ my: 3 }} />

          {/* 7. Other Provisions */}
          <article id="other" style={{ scrollMarginTop: 120 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              7. Other Provisions
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
              Governing Law & Dispute Resolution
            </Typography>
            <Typography variant="body2" sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}>
              These Terms are governed by the laws of {GOVERNING_JURISDICTION}. Disputes shall be resolved in the courts or arbitration forums located in {GOVERNING_LOCATION}.
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
              Severability & Waiver
            </Typography>
            <Typography variant="body2" sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}>
              If a provision is held invalid or unenforceable, the remainder shall remain in effect. Failure to enforce a right is not a waiver of future rights.
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
              Termination
            </Typography>
            <Typography variant="body2" sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}>
              The Provider may suspend or terminate your access, in whole or part, at any time without notice. On termination, your rights to use the Services immediately cease. Surviving sections (e.g. indemnity, limitation of liability, intellectual property) continue in full force.
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
              Assignment
            </Typography>
            <Typography variant="body2" sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}>
              You may not assign your rights or obligations under these Terms without prior written consent. The Provider may assign freely.
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
              Entire Agreement
            </Typography>
            <Typography variant="body2" sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}>
              These Terms, along with the Privacy Policy and any other incorporated policies, form the entire agreement between you and us.
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
              Force Majeure
            </Typography>
            <Typography variant="body2" sx={{ mb: 1.25, color: '#444', textAlign: 'justify' }}>
              The Provider is not responsible for failure to perform due to causes beyond reasonable control (e.g. natural disasters, war, internet service failures, strikes).
            </Typography>
          </article>

          <Divider sx={{ my: 3 }} />

          {/* Contact */}
          <article id="contact" style={{ scrollMarginTop: 120 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              Contact
            </Typography>

            <Typography variant="body2" sx={{ mb: 1, color: '#444', textAlign: 'justify' }}>
              If you have questions about these Terms or wish to contact us, please reach out:
            </Typography>

            <Box sx={{ mt: 3 }}>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                Vihi IT Solutions
              </Typography>
              <Typography variant="body2" sx={{ color: '#444', mb: 0.5 }}>
                {COMPANY_ADDRESS}
              </Typography>
              <Typography variant="body2" sx={{ color: '#444' }}>
                Email:{' '}
                <MUILink href={`mailto:${CONTACT_EMAIL}`} color="#444" underline="hover">
                  {CONTACT_EMAIL}
                </MUILink>
                {CONTACT_PHONE ? ` • Tel: ${CONTACT_PHONE}` : ''}
              </Typography>
            </Box>
          </article>

          <Divider sx={{ mt: 4 }} />

          <Typography variant="body2" sx={{ color: '#888', mt: 3 }}>
            These Terms were last updated on {LAST_UPDATED}. Please review this page periodically for updates.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
