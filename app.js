/**
 * MetaDrivers - Aplicación de Registro de Equipos y Soporte de Drivers
 * Metagroup Office Tech Management
 */

// Base de datos predeterminada con imágenes de referencia, specs, credenciales y observaciones
const DEFAULT_DEVICES = [
  {
    id: "dev-lenovo-s540-14api",
    brand: "Lenovo",
    model: "IdeaPad S540-14API",
    type: "Laptop",
    serial: "MP1L968Y",
    location: "Oficina Metagroup",
    imageUrl: "img/lenovo_s540.jpg",
    driverUrl: "https://pcsupport.lenovo.com/products/laptops-and-netbooks/ideapad-s-series-laptops/s540-14api/81nh/downloads",
    windowsUser: "metagroup\\jperez",
    windowsPassword: "MetaGroup2026!",
    notes: "Model Name: 81NH | MTM: 81NH000PCL | MO: MPNXB9610019 | Mfg Date: 2019-06-14 | ID Fábrica: PRC4 | Entrada: 20V 3.25A (65W) | Origen: China para Lenovo PC HK Limited.",
    observaciones: "Equipo asignado con suite Office y antivirus corporativo. Chasis de aluminio en perfecto estado.",
    specs: {
      cpu: {
        model: "AMD Ryzen 5 3500U",
        cores: "4 Núcleos / 8 Hilos",
        speed: "2100 MHz Base / 3700 MHz Boost",
        year: 2019,
        details: "12nm FinFET, 4MB Caché L3, TDP 15W"
      },
      ram: {
        capacity: "12 GB",
        type: "DDR4",
        speed: "2400 MHz",
        details: "4 GB soldados en placa + 8 GB en módulo SO-DIMM (Dual-Channel)"
      },
      gpu: {
        model: "AMD Radeon Vega 8 Graphics",
        type: "Integrada",
        details: "8 núcleos gráficos (1200 MHz), memoria compartida"
      },
      storage: "256 GB SSD M.2 PCIe NVMe"
    },
    updatedAt: "2026-09-10"
  },
  {
    id: "dev-lenovo-flex5-14are05",
    brand: "Lenovo",
    model: "IdeaPad Flex 5 14ARE05",
    type: "Laptop",
    serial: "R9126WCC",
    location: "Oficina Metagroup",
    imageUrl: "img/lenovo_flex5.jpg",
    driverUrl: "https://pcsupport.lenovo.com/products/laptops-and-netbooks/flex-series/flex-5-14are05/81x2/downloads",
    windowsUser: "metagroup\\flex5",
    windowsPassword: "MetaFlex*2026",
    notes: "Línea: IdeaPad Flex | Model Name: 81X2 | MTM: 81X200E2CC | MO: R9N0B132600B | Mfg Date: 2021-03-26 | ID Fábrica: KS | Entrada: 20V 3.25A (65W) | Origen: Fabricado en China para Lenovo.",
    observaciones: "Equipo convertible con pantalla táctil. Incluye cargador original de 65W.",
    specs: {
      cpu: {
        model: "AMD Ryzen 5 4500U",
        cores: "6 Núcleos / 6 Hilos",
        speed: "2300 MHz Base / 4000 MHz Boost",
        year: 2020,
        details: "7nm Zen 2 (Renoir), 8MB Caché L3, TDP 15W"
      },
      ram: {
        capacity: "8 GB",
        type: "DDR4",
        speed: "3200 MHz",
        details: "Memoria soldada en placa madre (Dual-Channel)"
      },
      gpu: {
        model: "AMD Radeon Graphics (Renoir)",
        type: "Integrada",
        details: "6 núcleos gráficos (1500 MHz), memoria compartida"
      },
      storage: "512 GB SSD M.2 2280 PCIe 3.0x4 NVMe"
    },
    updatedAt: "2026-09-10"
  },
  {
    id: "dev-lenovo-s540-14api-2",
    brand: "Lenovo",
    model: "IdeaPad S540-14API",
    type: "Laptop",
    serial: "MP1MXEKF",
    location: "Oficina Metagroup",
    imageUrl: "img/lenovo_s540.jpg",
    driverUrl: "https://pcsupport.lenovo.com/products/laptops-and-netbooks/ideapad-s-series-laptops/s540-14api/81nh/downloads",
    windowsUser: "metagroup\\usuario2",
    windowsPassword: "MetaGroup2026!",
    notes: "Model Name: 81NH | MTM: 81NH000PCL | MO: MPNXB98270CD | Mfg Date: 2019-08-27 | ID Fábrica: PRC4 | Entrada: 20V 3.25A (65W) | Origen: China para Lenovo PC HK Limited.",
    observaciones: "Equipo en excelente estado. Chasis de aluminio corte diamante. Mantenimiento al día.",
    specs: {
      cpu: {
        model: "AMD Ryzen 5 3500U",
        cores: "4 Núcleos / 8 Hilos",
        speed: "2100 MHz Base / 3700 MHz Boost",
        year: 2019,
        details: "12nm FinFET, 4MB Caché L3, TDP 15W"
      },
      ram: {
        capacity: "12 GB",
        type: "DDR4",
        speed: "2400 MHz",
        details: "4 GB soldados en placa + 8 GB en módulo SO-DIMM (Dual-Channel)"
      },
      gpu: {
        model: "AMD Radeon Vega 8 Graphics",
        type: "Integrada",
        details: "8 núcleos gráficos (1200 MHz), memoria compartida"
      },
      storage: "256 GB SSD M.2 PCIe NVMe"
    },
    updatedAt: "2026-09-10"
  },
  {
    id: "dev-lenovo-s540-hector",
    brand: "Lenovo",
    model: "IdeaPad S540-14API",
    type: "Laptop",
    serial: "MP1L972A",
    location: "Héctor / Oficina Metagroup",
    imageUrl: "img/lenovo_s540.jpg",
    driverUrl: "https://pcsupport.lenovo.com/products/laptops-and-netbooks/ideapad-s-series-laptops/s540-14api/81nh/downloads",
    windowsUser: "metagroup\\hector",
    windowsPassword: "MetaGroup2026!",
    notes: "Model Name: 81NH | MTM: 81NH000PCL | MO: MPNXB9610019 | Mfg Date: 2019-06-14 | ID Fábrica: PRC4 | Entrada: 20V 3.25A (65W) | Origen: Fabricado en China para Lenovo PC HK Limited.",
    observaciones: "Equipo asignado al usuario Héctor. Chasis de aluminio en óptimas condiciones. Configuración y antivirus corporativo al día.",
    specs: {
      cpu: {
        model: "AMD Ryzen 5 3500U",
        cores: "4 Núcleos / 8 Hilos",
        speed: "2100 MHz Base / 3700 MHz Boost",
        year: 2019,
        details: "12nm FinFET, 4MB Caché L3, TDP 15W"
      },
      ram: {
        capacity: "12 GB",
        type: "DDR4",
        speed: "2400 MHz",
        details: "4 GB soldados en placa + 8 GB en módulo SO-DIMM (Dual-Channel)"
      },
      gpu: {
        model: "AMD Radeon Vega 8 Graphics",
        type: "Integrada",
        details: "8 núcleos gráficos (1200 MHz), memoria compartida"
      },
      storage: "256 GB SSD M.2 PCIe NVMe"
    },
    updatedAt: "2026-09-10"
  },
  {
    id: "dev-brother-hll2360dw",
    brand: "Brother",
    model: "HL-L2360DW",
    type: "Impresora",
    serial: "E74288J6N123456",
    location: "Oficina Central / Metagroup",
    imageUrl: "img/brother_hl_l2360dw.jpg",
    driverUrl: "https://support.brother.com/g/b/downloadlist.aspx?c=mx&lang=es&prod=hll2360dw_us&os=10068",
    windowsUser: "",
    windowsPassword: "",
    notes: "Impresora láser monocromática dúplex con conectividad Wi-Fi y Ethernet. Compatible con paquetes de controladores Brother y CUPS.",
    observaciones: "Impresora compartida por red cableada y Wi-Fi en recepción. Tóner al 85%.",
    updatedAt: "2026-09-10"
  }
];

