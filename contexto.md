# Contexto del Proyecto: MetaDrivers - Inventario de Oficina Metagroup

## 📌 Descripción General
Este archivo documenta el registro y contexto de los equipos tecnológicos de la oficina de **Metagroup**, incluyendo especificaciones clave (marca, modelo, tipo de equipo), número de serie o activo, responsable o ubicación física, imágenes de referencia de los equipos, especificaciones técnicas de hardware (**CPU**, **RAM**, **GPU**), **credenciales de acceso de Windows (Usuario y Contraseña)**, **observaciones técnicas e historial**, y enlaces directos para la descarga de controladores (drivers) oficiales.

La base de datos principal estructurada reside en el archivo [`equipos.json`](file:///c:/Users/Rod/Desktop/code/MetaDrivers/equipos.json) y se administra interactivamente a través de la aplicación web local `MetaDrivers` (`index.html`, `style.css`, `app.js`).

---

## 💻 Resumen de Equipos Registrados

| # | Tipo | Marca | Modelo | CPU | RAM | GPU | Usuario Windows | Serie / Activo | Enlace a Drivers / Soporte |
|---|------|-------|--------|-----|-----|-----|-----------------|----------------|----------------------------|
| 1 | Laptop | Lenovo | IdeaPad S540-14API | AMD Ryzen 5 3500U (4C/8T @ 2.1-3.7 GHz) [2019] | 12 GB DDR4 2400 MHz (Dual-Ch) | AMD Radeon Vega 8 (Integrada) | `metagroup\jperez` | MP1L968Y | [Drivers Oficiales Lenovo S540-14API (81NH)](https://pcsupport.lenovo.com/products/laptops-and-netbooks/ideapad-s-series-laptops/s540-14api/81nh/downloads) |
| 2 | Laptop | Lenovo | IdeaPad S540-14API (Unidad 2) | AMD Ryzen 5 3500U (4C/8T @ 2.1-3.7 GHz) [2019] | 12 GB DDR4 2400 MHz (Dual-Ch) | AMD Radeon Vega 8 (Integrada) | `metagroup\usuario2` | MP1MXEKF | [Drivers Oficiales Lenovo S540-14API (81NH)](https://pcsupport.lenovo.com/products/laptops-and-netbooks/ideapad-s-series-laptops/s540-14api/81nh/downloads) |
| 3 | Laptop | Lenovo | IdeaPad S540-14API (Héctor) | AMD Ryzen 5 3500U (4C/8T @ 2.1-3.7 GHz) [2019] | 12 GB DDR4 2400 MHz (Dual-Ch) | AMD Radeon Vega 8 (Integrada) | `metagroup\hector` | MP1L972A | [Drivers Oficiales Lenovo S540-14API (81NH)](https://pcsupport.lenovo.com/products/laptops-and-netbooks/ideapad-s-series-laptops/s540-14api/81nh/downloads) |
| 4 | Laptop | Lenovo | IdeaPad Flex 5 14ARE05 | AMD Ryzen 5 4500U (6C/6T @ 2.3-4.0 GHz) [2020] | 8 GB DDR4 3200 MHz (Soldada) | AMD Radeon Graphics (Integrada) | `metagroup\flex5` | R9126WCC | [Drivers Oficiales Lenovo Flex 5 14ARE05 (81X2)](https://pcsupport.lenovo.com/products/laptops-and-netbooks/flex-series/flex-5-14are05/81x2/downloads) |
| 5 | Impresora | Brother | HL-L2360DW | N/A (Láser Monocromática) | 32 MB Estándar | N/A | N/A | E74288J6N123456 | [Descarga de Drivers Brother HL-L2360DW](https://support.brother.com/g/b/downloadlist.aspx?c=mx&lang=es&prod=hll2360dw_us&os=10068) |

---

## 📋 Fichas Técnicas Detalladas de Equipos

### 1. Lenovo IdeaPad S540-14API (S/N: MP1L968Y)
![Lenovo IdeaPad S540-14API](img/lenovo_s540.jpg)

- **Tipo:** Laptop
- **Marca y Línea:** Lenovo IdeaPad
- **Modelo:** IdeaPad S540-14API
- **Nombre de Modelo (Model Name):** 81NH
- **Número de Serie (S/N):** MP1L968Y
- **Machine Type Model (MTM):** 81NH000PCL
- **Código MO:** MPNXB9610019
- **Fecha de Fabricación (Mfg Date):** 14 de junio de 2019 (19/06/14)
- **ID de Fábrica:** PRC4
- **Alimentación (Input):** 20 V === 3.25 A (cargador de 65 W)
- **Origen:** Fabricado en China para Lenovo PC HK Limited
- **Asignación / Ubicación:** Oficina Metagroup
- **Credenciales Windows:**
  - *Usuario:* `metagroup\jperez`
  - *Contraseña:* `MetaGroup2026!`
- **Especificaciones de Hardware:**
  - **Procesador (CPU):** AMD Ryzen 5 3500U
    - *Núcleos e Hilos:* 4 núcleos físicos / 8 hilos de procesamiento
    - *Frecuencias:* 2100 MHz (2.1 GHz) Base / 3700 MHz (3.7 GHz) Turbo Boost
    - *Año de salida:* 2019
    - *Características:* Arquitectura Zen+ (Picasso), litografía de 12nm FinFET, 4 MB Caché L3, TDP de 15W
  - **Memoria RAM:** 12 GB DDR4
    - *Frecuencia:* 2400 MHz
    - *Configuración:* 4 GB soldados en placa + 8 GB en módulo SO-DIMM (Dual-Channel activo)
  - **Tarjeta Gráfica (GPU):** AMD Radeon Vega 8 Graphics
    - *Tipo:* **Integrada**
    - *Características:* 8 núcleos de cómputo GPU (1200 MHz), memoria de video compartida
  - **Almacenamiento:** 256 GB SSD M.2 PCIe NVMe
- **Enlace de Drivers:** [Lenovo PC Support - IdeaPad S540-14API (Type 81NH)](https://pcsupport.lenovo.com/products/laptops-and-netbooks/ideapad-s-series-laptops/s540-14api/81nh/downloads)
- **Observaciones:** Equipo asignado con suite Office y antivirus corporativo. Chasis de aluminio en perfecto estado.

---

### 2. Lenovo IdeaPad S540-14API (S/N: MP1MXEKF)
![Lenovo IdeaPad S540-14API](img/lenovo_s540.jpg)

- **Tipo:** Laptop
- **Marca y Línea:** Lenovo IdeaPad
- **Modelo:** IdeaPad S540-14API
- **Nombre de Modelo (Model Name):** 81NH
- **Número de Serie (S/N):** MP1MXEKF
- **Machine Type Model (MTM):** 81NH000PCL
- **Código MO:** MPNXB98270CD
- **Fecha de Fabricación (Mfg Date):** 27 de agosto de 2019 (19/08/27)
- **ID de Fábrica:** PRC4
- **Alimentación (Input):** 20 V === 3.25 A (cargador de 65 W)
- **Origen:** Fabricado en China para Lenovo PC HK Limited
- **Asignación / Ubicación:** Oficina Metagroup
- **Credenciales Windows:**
  - *Usuario:* `metagroup\usuario2`
  - *Contraseña:* `MetaGroup2026!`
- **Especificaciones de Hardware:**
  - **Procesador (CPU):** AMD Ryzen 5 3500U
    - *Núcleos e Hilos:* 4 núcleos físicos / 8 hilos de procesamiento
    - *Frecuencias:* 2100 MHz (2.1 GHz) Base / 3700 MHz (3.7 GHz) Turbo Boost
    - *Año de salida:* 2019
    - *Características:* Arquitectura Zen+ (Picasso), litografía de 12nm FinFET, 4 MB Caché L3, TDP de 15W
  - **Memoria RAM:** 12 GB DDR4
    - *Frecuencia:* 2400 MHz
    - *Configuración:* 4 GB soldados en placa + 8 GB en módulo SO-DIMM (Dual-Channel activo)
  - **Tarjeta Gráfica (GPU):** AMD Radeon Vega 8 Graphics
    - *Tipo:* **Integrada**
    - *Características:* 8 núcleos de cómputo GPU (1200 MHz), memoria de video compartida
  - **Almacenamiento:** 256 GB SSD M.2 PCIe NVMe
- **Enlace de Drivers:** [Lenovo PC Support - IdeaPad S540-14API (Type 81NH)](https://pcsupport.lenovo.com/products/laptops-and-netbooks/ideapad-s-series-laptops/s540-14api/81nh/downloads)
- **Observaciones:** Equipo en excelente estado. Chasis de aluminio corte diamante. Mantenimiento al día.

---

### 3. Lenovo IdeaPad S540-14API - Héctor (S/N: MP1L972A)
![Lenovo IdeaPad S540-14API](img/lenovo_s540.jpg)

- **Tipo:** Laptop
- **Marca y Línea:** Lenovo IdeaPad
- **Modelo:** IdeaPad S540-14API
- **Nombre de Modelo (Model Name):** 81NH
- **Número de Serie (S/N):** MP1L972A
- **Machine Type Model (MTM):** 81NH000PCL
- **Código MO:** MPNXB9610019
- **Fecha de Fabricación (Mfg Date):** 14 de junio de 2019 (19/06/14)
- **ID de Fábrica:** PRC4
- **Alimentación (Input):** 20 V === 3.25 A (65 W)
- **Origen:** Fabricado en China para Lenovo PC HK Limited
- **Asignación / Ubicación:** Héctor / Oficina Metagroup
- **Credenciales Windows:**
  - *Usuario:* `metagroup\hector`
  - *Contraseña:* `MetaGroup2026!`
- **Especificaciones de Hardware:**
  - **Procesador (CPU):** AMD Ryzen 5 3500U
    - *Núcleos e Hilos:* 4 núcleos físicos / 8 hilos de procesamiento
    - *Frecuencias:* 2100 MHz (2.1 GHz) Base / 3700 MHz (3.7 GHz) Turbo Boost
    - *Año de salida:* 2019
    - *Características:* Arquitectura Zen+ (Picasso), litografía de 12nm FinFET, 4 MB Caché L3, TDP de 15W
  - **Memoria RAM:** 12 GB DDR4
    - *Frecuencia:* 2400 MHz
    - *Configuración:* 4 GB soldados en placa + 8 GB en módulo SO-DIMM (Dual-Channel activo)
  - **Tarjeta Gráfica (GPU):** AMD Radeon Vega 8 Graphics
    - *Tipo:* **Integrada**
    - *Características:* 8 núcleos de cómputo GPU (1200 MHz), memoria de video compartida
  - **Almacenamiento:** 256 GB SSD M.2 PCIe NVMe
- **Enlace de Drivers:** [Lenovo PC Support - IdeaPad S540-14API (Type 81NH)](https://pcsupport.lenovo.com/products/laptops-and-netbooks/ideapad-s-series-laptops/s540-14api/81nh/downloads)
- **Observaciones:** Equipo asignado al usuario Héctor. Chasis de aluminio en óptimas condiciones. Configuración y antivirus corporativo al día.

---

### 4. Lenovo IdeaPad Flex 5 14ARE05 (S/N: R9126WCC)
![Lenovo IdeaPad Flex 5 14ARE05](img/lenovo_flex5.jpg)

- **Tipo:** Laptop 2-en-1 / Convertible
- **Marca y Línea:** Lenovo IdeaPad Flex
- **Modelo:** IdeaPad Flex 5 14ARE05
- **Nombre de Modelo (Model Name):** 81X2
- **Número de Serie (S/N):** R9126WCC
- **Machine Type Model (MTM):** 81X200E2CC
- **Código MO:** R9N0B132600B
- **Fecha de Fabricación (Mfg Date):** 26 de marzo de 2021 (2021/03/26)
- **ID de Fábrica:** KS
- **Alimentación (Input):** 20 V === 3.25 A (cargador de 65 W)
- **Origen:** Fabricado en China para Lenovo (Manufactured for Lenovo - Made in China)
- **Asignación / Ubicación:** Oficina Metagroup
- **Credenciales Windows:**
  - *Usuario:* `metagroup\flex5`
  - *Contraseña:* `MetaFlex*2026`
- **Especificaciones de Hardware:**
  - **Procesador (CPU):** AMD Ryzen 5 4500U
    - *Núcleos e Hilos:* 6 núcleos físicos / 6 hilos
    - *Frecuencias:* 2300 MHz (2.3 GHz) Base / 4000 MHz (4.0 GHz) Turbo Boost
    - *Año de salida:* 2020
    - *Características:* Arquitectura 7nm Zen 2 (Renoir), 8 MB Caché L3, TDP de 15W
  - **Memoria RAM:** 8 GB DDR4
    - *Frecuencia:* 3200 MHz
    - *Configuración:* Memoria soldada en placa madre (Dual-Channel)
  - **Tarjeta Gráfica (GPU):** AMD Radeon Graphics (Renoir)
    - *Tipo:* **Integrada**
    - *Características:* 6 núcleos de cómputo GPU (1500 MHz), memoria de video compartida
  - **Almacenamiento:** 512 GB SSD M.2 2280 PCIe 3.0x4 NVMe
- **Enlace de Drivers:** [Lenovo PC Support - Flex 5-14ARE05 (Type 81X2)](https://pcsupport.lenovo.com/products/laptops-and-netbooks/flex-series/flex-5-14are05/81x2/downloads)
- **Observaciones:** Equipo convertible con pantalla táctil. Incluye cargador original de 65W.

---

### 5. Brother HL-L2360DW (S/N: E74288J6N123456)
![Brother HL-L2360DW](img/brother_hl_l2360dw.jpg)

- **Tipo:** Impresora
- **Marca:** Brother
- **Modelo:** HL-L2360DW
- **Número de Serie / Activo:** E74288J6N123456
- **Asignación / Ubicación:** Oficina Central / Metagroup
- **Enlace de Drivers:** [Descarga Oficial de Drivers Brother HL-L2360DW](https://support.brother.com/g/b/downloadlist.aspx?c=mx&lang=es&prod=hll2360dw_us&os=10068)
- **Notas:** Impresora láser monocromática dúplex con conectividad Wi-Fi y Ethernet. Compatible con paquetes de controladores Brother y CUPS.
- **Observaciones:** Impresora compartida por red cableada y Wi-Fi en recepción. Tóner al 85%.

---

## 🛠️ Guía de Uso del Inventario y Driver Hub
1. **Base de Datos:** El archivo [`equipos.json`](file:///c:/Users/Rod/Desktop/code/MetaDrivers/equipos.json) almacena los registros de los equipos, imágenes de referencia, especificaciones de CPU, RAM, GPU, credenciales de Windows y observaciones.
2. **Abrir la Aplicación:** Abre `index.html` en cualquier navegador web.
3. **Registro y Edición:** Pulsa en **"Registrar Equipo"** o en el botón de **Editar** (icono de lápiz) en cualquier tarjeta para modificar cualquier campo en cualquier momento.
4. **Acceso Rápido a Drivers:** Desde la tarjeta de cada equipo, el botón **"Descargar Drivers & Soporte"** te llevará directamente a la página oficial de descargas del fabricante.
5. **Sincronización:** Usa el botón **"Descargar contexto.md"**, **"Sincronizar contexto.md"** o **"Copiar Markdown"** en la barra superior para actualizar este archivo cada vez que ingreses o modifiques equipos.
