using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Linq;

namespace PerfilAltimetricoSVG
{
    class Program
    {
        static void Main(string[] args)
        {
			if (args[0] == null)
            { 
                Console.WriteLine("No se ha especificado archivo");
                return;
            }

			XDocument doc = XDocument.Load(args[0]);

            var rutas = (from r in doc.Descendants("rutas").Elements("ruta") select r);
            var altitudesIniciales = (from r in rutas.Elements("coordenadas") select r.Value.Split(',')[2]);

            int i = 0;
            int x = 70;

            foreach (var ruta in rutas)
            {
                XmlDocument svgDoc = new XmlDocument();
                XmlNode node = svgDoc.CreateXmlDeclaration("1.0", "UTF-8", null);
                svgDoc.AppendChild(node);
                XmlNode svg = GenerateSvg(svgDoc);

                var hitos = (from r in ruta.Elements("hitos").Elements("hito") select r);
                var altitudesHito = (from h in hitos.Elements("coordenadas-hito") select h.Value.Split(',')[2]);

                svg.AppendChild(CreatePolyLine(svgDoc, altitudesIniciales.ElementAt(i), altitudesHito, 70 * i));

                var nombresHito = (from h in hitos select h.Attribute("nombre").Value);

                x += 140;
                int y = -150;

                foreach (var nombre in nombresHito.Reverse())
                {
                    svg.AppendChild(CreateText(svgDoc, nombre, x, y += 75));
                }

                svg.AppendChild(CreateText(svgDoc, "Inicio", x, y += 75));

                var nombreRuta = (from r in rutas select r.Attribute("nombre").Value[i]);
                svgDoc.Save("ruta_" + i + ".svg");

                i++;
            }
			
			
        }

        private static XmlNode GenerateSvg(XmlDocument doc)
        {
            XmlNode svg = doc.CreateElement("svg");

            XmlAttribute alto = doc.CreateAttribute("height");
            alto.Value = "auto";
            svg.Attributes.Append(alto);

            XmlAttribute ancho = doc.CreateAttribute("width");
            ancho.Value = "auto";
            svg.Attributes.Append(ancho);

            XmlAttribute estilo = doc.CreateAttribute("style");
            estilo.Value = "overflow:visible";
            svg.Attributes.Append(estilo);

            XmlAttribute version = doc.CreateAttribute("version");
            version.Value = "1.1";
            svg.Attributes.Append(version);

            XmlAttribute xmlns = doc.CreateAttribute("xmlns");
            xmlns.Value = "http://www.w3.org/2000/svg";
            svg.Attributes.Append(xmlns);

            doc.AppendChild(svg);
            return svg;
        }

        private static XmlNode CreatePolyLine(XmlDocument doc, string altitudInicial, IEnumerable<string> altitudHito, int y)
        {
            XmlNode polyline = doc.CreateElement("polyline");

            XmlAttribute estilo = doc.CreateAttribute("style");
            estilo.Value = "fill:white;stroke:red;stroke-width:4";
            polyline.Attributes.Append(estilo);

            XmlAttribute points = doc.CreateAttribute("points");

            int x = 10;
            string value = x + "," + (double.Parse(altitudInicial) - double.Parse(altitudInicial) / 1000 * 400) + " ";
            foreach (var coor in altitudHito)
            {
                x += 90;
                value += x + "," + (double.Parse(coor) - double.Parse(coor) / 1000 * 400) + " ";
            }

            points.Value = value;

            polyline.Attributes.Append(points);

            return polyline;
        }

        private static XmlNode CreateText(XmlDocument doc, string nombre, int x, int y)
        {
            XmlNode text = doc.CreateElement("text");

            XmlAttribute sizeX = doc.CreateAttribute("x");
            sizeX.Value = x.ToString();
            text.Attributes.Append(sizeX);

            XmlAttribute sizeY = doc.CreateAttribute("y");
            sizeY.Value = y.ToString();
            text.Attributes.Append(sizeY);

            XmlAttribute transform = doc.CreateAttribute("transform");
            transform.Value = "rotate(90,90,90)";
            text.Attributes.Append(transform);

            text.InnerText = nombre;

            return text;
        }
    }
}
