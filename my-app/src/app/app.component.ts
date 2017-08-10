﻿import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
          
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">BLOGGING</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a [routerLink]="['home']">Home</a></li>
      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">Page 1-1</a></li>
          <li><a href="#">Page 1-2</a></li>
          <li><a href="#">Page 1-3</a></li>
        </ul>
      </li>
      <li><a [routerLink]="['tag']">Tags Management</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a [routerLink]="['register']"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a [routerLink]="['login']"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
              <div class='container'>
             <router-outlet></router-outlet>
            </div>
      
</body>
            `,
})
export class AppComponent {}