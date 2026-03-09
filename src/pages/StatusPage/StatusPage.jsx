import { Status } from "../../components";

function StatusPage() {
  const exampleSteps = [
    { title: "Recibido", location: "Oficina de Origen", date: "2023-10-27 10:00", completed: true, active: false },
    { title: "En Tránsito", location: "Centro de Distribución", date: "2023-10-27 15:30", completed: true, active: false },
    { title: "En Reparto", location: "Sucursal de Destino", date: "2023-10-28 09:00", completed: false, active: true },
    { title: "Entregado", location: "Domicilio del Cliente", date: "", completed: false, active: false }
  ];

  return (
    <>
      <Status steps={exampleSteps} />
    </>
  )
}

export default StatusPage;
