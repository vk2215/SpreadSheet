// src/components/Spreadsheet.tsx
import React, { useMemo, useState, useEffect, useRef, useCallback } from "react";
import { MOCK_DATA, type JobRequest } from "../types/types";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
} from "@tanstack/react-table";

// Import Lucide icons, including new ones: User, Globe, ArrowDownCircle
import {
  ChevronRight,
  EyeOff,
  ArrowUpDown,
  Filter,
  LayoutGrid,
  Upload,
  Download,
  Share2,
  Plus,
  Link,
  XCircle,
  ChevronDown,
  MoreHorizontal,
  ArrowUp,
  EllipsisVertical,
  Briefcase,
  CalendarDays,
  User, // Imported User icon
  Globe, // Imported Globe icon
  ArrowDownCircle, // Imported ArrowDownCircle icon
} from "lucide-react";

// Define a type for the active cell to ensure type safety
type ActiveCell = {
  rowIndex: number | null;
  columnId: string | null;
};

const columnHelper = createColumnHelper<JobRequest>();

const SpreadsheetComponent: React.FC = () => {
  // Define column padding to consistently apply to header and data cells for width calculation
  const CELL_HORIZONTAL_PADDING = 32; // px-4 means 16px left and 16px right padding = 32px total per cell

  // State for active cell for keyboard navigation
  const [activeCell, setActiveCell] = useState<ActiveCell>({ rowIndex: null, columnId: null });
  const tableContainerRef = useRef<HTMLDivElement>(null); // Ref for the scrollable table container

  // Function to generate empty rows for extending the table
  const generateEmptyRows = (count: number, startId: number): JobRequest[] => {
    const emptyRows: JobRequest[] = [];
    for (let i = 0; i < count; i++) {
      emptyRows.push({
        id: startId + i,
        jobRequest: "",
        submitted: "",
        status: "Need to start",
        submitter: "",
        url: "",
        assigned: "",
        priority: "Low",
        dueDate: "",
        estValue: "",
      });
    }
    return emptyRows;
  };

  // Determine how many empty rows to add
  const initialDataCount = MOCK_DATA.length;
  // minTotalRows ensures there are always at least this many rows, even if MOCK_DATA is less
  const minTotalRows = 20;
  const numberOfEmptyRows = Math.max(0, minTotalRows - initialDataCount);

  const startingIdForEmptyRows = initialDataCount + 1;
  const emptyRows = useMemo(
    () => generateEmptyRows(numberOfEmptyRows, startingIdForEmptyRows),
    [numberOfEmptyRows, startingIdForEmptyRows]
  );

  // Combine MOCK_DATA with empty rows
  const allData = useMemo(() => [...MOCK_DATA, ...emptyRows], [emptyRows]);

  const columnDefinitions = useMemo(
    () => [
      columnHelper.accessor("id", {
        header: () => (
          <div className="flex items-center">
            #
            <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
          </div>
        ),
        cell: (info) => info.getValue(),
        size: 40,
        enableResizing: false, // Prevent resizing for '#' column
      }),
      columnHelper.accessor("jobRequest", {
        header: () => (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Briefcase className="w-4 h-4 mr-1 text-gray-500" /> {/* Briefcase icon */}
              Job Request
              <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
            </div>
            <EllipsisVertical className="w-4 h-4 text-gray-500 ml-2" />
          </div>
        ),
        cell: (info) => info.getValue(),
        size: 250,
      }),
      columnHelper.accessor("submitted", {
        header: () => (
          <div className="flex items-center">
            <CalendarDays className="w-4 h-4 mr-1 text-gray-500" /> {/* CalendarDays icon */}
            Submitted
            <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
          </div>
        ),
        cell: (info) => info.getValue(),
        size: 100,
      }),
      columnHelper.accessor("status", {
        header: () => (
          <div className="flex items-center">
            <ArrowDownCircle className="w-4 h-4 mr-1 text-gray-500" /> {/* ArrowDownCircle icon added for Status */}
            Status
            <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
          </div>
        ),
        cell: (info) => {
          const status = info.getValue();
          const isOriginalDataRowOrFilledPlaceholder =
            info.row.original.jobRequest !== "";

          if (!isOriginalDataRowOrFilledPlaceholder) {
            return null;
          }

          let bgColor = "";
          let textColor = "";
          switch (status) {
            case "In-process":
              bgColor = "bg-statusInProcessBg";
              textColor = "text-statusInProcessText";
              break;
            case "Need to start":
              bgColor = "bg-statusNeedToStartBg";
              textColor = "text-statusNeedToStartText";
              break;
            case "Complete":
              bgColor = "bg-statusCompleteBg";
              textColor = "text-statusCompleteText";
              break;
            case "Blocked":
              bgColor = "bg-statusBlockedBg";
              textColor = "text-statusBlockedText";
              break;
            default:
              return null;
          }
          return (
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold ${bgColor} ${textColor}`}
            >
              {status}
            </span>
          );
        },
        size: 100,
      }),
      columnHelper.accessor("submitter", {
        header: () => (
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1 text-gray-500" /> {/* User icon added for Submitter */}
            Submitter
            <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
          </div>
        ),
        cell: (info) => info.getValue(),
        size: 130,
      }),
      columnHelper.accessor("url", {
        header: () => (
          <div className="flex items-center">
            <Globe className="w-4 h-4 mr-1 text-gray-500" /> {/* Globe icon added for URL */}
            URL
            <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
          </div>
        ),
        cell: (info) => {
          const url = info.getValue();
          if (!url) return null;
          return (
            <a
              href={`http://${url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {url}
            </a>
          );
        },
        size: 150,
      }),
      columnHelper.accessor("assigned", {
        header: () => (
          <div className="flex items-center">
            Assigned
            <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
          </div>
        ),
        cell: (info) => info.getValue(),
        size: 130,
      }),
      columnHelper.accessor("priority", {
        header: () => (
          <div className="flex items-center">
            Priority
            <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
          </div>
        ),
        cell: (info) => {
          const priority = info.getValue();
          const isOriginalDataRowOrFilledPlaceholder =
            info.row.original.jobRequest !== "";

          if (!isOriginalDataRowOrFilledPlaceholder) {
            return null;
          }

          let bgColor = "";
          let textColor = "";
          switch (priority) {
            case "High":
              bgColor = "bg-priorityHighBg";
              textColor = "text-priorityHighText";
              break;
            case "Medium":
              bgColor = "bg-priorityMediumBg";
              textColor = "text-priorityMediumText";
              break;
            case "Low":
              bgColor = "bg-priorityLowBg";
              textColor = "text-priorityLowText";
              break;
            default:
              return null;
          }
          return (
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold ${bgColor} ${textColor}`}
            >
              {priority}
            </span>
          );
        },
        size: 80,
      }),
      columnHelper.accessor("dueDate", {
        header: () => (
          <div className="flex items-center">
            Due Date
            <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
          </div>
        ),
        cell: (info) => info.getValue(),
        size: 100,
      }),
      columnHelper.accessor("estValue", {
        header: () => (
          <div className="flex items-center">
            Est. Value
            <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
          </div>
        ),
        cell: (info) => {
          const value = info.getValue();
          if (!value) return null;

          const numericValue = parseFloat(value.replace(/,/g, ""));
          if (isNaN(numericValue)) return null;
          return `₹ ${numericValue.toLocaleString("en-IN", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}`;
        },
        size: 120,
      }),
      columnHelper.display({
        id: "actions",
        header: () => "",
        cell: (info) => {
          if (info.row.original.jobRequest === "") {
            return null;
          }
          return (
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => console.log(`Clicked row ${info.row.id} action`)}
            >
              <Plus className="w-4 h-4" />
            </button>
          );
        },
        size: 40,
        enableResizing: false,
      }),
    ],
    []
  );

  // State for column visibility
  const [columnVisibility, setColumnVisibility] = useState({});
  // State for showing/hiding the "Hide fields" dropdown
  const [showHideFieldsDropdown, setShowHideFieldsDropdown] = useState(false);
  const hideFieldsDropdownRef = useRef<HTMLDivElement>(null); // Ref for click-outside

  // Effect to close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (hideFieldsDropdownRef.current && !hideFieldsDropdownRef.current.contains(event.target as Node)) {
        setShowHideFieldsDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Initialize table
  const table = useReactTable({
    data: allData,
    columns: columnDefinitions,
    getCoreRowModel: getCoreRowModel(),
    getRowId: (row) => String(row.id),
    enableColumnResizing: true, // Enable column resizing
    columnResizeMode: 'onChange', // Recommended mode for consistent resizing
    state: {
      columnVisibility, // Integrate column visibility state
    },
    onColumnVisibilityChange: setColumnVisibility, // Update column visibility state
    getFilteredRowModel: getFilteredRowModel(), // Required if you add filtering later
  });

  // Memoize the colgroup for the separate table to ensure it reacts to table's column sizes
  const q3Colgroup = useMemo(() => {
    // Ensure all columns exist and header groups are ready before proceeding
    if (!table.getAllColumns() || table.getAllColumns().length === 0 || !table.getHeaderGroups() || table.getHeaderGroups().length === 0) {
      return null;
    }

    return (
      <colgroup>
        {table.getAllColumns().map((column) => (
          <col
            key={column.id}
            // Use the column's current size from the table instance
            style={{ width: `${column.getIsVisible() ? (column.getSize() + CELL_HORIZONTAL_PADDING) : 0}px` }}
          />
        ))}
      </colgroup>
    );
  }, [table.getAllColumns, CELL_HORIZONTAL_PADDING, table.getState().columnSizing, table.getState().columnSizingInfo, table.getVisibleLeafColumns]); // Added dependencies for resizing

  // --- Keyboard Navigation Logic ---
  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLTableSectionElement>) => {
    const { key } = event;
    const { rowIndex, columnId } = activeCell;

    const visibleRows = table.getRowModel().rows;
    const visibleColumns = table.getVisibleLeafColumns();

    if (visibleRows.length === 0 || visibleColumns.length === 0) {
      return; // No data or columns to navigate
    }

    let newRowIndex = rowIndex;
    let newColumnId = columnId;

    const currentColumnIndex = columnId ? visibleColumns.findIndex(c => c.id === columnId) : -1;

    if (rowIndex === null || columnId === null) {
      // If no cell is active, activate the first visible cell
      newRowIndex = 0;
      newColumnId = visibleColumns[0].id;
    } else {
      switch (key) {
        case 'ArrowUp':
          event.preventDefault(); // Prevent page scroll
          newRowIndex = Math.max(0, rowIndex - 1);
          break;
        case 'ArrowDown':
          event.preventDefault(); // Prevent page scroll
          newRowIndex = Math.min(visibleRows.length - 1, rowIndex + 1);
          break;
        case 'ArrowLeft':
          event.preventDefault(); // Prevent page scroll
          if (currentColumnIndex > 0) {
            newColumnId = visibleColumns[currentColumnIndex - 1].id;
          }
          break;
        case 'ArrowRight':
          event.preventDefault(); // Prevent page scroll
          if (currentColumnIndex < visibleColumns.length - 1) {
            newColumnId = visibleColumns[currentColumnIndex + 1].id;
          }
          break;
        case 'Escape': // Optional: deselect cell
          setActiveCell({ rowIndex: null, columnId: null });
          return;
        default:
          return; // Ignore other keys
      }
    }

    if (newRowIndex !== rowIndex || newColumnId !== columnId) {
      setActiveCell({ rowIndex: newRowIndex, columnId: newColumnId });

      // Scroll the new active cell into view
      if (tableContainerRef.current && newRowIndex !== null && newColumnId !== null) {
        const rowElement = tableContainerRef.current.querySelector(
          `tr[data-row-index="${newRowIndex}"]`
        ) as HTMLTableRowElement | null;

        if (rowElement) {
          const cellElement = rowElement.querySelector(
            `td[data-column-id="${newColumnId}"]`
          ) as HTMLTableCellElement | null;

          if (cellElement) {
            cellElement.focus(); // Set focus for accessibility
            cellElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
          }
        }
      }
    }
  }, [activeCell, table]); // Dependencies for useCallback

  // Effect to set initial focus or re-focus after state update if component is mounted
  useEffect(() => {
    if (activeCell.rowIndex !== null && activeCell.columnId !== null && tableContainerRef.current) {
      const rowElement = tableContainerRef.current.querySelector(
        `tr[data-row-index="${activeCell.rowIndex}"]`
      ) as HTMLTableRowElement | null;

      if (rowElement) {
        const cellElement = rowElement.querySelector(
          `td[data-column-id="${activeCell.columnId}"]`
        ) as HTMLTableCellElement | null;

        if (cellElement) {
          cellElement.focus();
        }
      }
    }
  }, [activeCell]);


  return (
    <div className="flex flex-col w-full max-w-full h-screen">
      {/* --- INLINE CSS FOR RESIZER (FOR DEMO PURPOSES) --- */}
      {/* For production, move this to a separate CSS file and import it. */}
      <style>
        {`
        .spreadsheet-table {
            border-collapse: separate;
        }

        .resizer {
          position: absolute;
          right: -2px; /* Adjusted to slightly overlap the border for better grabbing, or 0px to be exactly on it */
          top: 0;
          height: 100%;
          width: 5px; /* Width of the draggable area */
          cursor: col-resize;
          user-select: none;
          touch-action: none;
          z-index: 2; /* Ensure it's above other header content but allows border to show through */
          opacity: 0; /* Hidden by default */
          transition: opacity 0.2s ease-in-out;
        }

        th:hover > .resizer {
          opacity: 1;
        }

        .resizer.isResizing {
          background: #3b82f6; /* Blue bar during resize */
          opacity: 1;
          width: 2px; /* Make it a thin bar when actively dragging */
          right: 0; /* Align it precisely on the border when dragging */
        }

        .resizer::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0; /* Align to the very right of the resizer's width */
            height: 100%;
            width: 1px; /* The actual visible line for the handle */
            background: transparent; /* Initially transparent */
        }

        .resizer:hover::after {
            background: rgba(0, 0, 0, 0.4); /* Darker line on hover */
        }

        .resizer.isResizing::after {
            background: #3b82f6; /* Blue line when dragging */
        }
        `}
      </style>

      {/* Top Toolbar Section */}
      <div className="bg-white p-2 flex items-center justify-between border-b border-gray-200 z-10">
        <div className="flex items-center space-x-2 text-sm">
          <span className="flex items-center px-3 py-1 text-gray-700 font-semibold">
            Tool bar <ChevronRight className="w-4 h-4 ml-1" />
          </span>

          {[
            {
              label: "Hide fields",
              icon: EyeOff,
              action: () => setShowHideFieldsDropdown(!showHideFieldsDropdown),
              isDropdown: true, // Mark this button as opening a dropdown
            },
            {
              label: "Sort",
              icon: ArrowUpDown,
              action: () => console.log("Clicked toolbar: Sort"),
            },
            {
              label: "Filter",
              icon: Filter,
              action: () => console.log("Clicked toolbar: Filter"),
            },
            {
              label: "Cell view",
              icon: LayoutGrid,
              action: () => console.log("Clicked toolbar: Cell view"),
            },
          ].map(({ label, icon: Icon, action, isDropdown }) => (
            <div key={label} className="relative">
              <button
                aria-label={label}
                className="flex items-center px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={action}
              >
                <Icon className="w-4 h-4 mr-1" />
                {label}
              </button>
              {isDropdown && showHideFieldsDropdown && (
                <div
                  ref={hideFieldsDropdownRef}
                  className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-20"
                >
                  <div className="px-3 py-1 text-xs text-gray-500 font-semibold border-b border-gray-100">Toggle Columns</div>
                  {table.getAllLeafColumns().filter(column => column.id !== 'actions').map((column) => ( // Exclude actions column from hide/show
                    <label key={column.id} className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm">
                      <input
                        {...{
                          type: 'checkbox',
                          checked: column.getIsVisible(),
                          onChange: column.getToggleVisibilityHandler(),
                          className: 'mr-2',
                        }}
                      />
                      {/* Safely render header string or ID */}
                      {typeof column.columnDef.header === 'function'
                        ? (column.columnDef.header({} as any) as React.ReactElement)?.props?.children?.[0]?.props?.children || column.id
                        : String(column.columnDef.header) || column.id}
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-2 text-sm">
          {[
            { label: "Import", icon: Upload, action: () => console.log("Clicked toolbar: Import") },
            { label: "Export", icon: Download, action: () => console.log("Clicked toolbar: Export") }, // Reordered
            { label: "Share", icon: Share2, action: () => console.log("Clicked toolbar: Share") },
          ].map(({ label, icon: Icon, action }) => (
            <div key={label} className="border border-gray-300 rounded-md"> {/* Added wrapper div for border */}
              <button
                aria-label={label}
                className="flex items-center px-3 py-1 text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={action}
              >
                <Icon className="w-4 h-4 mr-1" />
                {label}
              </button>
            </div>
          ))}

          <button
            aria-label="New Action"
            className="flex items-center bg-gobGreen text-white px-4 py-2 rounded-md font-medium hover:bg-gobDarkGreenHover transition-colors ml-4"
            onClick={() => console.log("Clicked New Action button")}
          >
            <Plus className="w-5 h-5 mr-1" />
            New Action
          </button>
        </div>
      </div>

      {/* Q3 Financial Overview Row (as a separate table for precise column alignment) */}
      <table className="w-full text-left table-fixed border-b border-gray-200">
        {q3Colgroup} {/* Render the memoized colgroup here */}
        <tbody>
          <tr className="h-12">
            {/* NEW TD for the '#' column - Darker gray background */}
            <td className="bg-gobDarkGray align-middle py-2 px-4 border-r border-gray-100">
              {/* No content needed here, just the background color */}
            </td>

            {/* TD for Job Request through Submitter (4 columns now) - Darker gray background */}
            <td colSpan={4} className="bg-gobDarkGray align-middle border-r border-gray-100">
              {/* Q3 Financial Overview Box - Light gray background, starts here */}
              <div className="inline-flex items-center space-x-1 text-gray-800 text-sm font-medium rounded-sm bg-gray-200 border border-gray-300 px-2 py-0.5 ml-4">
                {/* ml-4 to align with Job Request column's typical content start */}
                <Link className="w-4 h-4 text-gray-500" />
                <span>Q3 Financial Overview</span>
                <XCircle
                  className="w-4 h-4 text-red-400 cursor-pointer hover:text-red-600"
                  onClick={() => console.log("Clicked 'Q3 Financial Overview' close button")}
                />
              </div>
            </td>
            {/* White background ONLY for URL column (1 column) */}
            <td colSpan={1} className="bg-white align-middle py-2 px-4 border-r border-gray-100">
              {/* Content for URL column area if needed, otherwise it's just the background */}
            </td>
            {/* NEW TD for ABC (Assigned column) - Applied requested color and ellipsis */}
            <td colSpan={1} className="bg-green-300 align-middle py-2 px-4 border-r border-gray-100">
              <div className="flex items-center justify-center text-black text-sm px-2 py-1 ">
                <span className="relative flex items-center pr-1">
                  {/* The arrow is positioned relative to 'ABC' text */}
                 
                  ABC
                <MoreHorizontal className="w-4 h-4 mr-1" />
                </span>
                
              </div>
            </td>
            {/* NEW TD for Answer a question (Priority + Due Date columns) - Applied requested color and ellipsis */}
            <td colSpan={2}  className="bg-purple-300 align-middle py-2 px-4 border-r border-gray-100">
              <div className="flex items-center justify-center text-black text-sm px-2 py-1">
               Answer a question
                <MoreHorizontal className="w-4 h-4 mr-1" />
            </div>
            </td>
            {/* NEW TD for Extract (Est. Value column) - Applied requested color and ellipsis */}
            <td colSpan={1}  className="bg-orange-300 align-middle py-2 px-4 border-r border-gray-100">
              <div className="flex items-centerjustify-center text-black text-sm px-2 py-1">
               Extract
               <MoreHorizontal className="w-4 h-4 mr-1" />
              </div>
            </td>
            {/* NEW TD for Plus button (Actions column) */}
            <td colSpan={1} className="bg-white align-middle py-2 pr-4 text-right last:border-r-0">
              {" "}
              {/* text-right to push + to right */}
              <button className="p-1 rounded-full text-gray-500 hover:text-gray-700">
                <Plus className="w-4 h-4" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Spreadsheet Component (@tanstack/react-table) */}
      <div
        ref={tableContainerRef} // Assign ref to the scrollable container
        className="overflow-auto relative bg-white border-b border-gray-200 hide-scrollbar"
        style={{
          height: "calc(100vh - 120px - 48px - 60px)",
        }} /* Adjusted height calculation */
      >
        <table className="w-full text-left table-fixed spreadsheet-table"> {/* Added spreadsheet-table class here */}
          {/* Table Header */}
          <thead className="sticky top-0 z-10 border-b border-gray-200">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    style={{ width: `${header.getSize() + CELL_HORIZONTAL_PADDING}px` }}
                    className={`
                      relative py-2 px-4 text-sm font-semibold border-r border-gray-200 last:border-r-0
                      ${header.column.id === "estValue" ? "text-right" : ""}
                      ${
                        header.column.id === "assigned"
                          ? "bg-green-100 text-green-700"
                          : header.column.id === "priority" || header.column.id === "dueDate"
                          ? "bg-purple-100 text-purple-700"
                          : header.column.id === "estValue"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-gray-100 text-gray-700" // Default background and text color for other headers
                      }
                    `}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className={`flex items-center ${
                          // Special handling for 'Est. Value' header to justify content to the end
                          header.column.id === "estValue" ? "justify-end" : ""
                        }`}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                    {header.column.getCanResize() && (
                      <div
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        className={`resizer ${
                          header.column.getIsResizing() ? 'isResizing' : ''
                        }`}
                        // Style for dynamic transform is handled by react-table internally,
                        // no need for manual translateX here as `columnResizeMode: 'onChange'` handles it.
                        // The primary style is for visual feedback.
                      />
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {/* Table Body */}
          <tbody
            onKeyDown={handleKeyDown}
            tabIndex={0} // Make tbody focusable
            className="focus:outline-none" // Remove default focus outline
          >
            {table.getRowModel().rows.map((row, rowIndex) => (
              <tr
                key={row.id}
                data-row-index={rowIndex} // Add data attribute for easier selection
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    data-column-id={cell.column.id} // Add data attribute for easier selection
                    tabIndex={-1} // Make cells focusable programmatically, but not via tab key
                    className={`py-2 px-4 text-sm text-gray-800 border-r border-gray-100 last:border-r-0 focus:outline-none ${
                      cell.column.id === "jobRequest"
                        ? "whitespace-nowrap overflow-hidden text-ellipsis"
                        : ""
                    } ${
                      cell.column.id === "estValue" ||
                      cell.column.id === "dueDate"
                        ? "text-right"
                        : ""
                    } ${
                        activeCell.rowIndex === rowIndex && activeCell.columnId === cell.column.id
                            ? 'bg-blue-100 border-blue-400 border' // Style for active cell
                            : ''
                    }`}
                    onClick={() => setActiveCell({ rowIndex, columnId: cell.column.id })} // Set active cell on click
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Spreadsheet Footer */}
      <div className="flex-shrink-0 p-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          {/* All Orders */}
          <span
            className="inline-flex items-center text-sm font-medium text-green-800 px-2 py-1 bg-[#dde8de] cursor-pointer"
            onClick={() => console.log("Clicked footer tab: All Orders")}
          >
            All Orders
          </span>
          {/* Pending */}
          <span
            className="text-sm font-medium text-gray-700 cursor-pointer"
            onClick={() => console.log("Clicked footer tab: Pending")}
          >
            Pending
          </span>
          {/* Reviewed */}
          <span
            className="text-sm font-medium text-gray-700 cursor-pointer"
            onClick={() => console.log("Clicked footer tab: Reviewed")}
          >
            Reviewed
          </span>
          {/* Arrived */}
          <span
            className="text-sm font-medium text-gray-700 cursor-pointer"
            onClick={() => console.log("Clicked footer tab: Arrived")}
          >
            Arrived
          </span>
        </div>
        {/* Plus Button */}
        <button
          className="p-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-200"
          onClick={() => console.log("Clicked footer Plus button")}
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SpreadsheetComponent;