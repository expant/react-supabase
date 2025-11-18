import { Outlet, Navigate } from 'react-router';
import { supabase } from '@/shared/api/supabaseClient';

export function PrivateRoute() {
	// return isAuth ? <Outlet /> : <Navigate to='/auth' replace />;
}
