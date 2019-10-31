<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:kml="http://www.opengis.net/kml/2.2">
	<xsl:template match="rutas">
		<kml>
			<Document>
				<xsl:for-each select="ruta">
					<Folder>
						<name><xsl:value-of select="@nombre"/></name>
						<description><xsl:value-of select="descripcion"/></description>
						<Placemark>
							<name><xsl:value-of select="direccion"/></name>
							<Point>
								<coordinates><xsl:value-of select="coordenadas"/></coordinates>
							</Point>
						</Placemark>
						<xsl:for-each select="hitos/hito">
							<Placemark>
								<name><xsl:value-of select="@nombre"/></name>
								<Point>
									<coordinates><xsl:value-of select="coordenadas-hito"/></coordinates>
								</Point>
							</Placemark>
						</xsl:for-each>
					</Folder>
				</xsl:for-each>
			</Document>
		</kml>
	</xsl:template>
</xsl:stylesheet>