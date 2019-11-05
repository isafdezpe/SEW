using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Linq;
using System.Runtime.Serialization.Json;
using Newtonsoft.Json;

namespace XMLtoJSON
{
    class Program
    {
        static void Main(string[] args)
        {
            if (args[0] == null)
            { 
                Console.WriteLine("No se ha especificado archivo de entrada");
                return;
            }

            if (args[1] == null)
            {
                Console.WriteLine("No se ha especificado archivo de salida");
                return;
            }

            XmlDocument doc = new XmlDocument();
            doc.Load(args[0]);

            string json = JsonConvert.SerializeXmlNode(doc);

            string fileName = args[1];

            File.WriteAllText(fileName, json.ToString());
        }
    }
}
