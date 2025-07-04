# Configuración de WhatsApp

Este proyecto tiene un sistema centralizado para manejar los enlaces de WhatsApp en todos los botones del sitio web.

## Cambiar el número de WhatsApp

Para cambiar el número de WhatsApp en todo el sitio web, solo necesitas editar **UN SOLO ARCHIVO**:

**Archivo:** `app/config/whatsapp.ts`

```typescript
export const WHATSAPP_CONFIG = {
  phoneNumber: "3016328564", // 👈 CAMBIAR AQUÍ
  countryCode: "57", // Colombia
};
```

### Pasos para cambiar el número:
1. Abre el archivo `app/config/whatsapp.ts`
2. Cambia el valor de `phoneNumber` por el nuevo número (sin el código de país)
3. Si es necesario, cambia el `countryCode` (57 es para Colombia)
4. Guarda el archivo

¡Y listo! Todos los botones del sitio web usarán automáticamente el nuevo número.

## Mensajes predefinidos

También puedes personalizar los mensajes que se envían desde cada sección:

```typescript
export const WHATSAPP_MESSAGES = {
  banner: "¡Hola! Me interesa conocer más sobre los servicios de Criteria Comunicación Política",
  services: "Hola, me gustaría obtener más información sobre sus servicios de comunicación política",
  contact: "¡Hola! Me gustaría ponerme en contacto con el equipo de Criteria",
  general: "¡Hola! Me interesa conocer más sobre Criteria Comunicación Política",
};
```

## Botones que usan WhatsApp

Los siguientes botones abren WhatsApp automáticamente:

- ✅ **Banner:** Botón "Conoce nuestros servicios"
- ✅ **Navbar:** Botón CTA (parte superior derecha)
- ✅ **Servicios:** Botón "Conoce más"
- ✅ **Newsletter:** Botón de suscripción
- ❌ **PDF:** Botón "Descarga el Boletín Digital" (este descarga el PDF, NO abre WhatsApp)

## Estructura técnica

```
app/
├── config/
│   └── whatsapp.ts          # ⭐ Configuración centralizada
├── hooks/
│   └── useWhatsApp.ts       # Hook personalizado
└── components/
    ├── Banner/Banner.tsx    # Usa WhatsApp
    ├── Navbar/CtaButton.tsx # Usa WhatsApp
    ├── Provide/index.tsx    # Usa WhatsApp
    ├── Newsletter/Newsletter.tsx # Usa WhatsApp
    └── Why/index.tsx        # NO usa WhatsApp (descarga PDF)
```

## Beneficios del sistema centralizado

1. **Un solo punto de cambio:** Solo editas un archivo para cambiar el número en todo el sitio
2. **Mensajes personalizados:** Diferentes mensajes para diferentes secciones
3. **Fácil mantenimiento:** Todo el código de WhatsApp está centralizado
4. **Consistencia:** Todos los botones se comportan de la misma manera
