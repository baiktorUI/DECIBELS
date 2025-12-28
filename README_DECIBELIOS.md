# Aplicación de Medidor de Decibelios

Esta es una aplicación de competición de decibelios entre dos equipos con la misma estética visual que el bingo.

## 🎯 Características

- **Configuración de equipos**: Pantalla inicial para introducir los nombres de los dos equipos
- **Medición simulada**: Cada equipo tiene 10 segundos de medición con gráfica en tiempo real
- **Indicador visual**: Muestra claramente qué equipo está compitiendo (PRIMER EQUIPO / SEGUNDO EQUIPO)
- **Gráfica animada**: Visualización en tiempo real de los decibelios simulados (60-120 dB)
- **Resultados finales**: Pantalla de resultados con animaciones de confeti y el ganador destacado
- **Misma estética**: Gradiente de fondo y diseño similar al bingo original

## 📁 Estructura de Archivos

```
src/
├── DecibelApp.tsx              # Componente principal de la aplicación
├── DecibelApp.css              # Estilos específicos de la app de decibelios
├── main.tsx                    # Punto de entrada de la aplicación
├── index.css                   # Estilos base
├── vite-env.d.ts              # Tipos de TypeScript
├── components/
│   ├── TeamSetup.tsx          # Pantalla de configuración de equipos
│   ├── DecibelMeter.tsx       # Pantalla de medición de decibelios
│   └── Results.tsx            # Pantalla de resultados finales
├── types/
│   └── teams.ts               # Definiciones de tipos TypeScript
└── utils/
    ├── audioSimulation.ts     # Lógica de simulación de decibelios
    └── confetti.ts            # Efectos de confeti (ya existe del bingo)
```

## 🚀 Cómo Usar

### Instalación

1. **Copia los archivos** a tu proyecto existente (reemplaza `src/` completo)

2. **Los archivos del bingo original se mantienen** en el proyecto por si los necesitas más adelante:
   - `src/App.tsx` (aplicación de bingo)
   - `src/App.css` (estilos del bingo)
   - `src/components/BingoBoard.tsx`
   - `src/components/Logo.tsx`
   - `src/components/MediaPanel.tsx`
   - etc.

3. **Para volver al bingo**, simplemente cambia en `src/main.tsx`:
   ```typescript
   import App from './App.tsx';  // En lugar de DecibelApp
   ```

### Ejecución

```bash
npm run dev
```

## 🎮 Flujo de la Aplicación

### 1. Pantalla de Configuración
- Introduce el nombre del **Equipo 1** (color naranja #E94E18)
- Introduce el nombre del **Equipo 2** (color morado #312C86)
- Haz clic en "COMENZAR COMPETICIÓN"

### 2. Medición - Equipo 1
- Aparece el indicador "PRIMER EQUIPO" con el color del equipo
- El nombre del equipo se muestra en grande
- Durante 10 segundos se muestra:
  - Valor actual de decibelios (60-120 dB)
  - Gráfica animada en tiempo real
  - Barra de progreso de tiempo
  - Estadísticas: Máximo y Tiempo transcurrido

### 3. Medición - Equipo 2
- Automáticamente pasa al segundo equipo
- Aparece el indicador "SEGUNDO EQUIPO"
- Mismo proceso de medición de 10 segundos

### 4. Resultados
- Animación de confeti y fuegos artificiales
- Muestra el ganador con trofeo 🏆
- Tabla de resultados con las puntuaciones
- Botón "NUEVA COMPETICIÓN" para reiniciar

## 🎨 Personalización

### Colores de los Equipos
Puedes cambiar los colores en `src/components/TeamSetup.tsx`:
```typescript
const teams: Team[] = [
  { name: team1Name.trim(), score: 0, color: '#E94E18' },  // Color Equipo 1
  { name: team2Name.trim(), score: 0, color: '#312C86' }   // Color Equipo 2
];
```

### Duración de la Medición
Puedes cambiar la duración en `src/components/DecibelMeter.tsx`:
```typescript
const DURATION = 10000; // 10 segundos (en milisegundos)
```

### Rango de Decibelios
Puedes ajustar el rango en `src/utils/audioSimulation.ts`:
```typescript
// Cambia estos valores para ajustar el rango
const baseNoise = 60 + Math.random() * 30;  // Base: 60-90 dB
const result = Math.min(120, Math.max(60, ...));  // Rango: 60-120 dB
```

## 🛠️ Tecnologías Utilizadas

- **React 18** con TypeScript
- **Vite** como bundler
- **Tailwind CSS** para estilos
- **canvas-confetti** para animaciones de celebración
- **Zustand** para gestión de estado (del proyecto original)

## 📝 Notas Técnicas

- La simulación de decibelios es completamente aleatoria y no utiliza el micrófono real
- Los valores son generados de manera progresiva para dar sensación de autenticidad
- Cada equipo siempre obtiene valores diferentes aunque sean aleatorios
- La gráfica se actualiza cada 100ms para una animación fluida

## 🔄 Cambiar entre Aplicaciones

### Para usar el Medidor de Decibelios (actual):
En `src/main.tsx`:
```typescript
import DecibelApp from './DecibelApp.tsx';
```

### Para volver al Bingo:
En `src/main.tsx`:
```typescript
import App from './App.tsx';
```

## 💡 Consejos

- Los nombres de los equipos admiten hasta 30 caracteres
- El botón "COMENZAR COMPETICIÓN" solo se activa cuando ambos nombres están completos
- La medición comienza automáticamente 1 segundo después de aparecer cada equipo
- Puedes reiniciar la competición en cualquier momento desde la pantalla de resultados

## 🎉 ¡Disfruta de la competición!

Si tienes alguna pregunta o necesitas modificaciones adicionales, no dudes en preguntar.