// Clave de almacenamiento v11 (con 5 equipos: 3 S540, 1 Flex 5, 1 Brother)
const STORAGE_KEY = "metagroup_devices_inventory_v11";

// Estado de la aplicación
let devices = [];
let currentFilterType = "ALL";
let currentFilterBrand = "ALL";
let searchQuery = "";
const revealedPasswords = {};

// Elementos del DOM
const devicesGrid = document.getElementById("devices-grid");
const emptyState = document.getElementById("empty-state");
const resultsCount = document.getElementById("results-count");
const searchInput = document.getElementById("search-input");
const clearSearchBtn = document.getElementById("clear-search");
const typeFilter = document.getElementById("type-filter");
const brandFilter = document.getElementById("brand-filter");

// Estadísticas
const statTotal = document.getElementById("stat-total");
const statLaptops = document.getElementById("stat-laptops");
const statDesktops = document.getElementById("stat-desktops");
const statPrinters = document.getElementById("stat-printers");
const statOthers = document.getElementById("stat-others");

// Modal
const deviceModal = document.getElementById("device-modal");
const deviceForm = document.getElementById("device-form");
const modalTitle = document.getElementById("modal-title");
const modalCloseBtn = document.getElementById("modal-close");
const cancelModalBtn = document.getElementById("btn-cancel-modal");
const btnAddDevice = document.getElementById("btn-add-device");
const btnSuggestDriver = document.getElementById("btn-suggest-driver");

// Campos del formulario principal
const formDeviceId = document.getElementById("device-id");
const formBrand = document.getElementById("form-brand");
const formType = document.getElementById("form-type");
const formModel = document.getElementById("form-model");
const formSerial = document.getElementById("form-serial");
const formLocation = document.getElementById("form-location");
const formImageUrl = document.getElementById("form-image-url");
const formDriverUrl = document.getElementById("form-driver-url");
const formNotes = document.getElementById("form-notes");
const formObservaciones = document.getElementById("form-observaciones");

// Credenciales Windows
const formWindowsUser = document.getElementById("form-windows-user");
const formWindowsPass = document.getElementById("form-windows-pass");
const btnToggleModalPass = document.getElementById("btn-toggle-modal-pass");

// Campos de Hardware (CPU, RAM, GPU, Storage)
const formCpuModel = document.getElementById("form-cpu-model");
const formCpuYear = document.getElementById("form-cpu-year");
const formCpuCores = document.getElementById("form-cpu-cores");
const formCpuSpeed = document.getElementById("form-cpu-speed");
const formCpuDetails = document.getElementById("form-cpu-details");

const formRamCapacity = document.getElementById("form-ram-capacity");
const formRamType = document.getElementById("form-ram-type");
const formRamSpeed = document.getElementById("form-ram-speed");
const formRamDetails = document.getElementById("form-ram-details");

