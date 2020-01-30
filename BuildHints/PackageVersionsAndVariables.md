# Variablen in Package Version (Nuget) übernehmen

## .CSPROJ Datei ergänzen

```
 <PropertyGroup>
    <AssemblyInformationalVersion>$(PackageVersion)</AssemblyInformationalVersion>
    <PackageVersion>$(PackageVersion)</PackageVersion>
    <FileVersion>$(PackageVersion)</FileVersion>
    <AssemblyVersion>$(PackageVersion)</AssemblyVersion>
  </PropertyGroup>
```



## Buildpipeline erweitern

### Variablen einführen

> $MayorVersion
> $MinorVersion
> $RevisionVersion

> $(Build.BuildId) liefert die Umgebung.

### Build Kommando erweitern

```
dotnet build -c $(BuildConfiguration) --no-incremental -p:Version=$(MajorVersion).$(MinorVersion).$(RevisionVersion).$(Build.BuildId) -p:PackageVersion=$(MajorVersion).$(MinorVersion).$(RevisionVersion).$(Build.BuildId)

```