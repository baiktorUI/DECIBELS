# Medidor de Decibelios - Competición de Equipos

Aplicación web para competiciones de decibelios entre dos equipos con medición simulada y resultados animados.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 📁 Estructura del Proyecto

```
/
├── src/
│   ├── main.tsx              # Punto de entrada
│   ├── DecibelApp.tsx        # App principal
│   ├── DecibelApp.css        # Estilos
│   ├── index.css             # Estilos base
│   ├── components/
│   │   ├── TeamSetup.tsx     # Configuración de equipos
│   │   ├── DecibelMeter.tsx  # Medidor con gráfica
│   │   └── Results.tsx       # Pantalla de resultados
│   ├── utils/
│   │   ├── audioSimulation.ts # Simulación de decibelios
│   │   └── confetti.ts       # Efectos de confeti
│   └── types/
│       └── teams.ts          # Tipos TypeScript
├── index.html
├── package.json
└── vite.config.ts
```

## 🎮 Cómo Usar

1. **Configuración**: Introduce los nombres de los dos equipos
2. **Medición Equipo 1**: 10 segundos de medición con gráfica en tiempo real
3. **Medición Equipo 2**: 10 segundos de medición con gráfica en tiempo real
4. **Resultados**: Ganador con confeti y tabla de puntuaciones

## 🎨 Características

- ✅ Gráfica de decibelios en tiempo real
- ✅ Indicador claro de turno (PRIMER/SEGUNDO EQUIPO)
- ✅ Simulación aleatoria de 60-120 dB
- ✅ Animaciones de confeti al finalizar
- ✅ Diseño responsive 1280x720px
- ✅ Estética moderna con gradientes

## 🛠️ Tecnologías

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Canvas Confetti
- Zustand

## 📄 Licencia

MIT