const formGpuModel = document.getElementById("form-gpu-model");
const formGpuType = document.getElementById("form-gpu-type");
const formGpuDetails = document.getElementById("form-gpu-details");
const formStorage = document.getElementById("form-storage");

// Botones de acción general
const btnCopyMd = document.getElementById("btn-copy-md");
const btnExportMd = document.getElementById("btn-export-md");
const btnSyncFile = document.getElementById("btn-sync-file");
const btnResetDemo = document.getElementById("btn-reset-demo");
const btnExportJson = document.getElementById("btn-export-json");
const importJsonInput = document.getElementById("import-json-input");
const toast = document.getElementById("toast");
const toastMsg = document.getElementById("toast-msg");

/**
 * Inicialización
 */
async function init() {
  await loadDevices();
  bindEvents();
  render();
}

/**
 * Cargar datos desde localStorage o desde equipos.json
 */
async function loadDevices() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      devices = JSON.parse(saved);
      return;
    }

    try {
      const response = await fetch("equipos.json");
      if (response.ok) {
        const json = await response.json();
        if (Array.isArray(json) && json.length > 0) {
          devices = json;
          saveDevices();
          return;
        }
      }
    } catch (_) {
      // Ignorar fallback si fetch falla (ej. file:// protocol)
    }

    devices = [...DEFAULT_DEVICES];
    saveDevices();
  } catch (err) {
    console.error("Error al cargar inventario:", err);
    devices = [...DEFAULT_DEVICES];
  }
}

/**
 * Guardar datos en localStorage
 */
function saveDevices() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(devices));
  } catch (err) {
    console.error("Error al guardar en localStorage:", err);
  }
}

/**
 * Vincular eventos de la interfaz
 */
function bindEvents() {
  // Búsqueda
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    clearSearchBtn.style.display = searchQuery ? "block" : "none";
    render();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.style.display = "none";
    searchInput.focus();
    render();
  });

  // Filtros
  typeFilter.addEventListener("change", (e) => {
    currentFilterType = e.target.value;
    render();
  });

  brandFilter.addEventListener("change", (e) => {
    currentFilterBrand = e.target.value;
    render();
  });

  // Modal
  btnAddDevice.addEventListener("click", () => openDeviceModal());
  modalCloseBtn.addEventListener("click", closeDeviceModal);
  cancelModalBtn.addEventListener("click", closeDeviceModal);
  deviceModal.addEventListener("click", (e) => {
    if (e.target === deviceModal) closeDeviceModal();
  });

  // Toggle contraseña en el modal
  if (btnToggleModalPass) {
    btnToggleModalPass.addEventListener("click", () => {
      const isPassword = formWindowsPass.type === "password";
      formWindowsPass.type = isPassword ? "text" : "password";
      btnToggleModalPass.textContent = isPassword ? "🔒" : "👁️";
    });
  }

  // Formulario guardar
  deviceForm.addEventListener("submit", handleFormSubmit);

  // Sugerir driver URL
  btnSuggestDriver.addEventListener("click", handleSuggestDriver);

  // Acciones de reporte / contexto.md
  btnCopyMd.addEventListener("click", handleCopyMarkdown);
  btnExportMd.addEventListener("click", handleExportMarkdown);
  btnSyncFile.addEventListener("click", handleSyncWithFile);

  // Utilidades de respaldo
  btnResetDemo.addEventListener("click", handleResetDemo);
  btnExportJson.addEventListener("click", handleExportJson);
  importJsonInput.addEventListener("change", handleImportJson);

  // Escape key para cerrar modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && deviceModal.classList.contains("active")) {
      closeDeviceModal();
    }
  });
}

/**
 * Filtrar lista de equipos
 */
function getFilteredDevices() {
  return devices.filter((dev) => {
    if (currentFilterType !== "ALL" && dev.type !== currentFilterType) {
      return false;
    }
    if (currentFilterBrand !== "ALL" && dev.brand !== currentFilterBrand) {
      return false;
    }
    if (searchQuery) {
      let specsText = "";
      if (dev.specs) {
        specsText = `${dev.specs.cpu?.model || ""} ${dev.specs.cpu?.details || ""} ${dev.specs.ram?.capacity || ""} ${dev.specs.ram?.type || ""} ${dev.specs.gpu?.model || ""} ${dev.specs.gpu?.type || ""}`;
      }
      const credsText = `${dev.windowsUser || ""} ${dev.observaciones || ""}`;
      const target = `${dev.brand} ${dev.model} ${dev.type} ${dev.serial || ""} ${dev.location || ""} ${dev.notes || ""} ${specsText} ${credsText}`.toLowerCase();
      if (!target.includes(searchQuery)) {
        return false;
      }
    }
    return true;
  });
}

/**
 * Renderizado general
 */
function render() {
  updateStats();
  updateBrandFilterOptions();
  renderGrid();
}

/**
 * Actualizar estadísticas en los contadores superiores
 */
function updateStats() {
  const total = devices.length;
  const laptops = devices.filter((d) => d.type === "Laptop").length;
  const desktops = devices.filter((d) => d.type === "Desktop").length;
  const printers = devices.filter((d) => d.type === "Impresora").length;
  const others = total - (laptops + desktops + printers);

  statTotal.textContent = total;
  statLaptops.textContent = laptops;
  statDesktops.textContent = desktops;
  statPrinters.textContent = printers;
  statOthers.textContent = others >= 0 ? others : 0;
}

/**
 * Actualizar dropdown de marcas dinámicamente
 */
