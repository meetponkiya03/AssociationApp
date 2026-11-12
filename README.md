# SutraPlus Liquor Outlets Accounting App - Angular UI Components

This package contains pixel-perfect HTML + Tailwind CSS templates for the **SutraPlus** inventory and accounting management application, structured for seamless integration into an **Angular** (v14 / 15 / 16 / 17 / 18+) application.

---

## 🚀 Complete 4-Step Authentication & Onboarding Flow

As defined in the onboarding workflow diagram, the system follows a 4-step sequential initialization flow:

```text
[ 1. User Logs In ] ──> [ 2. Select Role ] ──> [ 3. Select Financial Year ] ──> [ 4. Dashboard ]
```

1. **Step 1: User Login (`LoginComponent`)**
   - Brand titlebar with empty logo tag and soft blue wave banner.
   - User Login icon and heading.
   - Username input (prefilled with `admin`) and Password input (prefilled with `••••••`).
   - Royal Blue Login button (`#1976d2`).

2. **Step 2: Select Role (`SelectRoleComponent`)**
   - Options for **Trader** (Shop/Store icon, highlighted active) and **Commission Agent** (Handshake icon).
   - Action buttons: Emerald Green `✓ Continue` (`#2e7d32`) and Outline `✕ Cancel`.

3. **Step 3: Select Financial Year (`SelectFyComponent`)**
   - Calendar icon and heading.
   - Select dropdown active value: `2025 - 26`.
   - Dropdown options list: `2026 - 27`, `2025 - 26` (active royal blue), `2024 - 25`, `2023 - 24`, `2022 - 23`.
   - Action buttons: Emerald Green `✓ Proceed` (`#2e7d32`) and Outline `✕ Cancel`.

4. **Step 4: Master Dashboard & Accounting Workspace (`DashboardComponent`)**
   - Header with empty logo tag, SutraPlus branding, and dynamic user context pill: `Trader | FY : 2025 - 26`.
   - Left dark navy sidebar navigation (`#0c2444`).
   - Speedometer / Gauge dashboard header.
   - **4 Primary KPI Cards (2x2 Grid)**:
     - **Purchase**: Green shopping cart icon, `₹ 12,58,000`
     - **Sales**: Green shopping cart with badge, `₹ 18,74,500`
     - **Stock Value**: Amber isometric stacked boxes icon, `₹ 36,42,300`
     - **Profit**: Blue rising bar chart icon, `₹ 4,26,750`
   - **Monthly Sales Bar Chart Card**:
     - Visual bar distribution for `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov` with hover value tooltips.

---

## 📁 Directory & Folder Structure

