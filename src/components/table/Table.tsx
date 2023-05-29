import * as React from 'react';
import Table, { TableProps } from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getRowStyles, styles } from './styles';
import { getObjectKeys } from '@/utils/utils';

const { rowStyles, noStripes, tableStyles } = styles;

const isEven = (number: number) => number % 2 === 0;

interface ITable<T> extends TableProps {
  headings?: unknown[];
  data?: T[];
  displayHeader?: boolean;
}

const MuiTable = Table;

export default function MyTable<T>({
  headings,
  data,
  displayHeader = true,
}: ITable<T>) {
  return (
    <TableContainer>
      <MuiTable sx={tableStyles} aria-label='simple table'>
        {displayHeader && (
          <TableHead>
            <TableRow>
              {headings?.map((header: any, index) => (
                <TableCell
                  key={index}
                  align={index === 0 ? 'inherit' : 'center'}
                  sx={{ ...rowStyles, ...noStripes }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        )}

        <TableBody>
          {data?.map((row, index) => {
            const keys = getObjectKeys(row as {});
            return (
              <TableRow key={index} sx={getRowStyles(isEven(index))}>
                {keys.map((key, i) => (
                  <TableCell
                    key={i}
                    sx={noStripes}
                    component='th'
                    scope='row'
                    align={i === 0 ? 'left' : 'center'}
                  >
                    {row[key]}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