function updateBrandFilterOptions() {
  const brands = Array.from(new Set(devices.map((d) => d.brand).filter(Boolean))).sort();
  const currentVal = brandFilter.value;

  brandFilter.innerHTML = '<option value="ALL">Todas las marcas</option>';
  brands.forEach((b) => {
    const opt = document.createElement("option");
    opt.value = b;
    opt.textContent = b;
    brandFilter.appendChild(opt);
  });

  if (brands.includes(currentVal)) {
    brandFilter.value = currentVal;
  } else {
    brandFilter.value = "ALL";
    currentFilterBrand = "ALL";
  }
}

/**
 * Generar bloque visual HTML para las especificaciones de hardware
 */
function buildSpecsHtml(specs) {
  if (!specs || (!specs.cpu?.model && !specs.ram?.capacity && !specs.gpu?.model)) {
    return "";
  }

  let html = `<div class="device-specs-box">`;

  // CPU
  if (specs.cpu?.model) {
    const yearBadge = specs.cpu.year ? `<span class="spec-pill pill-year">${specs.cpu.year}</span>` : "";
    const speedInfo = specs.cpu.speed ? ` • ${escapeHtml(specs.cpu.speed)}` : "";
    const coresInfo = specs.cpu.cores ? ` (${escapeHtml(specs.cpu.cores)})` : "";
    const detailsInfo = specs.cpu.details ? `<div class="spec-details">${escapeHtml(specs.cpu.details)}</div>` : "";

    html += `
      <div class="spec-item">
        <div class="spec-icon-wrap spec-cpu-icon" title="Procesador / CPU">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="4" y="4" width="16" height="16" rx="2"></rect>
            <rect x="9" y="9" width="6" height="6"></rect>
            <line x1="9" y1="1" x2="9" y2="4"></line>
            <line x1="15" y1="1" x2="15" y2="4"></line>
            <line x1="9" y1="20" x2="9" y2="23"></line>
            <line x1="15" y1="20" x2="15" y2="23"></line>
          </svg>
        </div>
        <div class="spec-content">
          <div class="spec-title-row">
            <span class="spec-name">${escapeHtml(specs.cpu.model)}</span>
            ${yearBadge}
          </div>
          <div class="spec-details">${coresInfo}${speedInfo}</div>
          ${detailsInfo}
        </div>
      </div>
    `;
  }

  // RAM
  if (specs.ram?.capacity) {
    const ramType = specs.ram.type ? ` ${escapeHtml(specs.ram.type)}` : "";
    const ramSpeed = specs.ram.speed ? ` @ ${escapeHtml(specs.ram.speed)}` : "";
    const ramDetails = specs.ram.details ? `<div class="spec-details">${escapeHtml(specs.ram.details)}</div>` : "";

    html += `
      <div class="spec-item">
        <div class="spec-icon-wrap spec-ram-icon" title="Memoria RAM">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="6" width="20" height="12" rx="2"></rect>
            <line x1="6" y1="18" x2="6" y2="20"></line>
            <line x1="10" y1="18" x2="10" y2="20"></line>
            <line x1="14" y1="18" x2="14" y2="20"></line>
            <line x1="18" y1="18" x2="18" y2="20"></line>
          </svg>
        </div>
        <div class="spec-content">
          <div class="spec-title-row">
            <span class="spec-name">${escapeHtml(specs.ram.capacity)}${ramType}</span>
            <span class="spec-details">${ramSpeed}</span>
          </div>
          ${ramDetails}
        </div>
      </div>
    `;
  }

  // GPU
  if (specs.gpu?.model) {
    const isDedicated = specs.gpu.type?.toLowerCase().includes("dedicada");
    const gpuClass = isDedicated ? "pill-dedicated" : "pill-integrated";
    const gpuTypeBadge = specs.gpu.type ? `<span class="spec-pill ${gpuClass}">${escapeHtml(specs.gpu.type)}</span>` : "";
    const gpuDetails = specs.gpu.details ? `<div class="spec-details">${escapeHtml(specs.gpu.details)}</div>` : "";

    html += `
      <div class="spec-item">
        <div class="spec-icon-wrap spec-gpu-icon" title="Tarjeta Gráfica / GPU">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="3" width="20" height="14" rx="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        </div>
        <div class="spec-content">
          <div class="spec-title-row">
            <span class="spec-name">${escapeHtml(specs.gpu.model)}</span>
            ${gpuTypeBadge}
          </div>
          ${gpuDetails}
        </div>
      </div>
    `;
  }

  // Storage
  if (specs.storage) {
    html += `
      <div class="spec-item">
        <div class="spec-icon-wrap" style="background: rgba(251, 191, 36, 0.15); color: #fbbf24;" title="Almacenamiento">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="16" rx="2"></rect>
            <circle cx="7.5" cy="12" r="1.5"></circle>
            <circle cx="16.5" cy="12" r="1.5"></circle>
          </svg>
        </div>
        <div class="spec-content">
          <div class="spec-name" style="font-size: 0.8rem;">${escapeHtml(specs.storage)}</div>
        </div>
      </div>
    `;
  }

  html += `</div>`;
  return html;
}

/**
 * Generar bloque visual para Credenciales de Windows
 */
