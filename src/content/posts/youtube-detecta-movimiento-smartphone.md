---
title: ¿YouTube detecta cuándo coges tu smartphone? Mi teoría (y demo con React Native)
description: Una hipótesis técnica sobre cómo YouTube podría detectar cuándo miras la pantalla, y una demo práctica con React Native para explorar los sensores de movimiento.
publishedAt: 2025-10-14
---

<figure class="flex justify-center">
<img class="m-0 rounded-md" src="/posts/youtube-detecta-movimiento-smartphone/youtube-smartphone-motion-ads.png" alt="youtube detecta movimiento"/>
</figure>

<p>Últimamente me he dado cuenta de un patrón curioso.<br>
Escucho podcasts en YouTube durante horas mientras entreno o cocino, y los anuncios apenas aparecen. Pero en cuanto cojo el móvil… aparece uno casi de inmediato.</p>

<p>Al principio pensé que era casualidad, pero empezó a repetirse tantas veces que acabó por despertar mi teoría:</p>

<blockquote>¿Podría YouTube (o aplicaciones similares) detectar que estoy sujetando el teléfono mediante los sensores del dispositivo?</blockquote>

<p>No he encontrado ninguna documentación oficial que lo confirme, pero el escenario es <b>técnicamente posible</b>. En este artículo analizo cómo podrían intervenir los sensores de movimiento y muestro una pequeña prueba práctica en React Native.</p>

<h2 class="mt-5 mb-0">Qué miden realmente los sensores de movimiento</h2>
<p>Desde hace años nuestros smartphones incluyen sensores como el <b>acelerómetro y el giroscopio</b>, diseñados para registrar el movimiento físico del dispositivo.</p>
<ul class="text-gray-800 m-0">
<li><b>Acelerómetro:</b> mide la aceleración en los tres ejes (X, Y, Z). Detecta inclinaciones, vibraciones y cambios de posición.
</li>
<ul>
<li>En Android, se puede acceder mediante <a href="https://developer.android.com/reference/android/hardware/SensorManager">SensorManager</a> y los eventos de tipo motion sensor.</li>
<li>Apple lo gestiona a través de <a href="https://developer.apple.com/documentation/coremotion">Core Motion</a>, que permite combinar acelerómetro, giroscopio y magnetómetro.</li>
</ul>
<li><b>Giroscopio:</b> mide la velocidad de rotación en los tres ejes. Combinado con el acelerómetro, permite deducir la orientación del dispositivo.</li>
</ul>
<p>Estos sensores están pensados para rotar la pantalla, controlar videojuegos o registrar pasos, pero también podrían ofrecer pistas más sutiles: por ejemplo, el gesto característico de <b>levantar el teléfono</b> para mirar la pantalla.</p>

<p>Y aquí es donde la teoría se vuelve relevante.</p>
<p>Si YouTube detectara ese <b>gesto de levantar el teléfono</b>, podría interpretarlo como una señal de <b>atención activa</b>. 
En ese momento, el usuario ya no solo está escuchando, sino que tiene el dispositivo en la mano, listo para interactuar: 
saltarse el anuncio, tocar la pantalla o mirar el contenido.</p>
<p>Desde el punto de vista de optimización publicitaria, eso es oro: 
mostrar un anuncio justo cuando el usuario está mirando la pantalla multiplica las probabilidades de <b>impacto y conversión</b>.</p>
<p>Y aunque no existe evidencia pública de que YouTube lo haga, sí está claro que 
el <b>timing de atención</b> es un factor crucial en la economía de las plataformas digitales.</p>

<h2 class="mt-5 mb-0">Acceso y permisos</h2>
<p>Los sensores de movimiento no se consideran de “alto riesgo” como la cámara o el micrófono, por lo que <b>muchas apps pueden acceder a ellos sin pedir permiso explícito.</b></p>
<p>En resumen: <b>sí, una app móvil puede leer estos datos</b> con relativa facilidad. No significa que YouTube lo haga, pero la base técnica existe.</p>

<h3 class="mt-5 mb-0">Objeciones y necesidad de un patrón</h3>
<p>Una hipótesis así plantea varias objeciones lógicas.<br/>La principal: <b>diferenciar un agarre real de un simple movimiento.</b></p>
<p>El móvil puede moverse dentro del bolsillo o en una mochila. Si un sistema quisiera detectar “agarre”, debería filtrar todos esos casos. Un patrón de detección realista incluiría:</p>
<ol class="text-gray-800 m-0">
<li>Pico de aceleración vertical (eje Z).</li>
<li>Cambio repentino de orientación (giroscopio).</li>
<li>Estabilización rápida en posición de lectura.</li>
</ol>
<p>Ese tipo de procesamiento sí permitiría deducir cuándo el dispositivo ha sido tomado en la mano.</p>
<p><b>Objeción técnica:</b> consumo energético</p>
<blockquote>“Always make sure to disable sensors you don't need, especially when your activity is paused. Failing to do so can drain the battery in just a few hours. Note that the system will not disable sensors automatically when the screen turns off. - Android Developers”
</blockquote>
<p>Esto significa que si una app mantuviera los sensores activos en segundo plano para detectar movimiento, el consumo de batería sería muy alto.</p>
<p>Este punto hace poco probable que una aplicación como YouTube mantenga los sensores activos de forma continua solo para detectar un gesto tan sutil.</p>
<p>Por ahora, no hay ningún documento oficial que confirme este comportamiento. ¿Pero podemos replicarlo en la demo?</p>

