package com.vzs.myweb.web.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by byao on 30/07/2017.
 */
@Controller
@RequestMapping("/hello")
public class HelloController {

    @ResponseBody
    @RequestMapping("/json")
    public String hello() {
        return "Hello: Ben";
    }

    @RequestMapping("/hbs")
    public ModelAndView helloHbs() {
        return new ModelAndView("/hello");
    }
}
