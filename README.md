# OOP 1

## Title

Beer Sale System

## Description

This system enables users to place order for their favorite beers, and helps reduce underage alchohol consumption by not selling to kids.

It also helps to keep track of the beer inventory and customers.

## Class Diagram

A file containing the Class Diagram has been attached

Class: Beer

Attributes:
  - brand (String)
  - serialNumber (integer)
    
Methods:
  - sellBeer()
  - checkStock()


Class: Customer

Attributes:
  - name (String)
  - age (integer)
    
Methods:
  - registeredCustomers()
  - register()
  - orderBeer()

