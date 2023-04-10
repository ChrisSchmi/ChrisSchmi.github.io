@echo off

cls
echo ********************************************************
echo *****       Creating Code Coverage Report          *****
echo ********************************************************

rem See documentation:
rem https://jlawcordova.com/testing/2020/11/28/creating-unit-test-coverage-reports-for-aspnet-core-3.1-projects-with-coverlet-and-reportgenerator/

dotnet add package coverlet.collector

rem if you use a build pipeline on Azure DevOps use this:
rem dotnet add package coverlet.msbuild

dotnet add package ReportGenerator
dotnet tool install --global dotnet-reportgenerator-globaltool --version 4.8.1
dotnet test --collect:"XPlat Code Coverage"
reportgenerator -reports:./TestResults/\*/\*.xml -targetdir:./Reports