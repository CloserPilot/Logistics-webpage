import { MainPage, TrackingPage, StatusPage, ContactPage } from '../pages';

export const routes = [
  {
    path: "/",
    label: "Inicio",
    showInNav: true,
    element: MainPage
  },
  {
    path: "/tracking",
    label: "Rastreo",
    showInNav: true,
    element: TrackingPage
  },
  {
    path: "/status",
    label: "Estado",
    showInNav: false,
    element: StatusPage
  },
  {
    path: "/contact",
    label: "Contacto",
    showInNav: true,
    element: ContactPage
  }
];