echo off
set build_dir=%cd%
echo building site at %build_dir%

cd /D D:\GoogleDrive\Mike\Code\StaticSiteGenerator\bin\Debug\net5.0
StaticSiteGenerator.exe --input "%build_dir%" --output "%build_dir%\docs"