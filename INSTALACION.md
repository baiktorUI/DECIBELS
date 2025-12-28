# 📦 INSTRUCCIONES DE INSTALACIÓN

## 🗂️ Estructura de archivos descargados

Has descargado los siguientes archivos:

### Archivos principales:
- `main.tsx` → Copiar a `src/main.tsx`
- `DecibelApp.tsx` → Copiar a `src/DecibelApp.tsx`
- `DecibelApp.css` → Copiar a `src/DecibelApp.css`
- `index.css` → Copiar a `src/index.css`
- `vite-env.d.ts` → Copiar a `src/vite-env.d.ts`

### Componentes:
- `TeamSetup.tsx` → Copiar a `src/components/TeamSetup.tsx`
- `DecibelMeter.tsx` → Copiar a `src/components/DecibelMeter.tsx`
- `Results.tsx` → Copiar a `src/components/Results.tsx`

### Utilidades:
- `audioSimulation.ts` → Copiar a `src/utils/audioSimulation.ts`

### Tipos:
- `teams.ts` → Copiar a `src/types/teams.ts`

### Documentación:
- `README_DECIBELIOS.md` → Documentación completa
- `GUIA_RAPIDA.md` → Guía visual rápida

---

## 📋 PASO A PASO

### Paso 1: Crear carpetas necesarias
En tu proyecto, asegúrate de tener estas carpetas dentro de `src/`:

```
src/
├── components/  ← Si no existe, créala
├── utils/       ← Si no existe, créala
└── types/       ← Si no existe, créala
```

### Paso 2: Copiar archivos principales
Copia estos archivos a la raíz de `src/`:
- `main.tsx`
- `DecibelApp.tsx`
- `DecibelApp.css`
- `index.css`
- `vite-env.d.ts`

### Paso 3: Copiar componentes
Copia estos archivos a `src/components/`:
- `TeamSetup.tsx`
- `DecibelMeter.tsx`
- `Results.tsx`

### Paso 4: Copiar utilidades
Copia este archivo a `src/utils/`:
- `audioSimulation.ts`

**NOTA:** El archivo `confetti.ts` ya existe en tu proyecto del bingo, no lo borres.

### Paso 5: Copiar tipos
Copia este archivo a `src/types/`:
- `teams.ts`

### Paso 6: Ejecutar
```bash
npm run dev
```

---

## 🔄 Alternativa: Comandos de terminal

Si prefieres usar la terminal, puedes ejecutar estos comandos desde la raíz de tu proyecto:

```bash
# Crear carpetas si no existen
mkdir -p src/components src/utils src/types

# Copiar archivos principales
cp main.tsx src/
cp DecibelApp.tsx src/
cp DecibelApp.css src/
cp index.css src/
cp vite-env.d.ts src/

# Copiar componentes
cp TeamSetup.tsx src/components/
cp DecibelMeter.tsx src/components/
cp Results.tsx src/components/

# Copiar utilidades
cp audioSimulation.ts src/utils/

# Copiar tipos
cp teams.ts src/types/
```

---

## ✅ Verificación

Tu estructura final de `src/` debería verse así:

```
src/
├── main.tsx                    ✓ NUEVO
├── DecibelApp.tsx             ✓ NUEVO
├── DecibelApp.css             ✓ NUEVO
├── index.css                  ✓ ACTUALIZADO
├── vite-env.d.ts              ✓ NUEVO
├── App.tsx                    (del bingo, se mantiene)
├── App.css                    (del bingo, se mantiene)
├── components/
│   ├── TeamSetup.tsx          ✓ NUEVO
│   ├── DecibelMeter.tsx       ✓ NUEVO
│   ├── Results.tsx            ✓ NUEVO
│   ├── BingoBoard.tsx         (del bingo, se mantiene)
│   ├── Logo.tsx               (del bingo, se mantiene)
│   └── MediaPanel.tsx         (del bingo, se mantiene)
├── utils/
│   ├── audioSimulation.ts     ✓ NUEVO
│   ├── confetti.ts            (del bingo, se mantiene)
│   └── numberGenerator.ts     (del bingo, se mantiene)
├── types/
│   └── teams.ts               ✓ NUEVO
├── data/
│   ├── bingoContent.ts        (del bingo, se mantiene)
│   └── types.ts               (del bingo, se mantiene)
└── assets/                    (del bingo, se mantiene)
```

---

## 🎯 Archivo importante: main.tsx

El archivo `main.tsx` es el que decide qué aplicación se ejecuta:

**Para usar el Medidor de Decibelios** (como está ahora):
```typescript
import DecibelApp from './DecibelApp.tsx';
```

**Para volver al Bingo**:
```typescript
import App from './App.tsx';
```

---

## ⚠️ Notas importantes

1. **NO borres los archivos del bingo** - Ambas apps pueden coexistir
2. **El archivo `confetti.ts`** ya existe en tu proyecto, no necesitas reemplazarlo
3. **Si falta alguna carpeta** (`components/`, `utils/`, `types/`), créala primero
4. **El archivo `index.css`** se reemplaza porque necesita estilos base comunes

---

## 🆘 Si algo no funciona

1. Verifica que todas las carpetas existan
2. Asegúrate de que los archivos estén en las ubicaciones correctas
3. Ejecuta `npm install` por si acaso
4. Ejecuta `npm run dev`

Si ves errores de imports, probablemente algún archivo no está en la carpeta correcta.

---

## 🎉 ¡Listo!

Una vez copiados todos los archivos, ejecuta:

```bash
npm run dev
```

Y verás la pantalla de configuración de equipos. ¡A competir! 🏆