function buildCredentialsHtml(dev) {
  if (!dev.windowsUser && !dev.windowsPassword) {
    return "";
  }

  const isRevealed = !!revealedPasswords[dev.id];
  const passDisplay = isRevealed ? escapeHtml(dev.windowsPassword) : "••••••••";
  const eyeIcon = isRevealed ? "🔒" : "👁️";

  return `
    <div class="device-credentials-box">
      <div class="cred-row">
        <span class="cred-label">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          Usuario Windows:
        </span>
        <div class="cred-value-wrap">
          <span class="cred-value">${dev.windowsUser ? escapeHtml(dev.windowsUser) : "No asignado"}</span>
          ${dev.windowsUser ? `<button class="cred-icon-btn" title="Copiar usuario" onclick="copyText('${escapeHtml(dev.windowsUser)}', 'Usuario copiado')">📋</button>` : ""}
        </div>
      </div>

      ${dev.windowsPassword ? `
      <div class="cred-row">
        <span class="cred-label">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          Contraseña Windows:
        </span>
        <div class="cred-value-wrap">
          <span class="cred-value">${passDisplay}</span>
          <button class="cred-icon-btn" title="Mostrar/Ocultar contraseña" onclick="toggleCardPassword('${dev.id}')">${eyeIcon}</button>
          <button class="cred-icon-btn" title="Copiar contraseña" onclick="copyText('${escapeHtml(dev.windowsPassword)}', 'Contraseña copiada')">📋</button>
        </div>
      </div>
      ` : ""}
    </div>
  `;
}

/**
 * Toggle para mostrar/ocultar contraseña en una tarjeta específica
 */
window.toggleCardPassword = function (id) {
  revealedPasswords[id] = !revealedPasswords[id];
  renderGrid();
};

/**
 * Copiar texto arbitrario al portapapeles con mensaje toast
 */
window.copyText = function (text, msg = "Copiado al portapapeles") {
  navigator.clipboard.writeText(text).then(() => {
    showToast(msg);
  }).catch(() => {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    showToast(msg);
  });
};

/**
 * Renderizar tarjetas de equipos
 */
function renderGrid() {
  const filtered = getFilteredDevices();
  devicesGrid.innerHTML = "";

  resultsCount.textContent = `Mostrando ${filtered.length} de ${devices.length} equipo${devices.length === 1 ? '' : 's'}`;

  if (filtered.length === 0) {
    devicesGrid.style.display = "none";
    emptyState.style.display = "block";
    return;
  }

  devicesGrid.style.display = "grid";
  emptyState.style.display = "none";

  filtered.forEach((dev) => {
    const card = document.createElement("div");
    card.className = "device-card";

    let badgeClass = "badge-other";
    let accentColor = "#94a3b8";

    switch (dev.type) {
      case "Laptop":
        badgeClass = "badge-laptop";
        accentColor = "#818cf8";
        break;
      case "Desktop":
        badgeClass = "badge-desktop";
        accentColor = "#34d399";
        break;
      case "Impresora":
        badgeClass = "badge-printer";
        accentColor = "#fbbf24";
        break;
      case "Monitor":
        badgeClass = "badge-monitor";
        accentColor = "#38bdf8";
        break;
      case "Servidor / Red":
        badgeClass = "badge-network";
        accentColor = "#f472b6";
        break;
    }
    card.style.setProperty("--card-accent-color", accentColor);

    const specsHtml = buildSpecsHtml(dev.specs);
    const credsHtml = buildCredentialsHtml(dev);

    // Imagen de referencia del producto
    let imageHtml = "";
    if (dev.imageUrl) {
      imageHtml = `
        <div class="device-image-wrap">
          <img src="${escapeHtml(dev.imageUrl)}" alt="${escapeHtml(dev.brand)} ${escapeHtml(dev.model)}" class="device-image" loading="lazy" onerror="this.parentElement.style.display='none'">
        </div>
      `;
    }

    card.innerHTML = `
      <div class="device-header">
        <span class="device-badge ${badgeClass}">${escapeHtml(dev.type)}</span>
        <div class="card-actions-menu">
          <button class="icon-btn edit-btn" title="Editar equipo (todos los campos)" onclick="handleEditDevice('${dev.id}')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
            </svg>
          </button>
          <button class="icon-btn delete-btn" title="Eliminar equipo" onclick="handleDeleteDevice('${dev.id}')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>

      ${imageHtml}

      <div class="device-title-wrap">
        <div class="device-brand">${escapeHtml(dev.brand)}</div>
        <h3 class="device-model">${escapeHtml(dev.model)}</h3>
      </div>

      <div class="device-details-list">
        <div class="detail-row">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>Serie / Activo:</span>
          <span class="serial-tag">${dev.serial ? escapeHtml(dev.serial) : "Sin serial"}</span>
        </div>

        <div class="detail-row">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>Asignado:</span>
          <strong>${dev.location ? escapeHtml(dev.location) : "Oficina General"}</strong>
        </div>
      </div>

      ${specsHtml}
      ${credsHtml}

      ${dev.notes ? `<div class="device-notes">${escapeHtml(dev.notes)}</div>` : ""}

      ${dev.observaciones ? `
        <div class="device-observaciones">
          <div class="observaciones-title">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Observaciones
          </div>
          <div>${escapeHtml(dev.observaciones)}</div>
        </div>
      ` : ""}

      <div class="driver-action-wrap">
        <a href="${escapeHtml(dev.driverUrl)}" target="_blank" rel="noopener noreferrer" class="btn-driver-support">
          <span>Descargar Drivers & Soporte</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    `;

    devicesGrid.appendChild(card);
  });
}

/**
 * Modal: Abrir para Crear o Editar con TODOS los campos
 */
