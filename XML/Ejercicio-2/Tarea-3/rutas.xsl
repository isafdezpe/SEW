<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:kml="http://www.opengis.net/kml/2.2">
	<xsl:template match="rutas">
		<kml>
			<Document>
				<xsl:for-each select="ruta">
					<Placemark>
						<name><xsl:value-of select="@nombre"/></name>
						<LineString>
							<coordinates>
								<xsl:value-of select="coordenadas"/><xsl:text>&#xD;</xsl:text>
								<xsl:for-each select="hitos/hito">
									<xsl:value-of select="coordenadas-hito"/><xsl:text>&#xD;</xsl:text>
								</xsl:for-each>
							</coordinates>
						</LineString>
					</Placemark>
				</xsl:for-each>
			</Document>
		</kml>
	</xsl:template>
</xsl:stylesheet>