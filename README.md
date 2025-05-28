

## 📋 Paso 1: Investigar y Comprender

### ✅ ¿Qué es la API de Google Maps?

Es una herramienta que permite **mostrar mapas de Google** dentro de una página web o aplicación, y **añadir funciones interactivas** como:

-   Marcadores (para señalar ubicaciones)
    
-   Rutas
    
-   Ventanas con información (InfoWindow)
    
-   Capas como tráfico, relieve, etc.
    

### ✅ ¿Qué es una API Key?

Una **clave API** es como una contraseña única que te da Google para poder usar sus servicios. Identifica tu aplicación y **permite que uses la API de Google Maps** sin restricciones (dentro de los límites gratuitos).

### ✅ ¿Cómo se obtiene?

1.  Ir a: https://console.cloud.google.com/
    
2.  Crear un **proyecto nuevo**
    
3.  Habilitar la **API de Maps JavaScript**
    
4.  Crear una **clave API**
    
5.  (Opcional pero recomendable) Restringir la clave a ciertos dominios o IPs

## ⚙️ Paso 2: Configura tu Proyecto React

### ✅ Crea tu proyecto con Vite o CRA

Ejemplo con Create React App (CRA):

`npm create vite@latest nombre-del-proyecto -- --template react`
`cd nombre-del-proyecto`
`npm install` 

### ✅ Instala el paquete necesario para usar Google Maps con React:

`npm install @react-google-maps/api` 

Este paquete hace más fácil trabajar con Google Maps dentro de componentes React.

## 🗺️ Paso 3: Implementar el mapa básico

### ✅ Crea un componente `<Mapa />`:

1.  Carga el mapa con `<LoadScript>` y `<GoogleMap>`
    
2.  Centra el mapa en una ubicación (ej: Ciudad de México)
    
3.  Añade un **marcador** con `<Marker>`
    
4.  Al hacer clic en el marcador, muestra una **ventana de información** con `<InfoWindow>`
    
Código dentro del archivo:

    src/Mapa.js
## ✅ Paso 4: Buenas Prácticas

1.  **Guardar la API Key en un `.env`**
    
    -   Crear un archivo `.env` en la raíz del proyecto:
    `VITE_GOOGLE_MAPS_API_KEY=TU_CLAVE_AQUI`
       -   **No subirlo a GitHub**
        
-   **Usar componentes funcionales y hooks**
    
    -   Ya lo hicimos arriba con `useState`.
        
-   **Diseño básico**
    
    -   Puedes usar Tailwind CSS o un poco de CSS para mejorar la vista del mapa y el entorno.
## 🚀 Instrucciones para correr el proyecto localmente

### 1. 🔁 Clona el repositorio (si aplica)

`git clone https://github.com/tu-usuario/tu-repo.git` 

`cd tu-repo`

(Si ya tienes el proyecto localmente, entra a la carpeta del proyecto.)

----------

### 2. 📦 Instala las dependencias

`npm install` 

----------

### 3. 🔐 Crea el archivo `.env`

En la raíz del proyecto, crea un archivo llamado `.env` y agrega tu clave de API de Google Maps:

`VITE_GOOGLE_MAPS_API_KEY=tu_clave_de_api` 

> 🔑 Si no tienes una clave aún, puedes obtenerla en: Google Cloud Console

----------

### 4. ▶️ Corre la aplicación

`npm run dev` 

Esto abrirá la aplicación en `http://localhost:5173` (o un puerto similar).

----------

### 5. 🧪 Verifica que todo funcione

Abre tu navegador y deberías ver el mapa cargado, centrado en la ciudad definida, con un marcador que muestra un mensaje al hacer clic.


# Mapa con clusters

## 🧩 ¿Qué es `MarkerClustererF` y por qué es útil?

`MarkerClustererF` es un componente que **agrupa automáticamente marcadores cercanos** en el mapa cuando hay muchos, especialmente en niveles de zoom bajos.

### ✅ ¿Por qué es útil?

-   **Mejora el rendimiento**: En lugar de renderizar cientos de marcadores individualmente, agrupa visualmente en uno solo con un contador.
    
-   **Mejor experiencia de usuario**: El mapa es más claro y no se satura con íconos superpuestos.
    
-   **Escalabilidad**: Puedes mostrar cientos o miles de puntos sin que el mapa se vuelva lento o ilegible.

## 🔍 Visualización a diferentes niveles de zoom

Cuando integras `MarkerClustererF`, notarás esto:

-   **Zoom bajo (muy alejado)**: Verás burbujas con números como “10”, “25”, “40” que indican cuántos marcadores están agrupados.
    
-   **Zoom medio**: Empieza a dividir los grupos si están más separados.
    
-   **Zoom alto (muy cerca)**: Los marcadores individuales aparecen uno por uno.
    

Esto ocurre automáticamente gracias al **algoritmo de agrupamiento espacial** que considera la proximidad en píxeles del viewport, no solo la distancia geográfica.

## ⚙️ Impacto del clustering en el rendimiento

| Escenario | Sin clustering | Con clustering | 
|--|--|--|--|
| 10–50 marcadores | OK | OK |
| 100–500 marcadores | Comienza a ser pesado | Suave y fluido |
|1,000+ marcadores | Muy lento, congelamientos| Fluido, agrupación automática|
|UX |Caos visual | Limpio, organizado|

### 📌 Conclusión:

-   Clustering permite renderizar **grandes cantidades de marcadores sin sacrificar rendimiento**.
    
-   Mantiene el mapa usable, especialmente en dispositivos móviles o con conexiones lentas.