<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" version="5.2" encoding="utf-8" indent="yes"/>
	<xsl:template match="rutas">
		<xsl:text disable-output-escaping='yes'>
			&lt;!DOCTYPE html&gt;
		</xsl:text>
		<html lang="es">
			<head>
				<meta name="author" content="UO257829"/>
				<title>Ejercicio 2 - Tarea 1</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<link rel="stylesheet" type="text/css" href="rutas.css"/> 
			</head>
			<body>
				<header><h1>RUTAS TURÍSTICAS</h1></header>
				<section>
					<xsl:for-each select="ruta">
						<h2><xsl:value-of select="@nombre"/></h2>
						<p>Tipo: <xsl:value-of select="tipo"/></p>
						<p>Transporte: <xsl:value-of select="transporte"/></p>
						<p>Fecha: <xsl:value-of select="fecha"/></p>
						<p>Duración: <xsl:value-of select="duracion"/></p>
						<p>Agencia: <xsl:value-of select="agencia"/></p>
						<p><xsl:value-of select="descripcion"/></p>
						<p>Recomendada para: <xsl:value-of select="personas"/></p>
						<p>
							Inicio de la ruta: <xsl:value-of select="lugar"/>, <xsl:value-of select="direccion"/>, 
							coordenadas: <xsl:value-of select="coordenadas"/>m.
						</p>
						<h3>Referencias</h3>
						<ul>
							<xsl:for-each select="referencia">
								<li><a>
									<xsl:attribute name="href"><xsl:value-of select="@enlace"/></xsl:attribute>
									<xsl:value-of select="."/>
								</a></li>
							</xsl:for-each>
						</ul>
						<p>Puntuación:<xsl:value-of select="recomendacion"/></p>
						<h3>Hitos de la ruta</h3>
						<ul>
							<xsl:for-each select="hitos/hito">
								<li><h4><xsl:value-of select="@nombre"/></h4>
									<p><xsl:value-of select="descripcion-hito"/></p>
									<p>
										Coordenadas: <xsl:value-of select="coordenadas-hito"/>m.
									</p>
									<p>Distancia desde el hito anterior: <xsl:value-of select="distancia"/> <xsl:value-of select="distancia/@unidades"/></p>
									<xsl:for-each select="galeria/fotografia">
										<xsl:element name="img">
											<xsl:attribute name="src">
											<xsl:value-of select="@archivo"/>
											</xsl:attribute>
											<xsl:attribute name="class">
											img_css
											</xsl:attribute>
											<xsl:attribute name="alt">
											<xsl:value-of select="."/>
											</xsl:attribute>
											</xsl:element>
									</xsl:for-each>
								</li>
							</xsl:for-each>
						</ul>
					</xsl:for-each>
				</section>
				<footer>
					<a href="https://validator.w3.org/check?uri=referer"><img
						src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"
						alt="HTML5 Válido" height="64" width="63" /></a>
					<a href=" http://jigsaw.w3.org/css-validator/check/referer ">
						<img src=" http://jigsaw.w3.org/css-validator/images/vcss"
						alt="Valid CSS!" height="31" width="88" /></a>
				</footer>
			</body>
		</html> 
	</xsl:template>
</xsl:stylesheet>