function openDeviceModal(device = null) {
  deviceForm.reset();
  formWindowsPass.type = "password";
  if (btnToggleModalPass) btnToggleModalPass.textContent = "👁️";

  if (device) {
    modalTitle.textContent = `Editar Equipo: ${device.brand} ${device.model}`;
    formDeviceId.value = device.id;
    formBrand.value = device.brand;
    formType.value = device.type;
    formModel.value = device.model;
    formSerial.value = device.serial || "";
    formLocation.value = device.location || "";
    formImageUrl.value = device.imageUrl || "";
    formDriverUrl.value = device.driverUrl;
    formNotes.value = device.notes || "";
    formObservaciones.value = device.observaciones || "";

    // Credenciales
    formWindowsUser.value = device.windowsUser || "";
    formWindowsPass.value = device.windowsPassword || "";

    // Hardware Specs
    if (device.specs) {
      formCpuModel.value = device.specs.cpu?.model || "";
      formCpuYear.value = device.specs.cpu?.year || "";
      formCpuCores.value = device.specs.cpu?.cores || "";
      formCpuSpeed.value = device.specs.cpu?.speed || "";
      formCpuDetails.value = device.specs.cpu?.details || "";

      formRamCapacity.value = device.specs.ram?.capacity || "";
      formRamType.value = device.specs.ram?.type || "";
      formRamSpeed.value = device.specs.ram?.speed || "";
      formRamDetails.value = device.specs.ram?.details || "";

      formGpuModel.value = device.specs.gpu?.model || "";
      formGpuType.value = device.specs.gpu?.type || "Integrada";
      formGpuDetails.value = device.specs.gpu?.details || "";
      formStorage.value = device.specs.storage || "";
    }
  } else {
    modalTitle.textContent = "Registrar Nuevo Equipo";
    formDeviceId.value = "";
    formType.value = "Laptop";
    formGpuType.value = "Integrada";
  }
  deviceModal.classList.add("active");
  formBrand.focus();
}

/**
 * Modal: Cerrar
 */
function closeDeviceModal() {
  deviceModal.classList.remove("active");
}

/**
 * Manejar submit del formulario (Creación y Edición completa)
 */
function handleFormSubmit(e) {
  e.preventDefault();

  const id = formDeviceId.value;
  const brand = formBrand.value.trim();
  const type = formType.value;
  const model = formModel.value.trim();
  const serial = formSerial.value.trim();
  const location = formLocation.value.trim();
  const imageUrl = formImageUrl.value.trim();
  const driverUrl = formDriverUrl.value.trim();
  const notes = formNotes.value.trim();
  const observaciones = formObservaciones.value.trim();
  const windowsUser = formWindowsUser.value.trim();
  const windowsPassword = formWindowsPass.value.trim();
  const today = new Date().toISOString().split("T")[0];

  if (!brand || !model || !driverUrl) {
    showToast("Por favor completa los campos obligatorios (*)");
    return;
  }

  // Construir objeto de hardware specs si se llenó algún campo
  let specs = null;
  const cpuModel = formCpuModel.value.trim();
  const ramCap = formRamCapacity.value.trim();
  const gpuModel = formGpuModel.value.trim();
  const storage = formStorage.value.trim();

  if (cpuModel || ramCap || gpuModel || storage) {
    specs = {
      cpu: {
        model: cpuModel,
        year: formCpuYear.value ? parseInt(formCpuYear.value, 10) : undefined,
        cores: formCpuCores.value.trim(),
        speed: formCpuSpeed.value.trim(),
        details: formCpuDetails.value.trim()
      },
      ram: {
        capacity: ramCap,
        type: formRamType.value.trim(),
        speed: formRamSpeed.value.trim(),
        details: formRamDetails.value.trim()
      },
      gpu: {
        model: gpuModel,
        type: formGpuType.value,
        details: formGpuDetails.value.trim()
      },
      storage: storage
    };
  }

  if (id) {
    // Editar existente
    const index = devices.findIndex((d) => d.id === id);
    if (index !== -1) {
      devices[index] = {
        ...devices[index],
        brand,
        type,
        model,
        serial,
        location,
        imageUrl,
        driverUrl,
        windowsUser,
        windowsPassword,
        notes,
        observaciones,
        specs: specs || devices[index].specs,
        updatedAt: today
      };
      showToast(`Equipo "${brand} ${model}" actualizado correctamente`);
    }
  } else {
    // Nuevo equipo
    const newDevice = {
      id: "dev-" + Date.now(),
      brand,
      type,
      model,
      serial,
      location,
      imageUrl,
      driverUrl,
      windowsUser,
      windowsPassword,
      notes,
      observaciones,
      specs: specs,
      updatedAt: today
    };
    devices.unshift(newDevice);
    showToast(`Nuevo equipo "${brand} ${model}" registrado con éxito`);
  }

  saveDevices();
  closeDeviceModal();
  render();
}

/**
 * Abrir modal de edición para un ID específico
 */
window.handleEditDevice = function (id) {
  const dev = devices.find((d) => d.id === id);
  if (dev) {
    openDeviceModal(dev);
  }
};

/**
 * Eliminar un equipo
 */
window.handleDeleteDevice = function (id) {
  const dev = devices.find((d) => d.id === id);
  if (!dev) return;

  if (confirm(`¿Estás seguro de eliminar "${dev.brand} ${dev.model}" del inventario?`)) {
    devices = devices.filter((d) => d.id !== id);
    saveDevices();
    render();
    showToast("Equipo eliminado");
  }
};

/**
 * Asistente para autogenerar URL de soporte de drivers
 */
