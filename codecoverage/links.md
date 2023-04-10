# Links 

https://jlawcordova.com/testing/2020/11/28/creating-unit-test-coverage-reports-for-aspnet-core-3.1-projects-with-coverlet-and-reportgenerator/

https://ofpinewood.com/blog/code-coverage-with-coverlet-in-msbuild-and-azure-pipelines



## Directory.Build.props
```
<Project>
    <ItemGroup>
        <PackageReference Include="coverlet.msbuild" Version="3.2.0">
            <PrivateAssets>all</PrivateAssets>
            <IncludeAssets>runtime; build; native; contentfiles; analyzers; buildtransitive</IncludeAssets>
        </PackageReference>
    </ItemGroup>
</Project>
```

## Coverage output
```
dotnet test /p:CollectCoverage=true /p:CoverletOutputFormat=cobertura
```