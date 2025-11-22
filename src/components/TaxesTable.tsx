import { useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
  flexRender,
  type ColumnDef,
} from '@tanstack/react-table';
import type { Tax } from '../types';
import './TaxesTable.css';

interface TaxesTableProps {
  data: Tax[];
  onEdit: (tax: Tax) => void;
}

const columnHelper = createColumnHelper<Tax>();

export const TaxesTable = ({ data, onEdit }: TaxesTableProps) => {
  const columns = useMemo(
    () => [
      columnHelper.accessor('name', {
        header: 'Name',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('country', {
        header: 'Country',
        cell: (info) => info.getValue(),
      }),
      columnHelper.display({
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
        <button
          className="edit-button"
          onClick={() => onEdit(row.original)}
          aria-label="Edit tax"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.333 2.00001C11.5084 1.82445 11.7163 1.68506 11.9451 1.58913C12.1739 1.4932 12.4189 1.44263 12.6663 1.44263C12.9138 1.44263 13.1588 1.4932 13.3876 1.58913C13.6164 1.68506 13.8243 1.82445 13.9997 2.00001C14.1752 2.17557 14.3146 2.38346 14.4105 2.61225C14.5065 2.84104 14.557 3.08605 14.557 3.33351C14.557 3.58097 14.5065 3.82598 14.4105 4.05477C14.3146 4.28356 14.1752 4.49145 13.9997 4.66701L5.33301 13.3337L1.33301 14.667L2.66634 10.667L11.333 2.00001Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      ),
    }),
    ],
    [onEdit]
  );

  const table = useReactTable<Tax>({
    data,
    columns: columns as ColumnDef<Tax>[],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="table-container">
      <table className="taxes-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="empty-state">
                No taxes found
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

