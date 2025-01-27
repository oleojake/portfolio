---
title: Cómo manejar el scroll al navegar en Angular 18
description: Cuando trabajamos con aplicaciones de una sola página (SPA), un problema recurrente es que al cambiar de ruta, el scroll de la página no se reinicia al inicio de manera automática.
publishedAt: 2025-01-27
---

<p>Esto puede dar la impresión de que la navegación no ha ocurrido, especialmente cuando la nueva página no tiene contenido visible en la posición actual del scroll. En versiones previas de Angular, lo podíamos solucionar configurando el `RouterModule` con ciertas opciones. Sin embargo, con **Angular 18**, este enfoque ha cambiado.</p>

<h2 class="my-0">Método actual (Angular 18)</h2>
<p>En Angular 18, el concepto de configuración del enrutador ha cambiado con el nuevo sistema de configuración modular, y ahora estas opciones se manejan a través de las funciones <strong>withInMemoryScrolling</strong> y <strong>scrollPositionRestoration</strong></p>

<h3 class="my-0">app.config.ts</h3>

```js
import { provideRouter, withInMemoryScrolling } from "@angular/router";
import { routes } from "./app.routes";

export const appConfig = {
	providers: [
		provideRouter(
			routes,
			withInMemoryScrolling({
				scrollPositionRestoration: "enabled", // Restaurar el scroll al inicio
			})
		),
	],
};
```

<h2 class="my-0">¿Qué hace exactamente withInMemoryScrolling?</h2>
<p class="my-0">La función withInMemoryScrolling permite habilitar y configurar la restauración del scroll. En este caso:</p>
<ul>
<li>
<strong>scrollPositionRestoration</strong>: 'enabled': Al navegar a una nueva ruta, el scroll de la página se restablece al inicio automáticamente.
</li>
<li>
<strong>(Opcional) anchorScrolling</strong>: 'enabled': Permite desplazarse automáticamente a un elemento con un id específico si la URL incluye un fragmento (por ejemplo, example.com/page#section).
</li>
</ul>

<p>El nuevo enfoque en Angular 18 puede parecer un poco diferente al principio, pero sigue siendo intuitivo y ofrece más flexibilidad.</p>
