import {
  ExpoActivityList,
  ExpoStatus,
  ProgressStatus,
  IContainer,
  SupplierRole
} from "types";
import {
  PropertyType,
  IColumn,
  SelectTypeBoxOptionTagList,
} from "types/table-type/table.types";

export const initialContainerTypeOptions: SelectTypeBoxOptionTagList = [
  {
    id: "1",
    label: "40HQ",
    color: "",
    editable: true,
    deletable: true,
  },
  {
    id: "2",
    label: "40'",
    color: "",
    editable: true,
    deletable: true,
  },
  {
    id: "3",
    label: "20'",
    color: "",
    editable: true,
    deletable: true,
  },
  {
    id: "4",
    label: "REFEER 20'",
    color: "",
    editable: true,
    deletable: true,
  },
];
export const initialSupplierTypeOptions: SelectTypeBoxOptionTagList = [
  {
    id: "1",
    label: SupplierRole.AGENTE_DE_ADUANAS,
    color: "",
    editable: true,
    deletable: true,
  },
  {
    id: "2",
    label: SupplierRole.AGENTE_DE_CARGA,
    color: "",
    editable: true,
    deletable: true,
  },
  {
    id: "3",
    label: SupplierRole.TRANSPORTE_TERRESTRE,
    color: "",
    editable: false,
    deletable: false,
  },
  {
    id: "4",
    label: SupplierRole.SOCIEDAD_PORTUARIA,
    color: "",
    editable: true,
    deletable: true,
  },
  {
    id: "5",
    label: SupplierRole.OPERADOR_PORTUARIO,
    color: "",
    editable: true,
    deletable: true,
  },
  {
    id: "6",
    label: SupplierRole.NAVIERA,
    color: "",
    editable: true,
    deletable: true,
  },
];

export const initialExpoSettingList: ExpoActivityList = [
  {
    id: "1",
    name: "Solicitud de reserva",
    status: ExpoStatus.PrevioCargue,
    progress: ProgressStatus["Sin iniciar"],
    responsible: "",
    optional: false,
    enabled: true,
  },
  {
    id: "2",
    name: "Confirmación de reserva",
    status: ExpoStatus.PrevioCargue,
    progress: ProgressStatus["Sin iniciar"],
    responsible: "",
    optional: false,
    enabled: true,
  },
  {
    id: "3",
    name: "Coordinación de transporte terrestre",
    status: ExpoStatus.PrevioCargue,
    progress: ProgressStatus["Sin iniciar"],
    responsible: "",
    optional: false,
    enabled: true,
  },
  {
    id: "4",
    name: "Notificación al agente de aduanas",
    status: ExpoStatus.PrevioCargue,
    progress: ProgressStatus["Sin iniciar"],
    responsible: "",
    optional: false,
    enabled: true,
  },
  {
    id: "5",
    name: "Cargue en planta",
    status: ExpoStatus.PrevioCargue,
    progress: ProgressStatus["Sin iniciar"],
    responsible: "",
    optional: false,
    enabled: true,
  },
  {
    id: "6",
    name: "Ingreso a puerto",
    status: ExpoStatus.TransitoPuerto,
    progress: ProgressStatus["Sin iniciar"],
    responsible: "",
    optional: false,
    enabled: true,
  },
  {
    id: "7",
    name: "Aprobación documento de transporte",
    status: ExpoStatus.EnPuerto,
    progress: ProgressStatus["Sin iniciar"],
    responsible: "",
    optional: false,
    enabled: true,
  },
  {
    id: "8",
    name: "Confirmación zarpe",
    status: ExpoStatus.EnPuerto,
    progress: ProgressStatus["Sin iniciar"],
    responsible: "",
    optional: false,
    enabled: true,
  },
  {
    id: "9",
    name: "Notificar al cliente",
    status: ExpoStatus.TransitoInternacional,
    progress: ProgressStatus["Sin iniciar"],
    responsible: "",
    optional: false,
    enabled: true,
  },
  {
    id: "10",
    name: "Enviar documentos originales al cliente",
    status: ExpoStatus.TransitoInternacional,
    progress: ProgressStatus["Sin iniciar"],
    responsible: "",
    optional: false,
    enabled: true,
  },
  {
    id: "11",
    name: "Confirmación arribo a destino",
    status: ExpoStatus.TransitoInternacional,
    progress: ProgressStatus["Sin iniciar"],
    responsible: "",
    optional: false,
    enabled: true,
  },
  {
    id: "12",
    name: "Confirmación entrega final al cliente",
    status: ExpoStatus.Finalizado,
    progress: ProgressStatus["Sin iniciar"],
    responsible: "",
    optional: false,
    enabled: true,
  },
  {
    id: "13",
    name: "DEX",
    status: ExpoStatus.Finalizado,
    progress: ProgressStatus["Sin iniciar"],
    responsible: "",
    optional: false,
    enabled: true,
  },
  {
    id: "14",
    name: "Legalización divisas",
    status: ExpoStatus.EnDestino,
    progress: ProgressStatus["Sin iniciar"],
    responsible: "",
    optional: false,
    enabled: true,
  },
  {
    id: "15",
    name: "Liquidación",
    status: ExpoStatus.EnDestino,
    progress: ProgressStatus["Sin iniciar"],
    responsible: "",
    optional: false,
    enabled: true,
  },
  {
    id: "16",
    name: "Aprobación documentos y archivo",
    status: ExpoStatus.EnDestino,
    progress: ProgressStatus["Sin iniciar"],
    responsible: "",
    optional: false,
    enabled: true,
  },
];

export const shipmentTableColumns: IColumn<IContainer>[] = [
  {
    type: PropertyType.Text,
    name: "# Contenedor",
    fieldName: "container_number",
    minWidth: 150,
  },
  {
    type: PropertyType.Select,
    name: "Tipo",
    fieldName: "type",
    minWidth: 70,
  },
  {
    type: PropertyType.Select,
    name: "Transportador",
    fieldName: "transport_name",
    minWidth: 150,
  },
  {
    type: PropertyType.Text,
    name: "Peso bruto",
    fieldName: "peso_bruto",
    minWidth: 100,
  },
  {
    type: PropertyType.Text,
    name: "Placa",
    fieldName: "vehiculo_id",
    minWidth: 100,
  },
  {
    type: PropertyType.Date,
    name: "Cargue",
    fieldName: "date_cargue",
    minWidth: 100,
  },
  {
    type: PropertyType.Date,
    name: "Ingreso a puerto",
    fieldName: "date_ingreso_puerto",
    minWidth: 100,
  },
  {
    type: PropertyType.Date,
    name: "Zarpe",
    fieldName: "date_zarpe",
    minWidth: 100,
  },
];



export const expoTableColumns: IColumn<IContainer>[] = [
  {
    type: PropertyType.Text,
    name: "# Contenedor",
    fieldName: "container_number",
    minWidth: 150,
  },
]