<h3 class="mt-5 mb-0">Demo práctica en React Native</h3>
<p>Para entender la facilidad con la que se puede leer el movimiento del dispositivo, creé un ejemplo muy básico usando <b>Expo</b> y el paquete <a href="https://docs.expo.dev/versions/latest/sdk/accelerometer/">expo-sensors.</a></p>

```js
// En este fragmento se comprueba si alguno de los ejes del giroscopio supera un umbral.
// Si ocurre, el estado isPhonePicked pasa a true, lo que activa la detección de “teléfono cogido”.
import { Accelerometer, Gyroscope } from "expo-sensors";
import { useEffect, useState } from "react";

export default function Index() {
	const [gyroscopeData, setGyroscopeData] = useState({ x: 0, y: 0, z: 0 });
	const [isPhonePicked, setIsPhonePicked] = useState(false);

	const GYRO_X_THRESHOLD = 1.0;
	const GYRO_Y_THRESHOLD = 2.0;
	const GYRO_Z_THRESHOLD = 2.0;

	useEffect(() => {
		Gyroscope.setUpdateInterval(1000);
		const subscription = Gyroscope.addListener(setGyroscopeData);
		return () => subscription.remove();
	}, []);

	useEffect(() => {
		const x = Math.abs(gyroscopeData.x) > GYRO_X_THRESHOLD;
		const y = Math.abs(gyroscopeData.y) > GYRO_Y_THRESHOLD;
		const z = Math.abs(gyroscopeData.z) > GYRO_Z_THRESHOLD;
		setIsPhonePicked(x || y || z);
	}, [gyroscopeData]);
}
```

<blockquote class="note">
  Puedes ajustar los valores de <code>GYRO_X_THRESHOLD</code>, <code>GYRO_Y_THRESHOLD</code> y <code>GYRO_Z_THRESHOLD</code> 
  para aumentar o reducir la sensibilidad del detector. En mi caso, con valores de 1.0–2.0 rad/s se detecta 
  el movimiento de levantar el móvil sin falsos positivos al dejarlo sobre la mesa.
</blockquote>

<p>Al ejecutar este ejemplo, basta con levantar el teléfono para observar un <b>pico en el eje Z</b>. Esa simple lectura ya serviría como base para detectar un gesto de “agarre” si se procesara junto con más contexto.</p>

<figure class="flex justify-center">
<img class="m-0 max-w-56 rounded-md" src="/posts/youtube-detecta-movimiento-smartphone/sensor-test-app.gif" alt="sensor-test-app"/>
</figure>

<p>El código completo y los comentarios adicionales están disponibles al final de este artículo por si quieres jugar por tu cuenta con los sensores.</p>

<h3 class="mt-5 mb-0">Conclusiones</h3>
<p>La hipótesis de que YouTube utilice sensores de movimiento para decidir cuándo mostrar anuncios <b>no tiene confirmación oficial</b>.</p>

<p>Sin embargo, <b>tecnológicamente sería posible</b>: los sensores ofrecen suficiente precisión, y las apps pueden acceder a ellos con relativa libertad.</p>

<p>Más allá de la teoría, este caso plantea una reflexión interesante:</p>
<blockquote>¿Cuánta información generan los sensores del móvil sobre nuestro comportamiento cotidiano, y quién puede usarla?</blockquote>
<p>Y, por simple curiosidad:</p>
<blockquote>¿A alguien más le pasa lo mismo o soy el único que ahora no puede dejar de fijarse en cuándo aparece el anuncio?
</blockquote>
<p>Haz click para descargar el código de la demo:</p>
<figure class="flex justify-center">
<a href="https://github.com/oleojake/sensor-test" target="_blank"><img class="m-0 rounded-md" src="/posts/youtube-detecta-movimiento-smartphone/sensor-test-github.jpg" alt="sensor-test-github"/></a>
</figure>
<p>El proyecto está disponible de forma abierta en GitHub por si quieres probarlo, modificar los umbrales o experimentar con tus propios patrones de detección.</p>
<figure class="flex justify-center">
    <a href="https://github.com/oleojake/sensor-test" target="_blank" class="inline-block px-6 py-2 text-white bg-oleojake-secondary rounded no-underline hover:bg-oleojake-primary transition">
        🔗 Repositorio Github
    </a>
</figure>
