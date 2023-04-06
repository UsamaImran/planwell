import * as React from 'react';
import Table, { TableProps } from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const isEven = (number: number) => number % 2 === 0;

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

interface ITable extends TableProps {
  headings?: unknown[];
  data?: unknown[];
  displayHeader?: boolean;
}

const MuiTable = Table;

export default function MyTable({
  headings,
  data,
  displayHeader = true,
}: ITable) {
  return (
    <TableContainer>
      <MuiTable
        sx={{ minWidth: 550, marginBottom: '20px', backgroundColor: '#FAFAFA' }}
        aria-label='simple table'
      >
        {displayHeader && (
          <TableHead>
            <TableRow>
              {headings?.map((header: any, index) => (
                <TableCell
                  key={index}
                  align={index === 0 ? 'inherit' : 'right'}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        )}

        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                backgroundColor: !isEven(index) ? '#FAFAFA' : 'white',
              }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.calories}</TableCell>
              <TableCell align='right'>{row.fat}</TableCell>
              <TableCell align='right'>{row.carbs}</TableCell>
              <TableCell align='right'>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
