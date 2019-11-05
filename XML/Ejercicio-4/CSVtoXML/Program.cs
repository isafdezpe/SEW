using System;
using System.Linq;
using System.Xml.Linq;
using System.IO;

namespace CSVtoXML
{
    class Program
    {
        static void Main(string[] args)
        {
            if (args.Length != 2)
            {
                Console.WriteLine("Deben especificarse dos archivos como parámetro");
                return;
            }
            if (args[0] == null)
            {
                Console.WriteLine("No se ha especificado archivo de entrada");
                return;
            }

            if (!args[0].EndsWith(".csv"))
            {
                Console.WriteLine("El archivo de entrada especificado no es un CSV");
                return;
            }

            if (args[1] == null)
            {
                Console.WriteLine("No se ha especificado archivo de salida");
                return;
            }

            var csvContent = File.ReadAllLines(args[0]);

            var name = args[0].Split('.')[0];
            var xmlContent = new XElement(name,
                csvContent.Select(line => new XElement("Item",
                    line.Split(';')
                        .Select((column, index) => new XElement("Column" + index, column)))));

            File.WriteAllText(args[1] + ".xml", xmlContent.ToString());
        }
    }
}