function handleSuggestDriver() {
  const brand = formBrand.value.trim();
  const model = formModel.value.trim();

  if (!brand && !model) {
    showToast("Escribe primero la Marca y Modelo para sugerir el enlace");
    formBrand.focus();
    return;
  }

  const query = encodeURIComponent(`${brand} ${model} drivers support oficial`);
  const searchUrl = `https://www.google.com/search?q=${query}`;
  
  let directLink = "";
  const brandLower = brand.toLowerCase();

  if (brandLower.includes("brother")) {
    directLink = `https://support.brother.com/g/b/productsearch.aspx?c=es&lang=es&content=dl&q=${encodeURIComponent(model)}`;
  } else if (brandLower.includes("lenovo")) {
    directLink = `https://pcsupport.lenovo.com/search?query=${encodeURIComponent(model)}`;
  } else if (brandLower.includes("dell")) {
    directLink = `https://www.dell.com/support/home/es-es/product-support/product/${encodeURIComponent(model.replace(/\s+/g, '-').toLowerCase())}/drivers`;
  } else if (brandLower.includes("hp")) {
    directLink = `https://support.hp.com/search?q=${encodeURIComponent(model)}`;
  } else if (brandLower.includes("epson")) {
    directLink = `https://epson.com.do/search?text=${encodeURIComponent(model)}`;
  } else {
    directLink = `https://www.google.com/search?q=${query}`;
  }

  formDriverUrl.value = directLink;
  window.open(searchUrl, "_blank");
  showToast("Búsqueda de drivers abierta en nueva pestaña");
}

/**
 * Generar el contenido completo en Markdown para contexto.md
 */
function generateMarkdownContent() {
  const dateStr = new Date().toISOString().split("T")[0];
  let md = `# Contexto del Proyecto: MetaDrivers - Inventario de Oficina Metagroup\n\n`;
  md += `## 📌 Descripción General\n`;
  md += `Este archivo documenta el registro y contexto de los equipos tecnológicos de la oficina de **Metagroup**, incluyendo especificaciones clave (marca, modelo, tipo de equipo), número de serie o activo, responsable o ubicación física, imágenes de referencia de los equipos, especificaciones técnicas de hardware (**CPU**, **RAM**, **GPU**), **credenciales de acceso de Windows (Usuario y Contraseña)**, **observaciones técnicas e historial**, y enlaces directos para la descarga de controladores (drivers) oficiales.\n\n`;
  md += `La base de datos principal estructurada reside en el archivo [\`equipos.json\`](file:///c:/Users/Rod/Desktop/code/MetaDrivers/equipos.json) y se administra interactivamente a través de la aplicación web local \`MetaDrivers\` (\`index.html\`, \`style.css\`, \`app.js\`).\n\n`;
  md += `*Última actualización sincronizada:* \`${dateStr}\` | *Total de equipos:* **${devices.length}**\n\n`;
  md += `---\n\n`;

  md += `## 💻 Resumen de Equipos Registrados\n\n`;
  md += `| # | Tipo | Marca | Modelo | CPU | RAM | GPU | Usuario Windows | Serie / Activo | Enlace a Drivers / Soporte |\n`;
  md += `|---|------|-------|--------|-----|-----|-----|-----------------|----------------|----------------------------|\n`;

  devices.forEach((dev, idx) => {
    const serial = dev.serial ? dev.serial : "N/A";
    const driverText = `Soporte Oficial ${dev.brand} ${dev.model}`;
    const userStr = dev.windowsUser ? `\`${dev.windowsUser}\`` : 'N/A';
    const cpuStr = dev.specs?.cpu?.model 
      ? `${dev.specs.cpu.model}${dev.specs.cpu.year ? ` [${dev.specs.cpu.year}]` : ''}` 
      : 'N/A';
    const ramStr = dev.specs?.ram?.capacity 
      ? `${dev.specs.ram.capacity} ${dev.specs.ram.type || ''}`.trim() 
      : 'N/A';
    const gpuStr = dev.specs?.gpu?.model 
      ? `${dev.specs.gpu.model} (${dev.specs.gpu.type || 'Integrada'})` 
      : 'N/A';

    md += `| ${idx + 1} | ${dev.type} | ${dev.brand} | ${dev.model} | ${cpuStr} | ${ramStr} | ${gpuStr} | ${userStr} | ${serial} | [${driverText}](${dev.driverUrl}) |\n`;
  });

  md += `\n---\n\n`;
  md += `## 📋 Fichas Técnicas Detalladas de Equipos\n\n`;

  devices.forEach((dev, idx) => {
    md += `### ${idx + 1}. ${dev.brand} ${dev.model}\n`;
    if (dev.imageUrl) {
      md += `![${dev.brand} ${dev.model}](${dev.imageUrl})\n\n`;
    }
    md += `- **Tipo:** ${dev.type}\n`;
    md += `- **Marca:** ${dev.brand}\n`;
    md += `- **Modelo:** ${dev.model}\n`;
    md += `- **Número de Serie / Activo:** ${dev.serial || "No registrado"}\n`;
    md += `- **Asignación / Ubicación:** ${dev.location || "Oficina General"}\n`;

    if (dev.windowsUser || dev.windowsPassword) {
      md += `- **Credenciales Windows:**\n`;
      if (dev.windowsUser) md += `  - *Usuario:* \`${dev.windowsUser}\`\n`;
      if (dev.windowsPassword) md += `  - *Contraseña:* \`${dev.windowsPassword}\`\n`;
    }

    if (dev.specs) {
      md += `- **Especificaciones de Hardware:**\n`;
      if (dev.specs.cpu?.model) {
        md += `  - **Procesador (CPU):** ${dev.specs.cpu.model}\n`;
        if (dev.specs.cpu.cores) md += `    - *Núcleos e Hilos:* ${dev.specs.cpu.cores}\n`;
        if (dev.specs.cpu.speed) md += `    - *Frecuencia:* ${dev.specs.cpu.speed}\n`;
        if (dev.specs.cpu.year) md += `    - *Año de salida:* ${dev.specs.cpu.year}\n`;
        if (dev.specs.cpu.details) md += `    - *Características:* ${dev.specs.cpu.details}\n`;
      }
      if (dev.specs.ram?.capacity) {
        md += `  - **Memoria RAM:** ${dev.specs.ram.capacity} ${dev.specs.ram.type || ''}\n`;
        if (dev.specs.ram.speed) md += `    - *Frecuencia:* ${dev.specs.ram.speed}\n`;
        if (dev.specs.ram.details) md += `    - *Configuración:* ${dev.specs.ram.details}\n`;
      }
      if (dev.specs.gpu?.model) {
        md += `  - **Tarjeta Gráfica (GPU):** ${dev.specs.gpu.model}\n`;
        if (dev.specs.gpu.type) md += `    - *Tipo:* **${dev.specs.gpu.type}**\n`;
        if (dev.specs.gpu.details) md += `    - *Características:* ${dev.specs.gpu.details}\n`;
      }
      if (dev.specs.storage) {
        md += `  - **Almacenamiento:** ${dev.specs.storage}\n`;
      }
    }

    md += `- **Enlace de Drivers:** [Soporte Oficial ${dev.brand} ${dev.model}](${dev.driverUrl})\n`;
    if (dev.notes) {
      md += `- **Notas:** ${dev.notes}\n`;
    }
    if (dev.observaciones) {
      md += `- **Observaciones:** ${dev.observaciones}\n`;
    }
    md += `\n`;
  });

  md += `---\n\n`;
  md += `## 🛠️ Guía de Uso del Inventario y Driver Hub\n`;
  md += `1. **Base de Datos:** El archivo [\`equipos.json\`](file:///c:/Users/Rod/Desktop/code/MetaDrivers/equipos.json) almacena los registros de los equipos, imágenes de referencia, especificaciones de CPU, RAM, GPU, credenciales de Windows y observaciones.\n`;
  md += `2. **Abrir la Aplicación:** Abre \`index.html\` en cualquier navegador web.\n`;
  md += `3. **Registro y Edición:** Pulsa en **"Registrar Equipo"** o en el botón de **Editar** (icono de lápiz) en cualquier tarjeta para modificar cualquier campo en cualquier momento.\n`;
  md += `4. **Acceso Rápido a Drivers:** Desde la tarjeta de cada equipo, el botón **"Descargar Drivers & Soporte"** te llevará directamente a la página oficial de descargas del fabricante.\n`;
  md += `5. **Sincronización:** Usa el botón **"Descargar contexto.md"**, **"Sincronizar contexto.md"** o **"Copiar Markdown"** en la barra superior para actualizar este archivo cada vez que ingreses o modifiques equipos.\n`;

  return md;
}

