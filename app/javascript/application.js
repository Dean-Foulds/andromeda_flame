// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import "trix"
import "@rails/actiontext"


// Initialization for ES Users
import {
    Input,
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Input, Ripple });