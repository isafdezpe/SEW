function escribeInformacion() {
    document.write("App code name: " + navegador.codigo + "<br>");
    document.write("App version: " + navegador.version + "<br>");
    document.write("Cookies: " + navegador.cookies + "<br>");
    document.write("Geolocation: " + navegador.geolocalizacion + "<br>");
    document.write("Online: " + navegador.online + "<br>");
    document.write("Platform: " + navegador.plataforma + "<br>");
    document.write("Product: " + navegador.producto + "<br>");
    document.write("UserAgent: " + navegador.userAgent + "<br>");
    document.write("Vendor: " + navegador.vendedor + "<br>");
    document.write("Java: " + navegador.java + "<br>");
}

escribeInformacion();