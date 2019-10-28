<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html"/>
	<xsl:template match="rutas">
		<html>
			<head>
				<title>Ejercicio 2 - Tarea 1</title>
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
							coordenadas: <xsl:value-of select="coordenadas/longitud"/>, 
							<xsl:value-of select="coordenadas/latitud"/>, altitud: <xsl:value-of select="coordenadas/altitud"/>
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
										Coordenadas: <xsl:value-of select="coordenadas-hito/longitud-hito"/>, 
										<xsl:value-of select="coordenadas-hito/latitud-hito"/>, altitud: <xsl:value-of select="coordenadas-hito/altitud-hito"/>
									</p>
									<p>Distancia desde el hito anterior: <xsl:value-of select="distancia"/> <xsl:value-of select="distancia/@unidades"/></p>
									<xsl:for-each select="galeria/fotografia">
										<xsl:element name="img">
											<xsl:attribute name="src">
											<xsl:value-of select="@archivo"/>
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
			</body>
		</html> 
	</xsl:template>
</xsl:stylesheet>