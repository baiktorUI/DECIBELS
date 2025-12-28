# 🚨 SOLUCIÓN DE ERROR EN VERCEL

## Error: "vite: command not found"

Este error ocurre porque Vercel no está instalando las dependencias correctamente.

---

## ✅ SOLUCIÓN RÁPIDA

### Paso 1: Verificar package.json

Asegúrate de que tu `package.json` tenga el script de build correcto:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  }
}
```

### Paso 2: Configurar en Vercel Dashboard

Ve a tu proyecto en Vercel → Settings → General:

**Build & Development Settings:**
- Framework Preset: `Vite`
- Build Command: `npm run build` o `vite build`
- Output Directory: `dist`
- Install Command: `npm install`

### Paso 3: Agregar archivos de configuración

He creado dos archivos que debes agregar a la raíz de tu proyecto:

1. **vercel.json** (ya descargado)
2. **.npmrc** (ya descargado)

Cópialos a la raíz de tu proyecto (al mismo nivel que `package.json`).

---

## 🔧 SOLUCIONES ALTERNATIVAS

### Opción A: Usar variables de entorno en Vercel

En Vercel Dashboard → Settings → Environment Variables:

Agrega:
- Name: `NPM_CONFIG_LEGACY_PEER_DEPS`
- Value: `true`

### Opción B: Modificar package.json

Cambia el script de build a:

```json
{
  "scripts": {
    "build": "npm install && tsc && vite build"
  }
}
```

### Opción C: Especificar versión de Node

Crea un archivo `.nvmrc` en la raíz con:

```
18
```

O agrega esto a tu `package.json`:

```json
{
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  }
}
```

---

## 📋 CHECKLIST COMPLETO

Verifica que tienes:

- [ ] `package.json` con vite en dependencies o devDependencies
- [ ] Script "build" en package.json
- [ ] `vercel.json` en la raíz (archivo descargado)
- [ ] `.npmrc` en la raíz (archivo descargado)
- [ ] Framework Preset configurado como "Vite" en Vercel
- [ ] Output Directory configurado como "dist"

---

## 🎯 CONFIGURACIÓN COMPLETA RECOMENDADA

### 1. Estructura de archivos:

```
tu-proyecto/
├── .npmrc                  ✓ Nuevo archivo descargado
├── vercel.json            ✓ Nuevo archivo descargado
├── package.json           ✓ Verificar scripts
├── vite.config.ts         ✓ Ya existe
├── tsconfig.json          ✓ Ya existe
└── src/
    └── ...
```

### 2. package.json debe incluir:

```json
{
  "name": "tu-proyecto",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "canvas-confetti": "^1.9.2",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "use-sound": "^4.0.1",
    "zustand": "^4.5.2"
  },
  "devDependencies": {
    "@types/canvas-confetti": "^1.6.4",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "vite": "^5.4.2"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
```

### 3. Configuración en Vercel Dashboard:

**General Settings:**
- Node.js Version: `18.x` o superior

**Build & Development Settings:**
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

---

## 🔄 PASOS DE DEPLOYMENT

1. **Hacer commit de los nuevos archivos:**
   ```bash
   git add vercel.json .npmrc
   git commit -m "Add Vercel configuration"
   git push
   ```

2. **Vercel automáticamente detectará los cambios y hará redeploy**

3. **Si el problema persiste:**
   - Ve a Vercel Dashboard
   - Deployments → Click en el último deployment
   - Click en "Redeploy"
   - Marca la opción "Clear build cache and redeploy"

---

## 🆘 SI AÚN NO FUNCIONA

### Opción 1: Deployment manual desde CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Opción 2: Verificar logs

En Vercel Dashboard:
1. Ve a tu deployment fallido
2. Click en "View Function Logs"
3. Busca el error específico
4. Compárteme el log completo si necesitas ayuda

### Opción 3: Prueba local

Antes de hacer deploy, verifica que funciona localmente:

```bash
# Limpiar todo
rm -rf node_modules dist package-lock.json

# Reinstalar
npm install

# Build local
npm run build

# Verificar que crea la carpeta dist/
ls -la dist/
```

Si `npm run build` funciona localmente, debería funcionar en Vercel.

---

## 💡 CAUSA COMÚN DEL ERROR

El error "vite: command not found" usualmente significa que:

1. **Vite no está instalado** → Verifica que esté en `devDependencies`
2. **npm install falló** → Verifica los logs de Vercel
3. **Cache corrupto** → Limpia el cache de Vercel
4. **Versión de Node incompatible** → Especifica Node 18+

---

## ✅ DESPUÉS DE APLICAR LA SOLUCIÓN

Tu proyecto debería deployarse correctamente. La URL será algo como:
- `https://tu-proyecto.vercel.app`

Y verás la pantalla de configuración de equipos del medidor de decibelios.

---

## 📞 SOPORTE ADICIONAL

Si después de seguir todos estos pasos aún tienes problemas:

1. Compárteme el contenido completo de tu `package.json`
2. Compárteme el log de error completo de Vercel
3. Verifica que los archivos `vercel.json` y `.npmrc` estén en la raíz

¡Con estos pasos debería funcionar! 🎉
