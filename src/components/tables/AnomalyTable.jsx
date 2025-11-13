'use client';

/**
 * AnomalyTable Component
 * Displays detected anomalies with resolve functionality
 * VIHI IT Solutions - Stage 4
 */

import { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
  Tooltip,
} from '@mui/material';
import {
  Warning,
  Error,
  Info,
  CheckCircle,
  Close,
} from '@mui/icons-material';

const AnomalyTable = ({ anomalies = [], onResolve, isAdmin = false, loading = false }) => {
  const [resolveDialog, setResolveDialog] = useState({ open: false, anomalyId: null });
  const [notes, setNotes] = useState('');

  // Severity icon mapping
  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'Critical':
        return <Error sx={{ color: '#f44336', fontSize: 20 }} />;
      case 'High':
        return <Warning sx={{ color: '#ff9800', fontSize: 20 }} />;
      case 'Medium':
        return <Warning sx={{ color: '#ffc107', fontSize: 20 }} />;
      case 'Low':
        return <Info sx={{ color: '#2196f3', fontSize: 20 }} />;
      default:
        return null;
    }
  };

  // Severity color mapping
  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Critical':
        return { bg: '#f44336', text: 'white' };
      case 'High':
        return { bg: '#ff9800', text: 'white' };
      case 'Medium':
        return { bg: '#ffc107', text: 'black' };
      case 'Low':
        return { bg: '#2196f3', text: 'white' };
      default:
        return { bg: '#9e9e9e', text: 'white' };
    }
  };

  // Handle resolve dialog
  const handleOpenResolve = (anomalyId) => {
    setResolveDialog({ open: true, anomalyId });
    setNotes('');
  };

  const handleCloseResolve = () => {
    setResolveDialog({ open: false, anomalyId: null });
    setNotes('');
  };

  const handleResolve = async () => {
    if (onResolve && resolveDialog.anomalyId) {
      await onResolve(resolveDialog.anomalyId, notes);
      handleCloseResolve();
    }
  };

  if (loading) {
    return (
      <Paper sx={{ p: 3, borderRadius: 2 }}>
        <Typography>Loading anomalies...</Typography>
      </Paper>
    );
  }

  if (!anomalies || anomalies.length === 0) {
    return (
      <Paper sx={{ p: 3, borderRadius: 2, textAlign: 'center' }}>
        <CheckCircle sx={{ fontSize: 48, color: '#4caf50', mb: 2 }} />
        <Typography variant="h6" color="text.secondary">
          No Anomalies Detected
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          All productivity metrics are within normal range
        </Typography>
      </Paper>
    );
  }

  return (
    <>
      <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <Table>
          <TableHead sx={{ bgcolor: '#f5f5f5' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
              {isAdmin && <TableCell sx={{ fontWeight: 600 }}>Employee</TableCell>}
              <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Severity</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Deviation</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Description</TableCell>
              {isAdmin && <TableCell align="center" sx={{ fontWeight: 600 }}>Action</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {anomalies.map((anomaly) => {
              const severityColor = getSeverityColor(anomaly.severity);
              return (
                <TableRow
                  key={anomaly._id}
                  sx={{
                    '&:hover': { bgcolor: '#f9f9f9' },
                    borderLeft: `4px solid ${severityColor.bg}`,
                  }}
                >
                  <TableCell>
                    <Typography variant="body2">
                      {new Date(anomaly.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </Typography>
                  </TableCell>
                  
                  {isAdmin && (
                    <TableCell>
                      <Box>
                        <Typography variant="body2" fontWeight={600}>
                          {anomaly.user?.name || 'Unknown'}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {anomaly.employeeId}
                        </Typography>
                      </Box>
                    </TableCell>
                  )}
                  
                  <TableCell>
                    <Chip
                      label={anomaly.type}
                      size="small"
                      variant="outlined"
                      sx={{ fontWeight: 500 }}
                    />
                  </TableCell>
                  
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      {getSeverityIcon(anomaly.severity)}
                      <Chip
                        label={anomaly.severity}
                        size="small"
                        sx={{
                          bgcolor: severityColor.bg,
                          color: severityColor.text,
                          fontWeight: 600,
                        }}
                      />
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Typography
                      variant="body2"
                      fontWeight={600}
                      sx={{ color: anomaly.deviationPercent >= 70 ? '#f44336' : '#ff9800' }}
                    >
                      {anomaly.deviationPercent}%
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Tooltip title={anomaly.description} arrow>
                      <Typography variant="body2" sx={{ maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {anomaly.description}
                      </Typography>
                    </Tooltip>
                  </TableCell>
                  
                  {isAdmin && (
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => handleOpenResolve(anomaly._id)}
                        sx={{
                          bgcolor: '#667eea',
                          '&:hover': { bgcolor: '#5568d3' },
                          textTransform: 'none',
                          fontWeight: 600,
                        }}
                      >
                        Resolve
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Resolve Dialog */}
      <Dialog open={resolveDialog.open} onClose={handleCloseResolve} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">Resolve Anomaly</Typography>
            <IconButton onClick={handleCloseResolve} size="small">
              <Close />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Resolution Notes"
            placeholder="Describe how this anomaly was addressed..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={handleCloseResolve} sx={{ textTransform: 'none' }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleResolve}
            disabled={!notes.trim()}
            sx={{
              bgcolor: '#667eea',
              '&:hover': { bgcolor: '#5568d3' },
              textTransform: 'none',
              fontWeight: 600,
            }}
          >
            Resolve Anomaly
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AnomalyTable;
