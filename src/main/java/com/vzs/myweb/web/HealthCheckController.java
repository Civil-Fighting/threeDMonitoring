package com.vzs.myweb.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by byao on 14/08/2017.
 */
@Controller
@RequestMapping("/")
public class HealthCheckController {
    @RequestMapping("/")
    @ResponseBody
    public String healthChecker() {
        return "Hello Ben";
    }
}
