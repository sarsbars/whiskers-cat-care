'use strict';
import * as utils from "./utils.js";
import { contactFormValidation } from "./form-validation.js"; 

utils.listen('DOMContentLoaded', document, function() {
  contactFormValidation();
});