/**
 * Copiar contenido Markdown al portapapeles
 */
async function handleCopyMarkdown() {
  const content = generateMarkdownContent();
  try {
    await navigator.clipboard.writeText(content);
    showToast("¡Markdown copiado al portapapeles! Listo para pegar en contexto.md");
  } catch (err) {
    const textarea = document.createElement("textarea");
    textarea.value = content;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    showToast("¡Markdown copiado al portapapeles!");
  }
}

/**
 * Descargar archivo contexto.md
 */
function handleExportMarkdown() {
  const content = generateMarkdownContent();
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "contexto.md";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Descargando contexto.md actualizado...");
}

/**
 * Sincronización directa mediante File System Access API
 */
async function handleSyncWithFile() {
  const content = generateMarkdownContent();

  if ("showSaveFilePicker" in window) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: "contexto.md",
        types: [
          {
            description: "Archivo Markdown (*.md)",
            accept: { "text/markdown": [".md"] }
          }
        ]
      });
      const writable = await handle.createWritable();
      await writable.write(content);
      await writable.close();
      showToast("¡contexto.md sincronizado y guardado con éxito!");
      return;
    } catch (err) {
      if (err.name !== "AbortError") {
        console.warn("File System API error, usando fallback descarga:", err);
      } else {
        return;
      }
    }
  }

  handleExportMarkdown();
}

/**
 * Exportar base de datos a archivo equipos.json
 */
function handleExportJson() {
  const dataStr = JSON.stringify(devices, null, 2);
  const blob = new Blob([dataStr], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "equipos.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Base de datos equipos.json descargada");
}

/**
 * Importar base de datos JSON
 */
function handleImportJson(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    try {
      const imported = JSON.parse(event.target.result);
      if (Array.isArray(imported)) {
        devices = imported;
        saveDevices();
        render();
        showToast(`Se importaron ${imported.length} equipos con éxito`);
      } else {
        alert("El archivo no contiene un formato de lista válido de equipos.");
      }
    } catch (err) {
      alert("Error al leer el archivo JSON: formato inválido.");
    }
    importJsonInput.value = "";
  };
  reader.readAsText(file);
}

/**
 * Restaurar datos predeterminados
 */
function handleResetDemo() {
  if (confirm("¿Deseas restaurar el inventario inicial con imágenes y credenciales?")) {
    devices = [...DEFAULT_DEVICES];
    saveDevices();
    render();
    showToast("Inventario restaurado");
  }
}

/**
 * Mostrar notificación Toast
 */
let toastTimeout;
function showToast(message) {
  toastMsg.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

/**
 * Sanitizar texto para inserción HTML segura
 */
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", init);
