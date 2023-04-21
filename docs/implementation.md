# Implementation

## Introduction
This is version v0.1 of the Bike Pump Finder application using Bristol Open Data's [Public Bike Pumps dataset](https://opendata.bristol.gov.uk/explore/dataset/public-bike-pumps/information/) containing 28 rows of data. It allows users to find local public tool stations and pumps to effect bike repairs on the go. There are no outstanding issues.

## Project Structure

The project folder structure is as shown below (generated using tree-cli).

├── docs (documentation files)\
├── express-SB.js\
├── expresso-SB.js (main program)\
├── modelSB.asta\
├── node_modules (imported libraries)\
├── package.json (software configuration)\
├── proto1-sb.html\
├── readme.md\
├── server-SB.js\
├── static (static content e.g. stylesheets)\
├── style-sb.css\
└── views (dynamic ejs templates)

This is the eslint report:

   3:15  error  'require' is not defined            no-undef\
   4:13  error  'require' is not defined            no-undef\
  23:4   error  Mixed spaces and tabs              no-mixed-spaces-and-tabs\
  25:4   error  Mixed spaces and tabs               no-mixed-spaces-and-tabs\
  30:49  error  'fields' is defined but never used  no-unused-vars

## Software Architecture
TODO: Describe the major components of your architecture. Are any particular architectural styles being used?

![Insert your component Diagram here](images/component.png)
