using NUglify;
using System;
using System.IO;
using System.Text;

namespace CompressCss
{
    class Program
    {
        static void Main(string[] args)
        {

            if(args.Length == 0)
            {
                Console.WriteLine("Error: name of input file as argument required!");
                return;
            }

            var applicationStartupPath = AppDomain.CurrentDomain.BaseDirectory;

            var sourceFileName = args[0].Trim();

            Console.WriteLine($"Source File: {sourceFileName}");

            var sourcefilePath = Path.Combine(applicationStartupPath, sourceFileName);

            var targetName = string.Empty;

            if (File.Exists(sourcefilePath) == false)
            {
                Console.WriteLine($"Error: input file {sourcefilePath} not found!");
                return;
            }
            else
            {
                Console.WriteLine($"{Environment.NewLine}Using: input file {sourcefilePath} {Environment.NewLine}");
            }

            var splitted = sourceFileName.Split('.');
            targetName = $"{splitted[0]}.min.{splitted[1]}";

            var targetPath = Path.Combine (applicationStartupPath, targetName); 

            Console.WriteLine($"{Environment.NewLine}Result: Output file {targetName} {Environment.NewLine}");


            var content = File.ReadAllText(sourcefilePath);

            if (content.Length == 0)
            {
                Console.WriteLine($"Error: input file is empty!");
                return;
            }
            else
            {
                Console.WriteLine($"Trying to compress starting at  {content.Length} bytes");
            }


            var result = Uglify.Css(content);
            var compressed = result.Code;

            File.WriteAllText(targetPath, compressed); ;

            Console.WriteLine($"Done - shrinked to:  {compressed.Length} bytes");


            return;
        }
    }
}