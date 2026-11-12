import { Routes } from '@angular/router';

// Auth Flow Components (Steps 1, 2, 3)
import { LoginComponent } from './pages/auth/login/login.component';
import { SelectRoleComponent } from './pages/auth/select-role/select-role.component';
import { SelectFyComponent } from './pages/auth/select-fy/select-fy.component';

// Application Pages (Step 4 & Accounting Screens)
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ImportExcelComponent } from './pages/import-excel/import-excel.component';
import { CrossCheckComponent } from './pages/cross-check/cross-check.component';
import { AddRecordComponent } from './pages/add-record/add-record.component';
import { ReceiptEntryComponent } from './pages/receipt-entry/receipt-entry.component';
import { ViewRecordsComponent } from './pages/view-records/view-records.component';

export const routes: Routes = [
  // 1. Entry / Auth Flow Routes
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, title: 'SutraPlus - User Login' },
  { path: 'select-role', component: SelectRoleComponent, title: 'SutraPlus - Select Role' },
  { path: 'select-fy', component: SelectFyComponent, title: 'SutraPlus - Select Financial Year' },

  // 2. Application Workspace Routes
  { path: 'dashboard', component: DashboardComponent, title: 'SutraPlus - Dashboard' },
  { path: 'add-record', component: AddRecordComponent, title: 'SutraPlus - Add Record' },
  { path: 'import-excel', component: ImportExcelComponent, title: 'SutraPlus - Import from Excel' },
  { path: 'view-records', component: ViewRecordsComponent, title: 'SutraPlus - View Records' },
  { path: 'cross-check', component: CrossCheckComponent, title: 'SutraPlus - Cross Check' },
  { path: 'receipt-entry', component: ReceiptEntryComponent, title: 'SutraPlus - Receipt Entry' },

  // Fallback
  { path: '**', redirectTo: 'dashboard' }
];

