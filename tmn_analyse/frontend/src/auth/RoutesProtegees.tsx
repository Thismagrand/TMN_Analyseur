import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
// Layout pour routes publiques - aucune authentification requise
export function RoutePublique() {
  return <Outlet />;
}