```text
AssociationApp/
├── assets/
│   ├── images/                             # UI icons, illustrations, background textures
│   │   └── README.md
│   └── logos/                              # Client branding and app logo
│       └── README.md
│
├── src/
│   └── app/
│       ├── app.component.html              # Top-level dynamic layout (Auth vs Workspace)
│       ├── app.routes.ts                   # Angular route configuration
│       ├── layout/
│       │   ├── header/
│       │   │   ├── header.component.html   # Web navbar with branding, empty logo tag, and Role | FY pill
│       │   │   └── header.component.css
│       │   └── sidebar/
│       │       ├── sidebar.component.html  # Dark navy navigation sidebar with active pills
│       │       └── sidebar.component.css
│       └── pages/
│           ├── auth/
│           │   ├── login/                  # Step 1: User Login
│           │   │   ├── login.component.html
│           │   │   └── login.component.css
│           │   ├── select-role/            # Step 2: Role Selection (Trader / Commission Agent)
│           │   │   ├── select-role.component.html
│           │   │   └── select-role.component.css
│           │   └── select-fy/              # Step 3: Financial Year Selection
│           │       ├── select-fy.component.html
│           │       └── select-fy.component.css
│           ├── dashboard/                  # Step 4: Master Dashboard with 4 KPIs & Chart
│           │   ├── dashboard.component.html
│           │   └── dashboard.component.css
│           ├── add-record/                 # Invoice Entry Form
│           │   ├── add-record.component.html
│           │   └── add-record.component.css
│           ├── cross-check/                # Reconciliation & Mismatch Detector
│           │   ├── cross-check.component.html
│           │   └── cross-check.component.css
│           ├── import-excel/               # Bulk Excel Import & Data Grid
│           │   ├── import-excel.component.html
│           │   └── import-excel.component.css
│           ├── receipt-entry/              # Monthly Quota Receipt Ledger & Form
│           │   ├── receipt-entry.component.html
│           │   └── receipt-entry.component.css
│           └── view-records/               # Aggregated Party Bags List
│               ├── view-records.component.html
│               └── view-records.component.css
│
├── index.html                              # Master live application with interactive Screen & Flow Switcher
├── preview-login.html                      # Standalone Step 1: User Login preview
├── preview-select-role.html                # Standalone Step 2: Select Role (Trader / Commission Agent)
├── preview-select-fy.html                  # Standalone Step 3: Select Financial Year preview
├── preview-dashboard.html                  # Standalone Step 4: Master Dashboard preview (Single Page, No Scroll)
├── preview-add-record.html                 # Standalone Invoice Entry Form preview
├── preview-import-excel.html               # Standalone Import Records from Excel preview
├── preview-view-records.html               # Standalone View Records preview (with Edit & Delete actions)
├── preview-cross-check.html                # Standalone Cross Check reconciliation preview
└── preview-receipt-entry.html              # Standalone Receipt Entry ledger preview
```

---

## 🎨 Design System & Specifications

| Element | Specification | Tailwind / Hex Code |
| :--- | :--- | :--- |
| **Window Background** | Light soft blue | `bg-[#f4f8fc]` |
| **Sidebar Background** | Deep dark navy | `bg-[#0c2444]` (`#0c2444`) |
| **Active Nav Pill** | Vivid royal blue | `bg-[#1976d2]` (`#1976d2`) |
| **Table Header** | Solid deep blue | `bg-[#1565c0]` (`#1565c0`) |
| **Primary Buttons (Submit/Save/Continue)** | Emerald forest green | `bg-[#2e7d32]` (`#2e7d32`) |
| **Secondary Buttons (Clear/Refresh/Cancel)** | Light gray steel | `bg-white border-slate-300` |
| **Match Pill Badge** | Light mint green | `bg-[#e8f5e9] text-[#2e7d32] border-[#a5d6a7]` |
| **Mismatch Alert Badge** | Soft rose alert | `bg-[#ffebee] text-[#d32f2f] border-[#ef9a9a]` |
| **Header Title Gradient** | Blue wave banner | `bg-gradient-to-r from-blue-50/80 via-blue-100/50 to-blue-200/60` |

---

## 🧩 Angular Integration Guide

### 1. Logo Asset Binding
As requested, empty image tags are configured throughout the project:
```html
<img 
  src="" 
  alt="SutraPlus Logo" 
  class="h-10 w-auto min-w-[36px] object-contain drop-shadow-sm"
/>
```
Once your logo file is added to `assets/logos/sutraplus-logo.png`, simply bind:
```html
<img 
  src="assets/logos/sutraplus-logo.png" 
  alt="SutraPlus Logo" 
  class="h-10 w-auto min-w-[36px] object-contain drop-shadow-sm"
/>
```

### 2. Angular Router Setup
The route definitions are provided in [src/app/app.routes.ts](file:///d:/U_Project/Project-Html/AssociationApp/src/app/app.routes.ts):
```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'select-role', component: SelectRoleComponent },
  { path: 'select-fy', component: SelectFyComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-record', component: AddRecordComponent },
  { path: 'import-excel', component: ImportExcelComponent },
  { path: 'view-records', component: ViewRecordsComponent },
  { path: 'cross-check', component: CrossCheckComponent },
  { path: 'receipt-entry', component: ReceiptEntryComponent },
  { path: '**', redirectTo: 'dashboard' }
];
```
