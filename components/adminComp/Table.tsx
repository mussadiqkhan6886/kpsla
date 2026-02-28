'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import { FiTrash, FiEye, FiCheckCircle, FiXCircle, FiMapPin, FiX, FiBook, FiHeart } from 'react-icons/fi';
import Chip from '@mui/material/Chip';
import { IRegistration } from '@/type';
import Tooltip from '@mui/material/Tooltip';
import Image from 'next/image';
import Link from 'next/link';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import DialogContent from '@mui/material/DialogContent';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

interface StudentTableProps {
  students: IRegistration[];
  setStudents: React.Dispatch<React.SetStateAction<IRegistration[]>>;
}

export default function StudentTable({ students, setStudents }: StudentTableProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedStudent, setSelectedStudent] = React.useState<IRegistration | null>(null);

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      const res = await axios.patch(`/api/registeration`, { id, status: newStatus });
      if (res.status === 200) {
        // Update local state so UI reflects change immediately
        setStudents((prev: IRegistration[]) => 
          prev.map(s => s._id === id ? { ...s, status: newStatus } : s)
        );
        // If modal is open, update the selected student too
        if (selectedStudent?._id === id) {
          setSelectedStudent({ ...selectedStudent, status: newStatus as any });
        }
      }
    } catch (err) {
      alert("Failed to update status");
    }
  };

  const handleOpen = (student: IRegistration) => {
    setSelectedStudent(student);
    setOpen(true);
  };
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this student record?")) return;
    try {
      const res = await axios.delete(`/api/registeration`, { data: { id } });
      if (res.status === 200) {
        setStudents((prev) => prev.filter((s) => s._id !== id));
        alert("Student record deleted.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to delete record.");
    }
  };

  const columns: GridColDef<IRegistration>[] = [
    {
      field: 'profilePicture',
      headerName: 'Photo',
      width: 70,
      renderCell: (params) => (
        <Link target='_blank' href={params.value}>
          <Image
            width={40}
            height={40}
            src={params.value || '/placeholder-user.png'}
            alt="Profile Image"
            style={{ width: 40, height: 40, objectFit: 'cover', marginTop: 10 }}
          />
        </Link>
      ),
    },
    { 
      field: 'fullName', 
      headerName: 'Basic Info', 
      minWidth: 200, 
      renderCell: (params) => (
        <div className="py-2">
          <p className="font-bold text-slate-900 leading-tight">{params.value}</p>
          <p className="text-[10px] text-slate-500 italic">{params.row.email}</p>
          <p className="text-[10px] text-blue-600 font-medium">S/O: {params.row.fatherName}</p>
        </div>
      )
    },
    { field: 'cnicOrFormB', headerName: 'CNIC', width: 140 },
    { 
        field: 'contact', 
        headerName: 'Contact', 
        width: 140,
        renderCell: (params) => (
            <div className="text-[11px] py-2">
                <p>📞 {params.row.mobileNumber}</p>
                <p className="text-green-600">💬 {params.row.whatsAppNumber}</p>
            </div>
        )
    },
    { field: 'district', headerName: 'District', width: 110 },
    { 
      field: 'academic', 
      headerName: 'Academic', 
      width: 180,
      renderCell: (params) => (
        <div className="text-[11px] py-2">
            <p className="font-bold">{params.row.currentGrade}</p>
            <p className="text-slate-500 truncate w-32">{params.row.instituteName}</p>
            <p className="text-blue-500">Result: {params.row.academicPercentage}</p>
        </div>
      )
    },
    {
        field: 'extracurriculars',
        headerName: 'Activities',
        width: 130,
        renderCell: (params) => (
            <div className="flex flex-wrap gap-1">
                {params.value?.map((ex: string) => (
                    <span key={ex} className="bg-slate-100 text-[12px] px-1 rounded font-bold">{ex}</span>
                ))}
            </div>
        )
    },
    {
        field: 'motivation',
        headerName: 'Motivation',
        width: 150,
        renderCell: (params) => (
            <Tooltip title={params.value}>
                <p className="text-[10px] italic line-clamp-2">{params.value}</p>
            </Tooltip>
        )
    },
    {
      field: 'status',
      headerName: 'Update Status',
      width: 160,
      renderCell: (params) => (
        <FormControl fullWidth size="small" sx={{ mt: 1 }}>
          <Select
            value={params.value}
            onChange={(e) => handleStatusUpdate(params.row._id!, e.target.value)}
            sx={{ 
                height: 32, 
                fontSize: '12px', 
                fontWeight: 'bold',
                bgcolor: params.value === 'Approved' ? '#f0fdf4' : params.value === 'Rejected' ? '#fef2f2' : '#fffbeb',
                color: params.value === 'Approved' ? '#166534' : params.value === 'Rejected' ? '#991b1b' : '#92400e',
                borderRadius: '8px'
            }}
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Approved">Approved</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </Select>
        </FormControl>
      )
    },
    {
      field: 'registeredAt',
      headerName: 'Reg. Date',
      width: 110,
      valueGetter: (params: any) => new Date(params).toLocaleDateString(),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: 110,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', gap: 0.5, pt: 1 }}>
          <Tooltip title="View Full Details">
            <IconButton color="primary" size="small" onClick={() => handleOpen(params.row)}>
            <FiEye />
          </IconButton>
          </Tooltip>
          <IconButton color="error" size="small" onClick={() => handleDelete(params.row._id!)}>
            <FiTrash />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ 
      height: 750, 
      width: '100%', 
      p: 2, 
      bgcolor: 'white', 
      borderRadius: 4, 
      boxShadow: '0 4px 24px rgba(0,0,0,0.06)' 
    }}>
      <DataGrid
        rows={students}
        columns={columns}
        getRowHeight={() => "auto"}
        getRowId={(row) => row._id!} 
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10, 25, 50]}
        disableRowSelectionOnClick
        sx={{
          border: 'none',
          '& .MuiDataGrid-cell': { py: 1, borderBottom: '1px solid #f1f5f9' },
          '& .MuiDataGrid-columnHeaders': {
            bgcolor: '#f8fafc',
            color: '#475569',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '0.025em',
            fontSize: '10px'
          },
          '& .MuiDataGrid-virtualScroller': {
            bgcolor: 'white'
          }
        }}
      />
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth scroll="body" PaperProps={{ sx: { borderRadius: 5, p: 1 } }}>
        {selectedStudent && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography fontWeight={900}>Student Profile</Typography>
              <IconButton onClick={() => setOpen(false)}><FiX /></IconButton>
            </DialogTitle>
            
            <DialogContent>
              <Box className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                {/* Left Side: Image & Basic Info */}
                <Box className="flex flex-col items-center text-center space-y-4">
                  <Image src={selectedStudent.profilePicture as string} width={160} height={160} className="w-40 h-40 rounded-3xl object-cover border-4 border-slate-50 shadow-lg" alt="Profile" />
                  <div>
                    <Typography variant="h5" fontWeight={900}>{selectedStudent.fullName}</Typography>
                    <Typography color="text.secondary">S/O: {selectedStudent.fatherName}</Typography>
                    <Chip label={selectedStudent.status} color="primary" sx={{ mt: 1 }} />
                  </div>
                </Box>

                {/* Right Side: Detailed Data */}
                <Box className="md:col-span-2 space-y-6">
                  {/* Row 1: Contact */}
                  <div className="grid grid-cols-2 gap-4">
                    <DataBlock label="CNIC / Form B" value={selectedStudent.cnicOrFormB} />
                    <DataBlock label="Email" value={selectedStudent.email} />
                    <DataBlock label="Mobile" value={selectedStudent.mobileNumber} />
                    <DataBlock label="WhatsApp" value={selectedStudent.whatsAppNumber} />
                  </div>

                  <Divider />

                  {/* Row 2: Location & Academic */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-blue-600 font-bold"><FiMapPin /> Location Info</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <p><b>District:</b> {selectedStudent.district}</p>
                        <p><b>DOB:</b> {new Date(selectedStudent.dob).toLocaleDateString()}</p>
                        <p className="col-span-2"><b>Permanent Address:</b> {selectedStudent.permanentAddress}</p>
                    </div>
                  </div>

                  <Divider />

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-purple-600 font-bold"><FiBook /> Academic Info</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <p><b>Grade:</b> {selectedStudent.currentGrade}</p>
                        <p><b>Percentage:</b> {selectedStudent.academicPercentage}</p>
                        <p className="col-span-2"><b>Institute:</b> {selectedStudent.instituteName}</p>
                    </div>
                  </div>

                  <Divider />

                  {/* Motivation */}
                  <div className="space-y-2 p-4 bg-slate-50 rounded-2xl">
                    <div className="flex items-center gap-2 text-red-500 font-bold"><FiHeart /> Motivation</div>
                    <Typography variant="body2" className="italic text-slate-600">"{selectedStudent.motivation}"</Typography>
                  </div>
                </Box>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}
function DataBlock({ label, value }: { label: string, value: any }) {
  return (
    <div>
      <Typography variant="caption" color="text.secondary" fontWeight="bold">{label}</Typography>
      <Typography variant="body2" fontWeight="medium">{value || 'N/A'}</Typography>
    </div>
  )
}