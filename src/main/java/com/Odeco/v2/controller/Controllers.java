package com.Odeco.v2.controller;
import org.springframework.stereotype.Controller;
import org.springframework.*;
import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class Controllers {
    @GetMapping("/")
    public String OdecoPerson(Model model) {
      return "index";
    }
}
