// Took Inspiration from: https://www.youtube.com/shorts/55G7NNBm7TM

using System.Collections.Generic;
using System.Reflection.Emit;

Console.WriteLine("missing Numbers...");

var numbers = new int[] {3, 0, 1, 2, 5};


/// Strange XOR Version
int MissingNumber(int[] numbers)
{
    var xor = 0;

    for(var i = 0; i < numbers.Length; i++)
    {
        Console.WriteLine($"=== Loop: {i} === ");
        Console.WriteLine($"XOR: {xor}");

        xor = xor ^ i;
        
        xor = xor ^ numbers[i];

        Console.WriteLine($"XOR: {xor}");

        if (i == numbers.Length - 1)
        {
            xor = xor ^ (i + 1);
        }

        Console.WriteLine(Environment.NewLine);
    }

    return xor;
}

/// The .NET way :-D
int MissingNumber2(int[] numbers)
{
    var range = Enumerable.Range(0, numbers.Max());

    var missing = range.Except(numbers);

    return missing.FirstOrDefault();
}


var result = MissingNumber2(numbers);

Console.WriteLine($"Given Numbers: {string.Join<int>(",", numbers)}");
Console.WriteLine($"Missing Number: {result}");
