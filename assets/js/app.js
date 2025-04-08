'use strict';
import * as utils from "./utils.js";
import { contactFormValidation } from "./formValidation.js"; 

utils.listen('DOMContentLoaded', document, function() {
  contactFormValidation();
});